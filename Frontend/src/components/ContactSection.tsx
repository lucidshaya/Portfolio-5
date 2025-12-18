import { Button } from "@/components/ui/button";
import { Mail, MapPin, Send, MessageSquare } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm">// GET IN TOUCH</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'm always open to
            discussing new opportunities in Web3 and full-stack development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 rounded-xl glass border border-border/50">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Email</h4>
                <p className="text-muted-foreground text-sm">
                  hello@yourname.dev
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl glass border border-border/50">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Location</h4>
                <p className="text-muted-foreground text-sm">
                  Available Worldwide (Remote)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl glass border border-border/50">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shrink-0">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Social</h4>
                <p className="text-muted-foreground text-sm">
                  @yourhandle on Twitter/X
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:shadow-[0_0_20px_hsl(280_100%_70%/0.2)] transition-all duration-300"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:shadow-[0_0_20px_hsl(280_100%_70%/0.2)] transition-all duration-300"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:shadow-[0_0_20px_hsl(280_100%_70%/0.2)] transition-all duration-300 resize-none"
              />
            </div>
            <Button variant="glow" size="lg" className="w-full">
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
