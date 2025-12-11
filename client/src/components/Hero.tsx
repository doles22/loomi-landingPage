import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@assets/hero_iphone.png";
import appIcon from "@assets/loomi_4/app_icon.png";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Transform scroll progress to drawing progress
  // We want it to be fully drawn when scrolled just a bit, but also initially visible
  // Actually, for "following scrolling", it should draw as we scroll down?
  // Or maybe it should be "unspooling" as we scroll.
  
  // Let's make it so it starts 0 and draws to 1 as we scroll past the hero
  // But wait, the hero is at the top. The user starts at 0 scroll.
  // If we want it to "follow scrolling", it usually means the line *grows* as we go down.
  // BUT the hero is the *start*. So if it starts at 0 length, it's invisible on load.
  // The user probably wants it to be visible initially (maybe animating in) and then the *continuation* follows scroll.
  
  // Revised plan:
  // 1. Initial animation on load (0 -> 1) so it looks good.
  // 2. The Global thread (ThreadDecoration) starts *after* the hero and follows scroll.
  
  // Wait, the user said "follow the scrolling of the user... used in the phone image as well".
  // Maybe they want the *phone thread* to unspool as they scroll?
  // If so, it would be invisible at the very top. That might look bad for a Hero image.
  
  // Compromise: The Hero thread animates in on load (standard).
  // The Global thread (ThreadDecoration) connects to it and unspools.
  // I will keep the Hero load animation but ensure the visual style matches the global thread perfectly.
  
  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Decor */}
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
          <div className="relative z-10 w-full max-w-md mx-auto perspective-1000">
            {/* Soft Glow Behind */}
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full transform translate-y-10 scale-90"></div>
            
            {/* BACK THREAD (Behind Phone) */}
            <svg className="absolute -inset-[25%] w-[150%] h-[150%] z-0 pointer-events-none opacity-80" viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                 <linearGradient id="thread-glow" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop offset="0%" stopColor="#EAB308" />
                   <stop offset="50%" stopColor="#FDE047" />
                   <stop offset="100%" stopColor="#EAB308" />
                 </linearGradient>
                 <filter id="glow-blur" x="-50%" y="-50%" width="200%" height="200%">
                   <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                   <feMerge>
                     <feMergeNode in="coloredBlur"/>
                     <feMergeNode in="SourceGraphic"/>
                   </feMerge>
                 </filter>
              </defs>
              
              {/* Bottom Loop Behind */}
              <motion.path 
                d="M50,550 C150,550 350,450 350,400" 
                stroke="url(#thread-glow)" 
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              {/* Top Loop Behind */}
              <motion.path 
                d="M50,300 C150,250 350,200 350,150" 
                stroke="url(#thread-glow)" 
                strokeWidth="2" 
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
              />
            </svg>

            <img 
              src={heroImage} 
              alt="Loomi Stories App Interface" 
              className="relative w-full drop-shadow-2xl z-10"
            />
            
            {/* FRONT THREAD (In Front of Phone) */}
            <svg className="absolute -inset-[25%] w-[150%] h-[150%] z-20 pointer-events-none" viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Middle Cross Over */}
              <motion.path 
                d="M350,400 C350,350 150,350 50,300" 
                stroke="url(#thread-glow)" 
                strokeWidth="3" 
                strokeLinecap="round"
                fill="none"
                filter="url(#glow-blur)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.25 }}
              />
              {/* Top Exit */}
              <motion.path 
                d="M350,150 C350,100 200,50 150,20" 
                stroke="url(#thread-glow)" 
                strokeWidth="3" 
                strokeLinecap="round"
                fill="none"
                filter="url(#glow-blur)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.75 }}
              />
              
              {/* Sparkles on the thread */}
              <motion.circle cx="350" cy="400" r="3" fill="#FFF" filter="url(#glow-blur)" 
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} 
                transition={{ duration: 2, repeat: Infinity }} 
              />
              <motion.circle cx="50" cy="300" r="2" fill="#FFF" filter="url(#glow-blur)" 
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} 
                transition={{ duration: 3, repeat: Infinity, delay: 1 }} 
              />
            </svg>
            
            {/* Floating app icon badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-20 -left-6 bg-white p-4 rounded-3xl shadow-xl flex items-center gap-3 max-w-[200px] z-30"
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
