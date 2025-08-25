import { useState } from 'react';
import { ArrowLeft, Download, Star, Eye, Calendar, Search, Filter, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ParticleBackground from '@/components/ParticleBackground';

const Templates = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const templates = [
    {
      id: 1,
      title: 'Epic Gaming Intro Pack',
      description: 'Professional intro templates with customizable text, logos, and epic music tracks.',
      category: 'Video Editing',
      downloadCount: '156k',
      rating: 4.9,
      resolution: '4K',
      duration: '10-15s',
      featured: true,
      image: '/api/placeholder/400/250',
      tags: ['Intro', '4K', 'Music', 'Logo']
    },
    {
      id: 2,
      title: 'Twitch Overlay Collection',
      description: 'Complete streaming overlay package with webcam frames, alerts, and chat boxes.',
      category: 'Streaming',
      downloadCount: '203k',
      rating: 4.8,
      resolution: '1080p',
      duration: 'Static',
      featured: true,
      image: '/api/placeholder/400/250',
      tags: ['Twitch', 'Overlay', 'Webcam', 'Alerts']
    },
    {
      id: 3,
      title: 'YouTube Gaming Thumbnail Pack',
      description: '50+ customizable thumbnail templates designed for maximum click-through rates.',
      category: 'Photo Editing',
      downloadCount: '89k',
      rating: 4.7,
      resolution: '1280x720',
      duration: 'Static',
      featured: false,
      image: '/api/placeholder/400/250',
      tags: ['YouTube', 'Thumbnail', 'PSD', 'Clickable']
    },
    {
      id: 4,
      title: 'Montage Transition Effects',
      description: 'Smooth transition effects and cuts perfect for gaming highlight reels.',
      category: 'Video Editing',
      downloadCount: '124k',
      rating: 4.6,
      resolution: '4K',
      duration: '1-3s',
      featured: true,
      image: '/api/placeholder/400/250',
      tags: ['Transitions', 'Montage', 'Effects', 'Highlights']
    },
    {
      id: 5,
      title: 'Discord Server Banner Templates',
      description: 'Animated and static banner templates for Discord servers and communities.',
      category: 'Photo Editing',
      downloadCount: '67k',
      rating: 4.5,
      resolution: '960x540',
      duration: 'Mixed',
      featured: false,
      image: '/api/placeholder/400/250',
      tags: ['Discord', 'Banner', 'Community', 'Animated']
    },
    {
      id: 6,
      title: 'Gaming Logo Animation Pack',
      description: 'Animated logo reveals and stingers for professional branding.',
      category: 'Video Editing',
      downloadCount: '78k',
      rating: 4.4,
      resolution: '4K',
      duration: '3-5s',
      featured: false,
      image: '/api/placeholder/400/250',
      tags: ['Logo', 'Animation', 'Branding', 'Reveal']
    }
  ];

  const categories = ['all', 'Video Editing', 'Photo Editing', 'Streaming'];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
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
              <h1 className="text-4xl font-bold text-gaming-gradient">Gaming Templates</h1>
              <p className="text-muted-foreground mt-2">
                Professional templates for video editing, streaming, and content creation
              </p>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search templates..."
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

        {/* Featured Templates */}
        {filteredTemplates.some(template => template.featured) && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Featured Templates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTemplates.filter(template => template.featured).map(template => (
                <Card key={template.id} className="card-gaming group overflow-hidden">
                  <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20">
                    <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
                      Featured
                    </Badge>
                    <Badge variant="outline" className="absolute top-4 right-4 bg-black/50 text-white border-white/20">
                      {template.category}
                    </Badge>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button size="lg" variant="gaming" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play className="h-5 w-5 mr-2" />
                        Preview
                      </Button>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                      {template.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {template.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center space-x-1">
                          <Download className="h-4 w-4" />
                          <span>{template.downloadCount}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>{template.rating}</span>
                        </span>
                      </div>
                      <span>{template.resolution}</span>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {template.tags.slice(0, 3).map(tag => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button variant="gaming" className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Download Template
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* All Templates */}
        <div>
          <h2 className="text-2xl font-bold mb-6">All Templates ({filteredTemplates.length})</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map(template => (
              <Card key={template.id} className="card-gaming group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {template.category}
                    </Badge>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span>{template.rating}</span>
                    </div>
                  </div>
                  
                  <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                    {template.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {template.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="flex items-center space-x-1">
                      <Download className="h-4 w-4" />
                      <span>{template.downloadCount}</span>
                    </span>
                    <span>{template.resolution}</span>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {template.tags.slice(0, 3).map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Play className="h-4 w-4 mr-1" />
                      Preview
                    </Button>
                    <Button variant="gaming" size="sm" className="flex-1">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {filteredTemplates.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No templates found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Templates;