import { motion } from "framer-motion";
import { Sparkles, Heart, BookOpen, Clock } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Stories about your child",
    description: "They see themselves as the hero in every adventure, building confidence and wonder.",
    color: "text-amber-500",
    bg: "bg-amber-100"
  },
  {
    icon: Heart,
    title: "Moments that matter",
    description: "Turn everyday memories—a trip to the park, a lost tooth—into magical tales.",
    color: "text-rose-500",
    bg: "bg-rose-100"
  },
  {
    icon: Clock,
    title: "Calm, cozy bedtime",
    description: "Gentle narration and simple line art designed to wind down, not overstimulate.",
    color: "text-indigo-500",
    bg: "bg-indigo-100"
  },
  {
    icon: BookOpen,
    title: "A library you’ll cherish",
    description: "Save your favorite stories forever and build a personalized family bookshelf.",
    color: "text-emerald-500",
    bg: "bg-emerald-100"
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Why families love <span className="text-primary">Loomi</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            More than just an app, Loomi is a new way to connect, create, and dream together at the end of the day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-background border border-border/50 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
