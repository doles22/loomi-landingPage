import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export function Banner() {
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    // Check if current date is before Dec 31st, 2025
    const now = new Date();
    const cutoffDate = new Date("2025-12-31T23:59:59");
    
    if (now <= cutoffDate) {
      setShouldShow(true);
    }
  }, []);

  if (!shouldShow) return null;

  return (
    <div className="bg-primary text-primary-foreground px-4 py-3 text-center relative z-50 shadow-sm animate-in slide-in-from-top fade-in duration-500">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 text-sm md:text-base font-medium">
        <span>
          <span className="font-bold">✨ Join now and be a Founding Family.</span> Enjoy 50% off for the first 3 months. Offer ends December 31st.
        </span>
        <a 
          href="https://apps.apple.com/redeem?ctx=offercodes&id=6754125616&code=FOUNDINGFAMILY"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center underline decoration-white/50 hover:decoration-white underline-offset-4 hover:opacity-90 transition-all whitespace-nowrap"
        >
          Redeem Offer <ArrowRight className="ml-1 w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
