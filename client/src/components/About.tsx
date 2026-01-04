import { motion } from "framer-motion";
import familyPhoto from "@assets/loomi_3/screen_3.png"; // Using a placeholder for now, ideally this would be a photo of the founders

export function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">Our Story</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
              The Story of Loomi
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Loomi began on a quiet night at home. About two years ago, my wife Taylor and I were having an at-home date night, talking about life, our kids, and all the wild things we were starting to see technology do. We talked about how powerful AI was becoming, but also how distant and impersonal so much of it felt.
              </p>
              <p>
                Then Taylor had a simple, wonderful idea. <span className="text-foreground font-medium">What if we used this technology to write stories for our kids?</span>
              </p>
              <p>
                Stories where they were the heroes. Stories that felt personal. Stories that could become part of our nightly routine.
              </p>
              <p>
                I work in tech, and the idea immediately stuck with me. Not just because it was technically interesting, but because it felt meaningful. I loved the idea of learning how to build a mobile app that could turn our kids’ imagination into something real.
              </p>
              <p>
                So I started building. Late nights. Weekends. Tiny moments of progress after bedtime.
              </p>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                What started as a small experiment slowly turned into something bigger. Our kids became part of the process, helping shape the stories, reacting to what felt magical, and showing us what didn’t. Their curiosity and joy guided so many of the decisions along the way.
              </p>
              <p>
                Friends and family became our first testers. They gave feedback, shared ideas, and helped bring features to life, turning Loomi from a rough idea into a real experience families could use and love.
              </p>
              <p>
                We live in East Grand Rapids, Michigan, and Loomi is deeply rooted in the life we’ve built here. Slow evenings, close knit community, and the belief that the smallest moments often matter the most.
              </p>
              <div className="bg-secondary/20 p-8 rounded-2xl border border-secondary/50 my-8">
                <p className="italic text-foreground font-medium">
                  "Loomi is named after the idea of a loom and light. Every story is a thread. Every family moment is a spark. Loomi weaves those threads together into something warm, simple, and lasting."
                </p>
              </div>
              <p>
                At its heart, Loomi isn’t about technology. It’s about connection. About slowing down. About creating moments your family will remember.
              </p>
              <p className="font-bold text-foreground">
                We built Loomi for our kids. And we’re so excited to share it with yours.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
