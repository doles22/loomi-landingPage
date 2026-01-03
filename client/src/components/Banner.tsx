import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export function Banner() {
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    // Check if current date is before Dec 31st, 2026
    const now = new Date();
    const cutoffDate = new Date("2026-12-31T23:59:59");
    
    if (now <= cutoffDate) {
      setShouldShow(true);
    }
  }, []);

  if (!shouldShow) return null;

  return (
    <div className="bg-primary text-primary-foreground px-4 py-3 text-center relative z-50 shadow-sm animate-in slide-in-from-top fade-in duration-500">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 text-sm md:text-base font-medium">
        <span>
          <span className="font-bold">✨ Special offer for GR Kids readers!</span> Enjoy 50% off for the first 3 months.
        </span>
        <a 
          href="https://apps.apple.com/redeem?ctx=offercodes&id=6754125616&code=GRKIDS"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center underline decoration-white/50 hover:decoration-white underline-offset-4 hover:opacity-90 transition-all whitespace-nowrap"
          onClick={() => {
            if ((window as any).gtag) {
              (window as any).gtag('event', 'click_download', {
                event_category: 'engagement',
                event_label: 'banner_offer'
              });
            }
          }}
        >
          Redeem Offer <ArrowRight className="ml-1 w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
