import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Twitter, Youtube } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(280 100% 70% / 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(280 100% 70% / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-up opacity-0 stagger-1">
          <span className="inline-block px-4 py-2 rounded-full glass border border-primary/30 text-primary text-sm font-mono mb-6">
            Web3 Developer & Content Creator
          </span>
        </div>

        <h1 className="animate-fade-up opacity-0 stagger-2 text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
          Hello, I'm{" "}
          <span className="text-gradient">Ohine</span>
          <br />
          Web3 Developer & Creator
        </h1>

        <p className="animate-fade-up opacity-0 stagger-3 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          5+ years crafting full-stack applications and smart contracts.
          Specializing in Solidity, MERN/PERN stacks, and creating content that
          empowers developers.
        </p>

        <div className="animate-fade-up opacity-0 stagger-4 flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="glow" size="xl" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
            View My Work
            </Button>
          <Button variant="glass" size="xl">
            Download Resume
          </Button>
        </div>

        {/* Social Links */}
        <div className="animate-fade-up opacity-0 stagger-5 flex justify-center gap-4">
          {[
            { icon: Github, href: "#", label: "GitHub" },
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Twitter, href: "#", label: "Twitter" },
            { icon: Youtube, href: "#", label: "YouTube" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="p-3 rounded-full glass border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(280_100%_70%/0.3)]"
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};
