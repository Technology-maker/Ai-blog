import Header from "../components/Header";
import Hero from "../components/Hero";
import BlogCard from "../components/BlogCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import LogoLoop from "../components/LogoLoop";
import StarBorder from '../components/StarBorder'


// ai images 
import Chatgptimg from '../assets/Aiimage/ChatGPT Image Nov 9, 2025, 11_21_51 PM.png'
import Geniniimg from '../assets/Aiimage/gemeni.png'
import top10aiimg from "../assets/Aiimage/top-ai-tools-2025.jpg";
import Lovableimg from '../assets/Aiimage/lovable-image.png'
import Copiletimg from '../assets/Aiimage/github copilet img.jpg'
import Blackboximg from '../assets/Aiimage/black box ai img.jpg'
import Claudaiimg from '../assets/Aiimage/Claude-image.webp'
import Cursoraiimg from '../assets/Aiimage/cursor-ai-images.png'
import Sunoaiimg from '../assets/Aiimage/Suno-ai-image.jpeg'

// ai automation 
import automationImage from "../assets/blog-automation.jpg";
import n8nimg from '../assets/Ai-atomation-img/n8n-img.png'

// api image
import apisImage from '../assets/blog-apis.jpg'
import Chatgptapiimg from '../assets/Ai-api-img/chatgpt-api-tutorial-image.png'

// Ai-logos 
import { RiGeminiFill } from "react-icons/ri";
import { GoCopilot } from "react-icons/go";
import { SiN8N, SiClaude, SiSuno, SiCanva } from "react-icons/si";

import Chatgpt_log from '../assets/Ai_logos/Gemeni_logo.webp'

const techLogos = [
  { node: <RiGeminiFill />, href: "https://gemini.google.com" },
  { node: <SiN8N />, href: "https://n8n.io" },
  { node: <SiClaude />, href: "https://claude.ai" },
  { node: <SiSuno />, href: "https://suno.com" },
  { node: <GoCopilot />, href: "https://Copilot.com" },
  { node: <SiCanva />, href: "https://www.canva.com/ai-assistant" },
];




