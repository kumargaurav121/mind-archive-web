import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold">Privacy Policy & Terms of Service</h1>
          <p className="text-gray-400 mt-2">Last Updated: December 15, 2025</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-invert prose-lg max-w-none">
          {/* Privacy Policy */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-white">A. Privacy Policy</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-white">1. Introduction</h3>
                <p className="text-gray-300 leading-relaxed">
                  Welcome to Mind Archive (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are
                  committed to protecting your privacy and ensuring your personal information is
                  handled securely and responsibly. This Privacy Policy explains how we collect,
                  use, and protect your data when you use our mobile application.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3 text-white">
                  2. Information We Collect
                </h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    <strong className="text-white">Account Information:</strong> When you create an
                    account, we collect your email address and name. If you sign in using a
                    third-party service (like Google or Apple), we collect the information you
                    authorize them to share with us.
                  </p>
                  <p>
                    <strong className="text-white">User Content (Your &quot;Mind Archive&quot;):</strong>{" "}
                    This is the core of our service. We collect the tasks, notes, and voice
                    recordings you create.
                  </p>
                  <p>
                    <strong className="text-white">Voice Data:</strong> When you use our voice
                    capture feature, the audio file is sent to our servers and processed by
                    third-party AI providers (like OpenAI) to convert your speech into text.
                  </p>
                  <p>
                    <strong className="text-white">Text Data:</strong> The transcribed text is stored
                    and analyzed by AI models to extract and organize your tasks.
                  </p>
                  <p>
                    <strong className="text-white">Usage Data:</strong> We may collect anonymous
                    information about how you interact with the app, such as feature usage, crash
                    logs, and device type. This helps us improve the app&apos;s performance and user
                    experience.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3 text-white">
                  3. How We Use Your Information
                </h3>
                <p className="text-gray-300 mb-3">
                  We use your information for the following purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>To provide and maintain the Mind Archive service.</li>
                  <li>To process your audio recordings into structured text tasks using AI.</li>
                  <li>To authenticate your account and secure your data.</li>
                  <li>
                    To communicate with you about app updates, security alerts, or support requests.
                  </li>
                  <li>To analyze usage patterns and improve the functionality of our app.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3 text-white">
                  4. How Your Data is Stored and Protected
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Your data, including your User Content, is stored securely in the cloud using
                  industry-standard encryption. Our backend services are hosted by reputable
                  providers (e.g., Supabase). We take reasonable measures to protect your data from
                  unauthorized access, loss, or misuse.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3 text-white">
                  5. Sharing Your Information
                </h3>
                <p className="text-gray-300 mb-3">
                  We do not sell your personal information to third parties. We only share data with
                  trusted third-party service providers who assist us in operating our app, such as:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>
                    <strong className="text-white">AI & Transcription Services:</strong> Providers
                    like OpenAI process your voice and text data to enable the app&apos;s core
                    functionality. They are bound by data processing agreements to protect your
                    information.
                  </li>
                  <li>
                    <strong className="text-white">Cloud Hosting Providers:</strong> To store your
                    data securely.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3 text-white">
                  6. Your Rights (GDPR, CCPA, etc.)
                </h3>
                <p className="text-gray-300 mb-3">
                  Depending on your location, you may have the following rights regarding your data:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>
                    <strong className="text-white">Access:</strong> You can request a copy of the
                    personal data we hold about you.
                  </li>
                  <li>
                    <strong className="text-white">Correction:</strong> You can ask us to correct
                    inaccurate or incomplete data.
                  </li>
                  <li>
                    <strong className="text-white">Deletion:</strong> You have the right to request
                    that we delete your account and all associated data from our servers (&quot;Right
                    to be Forgotten&quot;). You can do this from the &quot;Profile&quot; section within the app.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3 text-white">7. Children&apos;s Privacy</h3>
                <p className="text-gray-300 leading-relaxed">
                  Mind Archive is not intended for use by anyone under the age of 13. We do not
                  knowingly collect personal information from children under 13.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3 text-white">
                  8. Changes to This Policy
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We may update our Privacy Policy from time to time. We will notify you of any
                  changes by posting the new policy on this page. You are advised to review this
                  Privacy Policy periodically for any changes.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3 text-white">9. Contact Us</h3>
                <p className="text-gray-300 leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at{" "}
                  <a
                    href="mailto:support@mindarchive.app"
                    className="text-white underline hover:text-gray-300"
                  >
                    support@mindarchive.app
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>

          {/* Terms of Service */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-white border-t border-white/10 pt-16">
              B. Terms of Service & Fair Use Policy
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-white">1. Acceptance of Terms</h3>
                <p className="text-gray-300 leading-relaxed">
                  By accessing and using the Mind Archive application, you agree to be bound by these
                  Terms of Service. If you do not agree with any part of these terms, you may not use
                  our service.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3 text-white">2. Description of Service</h3>
                <p className="text-gray-300 leading-relaxed">
                  Mind Archive is a productivity tool that uses artificial intelligence to transcribe
                  voice notes and organize user tasks.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3 text-white">3. Fair Use Policy</h3>
                <p className="text-gray-300 mb-3">
                  To ensure a high-quality experience for all users and to manage the costs associated
                  with AI processing, we have established this Fair Use Policy.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>
                    <strong className="text-white">Free Tier:</strong> Users on the free plan are
                    granted a limited number of &quot;AI Captures&quot; (voice-to-text processings) per day. The
                    exact limit is specified within the app.
                  </li>
                  <li>
                    <strong className="text-white">Premium Tier:</strong> Premium subscribers have a
                    significantly higher allowance, designed to meet the needs of power users.
                    However, we reserve the right to limit or suspend accounts that engage in
                    excessive or abusive usage that negatively impacts the service for others (e.g.,
                    automated script access, thousands of requests per day).
                  </li>
                  <li>
                    <strong className="text-white">Prohibited Content:</strong> You may not use Mind
                    Archive to capture, store, or process illegal, harmful, threatening, abusive,
                    harassing, defamatory, or otherwise objectionable content.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3 text-white">4. User Accounts</h3>
                <p className="text-gray-300 leading-relaxed">
                  You are responsible for maintaining the confidentiality of your account and
                  password. You agree to accept responsibility for all activities that occur under
                  your account.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3 text-white">5. Termination</h3>
                <p className="text-gray-300 leading-relaxed">
                  We reserve the right to terminate or suspend your account and access to the service
                  immediately, without prior notice or liability, if you breach these Terms.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3 text-white">6. Limitation of Liability</h3>
                <p className="text-gray-300 leading-relaxed">
                  In no event shall Mind Archive or its developers be liable for any indirect,
                  incidental, special, consequential, or punitive damages, including without
                  limitation, loss of profits, data, use, goodwill, or other intangible losses,
                  resulting from your access to or use of or inability to access or use the service.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3 text-white">7. Governing Law</h3>
                <p className="text-gray-300 leading-relaxed">
                  These Terms shall be governed and construed in accordance with the laws of the
                  United States, without regard to its conflict of law provisions.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-sm text-gray-500">
        <p>© 2025 Mind Archive. All rights reserved.</p>
      </footer>
    </div>
  );
}
