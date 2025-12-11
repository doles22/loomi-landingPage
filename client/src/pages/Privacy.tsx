import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Privacy() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <Link href="/">
          <a className="text-sm font-medium text-muted-foreground hover:text-primary mb-8 inline-block">← Back to Home</a>
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Privacy Policy</h1>
        <p className="text-xl text-muted-foreground mb-12">Your family’s privacy and safety matter to us.</p>
        
        <div className="prose prose-lg prose-stone max-w-none">
          <p>Last updated: December 2025</p>
          
          <h3>1. Information We Collect</h3>
          <p>
            We collect information you provide directly to us, such as when you create an account, create a profile for your child, or generate a story. This may include names (or nicknames) and story preferences.
          </p>
          
          <h3>2. How We Use Your Information</h3>
          <p>
            We use the information we collect to provide, maintain, and improve our services, such as generating personalized stories and illustrations. We do not sell your personal data to third parties.
          </p>
          
          <h3>3. Children’s Privacy</h3>
          <p>
            Loomi Stories is designed for families. We take special precautions to protect the privacy of children. We do not knowingly collect personal information from children without parental consent.
          </p>
          
          <h3>4. Data Security</h3>
          <p>
            We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
          </p>
          
          <h3>5. Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, please contact us at support@loomistories.com.
          </p>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border">
          <Button className="rounded-full bg-primary text-white">Download the App</Button>
        </div>
      </div>
    </Layout>
  );
}
