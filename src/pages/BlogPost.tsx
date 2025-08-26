import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, MessageCircle, Eye, Download, HardDrive, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import ParticleBackground from '@/components/ParticleBackground';
import { blogPosts } from '@/data/blogPosts';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id || '0'));

  if (!post) {
    return (
      <div className="min-h-screen bg-background relative flex items-center justify-center">
        <ParticleBackground />
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative">
      <ParticleBackground />
      
      <article className="container mx-auto px-6 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link to="/blog">
            <Button variant="ghost" size="sm" className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
          
          <div className="space-y-4">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="outline">{post.category}</Badge>
              {post.featured && (
                <Badge className="bg-secondary text-secondary-foreground">Featured</Badge>
              )}
              {post.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <h1 className="text-4xl font-bold text-gaming-gradient leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between text-sm text-muted-foreground flex-wrap gap-4">
              <div className="flex items-center space-x-4">
                <span className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{post.publishDate}</span>
                </span>
                <span>{post.readTime}</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="flex items-center space-x-1">
                  <Eye className="h-4 w-4" />
                  <span>{post.views}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <MessageCircle className="h-4 w-4" />
                  <span>{post.comments}</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }} />
        </div>

        {/* Download Links */}
        {post.downloadLinks && post.downloadLinks.length > 0 && (
          <Card className="card-gaming mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Download className="h-5 w-5" />
                <span>Download Links</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {post.downloadLinks.map((link, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-semibold">{link.title}</h4>
                    <p className="text-sm text-muted-foreground">Size: {link.size}</p>
                  </div>
                  <Button onClick={() => window.open(link.url, '_blank')}>
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {/* System Requirements */}
        {post.systemRequirements && (
          <Card className="card-gaming mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <HardDrive className="h-5 w-5" />
                <span>System Requirements</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Cpu className="h-4 w-4" />
                    <span className="font-semibold">Operating System:</span>
                  </div>
                  <p className="text-muted-foreground ml-6">{post.systemRequirements.os}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <HardDrive className="h-4 w-4" />
                    <span className="font-semibold">RAM:</span>
                  </div>
                  <p className="text-muted-foreground ml-6">{post.systemRequirements.ram}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <HardDrive className="h-4 w-4" />
                    <span className="font-semibold">Storage:</span>
                  </div>
                  <p className="text-muted-foreground ml-6">{post.systemRequirements.storage}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Cpu className="h-4 w-4" />
                    <span className="font-semibold">Processor:</span>
                  </div>
                  <p className="text-muted-foreground ml-6">{post.systemRequirements.processor}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Related Posts */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Related Posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter(p => p.id !== post.id && p.category === post.category)
              .slice(0, 2)
              .map(relatedPost => (
                <Card key={relatedPost.id} className="card-gaming group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {relatedPost.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{relatedPost.readTime}</span>
                    </div>
                    
                    <CardTitle className="group-hover:text-primary transition-colors">
                      <Link to={`/blog/${relatedPost.id}`} className="line-clamp-2 hover:underline">
                        {relatedPost.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
