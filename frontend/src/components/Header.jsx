import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/Button";
import { Sparkles, Menu, X } from "lucide-react";
import { useState } from "react";



const Header = ({ navItems: propNavItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // fallback default (keeps previous behavior if no prop passed)
  const defaultNavItems = [
    { label: "AI Tools", href: "#tools" },
    { label: "Automation", href: "#automation" },
    { label: "Tutorials", href: "#creativeai" },
    { label: "Free APIs", href: "/free-api" },
  ];
  const navItems = propNavItems ?? defaultNavItems;

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-900/50 dark:bg-black/85 border-b backdrop-blur-sm shadow-sm transition-all">
      <nav className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 transition-transform">
          <Sparkles className="h-6 w-6 text-blue-600" />
          <span className="text-xl font-bold bg-gradient-to-r from-red-600 to-indigo-500 bg-clip-text text-transparent">
            AI Hub
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isHash = item.href && item.href.startsWith("#");
            // For hash links we perform a smooth scroll to an element with that id
            if (isHash) {
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();

                    const tab = item.href.replace("#", "");

                    // 🔥 Tell app which tab/section to activate
                    window.dispatchEvent(
                      new CustomEvent("activate-tab", { detail: { tab } })
                    );

                    // 🔁 If not on home page, go home first
                    if (location.pathname !== "/") {
                      window.location.href = `/${item.href}`;
                      return;
                    }

                    // ⏳ Wait for section to mount, then scroll
                    setTimeout(() => {
                      const el = document.querySelector(item.href);
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }, 120);
                  }}
                  className={`group relative text-sm font-medium transition-colors duration-200 ${location.hash === item.href
                      ? "text-blue-600"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600"
                    }`}
                >
                  {item.label}
                </a>
              );
            }



            return (
              <Link
                key={item.href}
                to={item.href}
                className={`relative text-sm font-medium transition-colors duration-200 ${location.pathname === item.href
                  ? "text-blue-600"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600"
                  }`}
              >
                {item.label}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span>
              </Link>
            );
          })}

          <Link to={"/contact"}>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-5 py-1.5 shadow-md transition-all">
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-800 dark:text-gray-200" />
          ) : (
            <Menu className="h-6 w-6 text-gray-800 dark:text-gray-200" />
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute top-16 left-0 right-0 bg-white/90 dark:bg-[#330B29]/70 backdrop-blur-md border-b shadow-md transform  transition-all duration-300 origin-top text-center ${isMenuOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-0 invisible"
            } md:hidden`}
        >
          <div className="container py-6 flex flex-col items-center gap-5 text-center">
            {navItems.map((item) => {
              const isHash = item.href && item.href.startsWith("#");
              if (isHash) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                      const tab = item.href.replace('#', '');
                      // Dispatch event to activate tab
                      window.dispatchEvent(new CustomEvent('activate-tab', { detail: { tab } }));
                      // Try to scroll after tab mounts
                      setTimeout(() => {
                        const el = document.querySelector(item.href);
                        if (el) {
                          el.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                      }, 120);
                    }}
                    className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </a>
                );
              }

              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </Link>
              );
            })}

            <Link to="/contact">
              <Button
                onClick={() => {
                  setIsMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-5 py-2 shadow-md"
              >
                Contact Us
              </Button>
            </Link>

          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;