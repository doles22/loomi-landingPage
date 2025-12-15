import { Link } from "wouter";
import logo from "@assets/loomi_4/logo.png";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-border/50 py-12 mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 items-center text-center md:text-left">
          
          {/* Logo & Contact */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Loomi Stories" className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity" />
            </div>
            <a href="mailto:loomi@morningpm.com" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
              <Mail className="w-4 h-4" /> Contact Support
            </a>
          </div>

          {/* Links */}
          <div className="md:col-span-2 flex flex-wrap justify-center md:justify-center gap-6 text-sm text-muted-foreground">
            <Link href="/">
              <a className="hover:text-primary transition-colors">Home</a>
            </Link>
            <a href="https://apps.apple.com/ca/app/loomi-stories/id6754125616" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Download
            </a>
            <Link href="/privacy-policy">
              <a className="hover:text-primary transition-colors">Privacy Policy</a>
            </Link>
            <a href="https://www.apple.com/legal/internet-services/terms/site.html" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Terms of Use</a>
          </div>

          {/* Copyright */}
          <div className="md:col-span-1 text-sm text-muted-foreground/60 md:text-right">
            © {new Date().getFullYear()} Loomi Stories.<br />All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
