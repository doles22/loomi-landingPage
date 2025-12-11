import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Terms() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <Link href="/">
          <a className="text-sm font-medium text-muted-foreground hover:text-primary mb-8 inline-block">← Back to Home</a>
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Terms of Use</h1>
        <p className="text-xl text-muted-foreground mb-12">Please read these terms carefully before using Loomi Stories.</p>
        
        <div className="prose prose-lg prose-stone max-w-none">
          <p>Last updated: December 2025</p>
          
          <h3>1. Acceptance of Terms</h3>
          <p>
            By accessing or using Loomi Stories, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
          </p>
          
          <h3>2. Use of the Service</h3>
          <p>
            You are responsible for maintaining the confidentiality of your account and for restricting access to your device. You agree to accept responsibility for all activities that occur under your account.
          </p>
          
          <h3>3. Subscriptions and Payments</h3>
          <p>
            Some parts of the Service are billed on a subscription basis ("Subscription(s)"). You will be billed in advance on a recurring and periodic basis (such as monthly or annually).
          </p>
          
          <h3>4. Content and Ownership</h3>
          <p>
            Our Service allows you to generate stories and illustrations. You retain rights to the content you create, but you grant us a license to use, store, and display that content as necessary to provide the Service.
          </p>
          
          <h3>5. Limitation of Liability</h3>
          <p>
            In no event shall Loomi Stories, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages.
          </p>
          
          <h3>6. Contact Information</h3>
          <p>
            For any questions about these Terms, please contact us at support@loomistories.com.
          </p>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border">
          <Button className="rounded-full bg-primary text-white">Download the App</Button>
        </div>
      </div>
    </Layout>
  );
}
