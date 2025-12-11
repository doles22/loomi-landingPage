import { motion } from "framer-motion";
import { UserPlus, Wand2, Moon } from "lucide-react";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Simple Magic</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">How it works</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent border-t-2 border-dashed border-primary/30 z-0"></div>

          {/* Step 1 */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-white border-4 border-secondary flex items-center justify-center shadow-lg mb-8 relative">
              <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-foreground text-white flex items-center justify-center font-bold font-heading">1</span>
              <UserPlus className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-heading font-bold mb-4">Add your family</h3>
            <p className="text-muted-foreground max-w-xs">
              Create characters based on your kids, family members, and even pets.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-white border-4 border-secondary flex items-center justify-center shadow-lg mb-8 relative">
              <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-foreground text-white flex items-center justify-center font-bold font-heading">2</span>
              <Wand2 className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-heading font-bold mb-4">Spark a story</h3>
            <p className="text-muted-foreground max-w-xs">
              Start with a simple idea, a fun memory, or pick a daily prompt.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-white border-4 border-secondary flex items-center justify-center shadow-lg mb-8 relative">
              <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-foreground text-white flex items-center justify-center font-bold font-heading">3</span>
              <Moon className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-heading font-bold mb-4">Enjoy together</h3>
            <p className="text-muted-foreground max-w-xs">
              Loomi weaves it into a cozy story with illustrations to read or listen to.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
