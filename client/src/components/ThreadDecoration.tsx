import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ThreadDecoration() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <svg
        className="absolute top-0 left-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 100 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M50 0 C 60 20, 80 40, 50 60 C 20 80, 20 120, 50 140 C 80 160, 80 200, 50 220 C 20 240, 20 280, 50 300 C 80 320, 60 380, 50 400"
          stroke="url(#thread-gradient)"
          strokeWidth="0.5"
          strokeLinecap="round"
          style={{ pathLength, opacity: 0.6 }}
        />
        <defs>
          <linearGradient id="thread-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="10%" stopColor="#EAB308" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="90%" stopColor="#EAB308" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Floating particles following the thread roughly */}
      <div className="absolute top-[15%] left-[50%] w-2 h-2 bg-yellow-400 rounded-full blur-[2px] opacity-60 animate-pulse"></div>
      <div className="absolute top-[35%] left-[45%] w-3 h-3 bg-primary rounded-full blur-[4px] opacity-40 animate-pulse delay-700"></div>
      <div className="absolute top-[60%] left-[55%] w-2 h-2 bg-amber-300 rounded-full blur-[2px] opacity-50 animate-pulse delay-1000"></div>
    </div>
  );
}
