import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ThreadDecoration() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none z-0 overflow-hidden h-full w-full">
      <svg
        className="absolute top-0 left-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 100 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="thread-gradient-global" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#EAB308" stopOpacity="0" />
            <stop offset="5%" stopColor="#EAB308" />
            <stop offset="95%" stopColor="#EAB308" />
            <stop offset="100%" stopColor="#EAB308" stopOpacity="0" />
          </linearGradient>
          <filter id="glow-blur-global" x="-50%" y="-50%" width="200%" height="200%">
             <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
             <feMerge>
               <feMergeNode in="coloredBlur"/>
               <feMergeNode in="SourceGraphic"/>
             </feMerge>
           </filter>
        </defs>

        {/* 
          Path design strategy:
          0-100: Hero area (starts roughly where the phone thread exits)
          100-400: How it works (zig zag)
          400-800: Features
          800-1000: Footer
        */}
        <motion.path
          d="M 75 80 
             C 85 100, 50 120, 20 150 
             C -10 180, 10 220, 50 250
             C 90 280, 90 320, 50 350
             C 20 380, 20 420, 50 450
             C 80 480, 80 550, 50 600
             C 20 650, 20 750, 50 800
             C 80 850, 50 950, 50 1000"
          stroke="url(#thread-gradient-global)"
          strokeWidth="0.8"
          strokeLinecap="round"
          fill="none"
          filter="url(#glow-blur-global)"
          style={{ pathLength, opacity: 0.7 }}
        />
      </svg>
      
      {/* Floating particles following the thread roughly - controlled by scroll */}
      {/* 
        We can't easily animate these along the path based on scroll without complex SVG APIs.
        Instead, we'll just place them at key "nodes" and have them pulse.
      */}
    </div>
  );
}
