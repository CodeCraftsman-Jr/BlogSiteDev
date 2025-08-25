import { Gamepad2, Github, Twitter, MessageCircle, Youtube, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const footerSections = [
    {
      title: "Resources",
      links: [
        { name: "Gaming Tools", href: "#tools" },
        { name: "Templates", href: "#templates" },
        { name: "Emulators", href: "#emulators" },
        { name: "Configs", href: "#configs" },
      ]
    },
    {
      title: "Community", 
      links: [
        { name: "Blog", href: "#blog" },
        { name: "Discord Server", href: "#" },
        { name: "Forums", href: "#" },
        { name: "Contribute", href: "#" },
      ]
    },
    {
      title: "Support",
      links: [
        { name: "FAQ", href: "#" },
        { name: "Tutorials", href: "#" },
        { name: "Contact Us", href: "#" },
        { name: "Bug Reports", href: "#" },
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "DMCA", href: "#" },
        { name: "Disclaimer", href: "#" },
      ]
    }
  ];

  return (
    <footer className="bg-darker-surface border-t border-border/40">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Gamepad2 className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold text-gaming-gradient">
                  GameZone Hub
                </h3>
              </div>
              <p className="text-muted-foreground mb-6 max-w-sm">
                Your ultimate destination for gaming resources, tools, templates, and community. 
                Join thousands of gamers worldwide.
              </p>
              
              {/* Newsletter */}
              <div className="space-y-3">
                <h4 className="font-semibold">Stay in the Game</h4>
                <div className="flex space-x-2">
                  <Input 
                    placeholder="Enter your email..." 
                    className="bg-background/50 flex-1"
                  />
                  <Button size="sm" variant="gaming">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="font-semibold mb-4 text-primary">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href} 
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links & Stats */}
        <div className="py-8 border-t border-border/40">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">Follow us:</span>
              <div className="flex space-x-3">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                  <MessageCircle className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                  <Youtube className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                  <Github className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Community Stats */}
            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="text-center">
                <div className="font-bold text-primary">50K+</div>
                <div>Downloads</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-secondary">15K+</div>
                <div>Members</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-accent">500+</div>
                <div>Tools</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/40">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-sm text-muted-foreground">
            <div>
              © 2024 GameZone Hub. All rights reserved. Built for gamers, by gamers.
            </div>
            <div className="flex items-center space-x-4">
              <span>Made with ❤️ for the gaming community</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;