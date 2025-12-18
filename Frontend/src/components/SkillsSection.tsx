import { Video, FileText, Search, Sparkles } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 92 },
      { name: "Tailwind CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express", level: 88 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 88 },
    ],
  },
  {
    title: "Web3",
    skills: [
      { name: "Solidity", level: 92 },
      { name: "Ethers.js", level: 88 },
      { name: "Hardhat", level: 85 },
      { name: "Smart Contracts", level: 90 },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "Docker", level: 85 },
      { name: "AWS", level: 82 },
      { name: "CI/CD", level: 80 },
      { name: "Git", level: 95 },
    ],
  },
];

const extraSkills = [
  { name: "Video Editing", icon: Video, description: "Professional video production & post-production" },
  { name: "Technical Writing", icon: FileText, description: "Documentation, tutorials & tech articles" },
  { name: "Blockchain Research", icon: Search, description: "Protocol analysis & market research" },
  { name: "AI Video Generation", icon: Sparkles, description: "AI-powered video content creation" },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <span className="text-secondary font-mono text-sm">
            // TECH STACK
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning full-stack development, blockchain
            technology, and cloud infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="p-6 rounded-xl glass border border-border/50"
            >
              <h3 className="font-display font-semibold text-lg mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary" />
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-foreground font-medium">
                        {skill.name}
                      </span>
                      <span className="text-muted-foreground font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-muted/50 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-secondary transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${
                            categoryIndex * 0.2 + skillIndex * 0.1
                          }s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Extra Skills */}
        <div className="mt-16">
          <h3 className="text-center font-display font-semibold text-xl mb-8">
            Additional <span className="text-gradient">Expertise</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {extraSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="p-5 rounded-xl glass border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(280_100%_70%/0.2)] group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-3 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{skill.name}</h4>
                  <p className="text-xs text-muted-foreground">{skill.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tech Icons */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {[
            "React",
            "Node.js",
            "Solidity",
            "TypeScript",
            "Docker",
            "AWS",
            "PostgreSQL",
            "MongoDB",
            "Next.js",
            "Ethereum",
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full glass border border-border/50 text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