const blogPosts = [
  {
    id: "top-10-ai-tools-2025",
    title: "Top 10 AI Tools Every Developer Should Know in 2025",
    excerpt: "Discover the most powerful AI tools that are transforming how developers work. From code completion to automated testing, these tools will boost your productivity.",
    category: "AI Tools",
    date: "Jan 15, 2025",
    readTime: "8 min read",
    image: top10aiimg,
  },
  {
    id: "google-gemini",
    title: "Google Gemini: The Future of AI Development APIs",
    excerpt: "Gemini models are powering smarter apps through Google's Developer API and Firebase integration. Here's how developers are leveraging Gemini for Android and web apps.",
    category: "AI Tools",
    date: "Jan 3, 2025",
    readTime: "10 min read",
    image: Geniniimg,
  },
  {
    id: "chatgpt",
    title: "ChatGPT: The Model That Changed Conversational AI Forever",
    excerpt: "Explore how ChatGPT reshaped the landscape of AI interaction, from coding help to creative writing and business automation.",
    category: "AI Tools",
    date: "Jan 3, 2025",
    readTime: "10 min read",
    image: Chatgptimg,
  },
  {
    id: "lovable-ai",
    title: "Lovable AI: Build Full Apps from a Single Prompt",
    excerpt: "Meet Lovable AI — the tool that lets developers go from idea to deploy-ready app in minutes. Discover how it's redefining full-stack productivity.",
    category: "AI Tools",
    date: "Jan 2, 2025",
    readTime: "7 min read",
    image: Lovableimg,
  },
  {
    id: "github-copilot",
    title: "GitHub Copilot: The Ultimate Coding Companion",
    excerpt: "An in-depth look at GitHub Copilot — how it speeds up development, reduces bugs, and transforms pair programming for every coder.",
    category: "AI Tools",
    date: "Jan 2, 2025",
    readTime: "8 min read",
    image: Copiletimg,
  },
  {
    id: "blackbox-ai",
    title: "Blackbox AI: The Smartest Code Search Assistant",
    excerpt: "Blackbox AI helps you find, understand, and reuse code instantly. Here’s how developers use it to accelerate debugging and project delivery.",
    category: "AI Tools",
    date: "Jan 1, 2025",
    readTime: "6 min read",
    image: Blackboximg,
  },
  {
    id: "suno-ai",
    title: "Suno AI: Turn Text Into Music with AI",
    excerpt: "Discover how Suno AI lets you create original songs from simple text prompts. Perfect for creators, marketers, and developers alike.",
    category: "Creative AI",
    date: "Dec 30, 2024",
    readTime: "5 min read",
    image: Sunoaiimg,
  },
  {
    id: "claude-ai",
    title: "Claude AI: The Ethical Rival to ChatGPT",
    excerpt: "Anthropic’s Claude AI focuses on alignment and reasoning. Learn how it’s being used in enterprises for safe, context-aware AI conversations.",
    category: "AI Tools",
    date: "Dec 28, 2024",
    readTime: "9 min read",
    image: Claudaiimg,
  },
  {
    id: "cursor-ai",
    title: "Cursor AI: The Next-Gen AI Code Editor",
    excerpt: "Cursor AI merges ChatGPT-like intelligence directly into your code editor, enabling seamless debugging, refactoring, and feature building.",
    category: "Developer Tools",
    date: "Dec 25, 2024",
    readTime: "8 min read",
    image: Cursoraiimg,
  },
  {
    id: "automation-workflow-zapier",
    title: "Building Powerful Automation Workflows with Free Tools",
    excerpt: "Learn how to create sophisticated automation workflows without breaking the bank. We'll explore free alternatives to premium automation platforms.",
    category: "Automation",
    date: "Jan 12, 2025",
    readTime: "6 min read",
    image: automationImage,
  },
  {
    id: "free-ai-apis-guide",
    title: "The Complete Guide to Free AI APIs You Can Use Today",
    excerpt: "Access powerful AI capabilities without spending a dime. This comprehensive guide covers the best free AI APIs for text, image, and voice processing.",
    category: "Free APIs",
    date: "Jan 10, 2025",
    readTime: "10 min read",
    image: apisImage,
  },
  {
    id: "chatgpt-api-tutorial",
    title: "Building Your First Chatbot with ChatGPT API",
    excerpt: "Step-by-step tutorial on integrating ChatGPT API into your applications. Learn best practices and cost optimization strategies.",
    category: "Free APIs",
    date: "Jan 8, 2025",
    readTime: "12 min read",
    image: Chatgptapiimg,
  },
  {
    id: "python-automation-scripts",
    title: "10 Python Automation Scripts That Save Hours Every Week",
    excerpt: "Automate repetitive tasks with these practical Python scripts. From file management to web scraping, we've got you covered.",
    category: "Automation",
    date: "Jan 5, 2025",
    readTime: "7 min read",
    image: automationImage,
  },
  {
    id: "stable-diffusion-free",
    title: "Using Stable Diffusion API for Free Image Generation",
    excerpt: "Generate stunning AI images without subscription fees. Learn how to use Stable Diffusion's free tier effectively.",
    category: "Free APIs",
    date: "Jan 3, 2025",
    readTime: "9 min read",
    image: apisImage,
  },
  {
    id: "n8n",
    title: "Automate AI Image Generation with n8n & Stable Diffusion — No Coding, No Cost!",
    excerpt: "Discover how to create powerful automation workflows using n8n and Stable Diffusion’s free API. Generate AI images hands-free and boost your productivity — all without spending a rupee!",
    category: "Automation",
    date: "Jan 3, 2025",
    readTime: "9 min read",
    image: n8nimg,
  },
];


