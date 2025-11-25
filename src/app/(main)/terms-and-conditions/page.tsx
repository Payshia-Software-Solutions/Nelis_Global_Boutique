
import { PageHeroSection } from '@/components/page-hero-section';
import { Mail, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
    title: "Terms & Conditions",
    description: "Read the Terms and Conditions for using the NelisGlobal Boutique website and purchasing products.",
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <PageHeroSection title="Terms & Conditions" />
      <main className="container mx-auto px-4 py-12 md:py-24 bg-background">
        <Card className="max-w-4xl mx-auto shadow-none border-none">
            <CardContent className="p-0 space-y-10 text-muted-foreground">
                <p className="text-lg">
                    Welcome to Nelis Global Boutique. These Terms and Conditions govern your use of our website and the purchase of products from our platform. By accessing or using our website, you agree to comply with and be bound by these Terms and Conditions. Please read them carefully before proceeding with any transactions.
                </p>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Use of the Website</h2>
                    <ul className="list-decimal list-inside space-y-2">
                        <li>You must be at least 18 years old to use our website or make purchases.</li>
                        <li>You are responsible for maintaining the confidentiality of your account information, including your username and password.</li>
                        <li>You agree to provide accurate, current, and complete information during registration and checkout.</li>
                        <li>You may not use our website for any unlawful, unauthorized, or fraudulent purposes.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Product Information and Pricing</h2>
                    <ul className="list-decimal list-inside space-y-2">
                        <li>We make every effort to provide accurate product descriptions, images, and pricing information. However, we do not guarantee the accuracy, completeness, or reliability of such information.</li>
                        <li>Prices are subject to change without prior notice. Any discounts, offers, or promotions are valid only for the specified period and may have additional terms and conditions.</li>
                        <li>In the event of any pricing or typographical error, Nelis Global Boutique reserves the right to cancel or refuse any order placed at the incorrect price.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Orders and Payments</h2>
                     <ul className="list-decimal list-inside space-y-2">
                        <li>By placing an order through our website, you are making an offer to purchase the selected products.</li>
                        <li>We reserve the right to accept, reject, or cancel any order for reasons including product unavailability, pricing errors, or suspected fraudulent activity.</li>
                        <li>You agree to provide valid and up-to-date payment details and authorize us to charge your chosen payment method for the full amount, including applicable taxes and shipping fees.</li>
                        <li>Payments are securely processed through trusted third-party payment gateways. Nelis Global Boutique does not store or have access to your complete payment details.</li>
                    </ul>
                </section>
                
                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Shipping and Delivery</h2>
                    <ul className="list-decimal list-inside space-y-2">
                        <li>We make every effort to ensure timely dispatch and delivery of all orders.</li>
                        <li>Delivery times are estimates only and may vary based on your location, courier delays, or other factors beyond our control.</li>
                        <li>Nelis Global Boutique is not responsible for delays caused by customs clearance, courier issues, or force majeure events.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Returns and Refunds</h2>
                    <p>Our Returns and Refund Policy governs the process for returning products and requesting refunds. Returns are accepted within 7 days of delivery for items with manufacturing defects or damage during delivery. Please refer to our detailed Return & Refund Policy available on our website for more information.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Intellectual Property</h2>
                    <ul className="list-decimal list-inside space-y-2">
                        <li>All website content, including but not limited to text, images, graphics, product designs, and logos, is the exclusive property of Nelis Global Boutique and is protected by copyright and trademark laws.</li>
                        <li>You may not copy, reproduce, distribute, or modify any content from our website without our prior written permission.</li>
                    </ul>
                </section>
                
                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Limitation of Liability</h2>
                    <ul className="list-decimal list-inside space-y-2">
                        <li>In no event shall Nelis Global Boutique, its directors, employees, or affiliates be liable for any direct, indirect, incidental, or consequential damages arising from the use of our website or the purchase and use of our products.</li>
                        <li>While we strive for the highest quality, we make no warranties, express or implied, regarding the suitability, reliability, or performance of our products for any particular purpose.</li>
                        <li>Your use of the website and products is at your own risk.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Amendments and Termination</h2>
                    <p>We reserve the right to modify, update, or terminate these Terms and Conditions at any time without prior notice. Any changes will be effective immediately upon posting on this page. It is your responsibility to review these terms periodically to stay informed.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Governing Law</h2>
                    <p>These Terms and Conditions are governed by and construed in accordance with the laws of Sri Lanka. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of Sri Lankan courts.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Contact Us</h2>
                    <p className="mb-4">If you have any questions or concerns regarding these Terms and Conditions, please contact us at:</p>
                    <div className="space-y-2">
                        <p className="flex items-center gap-2"><Mail className="h-5 w-5 text-primary" /> info@nelisglobal.com</p>
                        <p className="flex items-center gap-2"><Phone className="h-5 w-5 text-primary" /> +94 718 885 777</p>
                    </div>
                </section>
            </CardContent>
        </Card>
      </main>
    </>
  );
}
