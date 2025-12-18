import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Brain, Globe, Bot, Wallet } from "lucide-react";
import { useState } from "react";

const projectCategories = [
  {
    id: "fullstack",
    title: "Fullstack + AI",
    icon: Brain,
    projects: [
      {
        title: "LMS AI Learning Platform",
        description: "AI-driven learning management system with personalized content recommendations and adaptive learning paths.",
        tags: ["MERN", "TypeScript", "AI", "Next.js"],
        links: { live: "https://sklaii.onrender.com/", github: "https://github.com/lucidshaya/Skilled-learners" },
      },
      {
        title: "LucidGPT (ChatGPT Clone)",
        description: "Conversational AI chatbot mimicking ChatGPT with custom fine-tuning and contextual memory.",
        tags: ["PERN", "TypeScript", "AI", "Next.js"],
        links: { live: "https://github.com/lucidshaya", github: "https://github.com/lucidshaya"  },
      },
      {
        title: "AI-Powered Ecommerce",
        description: "Ecommerce platform with AI-driven product recommendations and intelligent chat support.",
        tags: ["MERN", "TypeScript", "AI", "Next.js"],
        links: { live: "https://github.com/lucidshaya", github: "https://github.com/lucidshaya" },
      },
    ],
  },
  {
    id: "web3",
    title: "Web3 Projects",
    icon: Wallet,
    projects: [
      {
        title: "Etherscan Clone",
        description: "Blockchain explorer for Ethereum transactions, smart contracts, and wallet analytics.",
        tags: ["Solidity", "TypeScript", "Next.js", "Web3"],
        links: { live: "https://github.com/lucidshaya", github: "https://github.com/lucidshaya"  },
      },
      {
        title: "DeFi NFT Marketplace",
        description: "Decentralized marketplace for trading NFTs with DeFi integrations and cross-chain support.",
        tags: ["Solidity", "TypeScript", "Next.js", "Web3"],
        links: {live: "https://github.com/lucidshaya", github: "https://github.com/lucidshaya"  },
      },
      {
        title: "Cross-Chain Freelancer Platform",
        description: "Freelancer platform with zk-privacy and AI-driven reputation scoring across blockchains.",
        tags: ["Solidity", "TypeScript", "AI", "Web3"],
        links: { live: "https://github.com/lucidshaya", github: "https://github.com/lucidshaya"  },
      },
    ],
  },
  {
    id: "ai",
    title: "AI Projects",
    icon: Globe,
    projects: [
      {
        title: "AI Sentiment Analyzer",
        description: "Analyzes text sentiment using NLP and displays results in an interactive dashboard.",
        tags: ["AI", "Python", "TypeScript", "Next.js"],
        links: { live: "https://github.com/lucidshaya", github: "https://github.com/lucidshaya" },
      },
 
      {
        title: "AI Sentiment Analyzer",
        description: "Analyzes text sentiment using NLP and displays results in an interactive dashboard.",
        tags: ["AI", "Python", "TypeScript", "Next.js"],
        links: { live: "https://github.com/lucidshaya", github: "https://github.com/lucidshaya" },
      },

     
      {
        title: "AI Sentiment Analyzer",
        description: "Analyzes text sentiment using NLP and displays results in an interactive dashboard.",
        tags: ["AI", "Python", "TypeScript", "Next.js"],
        links: { live: "https://github.com/lucidshaya", github: "https://github.com/lucidshaya" },
      },

    ],
  },
  {
    id: "bots",
    title: "Telegram Bots",
    icon: Bot,
    projects: [
      {
        title: "Wallet Tracker Bot",
        description: "Tracks crypto wallet transactions and sends real-time Telegram alerts.",
        tags: ["Node.js", "TypeScript", "Web3", "Telegram"],
        links: { live: "https://github.com/lucidshaya", github: "https://github.com/lucidshaya"  },
      },
      {
        title: "zk-Private Bounty Bot",
        description: "Manages freelance bounties with zk-privacy across multiple blockchains.",
        tags: ["Node.js", "TypeScript", "Solidity", "Web3"],
        links: { live: "https://github.com/lucidshaya", github: "https://github.com/lucidshaya"  },
      },
      {
        title: "AI Task Manager Bot",
        description: "AI-powered bot for task management and smart reminders via Telegram.",
        tags: ["Node.js", "TypeScript", "AI", "Telegram"],
        links: { live: "https://github.com/lucidshaya", github: "https://github.com/lucidshaya"  },
      },
    ],
  },
];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("fullstack");
  const [showAll, setShowAll] = useState(false);

  const currentCategory = projectCategories.find((c) => c.id === activeCategory);
  const allProjects = projectCategories.flatMap((c) => 
    c.projects.map((p) => ({ ...p, category: c.title }))
  );

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-accent font-mono text-sm">// PORTFOLIO</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
            {showAll ? "All " : "Featured "}<span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my work spanning full-stack applications, Web3 dApps,
            AI solutions, and automation tools.
          </p>
        </div>

        {/* Category Tabs - only show when not viewing all */}
        {!showAll && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {projectCategories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(280_100%_70%/0.4)]"
                      : "glass border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.title}
                </button>
              );
            })}
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(showAll ? allProjects : currentCategory?.projects || []).map((project) => (
            <div
              key={project.title}
              className="group relative rounded-xl overflow-hidden glass border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(280_100%_70%/0.2)]"
            >
              {/* Gradient Header */}
              <div className="h-24 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 group-hover:from-primary/30 group-hover:via-accent/30 group-hover:to-secondary/30 transition-all duration-300 relative">
                {showAll && 'category' in project && (
                  <span className="absolute bottom-2 left-4 text-xs font-mono text-primary/80 bg-background/50 px-2 py-1 rounded">
                    {(project as { category: string }).category}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6 pt-4">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-md bg-muted/50 text-xs font-mono text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.links.github} target="_blank"> 
                      <Github className="w-4 h-4 mr-1" />
                      Repo
                    </a>
                  </Button>
                  <Button variant="secondary" size="sm" asChild>
                    <a href={project.links.live} target="_blank">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="glass" 
            size="lg"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Categories" : "View All Projects"}
          </Button>
        </div>
      </div>
    </section>
  );
};
