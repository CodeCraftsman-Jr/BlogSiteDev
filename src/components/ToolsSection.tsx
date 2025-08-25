import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Star, Eye, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const ToolsSection = () => {
  const tools = [
    {
      id: 1,
      name: "Gaming Optimizer Pro",
      description: "Boost your FPS and optimize game performance with our advanced tool",
      category: "Performance",
      downloads: "15.2k",
      rating: 4.9,
      size: "2.3 MB",
      updated: "2 days ago",
      featured: true
    },
    {
      id: 2,
      name: "Discord Rich Presence",
      description: "Show your gaming activity with custom rich presence displays",
      category: "Social",
      downloads: "8.7k",
      rating: 4.7,
      size: "1.1 MB",
      updated: "1 week ago",
      featured: false
    },
    {
      id: 3,
      name: "Screenshot Studio",
      description: "Capture and edit gaming screenshots with professional tools",
      category: "Media",
      downloads: "12.4k",
      rating: 4.8,
      size: "5.2 MB",
      updated: "3 days ago",
      featured: true
    },
    {
      id: 4,
      name: "Gaming Config Manager",
      description: "Backup and sync your game configurations across devices",
      category: "Utility",
      downloads: "6.3k",
      rating: 4.6,
      size: "800 KB",
      updated: "5 days ago",
      featured: false
    },
    {
      id: 5,
      name: "FPS Counter Overlay",
      description: "Real-time FPS monitoring with customizable overlay",
      category: "Performance",
      downloads: "9.8k",
      rating: 4.7,
      size: "1.5 MB",
      updated: "1 week ago",
      featured: false
    },
    {
      id: 6,
      name: "Game Launcher Pro",
      description: "Organize and launch all your games from one beautiful interface",
      category: "Utility",
      downloads: "22.1k",
      rating: 4.9,
      size: "3.7 MB",
      updated: "1 day ago",
      featured: true
    }
  ];

  return (
    <section id="tools" className="py-20 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Gaming Tools
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Essential Gaming
            <span className="block text-gaming-gradient">Tools & Utilities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Enhance your gaming experience with our curated collection of premium tools, 
            optimizers, and utilities designed for serious gamers.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <Card key={tool.id} className="card-gaming group relative overflow-hidden">
              {tool.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-secondary text-secondary-foreground">
                    Featured
                  </Badge>
                </div>
              )}
              
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-xl font-bold">{tool.name}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-muted-foreground">{tool.rating}</span>
                  </div>
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {tool.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="flex items-center space-x-1">
                    <Download className="h-4 w-4" />
                    <span>{tool.downloads}</span>
                  </span>
                  <span>{tool.size}</span>
                </div>

                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {tool.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {tool.updated}
                  </span>
                </div>

                <div className="flex space-x-2 pt-2">
                  <Button variant="gaming">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="gaming-outline" asChild>
            <Link to="/tools">
              View All Tools
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;