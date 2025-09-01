import { useEffect } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ConversionTools from "@/components/conversion/conversion-tools";
import BlogCard from "@/components/blog/blog-card";
import SEOHead from "@/components/seo/seo-head";
import { Button } from "@/components/ui/button";
import { getAllBlogPosts } from "@/lib/blog-data";
import { useLocation } from "wouter";

export default function Home() {
  const [, navigate] = useLocation();
  const blogPosts = getAllBlogPosts().slice(0, 3); // Show first 3 posts

  const scrollToTools = () => {
    const element = document.getElementById("tools");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBlog = () => {
    const element = document.getElementById("blog");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <SEOHead
        title="QuickConvert - Professional Conversion Tools | Unit, Currency & Time Zone Converters"
        description="Fast, accurate conversion tools for units, currencies, and time zones. Professional-grade converters with history tracking and custom units."
        url="https://quickconvert.com"
      />
      
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        
        {/* Hero Section */}
        <section id="home" className="hero-gradient py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Professional <span className="text-primary">Conversion Tools</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Fast, accurate, and reliable converters for units, currencies, and time zones. 
                Perfect for professionals, students, and everyday use.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={scrollToTools}
                  size="lg"
                  data-testid="button-start-converting"
                >
                  Start Converting
                </Button>
                <Button 
                  onClick={scrollToBlog}
                  variant="outline"
                  size="lg"
                  data-testid="button-learn-more"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* AdSense - Top Banner */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="ad-placeholder h-24 flex items-center justify-center rounded-lg">
            <span className="text-muted-foreground text-sm">{/* AdSense Banner Ad 728x90 */}</span>
          </div>
        </div>

        {/* Conversion Tools Section */}
        <section id="tools">
          <ConversionTools />
        </section>

        {/* AdSense - Mid Content Banner */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="ad-placeholder h-24 flex items-center justify-center rounded-lg">
            <span className="text-muted-foreground text-sm">{/* AdSense Banner Ad 728x90 */}</span>
          </div>
        </div>

        {/* Blog Section */}
        <section id="blog" className="py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Conversion Guides & Tips</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Learn about conversions, understand units, and get expert tips for accurate calculations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button 
                onClick={() => navigate("/blog")}
                size="lg"
                data-testid="button-view-all-articles"
              >
                View All Articles
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
