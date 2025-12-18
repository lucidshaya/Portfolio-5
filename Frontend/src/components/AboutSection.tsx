import { Code2, Blocks, Video, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Building scalable applications with MERN & PERN stacks",
  },
  {
    icon: Blocks,
    title: "Smart Contracts",
    description: "Writing secure and optimized Solidity code for DeFi & NFTs",
  },
  {
    icon: Video,
    title: "Tech Content",
    description: "Sharing knowledge through tutorials and educational content",
  },
  {
    icon: Rocket,
    title: "Cloud Architecture",
    description: "Deploying and scaling applications on AWS & Docker",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm">// ABOUT ME</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
            Passionate About <span className="text-gradient">Innovation</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm a software engineer with 5+ years of experience, passionate
            about blockchain technology and building applications that make a
            difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="group p-6 rounded-xl glass border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(280_100%_70%/0.2)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border/50">
          {[
            { value: "5+", label: "Years Experience" },
            { value: "50+", label: "Projects Completed" },
            { value: "20+", label: "Smart Contracts" },
            { value: "10K+", label: "Content Followers" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
