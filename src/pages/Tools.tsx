import { useState } from 'react';
import { ArrowLeft, Download, Star, Eye, Calendar, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ParticleBackground from '@/components/ParticleBackground';

const Tools = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const tools = [
    {
      id: 1,
      title: 'OBS Studio Ultimate Setup Pack',
      description: 'Complete OBS setup with custom overlays, alerts, and streaming tools for professional broadcasts.',
      category: 'Streaming',
      downloadCount: '125k',
      rating: 4.9,
      size: '2.3 GB',
      lastUpdated: '2 days ago',
      featured: true,
      image: '/api/placeholder/400/250',
      tags: ['OBS', 'Streaming', 'Overlays', 'Alerts']
    },
    {
      id: 2,
      title: 'MSI Afterburner & GPU Tweaking Suite',
      description: 'Advanced GPU overclocking tools with monitoring software and custom fan curves.',
      category: 'Performance',
      downloadCount: '89k',
      rating: 4.8,
      size: '156 MB',
      lastUpdated: '1 week ago',
      featured: false,
      image: '/api/placeholder/400/250',
      tags: ['GPU', 'Overclocking', 'Monitoring', 'Performance']
    },
    {
      id: 3,
      title: 'Discord Rich Presence Gaming Pack',
      description: 'Custom Discord status displays for 500+ games with real-time game tracking.',
      category: 'Utilities',
      downloadCount: '67k',
      rating: 4.7,
      size: '45 MB',
      lastUpdated: '3 days ago',
      featured: true,
      image: '/api/placeholder/400/250',
      tags: ['Discord', 'Rich Presence', 'Gaming', 'Status']
    },
    {
      id: 4,
      title: 'FPS Optimizer & Game Booster',
      description: 'Automatic system optimization for maximum gaming performance across all titles.',
      category: 'Performance',
      downloadCount: '203k',
      rating: 4.6,
      size: '89 MB',
      lastUpdated: '5 days ago',
      featured: false,
      image: '/api/placeholder/400/250',
      tags: ['FPS', 'Optimization', 'Performance', 'Booster']
    },
    {
      id: 5,
      title: 'Steam Achievement Manager',
      description: 'Manage and unlock Steam achievements with detailed progress tracking.',
      category: 'Utilities',
      downloadCount: '145k',
      rating: 4.5,
      size: '23 MB',
      lastUpdated: '1 week ago',
      featured: false,
      image: '/api/placeholder/400/250',
      tags: ['Steam', 'Achievements', 'Manager', 'Tracking']
    },
    {
      id: 6,
      title: 'RGB Lighting Control Suite',
      description: 'Universal RGB controller for all major brands with sync and custom effects.',
      category: 'Customization',
      downloadCount: '78k',
      rating: 4.4,
      size: '134 MB',
      lastUpdated: '4 days ago',
      featured: true,
      image: '/api/placeholder/400/250',
      tags: ['RGB', 'Lighting', 'Sync', 'Effects']
    }
  ];

  const categories = ['all', 'Streaming', 'Performance', 'Utilities', 'Customization'];

  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
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
              <h1 className="text-4xl font-bold text-gaming-gradient">Gaming Tools</h1>
              <p className="text-muted-foreground mt-2">
                Essential tools and utilities to enhance your gaming experience
              </p>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search tools..."
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

        {/* Featured Tools */}
        {filteredTools.some(tool => tool.featured) && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Featured Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.filter(tool => tool.featured).map(tool => (
                <Card key={tool.id} className="card-gaming group overflow-hidden">
                  <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20">
                    <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
                      Featured
                    </Badge>
                    <Badge variant="outline" className="absolute top-4 right-4 bg-black/50 text-white border-white/20">
                      {tool.category}
                    </Badge>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                      {tool.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {tool.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center space-x-1">
                          <Download className="h-4 w-4" />
                          <span>{tool.downloadCount}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>{tool.rating}</span>
                        </span>
                      </div>
                      <span>{tool.size}</span>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {tool.tags.slice(0, 3).map(tag => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button variant="gaming" className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Download Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* All Tools */}
        <div>
          <h2 className="text-2xl font-bold mb-6">All Tools ({filteredTools.length})</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map(tool => (
              <Card key={tool.id} className="card-gaming group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {tool.category}
                    </Badge>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span>{tool.rating}</span>
                    </div>
                  </div>
                  
                  <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                    {tool.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {tool.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="flex items-center space-x-1">
                      <Download className="h-4 w-4" />
                      <span>{tool.downloadCount}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{tool.lastUpdated}</span>
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {tool.tags.slice(0, 3).map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full group-hover:btn-gaming transition-all">
                    <Download className="h-4 w-4 mr-2" />
                    Download ({tool.size})
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No tools found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tools;