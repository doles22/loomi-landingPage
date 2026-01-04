import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">Our Story</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 text-foreground">
            About Loomi
          </h2>
          <div className="bg-secondary/20 rounded-3xl p-12 border border-secondary/50">
            <p className="text-xl text-muted-foreground italic">
              "Placeholder for About section content. Share the story behind Loomi, the mission to bring families together, and the people building it."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
