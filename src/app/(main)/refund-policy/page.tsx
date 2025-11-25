
import { PageHeroSection } from '@/components/page-hero-section';
import { Mail, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
    title: "Refund & Return Policy",
    description: "Learn about the refund and return policy for NelisGlobal Boutique.",
};

export default function RefundPolicyPage() {
  return (
    <>
      <PageHeroSection title="Refund & Return Policy" />
      <main className="container mx-auto px-4 py-12 md:py-24 bg-background">
        <Card className="max-w-4xl mx-auto shadow-none border-none">
            <CardContent className="p-0 space-y-10 text-muted-foreground">
                <p className="text-lg">
                    Thank you for shopping at Nelis Global Boutique. We value your satisfaction and strive to provide you with the best online shopping experience possible. If, for any reason, you are not completely satisfied with your purchase, we are here to help.
                </p>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">Returns</h2>
                    <p className="mb-4">We accept returns within 7 days from the date you receive your order. To be eligible for a return, your item must be unused, unopened, and in the same condition that you received it. It must also be in the original packaging.</p>
                    <p>Returns are accepted only for products with manufacturing faults or damage during delivery.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">Refunds</h2>
                    <p className="mb-4">Once we receive your returned item and inspect it, we will notify you regarding the status of your refund. If your return is approved, we will initiate a refund to your original method of payment. Please note that the refund amount will exclude any shipping charges incurred during the initial purchase.</p>
                </section>
                
                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">Exchanges</h2>
                    <p>If you would like to exchange an item that arrived damaged or defective, please contact our customer support team within 7 days of receiving your order. We will provide you with further instructions on how to proceed with the exchange.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">Non-Returnable Items</h2>
                     <p className="mb-4">Certain items are non-returnable and non-refundable, including:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Opened or partially used products</li>
                        <li>Items returned after 7 days of delivery</li>
                        <li>Products damaged due to mishandling or improper storage after delivery</li>
                        <li>Gift cards or promotional items</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">Damaged or Defective Items</h2>
                    <p>In the unfortunate event that your item arrives damaged or defective, please contact us immediately. We will arrange for a replacement or refund, depending on your preference and product availability.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">Return Shipping</h2>
                    <p>You will be responsible for paying the shipping costs for returning your item unless the return is due to our error (e.g., wrong item shipped or defective product). In such cases, we will bear the shipping cost.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">Processing Time</h2>
                    <p>Refunds and exchanges will be processed within 7–10 business days after we receive your returned item. Please note that it may take additional time for the refund to appear in your account, depending on your payment provider.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact Us</h2>
                    <p className="mb-4">If you have any questions or concerns regarding our Refund & Return Policy, please contact our customer support team at:</p>
                    <div className="space-y-2">
                        <p className="flex items-center gap-2"><Mail className="h-5 w-5 text-primary" /> info@nelisglobal.com</p>
                        <p className="flex items-center gap-2"><Phone className="h-5 w-5 text-primary" /> +94 718 885 777</p>
                    </div>
                     <p className="mt-4">We are here to assist you and ensure your shopping experience with Nelis Global Boutique is enjoyable and hassle-free.</p>
                </section>
            </CardContent>
        </Card>
      </main>
    </>
  );
}
