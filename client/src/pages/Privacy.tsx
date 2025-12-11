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
        <p className="text-xl text-muted-foreground mb-12">Last Updated: November 5, 2025</p>
        
        <div className="prose prose-lg prose-stone max-w-none">
          <p>
            Loomi Stories is developed and operated by Good Morning Product Manager LLC ("we," "us," or "our"). We care deeply about your privacy and are committed to being clear and transparent about how we handle your information.
          </p>
          <p>
            If you have any questions, please contact us at: <a href="mailto:loomi@morningpm.com">loomi@morningpm.com</a>
          </p>
          
          <h3>1. Information We Collect</h3>
          <p>We collect only the information necessary to help you create, save, and enjoy family stories and artwork.</p>

          <h4>Account Information</h4>
          <p>When you sign up or log in, we may collect:</p>
          <ul>
            <li>Email address (for Email + Password login)</li>
            <li>Apple ID information (when using "Sign in with Apple")</li>
            <li>Google account information (when using "Sign in with Google")</li>
          </ul>
          <p>We do not receive or store your password. Authentication is handled securely by Firebase Authentication.</p>

          <h4>Story & Image Content</h4>
          <p>When you create stories or artwork in Loomi Stories:</p>
          <ul>
            <li>Your content is stored securely in our databases (Replit database + Firebase services)</li>
            <li>This allows your creations to sync across your devices</li>
          </ul>

          <h4>App Usage & Performance Data</h4>
          <p>We collect anonymous app usage data to improve Loomi Stories. This includes:</p>
          <ul>
            <li>Which features are used</li>
            <li>App performance and crash reports</li>
          </ul>
          <p>This is processed through:</p>
          <ul>
            <li>Firebase Analytics</li>
            <li>Firebase Crashlytics</li>
          </ul>

          <h4>Subscription Information</h4>
          <p>If you subscribe, basic purchase and account status details are processed through:</p>
          <ul>
            <li>RevenueCat</li>
          </ul>
          <p>We do not store or have access to your full payment details.</p>
          
          <h3>2. How We Use Your Information</h3>
          <p>We use your information to:</p>
          <ul>
            <li>Create and maintain your account</li>
            <li>Save and display your stories and artwork</li>
            <li>Improve app performance and reliability</li>
            <li>Manage subscriptions and billing</li>
            <li>Provide customer support</li>
          </ul>
          <p>We do not:</p>
          <ul>
            <li>Sell your personal information</li>
            <li>Share your data with advertisers</li>
            <li>Track you across other apps or websites</li>
          </ul>
          
          <h3>3. Who We Share Information With</h3>
          <p>We only share information with service providers who help us run Loomi Stories:</p>
          
          <div className="overflow-x-auto my-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-2 pr-4 font-bold">Service</th>
                  <th className="py-2 pr-4 font-bold">Purpose</th>
                  <th className="py-2 font-bold">Privacy Policy</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4">Firebase (Google)</td>
                  <td className="py-2 pr-4">Authentication, analytics, crash reporting</td>
                  <td className="py-2 text-primary">View Policy</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4">RevenueCat</td>
                  <td className="py-2 pr-4">Subscription validation & billing</td>
                  <td className="py-2 text-primary">View Policy</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4">Replit</td>
                  <td className="py-2 pr-4">Database storage</td>
                  <td className="py-2 text-primary">View Policy</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4">OpenAI (ChatGPT API)</td>
                  <td className="py-2 pr-4">AI text/image generation</td>
                  <td className="py-2 text-primary">View Policy</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>These providers must use your information only to support Loomi Stories and are required to protect it.</p>
          
          <h3>4. Data Security</h3>
          <p>We use standard security practices, such as:</p>
          <ul>
            <li>Encrypted data transmission (HTTPS/TLS)</li>
            <li>Restricted access to stored data</li>
            <li>Secure authentication services</li>
          </ul>
          <p>While no system can be 100% secure, we continually work to enhance protection.</p>
          
          <h3>5. Your Rights & Controls</h3>
          <p>You can:</p>
          <ul>
            <li>Access your account and content at any time</li>
            <li>Update your information</li>
            <li>Request deletion of your account and all associated data</li>
          </ul>
          <p>
            To request deletion, please email: <a href="mailto:loomi@morningpm.com">loomi@morningpm.com</a> with the subject line: Delete My Loomi Stories Account
          </p>
          <p>We will permanently remove your data within a reasonable timeframe.</p>

          <h3>6. Children's Privacy</h3>
          <p>Loomi Stories is family-focused, but:</p>
          <ul>
            <li>The app is not intended for children under 13 without parent or guardian supervision</li>
            <li>Parents/guardians are responsible for account creation and oversight</li>
            <li>We do not knowingly collect personal information directly from children without parental consent</li>
          </ul>

          <h3>7. Changes to This Policy</h3>
          <p>We may update this Privacy Policy from time to time. If we make significant changes, we will notify users in-app or by email.</p>

          <h3>8. Contact Us</h3>
          <p>Good Morning Product Manager LLC</p>
          <p>Email: <a href="mailto:loomi@morningpm.com">loomi@morningpm.com</a></p>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border">
          <a href="https://apps.apple.com/ca/app/loomi-stories/id6754125616" target="_blank" rel="noopener noreferrer">
            <Button className="rounded-full bg-primary text-white">Download the App</Button>
          </a>
        </div>
      </div>
    </Layout>
  );
}
