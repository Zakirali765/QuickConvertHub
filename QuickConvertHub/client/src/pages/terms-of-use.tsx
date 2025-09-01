import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo/seo-head";
import { Card, CardContent } from "@/components/ui/card";

export default function TermsOfUse() {
  const lastUpdated = "December 31, 2024";

  return (
    <>
      <SEOHead
        title="Terms of Use - QuickConvert Legal Terms & Conditions"
        description="Read QuickConvert's terms of use and legal conditions. Understand your rights and responsibilities when using our conversion tools and services."
        keywords="terms of use, terms and conditions, legal terms, user agreement, service terms"
      />
      
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Terms of Use</h1>
              <p className="text-lg text-muted-foreground">
                Last updated: {lastUpdated}
              </p>
            </div>
            
            <Card className="shadow-lg border border-border p-8">
              <CardContent className="prose prose-gray max-w-none space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Acceptance of Terms</h2>
                  <p className="text-muted-foreground">
                    By accessing and using QuickConvert ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Description of Service</h2>
                  <p className="text-muted-foreground">
                    QuickConvert provides online conversion tools including but not limited to unit conversions, currency conversions, and time zone conversions. The service is provided free of charge for personal and commercial use.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Accuracy Disclaimer</h2>
                  <p className="text-muted-foreground mb-4">
                    While we strive to provide accurate conversion results, QuickConvert makes no warranties or representations about the accuracy, reliability, completeness, or timeliness of any information provided through the service.
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                    <li>Conversion factors are based on internationally accepted standards</li>
                    <li>Currency rates are updated regularly but may not reflect real-time market rates</li>
                    <li>Users should verify critical conversions through official sources</li>
                    <li>We are not liable for any decisions made based on our conversion results</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">User Responsibilities</h2>
                  <p className="text-muted-foreground mb-4">Users agree to:</p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                    <li>Use the service for lawful purposes only</li>
                    <li>Not attempt to interfere with the service's operation</li>
                    <li>Not use automated systems to access the service excessively</li>
                    <li>Respect intellectual property rights</li>
                    <li>Provide accurate information when contacting us</li>
                    <li>Not use the service to violate any applicable laws or regulations</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
                  <p className="text-muted-foreground">
                    In no event shall QuickConvert, its affiliates, or their respective officers, directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses resulting from your use of the service.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Service Availability</h2>
                  <p className="text-muted-foreground">
                    We strive to maintain high availability of our service but cannot guarantee uninterrupted access. The service may be temporarily unavailable due to maintenance, updates, or technical issues. We reserve the right to modify or discontinue the service at any time.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Intellectual Property</h2>
                  <p className="text-muted-foreground">
                    The QuickConvert service, including its design, text, graphics, and functionality, is owned by QuickConvert and is protected by copyright, trademark, and other intellectual property laws. Users may not reproduce, distribute, or create derivative works without explicit permission.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Privacy and Data Collection</h2>
                  <p className="text-muted-foreground">
                    Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices regarding the collection and use of your information.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Services</h2>
                  <p className="text-muted-foreground">
                    Our service may integrate with third-party services (such as currency rate providers) or contain links to third-party websites. We are not responsible for the content, accuracy, or practices of these third-party services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Advertising</h2>
                  <p className="text-muted-foreground">
                    Our service is supported by advertising. By using our service, you agree to the display of advertisements. We use advertising networks that may collect information about your browsing habits to provide relevant ads.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Termination</h2>
                  <p className="text-muted-foreground">
                    We may terminate or suspend your access to the service immediately, without prior notice, for conduct that we believe violates these Terms of Use or is harmful to other users, us, or third parties.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Governing Law</h2>
                  <p className="text-muted-foreground">
                    These Terms of Use are governed by and construed in accordance with the laws of the jurisdiction in which QuickConvert operates, without regard to its conflict of law provisions.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to Terms</h2>
                  <p className="text-muted-foreground">
                    We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to this page. Your continued use of the service after changes constitutes acceptance of the new terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
                  <p className="text-muted-foreground">
                    If you have any questions about these Terms of Use, please contact us:
                  </p>
                  <ul className="list-none text-muted-foreground mt-2">
                    <li>Email: legal@quickconvert.com</li>
                    <li>Contact Form: <a href="/contact" className="text-primary hover:text-primary/80">quickconvert.com/contact</a></li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
