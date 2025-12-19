import React from "react";
import { Brain, Github, Instagram, Linkedin, Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer({ date, readTime }) {
  if (date || readTime) {
    return (
      <section>
        <div className="flex items-center justify-between p-4 border-t border-border/40 text-sm text-muted-foreground group">
          <div className="flex items-center gap-4">
            {date && (
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {date}
              </span>
            )}

            {readTime && (
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {readTime}
              </span>
            )}
          </div>

          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </section>
    );
  }

  return (
    <footer className="border-t border-border bg-gradient-to-b from-slate-900 via-slate-950 to-black text-slate-300">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4 group">
              <Brain className="h-9 w-9 text-primary transition-transform group-hover:scale-110" />
              <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                AI Blog Hub
              </span>
            </div>

            <p className="text-slate-400 mb-4 max-w-md leading-relaxed">
              Your go-to resource for AI tutorials, free APIs, and the latest developments in artificial intelligence.
            </p>

            <div className="flex gap-4 mt-3">
              {[
                { Icon: Instagram, link: "https://www.instagram.com/yadav_sarkar1519?igsh=Z3hsMzY1NnFkaHhq" },
                { Icon: Github, link: "https://github.com/Technology-maker" },
                { Icon: Linkedin, link: "https://www.linkedin.com/in/satender-yadav-a39b622a0/" },
              ].map(({ Icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700 transition-all duration-200 
                 hover:scale-110 hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 relative inline-block group">
              Quick Links
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all group-hover:w-full"></span>
            </h3>

            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-slate-400 hover:text-white transition-colors hover:pl-1 block duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/free-api"
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-slate-400 hover:text-white transition-colors hover:pl-1 block duration-200"
                >
                  Free APIs
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4 relative inline-block group">
              Resources
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all group-hover:w-full"></span>
            </h3>

            <ul className="space-y-2">
              {["Documentation", "Community", "Support"].map((item, i) => (
                <li key={i}>
                  <a
                    href={item === "Support" ? "/contact" : "#"}
                    className="text-slate-400 hover:text-white hover:pl-1 transition-all duration-200 block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} AI Blog Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
