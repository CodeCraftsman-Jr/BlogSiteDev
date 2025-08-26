import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, MessageCircle, Eye, ArrowRight, Download } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';

const BlogSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Get the latest 6 posts for the home page
  const displayPosts = blogPosts.slice(0, 6);
  
  const categories = ["All", "PC Games", "Free Fire", "Software", "GTA Games", "Editing Software"];

  const filteredPosts = displayPosts.filter(post => 
    activeCategory === "All" || post.category === activeCategory
  );

  return (
    <section id="blog" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            SWAG GAMERZ Blog
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest Gaming
            <span className="block text-gaming-gradient">Downloads & Guides</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Free PC games, software downloads, gaming tutorials, and the latest in mobile gaming. 
            Everything you need for the ultimate gaming experience.
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
          {filteredPosts.filter(post => post.featured).map((post) => (
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
                {post.downloadLinks && (
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="outline" className="bg-green-500/20 text-green-400 border-green-400/50">
                      <Download className="h-3 w-3 mr-1" />
                      Download Available
                    </Badge>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Post Content */}
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors duration-300">
                  <Link to={`/blog/${post.id}`} className="hover:underline">
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
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

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {post.tags.slice(0, 3).map(tag => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPosts.filter(post => !post.featured).map((post) => (
            <Card key={post.id} className="card-gaming group">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {post.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                </div>
                
                <CardTitle className="group-hover:text-primary transition-colors duration-300">
                  <Link to={`/blog/${post.id}`} className="line-clamp-2 hover:underline">
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
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

                {/* Download indicator */}
                {post.downloadLinks && (
                  <div className="pt-2 border-t">
                    <div className="flex items-center space-x-1 text-xs text-green-400">
                      <Download className="h-3 w-3" />
                      <span>Download Available</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Posts Button */}
        <div className="text-center">
          <Link to="/blog">
            <Button size="lg" className="gaming-button">
              View All Posts
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
