import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@assets/generated_images/hero_mockup_of_loomi_app_on_iphone_with_glowing_thread.png";
import threadBg from "@assets/generated_images/abstract_background_with_flowing_golden_thread.png";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply pointer-events-none">
        <img 
          src={threadBg} 
          alt="" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold uppercase tracking-wider mb-6">
            <Star className="w-3 h-3 fill-current" />
            <span>Top Rated Story App</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] mb-6 text-foreground">
            Weave bedtime <span className="text-primary italic">stories</span> that bring your family closer.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-md">
            Loomi Stories turns your child’s ideas and your family moments into beautifully illustrated bedtime stories you can read and listen to together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-white text-lg shadow-xl shadow-primary/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              Download on App Store
            </Button>
            <Button variant="ghost" size="lg" className="h-14 px-8 rounded-full hover:bg-white/50 text-foreground font-medium group">
              How it works <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex -space-x-2">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-8 h-8 rounded-full bg-white border-2 border-background flex items-center justify-center text-[10px] font-bold overflow-hidden">
                   <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}&backgroundColor=ffdfbf`} alt="User" />
                </div>
              ))}
            </div>
            <p>Loved by 10,000+ families</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 w-full max-w-md mx-auto transform rotate-[-2deg] hover:rotate-0 transition-transform duration-700 ease-in-out">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full transform translate-y-10 scale-90"></div>
            <img 
              src={heroImage} 
              alt="Loomi Stories App Interface" 
              className="relative w-full drop-shadow-2xl rounded-[3rem]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
