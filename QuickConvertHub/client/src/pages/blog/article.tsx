import { useRoute } from "wouter";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo/seo-head";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getBlogPost } from "@/lib/blog-data";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";
import { Link } from "wouter";
import ReactMarkdown from "react-markdown";

export default function BlogArticle() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug;
  
  if (!slug) {
    return <div>Article not found</div>;
  }

  const post = getBlogPost(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <div className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
            <Link href="/blog">
              <Button className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={`${post.title} - QuickConvert Blog`}
        description={post.description}
        keywords={`${post.category.toLowerCase()}, conversion guides, ${post.title.toLowerCase()}`}
        type="article"
      />
      
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        
        <article className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <div className="mb-8">
              <Link href="/blog">
                <Button variant="ghost" className="gap-2" data-testid="button-back-to-blog">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Blog
                </Button>
              </Link>
            </div>

            {/* Article Header */}
            <header className="mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover rounded-xl mb-8"
              />
              
              <div className="space-y-4">
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  {post.title}
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {post.description}
                </p>
                
                <div className="flex items-center gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </header>

            {/* AdSense - Top Article Banner */}
            <div className="mb-8">
              <div className="ad-placeholder h-24 flex items-center justify-center rounded-lg">
                <span className="text-muted-foreground text-sm">{/* AdSense Banner Ad 728x90 */}</span>
              </div>
            </div>

            {/* Article Content */}
            <Card className="shadow-lg border border-border">
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-li:text-muted-foreground">
                  <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>
              </CardContent>
            </Card>

            {/* AdSense - Bottom Article Banner */}
            <div className="mt-8">
              <div className="ad-placeholder h-24 flex items-center justify-center rounded-lg">
                <span className="text-muted-foreground text-sm">{/* AdSense Banner Ad 728x90 */}</span>
              </div>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
}
