import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo/seo-head";
import { Card, CardContent } from "@/components/ui/card";

export default function PrivacyPolicy() {
  const lastUpdated = "December 31, 2024";

  return (
    <>
      <SEOHead
        title="Privacy Policy - QuickConvert Data Protection & Privacy"
        description="Learn how QuickConvert protects your privacy and handles your data. Our comprehensive privacy policy explains our data collection and usage practices."
        keywords="privacy policy, data protection, GDPR, privacy rights, data handling"
      />
      
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
              <p className="text-lg text-muted-foreground">
                Last updated: {lastUpdated}
              </p>
            </div>
            
            <Card className="shadow-lg border border-border p-8">
              <CardContent className="prose prose-gray max-w-none space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Introduction</h2>
                  <p className="text-muted-foreground">
                    QuickConvert ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our conversion tools.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3">Information You Provide</h3>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-4">
                    <li>Contact information when you reach out to us</li>
                    <li>Feedback and suggestions you provide</li>
                    <li>Custom units you create (stored locally)</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-foreground mb-3">Automatically Collected Information</h3>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                    <li>Usage data and analytics</li>
                    <li>Device information and browser type</li>
                    <li>IP address and location data</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                    <li>Provide and maintain our conversion services</li>
                    <li>Improve and optimize our website performance</li>
                    <li>Respond to your inquiries and provide customer support</li>
                    <li>Send you important updates about our services</li>
                    <li>Analyze usage patterns to enhance user experience</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Cookies and Tracking</h2>
                  <p className="text-muted-foreground mb-4">
                    We use cookies and similar tracking technologies to enhance your experience:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                    <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                    <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                    <li><strong>Advertising Cookies:</strong> Used to display relevant advertisements</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Data Sharing and Disclosure</h2>
                  <p className="text-muted-foreground mb-4">We may share your information in the following circumstances:</p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                    <li>With your consent or at your direction</li>
                    <li>To comply with legal obligations</li>
                    <li>To protect our rights and safety</li>
                    <li>With service providers who assist in our operations</li>
                    <li>In connection with a business transfer or merger</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Your Rights and Choices</h2>
                  <p className="text-muted-foreground mb-4">You have several rights regarding your personal information:</p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                    <li><strong>Access:</strong> Request access to your personal data</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                    <li><strong>Portability:</strong> Request transfer of your data</li>
                    <li><strong>Opt-out:</strong> Opt out of marketing communications</li>
                    <li><strong>Cookie Controls:</strong> Manage cookie preferences</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Services</h2>
                  <p className="text-muted-foreground">
                    Our website may contain links to third-party websites and services, including:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-4">
                    <li>Google Analytics for website analytics</li>
                    <li>Google AdSense for advertising</li>
                    <li>Currency exchange rate providers</li>
                  </ul>
                  <p className="text-muted-foreground">
                    These third parties have their own privacy policies, and we are not responsible for their practices.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
                  <p className="text-muted-foreground">
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">International Data Transfers</h2>
                  <p className="text-muted-foreground">
                    Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for such transfers.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Children's Privacy</h2>
                  <p className="text-muted-foreground">
                    Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to This Policy</h2>
                  <p className="text-muted-foreground">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
                  <p className="text-muted-foreground">
                    If you have any questions about this Privacy Policy or our data practices, please contact us at:
                  </p>
                  <ul className="list-none text-muted-foreground mt-2">
                    <li>Email: privacy@quickconvert.com</li>
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
