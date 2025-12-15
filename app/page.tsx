"use client";

import { useState } from "react";
import { Mic, Zap, Droplet, Archive, Check, Sparkles } from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: Add actual email submission logic
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">
      {/* Header */}
      <header className="pt-8 pb-16 text-center">
        <h1 className="text-lg font-semibold tracking-wide">Mind Archive</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 pb-20">
        {/* Microphone Icon with Glow */}
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl scale-150"></div>
          <div className="relative bg-white rounded-full p-8 shadow-2xl">
            <Mic className="w-12 h-12 text-black" strokeWidth={2} />
          </div>
        </div>

        {/* Hero Text */}
        <div className="text-center mb-12 max-w-3xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Your Mind, Decoupled.
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            The first voice-driven AI task manager for high performers.
            <br />
            Capture thoughts instantly, achieve unparalleled focus.
          </p>
        </div>

        {/* Email Capture Form */}
        <div className="w-full max-w-md mb-16">
          <p className="text-center text-sm text-gray-400 mb-4">
            Join the waiting list for exclusive early access.
          </p>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 transition"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isSubmitting ? "Submitting..." : "Secure My Spot"}
              </button>
            </form>
          ) : (
            <div className="text-center py-3 px-6 bg-white/10 rounded-lg border border-white/20">
              <p className="text-green-400 font-semibold">
                ✓ Thanks! You&apos;re on the list.
              </p>
            </div>
          )}
        </div>

        {/* Why Join Section */}
        <div className="w-full max-w-4xl mb-16">
          <h3 className="text-2xl font-bold text-center mb-10">Why Join?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <Zap className="w-12 h-12 text-gray-400" strokeWidth={1.5} />
              </div>
              <p className="font-semibold">Instant Capture.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <Droplet className="w-12 h-12 text-gray-400" strokeWidth={1.5} />
              </div>
              <p className="font-semibold">Mental Clarity.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <Archive className="w-12 h-12 text-gray-400" strokeWidth={1.5} />
              </div>
              <p className="font-semibold">Intelligent Structure.</p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="w-full max-w-md">
          <h3 className="text-2xl font-bold text-center mb-8">
            Don&apos;t Get Left Behind.
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <Check className="w-5 h-5 text-white" strokeWidth={3} />
              </div>
              <p className="text-gray-300">Priority Beta Access</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <Check className="w-5 h-5 text-white" strokeWidth={3} />
              </div>
              <p className="text-gray-300">Direct Roadmap Input</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <Check className="w-5 h-5 text-white" strokeWidth={3} />
              </div>
              <p className="text-gray-300">Lifetime Early-Adopter Pricing</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-500">
        <p>
          © 2025 Mind Archive. All rights reserved.{" "}
          <a href="/privacy-policy" className="underline hover:text-gray-300 transition">
            Privacy Policy
          </a>
        </p>
      </footer>

      {/* Decorative Sparkle - Bottom Right */}
      <div className="fixed bottom-8 right-8 opacity-50">
        <Sparkles className="w-16 h-16 text-white/30" strokeWidth={1} />
      </div>
    </div>
  );
}
