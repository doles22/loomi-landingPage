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
          Smoother, more elegant flow that weaves gently behind the content.
          Starts from the hero area (right side) and flows down.
        */}
        <motion.path
          d="M 80 0 
             C 80 100, 20 150, 20 300 
             C 20 500, 85 600, 85 800 
             C 85 950, 50 980, 50 1000"
          stroke="url(#thread-gradient-global)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          filter="url(#glow-blur-global)"
          style={{ pathLength, opacity: 0.6 }}
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
