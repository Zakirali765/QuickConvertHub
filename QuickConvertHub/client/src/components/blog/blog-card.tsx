import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";
import type { BlogPost } from "@/lib/blog-data";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="conversion-card overflow-hidden cursor-pointer h-full" data-testid={`blog-card-${post.slug}`}>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
        <CardContent className="p-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <Calendar className="h-4 w-4" />
            <span>{post.date}</span>
            <span>•</span>
            <Clock className="h-4 w-4" />
            <span>{post.readTime}</span>
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
            {post.title}
          </h3>
          <p className="text-muted-foreground mb-4 line-clamp-3">
            {post.description}
          </p>
          <div className="text-primary hover:text-primary/80 font-medium text-sm">
            Read More →
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
