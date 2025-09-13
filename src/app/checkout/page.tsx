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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  email: z.string().email(),
  subscribe: z.boolean().default(false),
  country: z.string().min(1, "Country is required"),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  address: z.string().min(1, "Address is required"),
  apartment: z.string().optional(),
  city: z.string().min(1, "City is required"),
  postalCode: z.string().min(1, "Postal code is required"),
  phone: z.string().min(1, "Phone is required"),
  saveInfo: z.boolean().default(false),
  billingAddress: z.enum(["same", "different"]).default("same"),
  paymentMethod: z.enum(["payhere", "cod"]).default("payhere"),
});

export default function CheckoutPage() {
  const { cart, cartTotal, itemCount } = useCart();

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
      billingAddress: "same",
      paymentMethod: "payhere",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    alert("Order placed successfully!");
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="lg:col-span-1">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                        <FormItem><FormLabel>First name (optional)</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
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
                  name="billingAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="space-y-2">
                           <Label className={`flex items-center space-x-3 p-4 border rounded-md cursor-pointer ${field.value === 'same' ? 'border-red-500 ring-2 ring-red-200' : 'border-input'}`}>
                            <RadioGroupItem value="same" id="same" />
                            <span>Same as shipping address</span>
                          </Label>
                           <Label className={`flex items-center space-x-3 p-4 border rounded-md cursor-pointer ${field.value === 'different' ? 'border-red-500 ring-2 ring-red-200' : 'border-input'}`}>
                            <RadioGroupItem value="different" id="different" />
                            <span>Use a different billing address</span>
                          </Label>
                        </RadioGroup>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Payment</h2>
                <p className="text-sm text-muted-foreground">All transactions are secure and encrypted.</p>
                <FormField
                  control={form.control}
                  name="paymentMethod"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="space-y-2">
                          <Label className={`p-4 border rounded-md cursor-pointer ${field.value === 'payhere' ? 'border-red-500 ring-2 ring-red-200' : 'border-input'}`}>
                            <div className="flex items-center space-x-3 mb-2">
                                <RadioGroupItem value="payhere" id="payhere" />
                                <span className="font-semibold">Bank Card / Bank Account - PayHere</span>
                            </div>
                            <div className="pl-8 pt-2 space-y-2 text-sm text-muted-foreground">
                                <CreditCard className="h-6 w-6 mb-2" />
                                <p>After clicking "Pay now", you will be redirected to Bank Card / Bank Account - PayHere to complete your purchase securely.</p>
                            </div>
                          </Label>
                          <Label className={`flex items-center space-x-3 p-4 border rounded-md cursor-pointer ${field.value === 'cod' ? 'border-red-500 ring-2 ring-red-200' : 'border-input'}`}>
                            <RadioGroupItem value="cod" id="cod" />
                            <span>Cash On Delivery</span>
                          </Label>
                        </RadioGroup>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              
              <Alert variant="default" className="bg-yellow-50 border-yellow-200 text-yellow-800">
                <TriangleAlert className="h-4 w-4 !text-yellow-600" />
                <AlertTitle className="font-bold">Important Notice</AlertTitle>
                <AlertDescription>
                  Please do not close your tab or browser after completing your payment. Kindly remain on this tab/browser until you are redirected to the order confirmation page to ensure that your transaction is processed successfully.
                </AlertDescription>
              </Alert>

              <Button type="submit" size="lg" className="w-full text-lg h-12 bg-black text-white hover:bg-gray-800">
                Pay now
              </Button>
            </form>
          </Form>
        </div>
        <div className="lg:col-span-1 space-y-6 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-xl font-semibold">Order Summary</h2>
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
        </div>
      </div>
    </div>
  );
}

    