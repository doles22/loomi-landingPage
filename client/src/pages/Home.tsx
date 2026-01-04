import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { About } from "@/components/About";
import { CTASection } from "@/components/CTASection";
import { ThreadDecoration } from "@/components/ThreadDecoration";

export default function Home() {
  return (
    <Layout>
      <div className="relative">
        <ThreadDecoration />
        <Hero />
        <Features />
        <section className="py-24 bg-secondary/30 relative z-10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-heading font-bold mb-12">Designed to feel calm</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm">
                <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
                <h3 className="text-xl font-bold mb-3">Line Art Style</h3>
                <p className="text-muted-foreground">Illustrations inspired by a single thread, keeping the imagination open.</p>
              </div>
              <div className="p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm">
                <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
                <h3 className="text-xl font-bold mb-3">Distraction Free</h3>
                <p className="text-muted-foreground">No ads, no noise. Just you, your child, and a good story.</p>
              </div>
              <div className="p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm">
                <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
                <h3 className="text-xl font-bold mb-3">Meaningful Screen Time</h3>
                <p className="text-muted-foreground">Built for parents who want connection, not just consumption.</p>
              </div>
            </div>
          </div>
        </section>
        <HowItWorks />
        <About />
        <CTASection />
      </div>
    </Layout>
  );
}
