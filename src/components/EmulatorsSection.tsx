import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Gamepad2, Star, Shield, Cpu } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const EmulatorsSection = () => {
  const emulators = [
    {
      id: 1,
      name: "RetroArch",
      description: "Multi-system emulator with advanced features and shader support",
      systems: ["NES", "SNES", "Genesis", "PSX", "N64", "GBA"],
      downloads: "2.1M",
      rating: 4.9,
      compatibility: 95,
      size: "245 MB",
      status: "Stable"
    },
    {
      id: 2,
      name: "Dolphin Emulator",
      description: "High-performance GameCube and Wii emulator with HD enhancements",
      systems: ["GameCube", "Wii"],
      downloads: "1.8M",
      rating: 4.8,
      compatibility: 92,
      size: "156 MB",
      status: "Stable"
    },
    {
      id: 3,
      name: "PCSX2",
      description: "PlayStation 2 emulator with enhanced graphics and performance",
      systems: ["PS2"],
      downloads: "1.5M",
      rating: 4.7,
      compatibility: 88,
      size: "234 MB",
      status: "Beta"
    },
    {
      id: 4,
      name: "Citra",
      description: "Nintendo 3DS emulator with stereoscopic 3D support",
      systems: ["3DS"],
      downloads: "950k",
      rating: 4.6,
      compatibility: 85,
      size: "87 MB",
      status: "Stable"
    },
    {
      id: 5,
      name: "RPCS3",
      description: "PlayStation 3 emulator with impressive compatibility",
      systems: ["PS3"],
      downloads: "720k",
      rating: 4.5,
      compatibility: 78,
      size: "345 MB",
      status: "Alpha"
    },
    {
      id: 6,
      name: "Yuzu",
      description: "Nintendo Switch emulator for PC gaming enthusiasts",
      systems: ["Switch"],
      downloads: "1.2M",
      rating: 4.4,
      compatibility: 72,
      size: "198 MB",
      status: "Beta"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Stable": return "text-green-500";
      case "Beta": return "text-yellow-500";
      case "Alpha": return "text-orange-500";
      default: return "text-gray-500";
    }
  };

  return (
    <section id="emulators" className="py-20 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            Emulation
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Gaming Console
            <span className="block text-gaming-gradient">Emulators</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience classic gaming with our collection of reliable emulators. 
            Play retro and modern console games on your PC with enhanced features.
          </p>
        </div>

        {/* Emulators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {emulators.map((emulator) => (
            <Card key={emulator.id} className="card-gaming group relative">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Gamepad2 className="h-5 w-5 text-primary" />
                    <span className="text-xl font-bold">{emulator.name}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-muted-foreground">{emulator.rating}</span>
                  </div>
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {emulator.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Supported Systems */}
                <div>
                  <h4 className="text-sm font-medium mb-2">Supported Systems:</h4>
                  <div className="flex flex-wrap gap-1">
                    {emulator.systems.map((system) => (
                      <Badge key={system} variant="outline" className="text-xs">
                        {system}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Downloads:</span>
                    <span className="font-medium">{emulator.downloads}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Size:</span>
                    <span className="font-medium">{emulator.size}</span>
                  </div>
                </div>

                {/* Compatibility */}
                <div>
                  <div className="flex items-center justify-between mb-2 text-sm">
                    <span className="text-muted-foreground">Compatibility:</span>
                    <span className="font-medium">{emulator.compatibility}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-accent h-2 rounded-full transition-all duration-500" 
                      style={{ width: `${emulator.compatibility}%` }}
                    />
                  </div>
                </div>

                {/* Status & Actions */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-muted-foreground" />
                    <span className={`text-sm font-medium ${getStatusColor(emulator.status)}`}>
                      {emulator.status}
                    </span>
                  </div>
                </div>

                <div className="flex space-x-2 pt-2">
                  <Button variant="gaming">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  <Button variant="outline" size="sm">
                    <Cpu className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Banner */}
        <div className="mt-16 p-6 rounded-xl bg-muted/50 border border-border">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Legal Notice</h3>
            <p className="text-muted-foreground">
              Emulators are provided for educational purposes. You must own the original games 
              to legally use ROMs. We do not provide copyrighted game files.
            </p>
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="gaming-outline">
            Explore All Emulators
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EmulatorsSection;