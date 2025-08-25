import ParticleBackground from '@/components/ParticleBackground';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ToolsSection from '@/components/ToolsSection';
import TemplatesSection from '@/components/TemplatesSection';
import EmulatorsSection from '@/components/EmulatorsSection';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <ParticleBackground />
      
      <Header />
      
      <main>
        <HeroSection />
        <ToolsSection />
        <TemplatesSection />
        <EmulatorsSection />
        <BlogSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
