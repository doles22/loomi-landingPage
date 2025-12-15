import { motion } from "framer-motion";
import { Sparkles, Heart, BookOpen, Clock } from "lucide-react";
import bedtimeImg from "@assets/family_bedtime.jpg";
import readingImg from "@assets/family_reading.jpg";
import playingImg from "@assets/family_playing.jpg";

const features = [
  {
    icon: Sparkles,
    title: "Stories about your child",
    description: "They see themselves as the hero in every adventure, building confidence and wonder.",
    image: playingImg,
    colSpan: "md:col-span-2"
  },
  {
    icon: Heart,
    title: "Moments that matter",
    description: "Turn everyday memories—a trip to the park, a lost tooth—into magical tales.",
    image: readingImg,
    colSpan: "md:col-span-1"
  },
  {
    icon: Clock,
    title: "Calm, cozy bedtime",
    description: "Gentle narration and simple line art designed to wind down, not overstimulate.",
    image: bedtimeImg,
    colSpan: "md:col-span-1"
  },
  {
    icon: BookOpen,
    title: "A library you’ll cherish",
    description: "Save your favorite stories forever and build a personalized family bookshelf.",
    colSpan: "md:col-span-2"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative overflow-hidden rounded-3xl bg-background border border-border/50 group ${feature.colSpan || ""} ${feature.image ? "min-h-[300px]" : "p-8"}`}
            >
              {feature.image ? (
                <>
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={feature.image} 
                      alt="" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>
                  <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-2">{feature.title}</h3>
                    <p className="text-white/80 leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>
                </>
              ) : (
                <div className="h-full flex flex-col items-start">
                   <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
