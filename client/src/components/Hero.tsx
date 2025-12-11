import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@assets/generated_images/hero_mockup_of_loomi_app_on_iphone_with_glowing_thread.png";
import appIcon from "@assets/loomi_4/app_icon.png";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Decor - now handled by ThreadDecoration but we keep subtle blobs */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/20 text-foreground text-sm font-semibold shadow-sm mb-8 animate-in slide-in-from-left-4 fade-in duration-700">
            <img src={appIcon} alt="Loomi" className="w-5 h-5 rounded-md" />
            <span>The #1 Storytelling App for Families</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] mb-6 text-foreground">
            Weave bedtime <span className="text-primary italic relative inline-block">
              stories
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span> that bring your family closer.
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
          
          <div className="mt-10 flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full bg-white border-2 border-background flex items-center justify-center text-[10px] font-bold overflow-hidden shadow-sm">
                   <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 5}&backgroundColor=ffdfbf`} alt="User" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-xs font-bold border-2 border-background text-primary">
                +10k
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex text-yellow-400">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <p className="font-medium text-foreground">Loved by families</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 w-full max-w-md mx-auto">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full transform translate-y-10 scale-90"></div>
            {/* Using the generated hero image as it's a good 3D render */}
            <img 
              src={heroImage} 
              alt="Loomi Stories App Interface" 
              className="relative w-full drop-shadow-2xl rounded-[3rem] border-8 border-white/30"
            />
            
            {/* Floating app icon badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-3xl shadow-xl flex items-center gap-3 max-w-[200px]"
            >
              <div className="bg-secondary/50 p-2 rounded-2xl">
                <img src={appIcon} className="w-8 h-8 rounded-lg" alt="" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">Download now</p>
                <p className="font-bold text-sm">Loomi Stories</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
