import { Button } from "./ui/Button";
import { ArrowRight, Search } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import heroImage from "../assets/Hero-img/hero-bg.jpg";
import SplitText from "../components/SplitText";
import { Link } from "react-router-dom";



const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Image + Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="AI and automation technology background"
          className="w-full h-full object-cover brightness-110 scale-125 animate-[slowZoom_15s_ease-in-out_infinite_alternate]"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-background dark:via-black/40" />

      </div>

      {/* Content */}
      <div className="container relative z-10 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center space-y-8 px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-block px-4 py-1.5 bg-white/40 dark:bg-gray-800/50 backdrop-blur-md rounded-full border border-primary/30 mb-4 shadow-sm"
          >
            <span className="text-sm font-medium text-blue-700 dark:text-blue-400">
              <SplitText
                text="Free AI Tools & Tutorials"
                className="text-sm font-semibold"
                splitType="chars"
                delay={80}
              />
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 leading-tight"
          >
            Master <span className="text-blue-600">AI Tools</span>, Automation & Free APIs
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-slate-300"
          >
            Discover top AI tools, automation tips, and tutorials that help you build smarter, faster, and more creatively — for free.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center "
          >
            <Link to="/artical">
              <Button
                size="lg"
                className="gap-2 shadow-lg hover:shadow-blue-500/40 hover:scale-[1.02] transition-all duration-300 bg-blue-600 text-white rounded-full px-6 py-3"
              >

                Explore Articles <ArrowRight className="h-4 w-4" />

              </Button>
            </Link>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="grid grid-cols-3 gap-4 md:gap-8 pt-12 max-w-2xl mx-auto"
          >
            {[
              { number: "50+", label: "AI Tools Reviewed" },
              { number: "100+", label: "Tutorials" },
              { number: "20+", label: "Free APIs" },
            ].map((stat, i) => (
              <div key={i} className="space-y-1">
                <p className="text-3xl md:text-4xl font-bold text-blue-600">{stat.number}</p>
                <p className="text-sm text-muted-foreground text-slate-300">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Zoom animation keyframes */}
      <style>{`
        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
