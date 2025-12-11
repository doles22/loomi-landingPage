import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logo from "@assets/loomi_4/logo.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    if (location !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-3 group">
            <img src={logo} alt="Loomi Stories" className="h-10 w-auto transition-transform group-hover:scale-105" />
            <span className="text-xl font-heading font-bold text-foreground tracking-tighter hidden sm:block">
              Loomi Stories
            </span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection("how-it-works")} className="text-sm font-medium hover:text-primary transition-colors">
            How it works
          </button>
          <button onClick={() => scrollToSection("features")} className="text-sm font-medium hover:text-primary transition-colors">
            Features
          </button>
          <button onClick={() => scrollToSection("families")} className="text-sm font-medium hover:text-primary transition-colors">
            For Families
          </button>
          <Button className="rounded-full px-6 bg-primary hover:bg-primary/90 text-white font-medium shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
            Download App
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-border p-4 flex flex-col gap-4 md:hidden shadow-xl animate-in slide-in-from-top-5">
          <button onClick={() => scrollToSection("how-it-works")} className="text-left py-2 font-medium">
            How it works
          </button>
          <button onClick={() => scrollToSection("features")} className="text-left py-2 font-medium">
            Features
          </button>
          <button onClick={() => scrollToSection("families")} className="text-left py-2 font-medium">
            For Families
          </button>
          <Link href="/privacy-policy">
            <a className="py-2 font-medium">Privacy</a>
          </Link>
          <Link href="/terms-of-use">
            <a className="py-2 font-medium">Terms</a>
          </Link>
          <Button className="w-full rounded-full bg-primary text-white">
            Download App
          </Button>
        </div>
      )}
    </nav>
  );
}
