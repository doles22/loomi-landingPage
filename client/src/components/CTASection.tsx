import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

export function CTASection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      if ((window as any).gtag) {
        (window as any).gtag('event', 'android_waitlist_signup', {
          event_category: 'engagement',
          event_label: 'cta_section'
        });
      }
    }
  };

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
            
            <div className="mt-12 pt-8 border-t border-white/10 max-w-md mx-auto">
              <p className="text-white/60 mb-4 font-medium">Using Android?</p>
              
              {isSubmitted ? (
                <div className="bg-white/10 rounded-xl p-4 flex items-center justify-center gap-3 text-white animate-in fade-in zoom-in duration-300">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold">You're on the list!</p>
                    <p className="text-sm text-white/70">We'll let you know when we launch.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                  <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 rounded-xl focus-visible:ring-primary focus-visible:border-primary"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button type="submit" variant="secondary" className="h-12 px-6 rounded-xl font-bold whitespace-nowrap">
                    Notify Me
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
