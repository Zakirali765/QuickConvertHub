import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BlogCard from "@/components/blog/blog-card";
import SEOHead from "@/components/seo/seo-head";
import { getAllBlogPosts } from "@/lib/blog-data";

export default function BlogIndex() {
  const blogPosts = getAllBlogPosts();

  return (
    <>
      <SEOHead
        title="Conversion Guides & Tips Blog - QuickConvert Learning Center"
        description="Expert guides and tips for unit conversions, currency exchange, and time zone calculations. Learn best practices and avoid common conversion mistakes."
        keywords="conversion guides, unit conversion tips, currency exchange, time zone conversion, measurement conversion"
      />
      
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        
        {/* Hero Section */}
        <section className="hero-gradient py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Conversion Guides & <span className="text-primary">Expert Tips</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Master the art of conversions with our comprehensive guides, expert tips, and best practices for accurate calculations.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
            
            {/* AdSense - Mid Content Banner */}
            <div className="mt-12">
              <div className="ad-placeholder h-24 flex items-center justify-center rounded-lg">
                <span className="text-muted-foreground text-sm">{/* AdSense Banner Ad 728x90 */}</span>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
