import { motion } from "framer-motion";
import screen1 from "@assets/loomi_3/screen_1.png";
import screen2 from "@assets/loomi_3/screen_2.png";
import screen3 from "@assets/loomi_3/screen_3.png";

const steps = [
  {
    id: 1,
    title: "Add your family",
    description: "Create characters based on your kids, family members, and even pets.",
    image: screen2, // Assuming this screen shows character/family setup
    align: "left"
  },
  {
    id: 2,
    title: "Spark a story",
    description: "Start with a simple idea, a fun memory, or pick a daily prompt.",
    image: screen3, // Assuming this shows prompt/story creation
    align: "right"
  },
  {
    id: 3,
    title: "Enjoy together",
    description: "Loomi weaves it into a cozy story with illustrations to read or listen to.",
    image: screen1, // Assuming this shows the story view
    align: "left"
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-24">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">Simple Magic</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">How it works</h2>
        </div>

        <div className="flex flex-col gap-24 md:gap-32">
          {steps.map((step, idx) => (
            <div 
              key={step.id} 
              className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 ${step.align === "right" ? "md:flex-row-reverse" : ""}`}
            >
              {/* Text Side */}
              <motion.div 
                initial={{ opacity: 0, x: step.align === "left" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="flex-1 text-center md:text-left"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                  {step.id}
                </div>
                <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6">{step.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>

              {/* Image Side */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1 relative"
              >
                <div className="relative mx-auto max-w-[300px]">
                  {/* Phone frame shadow/glow */}
                  <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full transform scale-90 translate-y-4"></div>
                  
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="relative z-10 w-full rounded-[2.5rem] shadow-2xl border-8 border-white"
                  />
                  
                  {/* Decorative element */}
                  <div className={`absolute top-1/2 -translate-y-1/2 ${step.align === "left" ? "-right-12" : "-left-12"} w-24 h-24 bg-secondary/50 rounded-full blur-2xl z-0 hidden md:block`}></div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
