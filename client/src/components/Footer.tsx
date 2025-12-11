import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-white border-t border-border/50 py-12 mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-primary text-xl">✦</span>
            <span className="font-heading font-bold text-lg">Loomi Stories</span>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <Link href="/">
              <a className="hover:text-primary transition-colors">Home</a>
            </Link>
            <a href="https://apps.apple.com/ca/app/loomi-stories/id6754125616" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Download
            </a>
            <Link href="/privacy-policy">
              <a className="hover:text-primary transition-colors">Privacy Policy</a>
            </Link>
            <Link href="/terms-of-use">
              <a className="hover:text-primary transition-colors">Terms of Use</a>
            </Link>
          </div>

          <div className="text-sm text-muted-foreground/60">
            © {new Date().getFullYear()} Loomi Stories. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
