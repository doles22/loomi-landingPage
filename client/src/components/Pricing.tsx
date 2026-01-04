import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const plans = [
  {
    name: "Loomi Standard",
    price: { monthly: "3.99", yearly: "29.99" },
    description: "Perfect for starting your family's storytelling journey.",
    features: [
      "Unlimited story creation & Characters",
      "Line Art Illustrations",
      "Conversation Starters",
      "Standard Authors & Narrators",
      "Short Stories"
    ],
    highlight: false
  },
  {
    name: "Loomi Premium",
    price: { monthly: "5.99", yearly: "44.99" },
    description: "For families who want even more magic and control.",
    features: [
      "Everything in Standard",
      "Line Art Illustrations",
      "Conversation Starters",
      "Premium Authors & Narrators",
      "Longer stories",
      "Narration playback speed control"
    ],
    highlight: true
  }
];

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <section id="pricing" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">Simple Pricing</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Fun for the whole family
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            Choose the plan that fits your family best.
          </p>
          <div className="bg-white/50 backdrop-blur-sm inline-block rounded-2xl p-6 border border-white/50 mb-8 max-w-lg mx-auto">
            <p className="text-base font-medium text-foreground leading-relaxed">
              ✨ No cards and no speakers needed. <br/>
              Just download and start weaving stories right from your phone or tablet.
            </p>
          </div>

          <div className="inline-flex items-center p-1 bg-white rounded-full border border-border/50 shadow-sm">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === "monthly" 
                  ? "bg-primary text-primary-foreground shadow-md" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === "yearly" 
                  ? "bg-primary text-primary-foreground shadow-md" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Yearly <span className="ml-1 text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded-full font-bold">Save ~35%</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative overflow-hidden rounded-3xl p-8 md:p-10 border ${
                plan.highlight 
                  ? "bg-white border-primary/20 shadow-xl ring-1 ring-primary/20" 
                  : "bg-white/50 border-white/50 shadow-sm"
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-4 py-1 rounded-bl-xl">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-2xl font-bold font-heading mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-6 min-h-[40px]">{plan.description}</p>

              <div className="mb-8">
                <span className="text-4xl font-bold">${plan.price[billingCycle]}</span>
                <span className="text-muted-foreground">/{billingCycle === "monthly" ? "mo" : "yr"}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="https://apps.apple.com/ca/app/loomi-stories/id6754125616" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
                onClick={() => {
                  if ((window as any).gtag) {
                    (window as any).gtag('event', 'click_download', {
                      event_category: 'engagement',
                      event_label: `pricing_${plan.name.toLowerCase().replace(' ', '_')}`
                    });
                  }
                }}
              >
                <Button 
                  className={`w-full rounded-full h-12 text-base font-bold ${
                    plan.highlight 
                      ? "bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5" 
                      : "bg-white border-2 border-primary text-primary hover:bg-primary/5 shadow-sm"
                  } transition-all duration-300`}
                >
                  Start Free Trial
                </Button>
              </a>
              <p className="text-center text-xs text-muted-foreground mt-4">
                3-day free trial included
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
