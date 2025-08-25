import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Play, Star, Eye } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const TemplatesSection = () => {
  const templates = [
    {
      id: 1,
      name: "Gaming Intro Pack",
      description: "Professional gaming intros with customizable text and effects",
      category: "Video",
      type: "After Effects",
      downloads: "25.3k",
      rating: 4.9,
      preview: "/api/placeholder/400/225",
      price: "Free",
      duration: "10-15s"
    },
    {
      id: 2,
      name: "Twitch Overlay Bundle",
      description: "Complete streaming overlay package with alerts and panels",
      category: "Streaming",
      type: "OBS/Streamlabs",
      downloads: "18.7k",
      rating: 4.8,
      preview: "/api/placeholder/400/225",
      price: "Premium",
      duration: "N/A"
    },
    {
      id: 3,
      name: "Gaming Logo Templates",
      description: "Editable gaming logos for teams and content creators",
      category: "Graphics",
      type: "Photoshop",
      downloads: "32.1k",
      rating: 4.7,
      preview: "/api/placeholder/400/225",
      price: "Free",
      duration: "N/A"
    },
    {
      id: 4,
      name: "Montage Transitions",
      description: "Epic transition effects for gaming montages",
      category: "Video",
      type: "Premiere Pro",
      downloads: "14.2k",
      rating: 4.8,
      preview: "/api/placeholder/400/225",
      price: "Premium",
      duration: "1-3s"
    },
    {
      id: 5,
      name: "YouTube Thumbnails",
      description: "Eye-catching gaming thumbnail templates",
      category: "Graphics",
      type: "Photoshop",
      downloads: "41.6k",
      rating: 4.9,
      preview: "/api/placeholder/400/225",
      price: "Free",
      duration: "N/A"
    },
    {
      id: 6,
      name: "Gaming UI Kit",
      description: "Complete UI elements for gaming applications",
      category: "UI/UX",
      type: "Figma/Sketch",
      downloads: "12.8k",
      rating: 4.6,
      preview: "/api/placeholder/400/225",
      price: "Premium",
      duration: "N/A"
    }
  ];

  return (
    <section id="templates" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
            Design Templates
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Creative Gaming
            <span className="block text-gaming-gradient">Templates & Assets</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional templates for video editing, streaming, graphics design, 
            and content creation. Ready to use and fully customizable.
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template) => (
            <Card key={template.id} className="card-gaming group overflow-hidden">
              {/* Preview Image */}
              <div className="relative overflow-hidden bg-muted/50 h-48">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="h-12 w-12 text-white/80 group-hover:scale-110 transition-transform" />
                </div>
                <div className="absolute top-4 left-4">
                  <Badge variant={template.price === "Free" ? "default" : "secondary"}>
                    {template.price}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-black/50 text-white border-white/20">
                    {template.type}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-xl font-bold">{template.name}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-muted-foreground">{template.rating}</span>
                  </div>
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {template.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="flex items-center space-x-1">
                    <Download className="h-4 w-4" />
                    <span>{template.downloads}</span>
                  </span>
                  {template.duration !== "N/A" && (
                    <span>Duration: {template.duration}</span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {template.category}
                  </Badge>
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

        {/* Categories Filter */}
        <div className="flex justify-center mt-12 space-x-4 flex-wrap gap-2">
          <Button variant="outline" size="sm">All</Button>
          <Button variant="outline" size="sm">Video</Button>
          <Button variant="outline" size="sm">Graphics</Button>
          <Button variant="outline" size="sm">Streaming</Button>
          <Button variant="outline" size="sm">UI/UX</Button>
        </div>

        {/* View More Button */}
        <div className="text-center mt-8">
          <Button size="lg" variant="gaming-outline">
            <Link to="/templates">
              Browse All Templates
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TemplatesSection;