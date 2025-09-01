import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo/seo-head";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <>
      <SEOHead
        title="About QuickConvert - Your Trusted Conversion Tool Platform"
        description="Learn about QuickConvert's mission to provide fast, accurate, and reliable conversion tools for units, currencies, and time zones. Trusted by thousands worldwide."
        keywords="about quickconvert, conversion tools, unit converter, currency converter, company information"
      />
      
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">About QuickConvert</h1>
              <p className="text-lg text-muted-foreground">
                Your trusted source for accurate and fast conversions
              </p>
            </div>
            
            <Card className="shadow-lg border border-border p-8">
              <CardContent className="space-y-8">
                <div className="prose prose-gray max-w-none">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    QuickConvert was created to solve a simple problem: the need for fast, accurate, and reliable conversion tools that work seamlessly across all devices. Whether you're a student working on assignments, a professional dealing with international measurements, or someone who just needs quick conversions for everyday tasks, we've got you covered.
                  </p>
                  
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h2>
                  <p className="text-muted-foreground mb-6">
                    We believe that conversion tools should be simple, accurate, and accessible to everyone. Our mission is to provide the most comprehensive and user-friendly conversion platform that saves you time and eliminates the guesswork from unit conversions.
                  </p>
                  
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Why Choose QuickConvert?</h2>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                    <li><strong>Accuracy:</strong> All conversions are based on official standards and updated regularly</li>
                    <li><strong>Speed:</strong> Real-time conversions with no waiting</li>
                    <li><strong>History:</strong> Keep track of your recent conversions for easy reference</li>
                    <li><strong>Custom Units:</strong> Create your own custom units for specialized needs</li>
                    <li><strong>Mobile-Friendly:</strong> Works perfectly on all devices and screen sizes</li>
                    <li><strong>Free:</strong> All basic conversion tools are completely free to use</li>
                  </ul>
                  
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Our Story</h2>
                  <p className="text-muted-foreground mb-6">
                    Founded in 2024, QuickConvert has quickly become the go-to conversion tool for thousands of users worldwide. We're constantly improving our platform and adding new features based on user feedback and emerging needs in the conversion space.
                  </p>
                  
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Our Commitment</h2>
                  <p className="text-muted-foreground mb-6">
                    We are committed to maintaining the highest standards of accuracy and reliability in all our conversion tools. Our team regularly reviews and updates conversion factors to ensure you always get the most precise results possible.
                  </p>
                  
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
                  <p className="text-muted-foreground">
                    Have questions, suggestions, or feedback? We'd love to hear from you. Visit our <a href="/contact" className="text-primary hover:text-primary/80">contact page</a> to get in touch with our team.
                  </p>
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
