
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCart } from "@/context/cart-provider";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CreditCard, TriangleAlert } from "lucide-react";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  email: z.string().email(),
  subscribe: z.boolean().default(false),
  country: z.string().min(1, "Country is required"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  address: z.string().min(1, "Address is required"),
  apartment: z.string().optional(),
  city: z.string().min(1, "City is required"),
  postalCode: z.string().min(1, "Postal code is required"),
  phone: z.string().min(1, "Phone is required"),
  saveInfo: z.boolean().default(false),
  billingSameAsShipping: z.enum(["same", "different"]).default("same"),
  paymentMethod: z.enum(["payhere", "cod"]).default("payhere"),
  billingFirstName: z.string().optional(),
  billingLastName: z.string().optional(),
  billingAddress: z.string().optional(),
  billingApartment: z.string().optional(),
  billingCity: z.string().optional(),
  billingPostalCode: z.string().optional(),
  billingCountry: z.string().optional(),
}).refine(data => {
    if (data.billingSameAsShipping === 'different') {
        return data.billingAddress && data.billingCity && data.billingPostalCode && data.billingCountry;
    }
    return true;
}, {
    message: "Billing address is required when different from shipping address.",
    path: ["billingAddress"],
});

export default function CheckoutPage() {
  const { cart, cartTotal, itemCount, setOrderData, restoreCart } = useCart();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsClient(true);
    
    // Restore cart if user navigates away
    const handlePopState = () => {
      restoreCart();
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      // Also restore if component unmounts for other reasons (e.g., link click)
      restoreCart();
    };
  }, [restoreCart]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      subscribe: false,
      country: "Sri Lanka",
      firstName: "",
      lastName: "",
      address: "",
      apartment: "",
      city: "",
      postalCode: "",
      phone: "",
      saveInfo: false,
      billingSameAsShipping: "same",
      paymentMethod: "payhere",
      billingFirstName: "",
      billingLastName: "",
      billingAddress: "",
      billingApartment: "",
      billingCity: "",
      billingPostalCode: "",
      billingCountry: "Sri Lanka",
    },
  });

  const billingSameAsShipping = form.watch("billingSameAsShipping");


  async function onSubmit(values: z.infer<typeof formSchema>) {
    const invoiceEndpoint = 'https://qa-server-erp.payshia.com/ecommerce-invoices/checkout';
    
    const same_address_status = values.billingSameAsShipping === 'same';
    const now = new Date();
    const formattedDate = now.toISOString().split('T')[0];
    const formattedTime = now.toTimeString().split(' ')[0];
    
    const invoicePayload = {
        paymentMethod: values.paymentMethod,
        company_id: 3,
        location_id: 4,
        customer_code: "3", // Placeholder
        invoice_date: formattedDate,
        inv_amount: cartTotal,
        grand_total: cartTotal, // Placeholder, will be recalculated on backend
        discount_amount: 0,
        discount_percentage: 0,
        service_charge: 0,
        tendered_amount: cartTotal, // Placeholder
        close_type: "0",
        invoice_status: "2",
        current_time: `${formattedDate} ${formattedTime}`,
        table_id: 1, // Placeholder
        order_ready_status: 1, // Placeholder
        created_by: values.email,
        is_active: 1,
        steward_id: "N/A",
        cost_value: cartTotal, // Placeholder, assuming cost is same as total for now
        remark: "Take Away order",
        ref_hold: "direct",
        chanel: "POS",
        payment_status: "Paid",
        ecommerce_payment_status: values.paymentMethod === 'cod' ? "COD" : "Card",
        vat_amount: 0, // Placeholder
        sscl_tax: 0, // Placeholder
        tdl: 0, // Placeholder
        total_amount: cartTotal,
        items: cart.map(item => ({
            user_id: 1, // Placeholder
            product_id: parseInt(item.id, 10),
            item_price: item.price,
            item_discount: 0,
            quantity: item.quantity,
            customer_id: 3, // Placeholder
            table_id: 1, // Placeholder
            cost_price: item.price, // Placeholder, assuming cost is same as price for now
            price: item.price * item.quantity,
        })),
        contact_details: {
            first_name: values.firstName,
            last_name: values.lastName,
            email: values.email,
            phone: values.phone,
        },
        shipping_address: {
            first_name: values.firstName,
            last_name: values.lastName,
            address: values.address + (values.apartment ? `, ${values.apartment}`: ''),
            city: values.city,
            postal_code: values.postalCode,
            country: values.country,
        },
        same_address_status: same_address_status,
        billing_address: same_address_status ? {
            first_name: values.firstName,
            last_name: values.lastName,
            address: values.address + (values.apartment ? `, ${values.apartment}`: ''),
            city: values.city,
            postal_code: values.postalCode,
            country: values.country,
        } : {
            first_name: values.billingFirstName || values.firstName,
            last_name: values.billingLastName || values.lastName,
            address: (values.billingAddress || "") + (values.billingApartment ? `, ${values.billingApartment}`: ''),
            city: values.billingCity || "",
            postal_code: values.billingPostalCode || "",
            country: values.billingCountry || "",
        }
    };

    try {
        const response = await fetch(invoiceEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(invoicePayload),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to create invoice.');
        }

        const invoiceResponse = await response.json();

        if (values.paymentMethod === 'cod') {
            setOrderData({
                formValues: values,
                cart: cart,
                cartTotal: cartTotal,
                itemCount: itemCount,
                invoiceId: invoiceResponse.invoice_id
            });
            router.push('/confirmation');
        } else if (values.paymentMethod === 'payhere') {
            const orderId = invoiceResponse.invoice_id || `nelis-order-${Date.now()}`;
            const itemsDescription = cart.map(item => `${item.name} x ${item.quantity}`).join(', ');

            const payhereData = {
                merchant_id: "1227940",
                return_url: `${window.location.origin}/confirmation`,
                cancel_url: `${window.location.origin}/checkout`,
                notify_url: `${window.location.origin}/api/payhere-notify`,
                order_id: orderId,
                items: itemsDescription,
                currency: "LKR",
                amount: cartTotal.toFixed(2),
                first_name: values.firstName,
                last_name: values.lastName,
                email: values.email,
                phone: values.phone,
                address: values.address,
                city: values.city,
                country: values.country,
            };
            
            const formElement = document.createElement('form');
            formElement.method = 'POST';
            formElement.action = 'https://sandbox.payhere.lk/pay/checkout';

            for (const key in payhereData) {
                const input = document.createElement('input');
                input.type = 'hidden';
                input.name = key;
                input.value = (payhereData as any)[key];
                formElement.appendChild(input);
            }

            document.body.appendChild(formElement);
            formElement.submit();
        }

    } catch (error: any) {
        console.error("Checkout failed:", error);
        toast({
            variant: "destructive",
            title: "Checkout Failed",
            description: error.message || "There was an issue processing your order. Please try again.",
        });
    }
  }

  if (!isClient) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-muted/20">
        <div className="container mx-auto px-4 py-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="grid lg:grid-cols-2 gap-12 items-start" id="checkout-form">
                <Card>
                  <CardContent className="p-6 space-y-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                          <h2 className="text-xl font-semibold">Contact</h2>
                          <Link href="/auth/login" className="text-sm text-primary hover:underline">Log in</Link>
                      </div>
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="Enter your email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="subscribe"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                Email me with news and offers
                              </FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold">Delivery</h2>
                      <FormField
                          control={form.control}
                          name="country"
                          render={({ field }) => (
                              <FormItem>
                              <FormLabel>Country/Region</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                  <SelectTrigger>
                                      <SelectValue placeholder="Select a country" />
                                  </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                      <SelectItem value="Sri Lanka">Sri Lanka</SelectItem>
                                      <SelectItem value="USA">United States</SelectItem>
                                      <SelectItem value="UK">United Kingdom</SelectItem>
                                  </SelectContent>
                              </Select>
                              <FormMessage />
                              </FormItem>
                          )}
                      />
                      <div className="grid grid-cols-2 gap-4">
                          <FormField name="firstName" render={({ field }) => (
                              <FormItem><FormLabel>First name</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                          )} />
                          <FormField name="lastName" render={({ field }) => (
                              <FormItem><FormLabel>Last name</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                          )} />
                      </div>
                      <FormField name="address" render={({ field }) => (
                          <FormItem><FormLabel>Address</FormLabel><FormControl><Input placeholder="Address" {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                      <FormField name="apartment" render={({ field }) => (
                          <FormItem><FormLabel>Apartment, suite, etc. (optional)</FormLabel><FormControl><Input placeholder="Apartment, suite, etc. (optional)" {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                      <div className="grid grid-cols-2 gap-4">
                          <FormField name="city" render={({ field }) => (
                              <FormItem><FormLabel>City</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                          )} />
                          <FormField name="postalCode" render={({ field }) => (
                              <FormItem><FormLabel>Postal Code</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                          )} />
                      </div>
                      <FormField name="phone" render={({ field }) => (
                          <FormItem><FormLabel>Phone</FormLabel><FormControl><Input type="tel" placeholder="Phone" {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                      <FormField
                        control={form.control}
                        name="saveInfo"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                Save this information for next time
                              </FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold">Billing Address</h2>
                      <FormField
                        control={form.control}
                        name="billingSameAsShipping"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="space-y-2">
                                <Label className={`flex items-center space-x-3 p-4 border rounded-md cursor-pointer ${field.value === 'same' ? 'border-primary ring-2 ring-primary/20' : 'border-input'}`}>
                                  <RadioGroupItem value="same" id="same" />
                                  <span>Same as shipping address</span>
                                </Label>
                                <Label className={`flex items-center space-x-3 p-4 border rounded-md cursor-pointer ${field.value === 'different' ? 'border-primary ring-2 ring-primary/20' : 'border-input'}`}>
                                  <RadioGroupItem value="different" id="different" />
                                  <span>Use a different billing address</span>
                                </Label>
                              </RadioGroup>
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      {billingSameAsShipping === 'different' && (
                        <div className="space-y-4 pt-4 border-t">
                            <h3 className="text-lg font-semibold">Enter Billing Address</h3>
                            <FormField
                                control={form.control}
                                name="billingCountry"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Country/Region</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a country" />
                                        </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="Sri Lanka">Sri Lanka</SelectItem>
                                            <SelectItem value="USA">United States</SelectItem>
                                            <SelectItem value="UK">United Kingdom</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="grid grid-cols-2 gap-4">
                                <FormField name="billingFirstName" render={({ field }) => (
                                    <FormItem><FormLabel>First name (optional)</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                                )} />
                                <FormField name="billingLastName" render={({ field }) => (
                                    <FormItem><FormLabel>Last name</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                                )} />
                            </div>
                            <FormField name="billingAddress" render={({ field }) => (
                                <FormItem><FormLabel>Address</FormLabel><FormControl><Input placeholder="Address" {...field} /></FormControl><FormMessage /></FormItem>
                            )} />
                            <FormField name="billingApartment" render={({ field }) => (
                                <FormItem><FormLabel>Apartment, suite, etc. (optional)</FormLabel><FormControl><Input placeholder="Apartment, suite, etc. (optional)" {...field} /></FormControl><FormMessage /></FormItem>
                            )} />
                            <div className="grid grid-cols-2 gap-4">
                                <FormField name="billingCity" render={({ field }) => (
                                    <FormItem><FormLabel>City</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                                )} />
                                <FormField name="billingPostalCode" render={({ field }) => (
                                    <FormItem><FormLabel>Postal Code</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                                )} />
                            </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
                <div className="lg:col-span-1 space-y-6">
                    <Card>
                      <CardHeader>
                        <h2 className="text-xl font-bold">Order Summary</h2>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-4">
                            {cart.map(item => (
                                <li key={item.id} className="flex items-center space-x-4">
                                    <div className="relative">
                                        <Image src={item.imageUrl} alt={item.name} width={64} height={64} className="rounded-md border" />
                                        <span className="absolute -top-2 -right-2 bg-gray-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{item.quantity}</span>
                                    </div>
                                    <div className="flex-grow">
                                        <p className="font-medium">{item.name}</p>
                                        <p className="text-sm text-muted-foreground">LKR {item.price.toFixed(2)} x {item.quantity}</p>
                                    </div>
                                    <p className="font-medium">LKR {(item.price * item.quantity).toFixed(2)}</p>
                                </li>
                            ))}
                        </ul>
                        <Separator className="my-4" />
                        <div className="flex space-x-2">
                            <Input placeholder="Discount code or gift card" />
                            <Button variant="secondary">Apply</Button>
                        </div>
                        <Separator className="my-4" />
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>LKR {cartTotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span>Rs 0.00</span>
                            </div>
                            <Separator className="my-2" />
                            <div className="flex justify-between font-semibold text-lg">
                                <span>Total</span>
                                <span>LKR {cartTotal.toFixed(2)}</span>
                            </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <h2 className="text-xl font-bold">Payment</h2>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">All transactions are secure and encrypted.</p>
                        <FormField
                          control={form.control}
                          name="paymentMethod"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="space-y-2">
                                  <Label className={`p-4 border rounded-md cursor-pointer ${field.value === 'payhere' ? 'border-primary ring-2 ring-primary/20' : 'border-input'}`}>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center space-x-3">
                                            <RadioGroupItem value="payhere" id="payhere" />
                                            <span className="font-semibold">Bank Card / Bank Account - PayHere</span>
                                        </div>
                                        <CreditCard className="h-6 w-6" />
                                    </div>
                                    <div className="pl-8 pt-4 text-sm text-muted-foreground">
                                        <p>After clicking "Pay now", you will be redirected to Bank Card / Bank Account - PayHere to complete your purchase securely.</p>
                                    </div>
                                  </Label>
                                  <Label className={`flex items-center space-x-3 p-4 border rounded-md cursor-pointer ${field.value === 'cod' ? 'border-primary ring-2 ring-primary/20' : 'border-input'}`}>
                                    <RadioGroupItem value="cod" id="cod" />
                                    <span>Cash On Delivery</span>
                                  </Label>
                                </RadioGroup>
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </CardContent>
                    </Card>
                    
                    <Alert variant="default" className="bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-900/20 dark:border-yellow-800 dark:text-yellow-300">
                      <TriangleAlert className="h-4 w-4 !text-yellow-600 dark:!text-yellow-400" />
                      <AlertTitle className="font-bold">Important Notice</AlertTitle>
                      <AlertDescription>
                        Please do not close your tab or browser after completing your payment. Kindly remain on this tab/browser until you are redirected to the order confirmation page to ensure that your transaction is processed successfully.
                      </AlertDescription>
                    </Alert>

                    <Button type="submit" form="checkout-form" size="lg" className="w-full text-lg h-12 bg-black text-white hover:bg-gray-800 dark:bg-primary dark:hover:bg-primary/90">
                      Place the order
                    </Button>
                </div>
              </form>
            </Form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
