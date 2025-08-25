import { Button } from '@/components/ui/button';
import { Download, Play, Star, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative py-24 px-6 text-center overflow-hidden">
      {/* Hero Content */}
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="flex items-center justify-center space-x-2 mb-6">
          <Star className="h-5 w-5 text-primary" />
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            #1 Gaming Resource Hub
          </span>
          <Star className="h-5 w-5 text-primary" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Ultimate Gaming
          <span className="block text-gaming-gradient">
            Resource Hub
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Discover premium gaming tools, templates, emulators, and configs. 
          Your one-stop destination for all gaming downloads and resources.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" variant="gaming" className="text-lg px-8 py-4">
            <Download className="mr-2 h-5 w-5" />
            Explore Downloads
          </Button>
          <Button size="lg" variant="gaming-outline" className="text-lg px-8 py-4">
            <Play className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">10K+</div>
            <div className="text-sm text-muted-foreground">Downloads</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Templates</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">50K+</div>
            <div className="text-sm text-muted-foreground">Community</div>
          </div>
        </div>
      </div>

      {/* Floating Gaming Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 animate-bounce">
          <div className="w-8 h-8 bg-primary/20 rounded-full glow-cyan"></div>
        </div>
        <div className="absolute top-40 right-20 animate-bounce delay-1000">
          <div className="w-6 h-6 bg-secondary/20 rounded-full glow-purple"></div>
        </div>
        <div className="absolute bottom-32 left-1/4 animate-bounce delay-2000">
          <div className="w-10 h-10 bg-accent/20 rounded-full glow-green"></div>
        </div>
        <div className="absolute bottom-20 right-1/3 animate-bounce delay-500">
          <div className="w-4 h-4 bg-primary/30 rounded-full glow-cyan"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;