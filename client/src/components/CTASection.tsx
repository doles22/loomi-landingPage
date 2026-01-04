import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-foreground rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
          {/* Background Glows */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Ready to start your next story?
            </h2>
            <p className="text-xl text-white/70 mb-10 leading-relaxed">
              Join our other founding families weaving magical, meaningful bedtime stories with Loomi.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <a 
                href="https://apps.apple.com/ca/app/loomi-stories/id6754125616" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => {
                  if ((window as any).gtag) {
                    (window as any).gtag('event', 'click_download', {
                      event_category: 'engagement',
                      event_label: 'cta_section'
                    });
                  }
                }}
              >
                <Button size="lg" className="h-16 px-10 rounded-full bg-primary hover:bg-primary/90 text-white text-lg font-bold shadow-lg hover:scale-105 transition-all">
                  Download on the App Store
                </Button>
              </a>
            </div>
            
            <p className="mt-8 text-sm text-white/40">
              Available on iOS. Android coming soon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
