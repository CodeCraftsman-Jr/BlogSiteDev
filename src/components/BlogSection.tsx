import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, MessageCircle, Eye, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Gaming Optimization Tips for 2024",
      excerpt: "Maximize your gaming performance with these proven optimization techniques that every gamer should know.",
      category: "Guides",
      author: "Alex Chen",
      publishDate: "2 days ago",
      readTime: "8 min read",
      views: "15.2k",
      comments: 142,
      featured: true,
      image: "/api/placeholder/600/300"
    },
    {
      id: 2,
      title: "Best Free Video Editing Software for Gaming Content",
      excerpt: "Create stunning gaming videos without breaking the bank. Our comprehensive review of the best free editors.",
      category: "Reviews",
      author: "Sarah Johnson",
      publishDate: "5 days ago",
      readTime: "12 min read",
      views: "23.7k",
      comments: 89,
      featured: false,
      image: "/api/placeholder/600/300"
    },
    {
      id: 3,
      title: "Retro Gaming Setup Guide: Building Your Dream Cave",
      excerpt: "Everything you need to create the perfect retro gaming setup, from hardware to software configurations.",
      category: "Hardware",
      author: "Mike Rodriguez",
      publishDate: "1 week ago",
      readTime: "15 min read",
      views: "31.4k",
      comments: 203,
      featured: true,
      image: "/api/placeholder/600/300"
    },
    {
      id: 4,
      title: "Streaming Like a Pro: OBS Studio Complete Setup",
      excerpt: "Master OBS Studio with our detailed guide covering scenes, sources, filters, and advanced configurations.",
      category: "Tutorials",
      author: "Emma Davis",
      publishDate: "1 week ago",
      readTime: "10 min read",
      views: "18.9k",
      comments: 156,
      featured: false,
      image: "/api/placeholder/600/300"
    }
  ];

  const categories = ["All", "Guides", "Reviews", "Tutorials", "Hardware", "News"];

  return (
    <section id="blog" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Gaming Blog
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest Gaming
            <span className="block text-gaming-gradient">News & Guides</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest gaming trends, tutorials, reviews, and insider tips 
            from our community of gaming experts and enthusiasts.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 flex-wrap gap-2">
            {categories.map((category) => (
              <Button 
                key={category}
                variant={category === activeCategory ? "gaming" : "outline"} 
                size="sm"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {blogPosts.filter(post => post.featured && (activeCategory === "All" || post.category === activeCategory)).map((post) => (
            <Card key={post.id} className="card-gaming group overflow-hidden">
              {/* Post Image */}
              <div className="relative overflow-hidden h-48 bg-muted/50">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-secondary text-secondary-foreground">
                    Featured
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-black/50 text-white border-white/20">
                    {post.category}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">
                  <Link to={`/blog/${post.id}`} className="line-clamp-2 hover:underline">{post.title}</Link>
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Author & Date */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.publishDate}</span>
                    </span>
                  </div>
                  <span>{post.readTime}</span>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="flex items-center space-x-1">
                    <Eye className="h-4 w-4" />
                    <span>{post.views} views</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <MessageCircle className="h-4 w-4" />
                    <span>{post.comments} comments</span>
                  </span>
                </div>

                <Button variant="gaming" className="w-full group-hover:scale-105 transition-transform" asChild>
                  <Link to={`/blog/${post.id}`}>
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.filter(post => !post.featured && (activeCategory === "All" || post.category === activeCategory)).map((post) => (
            <Card key={post.id} className="card-gaming group">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {post.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                </div>
                
                <CardTitle className="group-hover:text-primary transition-colors">
                  <Link to={`/blog/${post.id}`} className="line-clamp-2 hover:underline">{post.title}</Link>
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Author & Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </span>
                  <span>{post.publishDate}</span>
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="flex items-center space-x-1">
                    <Eye className="h-4 w-4" />
                    <span>{post.views}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <MessageCircle className="h-4 w-4" />
                    <span>{post.comments}</span>
                  </span>
                </div>

                <Button variant="outline" className="w-full group-hover:btn-gaming transition-all" asChild>
                  <Link to={`/blog/${post.id}`}>
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 p-8 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Get the latest gaming news, guides, and exclusive downloads delivered to your inbox.
          </p>
          <div className="flex max-w-md mx-auto space-x-2">
            <input
              type="email"
              placeholder="Enter your email..."
              className="flex-1 px-4 py-2 rounded-lg bg-background border border-border"
            />
            <Button variant="gaming">Subscribe</Button>
          </div>
        </div>

        {/* View All Posts Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="gaming-outline" asChild>
            <Link to="/blog">
              View All Posts
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;