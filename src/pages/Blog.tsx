import { useState } from 'react';
import { ArrowLeft, Calendar, User, MessageCircle, Eye, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ParticleBackground from '@/components/ParticleBackground';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

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
    },
    {
      id: 5,
      title: "RGB Lighting Setup Guide for Ultimate Gaming Setup",
      excerpt: "Transform your gaming space with professional RGB lighting techniques and the best hardware recommendations.",
      category: "Hardware",
      author: "David Kim",
      publishDate: "2 weeks ago",
      readTime: "7 min read",
      views: "12.3k",
      comments: 67,
      featured: false,
      image: "/api/placeholder/600/300"
    },
    {
      id: 6,
      title: "Discord Server Management: Building Gaming Communities",
      excerpt: "Learn how to create and manage thriving Discord communities for gamers with best practices and tools.",
      category: "Guides",
      author: "Lisa Wong",
      publishDate: "3 weeks ago",
      readTime: "9 min read",
      views: "8.7k",
      comments: 45,
      featured: false,
      image: "/api/placeholder/600/300"
    }
  ];

  const categories = ['all', 'Guides', 'Reviews', 'Tutorials', 'Hardware', 'News'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background relative">
      <ParticleBackground />
      
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <div>
              <h1 className="text-4xl font-bold text-gaming-gradient">Gaming Blog</h1>
              <p className="text-muted-foreground mt-2">
                Latest gaming news, guides, reviews, and insights from the community
              </p>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-48">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Featured Posts */}
        {filteredPosts.some(post => post.featured) && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.filter(post => post.featured).map(post => (
                <Card key={post.id} className="card-gaming group overflow-hidden">
                  <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20">
                    <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
                      Featured
                    </Badge>
                    <Badge variant="outline" className="absolute top-4 right-4 bg-black/50 text-white border-white/20">
                      {post.category}
                    </Badge>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      <Link to={`/blog/${post.id}`} className="line-clamp-2 hover:underline">
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
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
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* All Posts */}
        <div>
          <h2 className="text-2xl font-bold mb-6">All Articles ({filteredPosts.length})</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map(post => (
              <Card key={post.id} className="card-gaming group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  
                  <CardTitle className="group-hover:text-primary transition-colors">
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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No articles found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;