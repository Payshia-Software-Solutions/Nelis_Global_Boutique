
import { PageHeroSection } from '@/components/page-hero-section';
import { Mail, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
    title: "Privacy Policy",
    description: "Learn about how NelisGlobal Boutique collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeroSection title="Privacy Policy" subtitle="Your Information is Safe With Us" />
      <main className="container mx-auto px-4 py-12 md:py-24 bg-background">
        <Card className="max-w-4xl mx-auto shadow-none border-none">
            <CardContent className="p-0 space-y-10 text-muted-foreground">
                <p className="text-lg">
                At Nelis Global Boutique, we are committed to protecting the privacy and security of our customers’ personal information. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit or make a purchase through our website. By using our website, you agree to the practices described in this policy.
                </p>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">Information We Collect</h2>
                    <p className="mb-4">When you visit our website, we may collect the following types of information:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Personal identification information:</strong> such as your name, email address, phone number, and shipping address, provided voluntarily during registration or checkout.</li>
                        <li><strong>Payment and billing information:</strong> details necessary to process your orders, such as credit or debit card information, which are handled securely by trusted third-party payment processors.</li>
                        <li><strong>Browsing information:</strong> including your IP address, browser type, device information, and website usage patterns collected automatically through cookies and similar technologies.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">Use of Information</h2>
                    <p className="mb-4">We may use the collected information for purposes such as:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Processing and fulfilling your orders, including shipping and delivery.</li>
                        <li>Communicating with you regarding purchases, order status, or customer support inquiries.</li>
                        <li>Personalizing your shopping experience with relevant product recommendations and promotions.</li>
                        <li>Improving our website, products, and services based on user feedback and browsing activity.</li>
                        <li>Detecting and preventing fraudulent transactions or unauthorized activities.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">Information Sharing</h2>
                    <p className="mb-4">We respect your privacy and do not sell, trade, or rent your personal information to others. However, we may share limited data in the following cases:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Trusted service providers:</strong> We may share information with third parties that assist in website operations, payment processing, or order delivery. These partners are required to protect your information and use it only for the services they provide.</li>
                        <li><strong>Legal requirements:</strong> We may disclose your information when required by law or in response to valid legal processes or government requests.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">Data Security</h2>
                    <p>
                    We use industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. While we take every precaution, please note that no data transmission over the internet or electronic storage is completely secure.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">Cookies and Tracking Technologies</h2>
                    <p>
                    Our website uses cookies and similar technologies to improve your browsing experience, analyze website performance, and understand user preferences. You can choose to disable cookies through your browser settings, but doing so may limit certain website functions.
                    </p>
                </section>
                
                <section>
                    <h2 className="text-2xl font-semibold mb-4 text   -foreground">Changes to This Policy</h2>
                    <p>
                    Nelis Global Boutique reserves the right to modify or update this Privacy Policy at any time. Changes will be posted on this page with the updated date. We encourage you to review this policy periodically to stay informed about how we protect your information.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact Us</h2>
                    <p className="mb-4">If you have any questions or concerns about our Privacy Policy or how we handle your personal data, please contact us at:</p>
                    <div className="space-y-2">
                        <p className="flex items-center gap-2"><Mail className="h-5 w-5 text-primary" /> info@nelisglobal.com</p>
                        <p className="flex items-center gap-2"><Phone className="h-5 w-5 text-primary" /> +94 718 885 777</p>
                    </div>
                     <p className="mt-4">We are committed to ensuring your information is handled safely and responsibly.</p>
                </section>
            </CardContent>
        </Card>
      </main>
    </>
  );
}