const Index = () => {
  const [activeTab, setActiveTab] = useState("all");

  // Map hash/href names to tab values
  const hashToTab = (hash) => {
    if (hash === "#tools") return "tools";
    if (hash === "#automation") return "automation";
    if (hash === "#creativeai") return "creativeai";
    if (hash === "#apis" || hash === "#free-api") return "apis";
    return "all";
  };

  useEffect(() => {
    // On mount, check URL hash and activate matching tab
    const h = window.location.hash;
    if (h) {
      const t = hashToTab(h);
      setActiveTab(t);

      // Scroll to element after tab mounts
      setTimeout(() => {
        const el = document.querySelector(h);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 120);
    }

    // Listen for header-dispatched activate-tab events
    const handleActivate = (ev) => {
      const tab = ev?.detail?.tab;
      if (!tab) return;
      const mapped = hashToTab(`#${tab}`);
      setActiveTab(mapped);

      // Scroll to matching id after tab mounts
      setTimeout(() => {
        const el = document.querySelector(`#${tab}`);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 120);
    };

    window.addEventListener("activate-tab", handleActivate);
    return () => window.removeEventListener("activate-tab", handleActivate);
  }, []);

  return (
    <section>
      <div className="min-h-screen bg-background">
        <Header />
        <Hero />

        {/* Blog Posts Section */}
        <section className="container py-16 md:py-24">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Articles</h2>
            <p className="text-muted-foreground text-lg">
              Stay updated with the latest in AI, automation, and free tools
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <TabsList className="w-full justify-start overflow-x-auto">
              <TabsTrigger value="all">All Posts</TabsTrigger>
              <TabsTrigger value="tools">AI Tools</TabsTrigger>
              <TabsTrigger value="creativeai">Creative AI</TabsTrigger>
              <TabsTrigger value="automation">Automation</TabsTrigger>
              <TabsTrigger value="apis">Free APIs</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-8">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {blogPosts.map((post) => (
                  <BlogCard key={post.id} {...post} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tools" className="space-y-8" id="tools">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {blogPosts
                  .filter((post) => post.category === "AI Tools")
                  .map((post) => (
                    <BlogCard key={post.id} {...post} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="automation" className="space-y-8" id="automation">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {blogPosts
                  .filter((post) => post.category === "Automation")
                  .map((post) => (
                    <BlogCard key={post.id} {...post} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="apis" className="space-y-8" id="apis">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {blogPosts
                  .filter((post) => post.category === "Free APIs")
                  .map((post) => (
                    <BlogCard key={post.id} {...post} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="creativeai" className="space-y-8" id="creativeai">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {blogPosts
                  .filter((post) => post.category === "Creative AI")
                  .map((post) => (
                    <BlogCard key={post.id} {...post} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Newsletter Section */}
        <section className="border-t bg-secondary/30">
          <div className="container py-16 md:py-24">
            <div className="mx-auto max-w-2xl text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Join Our Community 🚀</h2>
              <p className="text-muted-foreground text-lg">
                Get the latest AI tools, and free API tutorials delivered to your inbox every week
              </p>


              <StarBorder
                as="a"
                href="https://chat.whatsapp.com/Eu9rfaHqGVv2wh1Pqgllgq?mode=hqrc"
                target="_blank"
                rel="noopener noreferrer"
                color="Magenta"
                speed="5s"

              >
                Join Now
              </StarBorder>



            </div>
          </div>
        </section>

        <div className="space-y-4">
          <div className="relative h-[80px] w-full overflow-hidden">
            <LogoLoop
              logos={techLogos}
              speed={120}
              direction="left"
              logoHeight={50}
              gap={75}
              hoverSpeed={15}
              scaleOnHover
              fadeOut
              fadeOutColor="#ffffff"
              ariaLabel="Technology partners"
            />
          </div>

        </div>
        {/* Footer */}
        <Footer />
      </div>
    </section>
  );
};

export default Index;
