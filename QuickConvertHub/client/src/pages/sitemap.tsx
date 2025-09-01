import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo/seo-head";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { getAllBlogPosts } from "@/lib/blog-data";
import { ExternalLink } from "lucide-react";

export default function Sitemap() {
  const blogPosts = getAllBlogPosts();

  const mainPages = [
    { href: "/", title: "Home", description: "Main conversion tools and homepage" },
    { href: "/about", title: "About Us", description: "Learn about QuickConvert" },
    { href: "/contact", title: "Contact", description: "Get in touch with our team" },
    { href: "/blog", title: "Blog", description: "Conversion guides and tips" },
  ];

  const legalPages = [
    { href: "/privacy-policy", title: "Privacy Policy", description: "How we protect your data" },
    { href: "/terms-of-use", title: "Terms of Use", description: "Legal terms and conditions" },
  ];

  return (
    <>
      <SEOHead
        title="Sitemap - QuickConvert Site Navigation"
        description="Browse all pages and content on QuickConvert. Find conversion tools, guides, and helpful resources organized by category."
        keywords="sitemap, site navigation, quickconvert pages, site structure"
      />
      
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Site Map</h1>
              <p className="text-lg text-muted-foreground">
                Browse all pages and content on QuickConvert
              </p>
            </div>

            <div className="grid gap-8">
              {/* Main Pages */}
              <Card className="shadow-lg border border-border">
                <CardHeader>
                  <CardTitle className="text-xl">Main Pages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {mainPages.map((page) => (
                      <Link key={page.href} href={page.href}>
                        <div className="p-4 rounded-lg border border-border hover:bg-accent transition-colors cursor-pointer">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-foreground">{page.title}</h3>
                            <ExternalLink className="h-4 w-4 text-muted-foreground" />
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{page.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Blog Articles */}
              <Card className="shadow-lg border border-border">
                <CardHeader>
                  <CardTitle className="text-xl">Blog Articles</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {blogPosts.map((post) => (
                      <Link key={post.slug} href={`/blog/${post.slug}`}>
                        <div className="p-4 rounded-lg border border-border hover:bg-accent transition-colors cursor-pointer">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-semibold text-foreground line-clamp-1">{post.title}</h3>
                              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{post.description}</p>
                              <div className="flex items-center gap-4 text-xs text-muted-foreground mt-2">
                                <span>{post.category}</span>
                                <span>{post.date}</span>
                                <span>{post.readTime}</span>
                              </div>
                            </div>
                            <ExternalLink className="h-4 w-4 text-muted-foreground shrink-0 ml-2" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Legal Pages */}
              <Card className="shadow-lg border border-border">
                <CardHeader>
                  <CardTitle className="text-xl">Legal & Policy</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {legalPages.map((page) => (
                      <Link key={page.href} href={page.href}>
                        <div className="p-4 rounded-lg border border-border hover:bg-accent transition-colors cursor-pointer">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-foreground">{page.title}</h3>
                            <ExternalLink className="h-4 w-4 text-muted-foreground" />
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{page.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* External Resources */}
              <Card className="shadow-lg border border-border">
                <CardHeader>
                  <CardTitle className="text-xl">Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer">
                      <div className="p-4 rounded-lg border border-border hover:bg-accent transition-colors cursor-pointer">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-foreground">XML Sitemap</h3>
                          <ExternalLink className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">Machine-readable sitemap for search engines</p>
                      </div>
                    </a>
                    <a href="/robots.txt" target="_blank" rel="noopener noreferrer">
                      <div className="p-4 rounded-lg border border-border hover:bg-accent transition-colors cursor-pointer">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-foreground">Robots.txt</h3>
                          <ExternalLink className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">Search engine crawling guidelines</p>
                      </div>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
