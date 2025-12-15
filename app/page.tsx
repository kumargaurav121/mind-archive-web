"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Mic, Zap, Droplet, Archive, Check, Sparkles } from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState("");
  const [resendCooldown, setResendCooldown] = useState(0);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch(`${API_URL}/api/waitlist/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone: phone || undefined }),
      });

      const data = await response.json();

      if (!data.success) {
        setError(data.error || "Failed to register");
        if (data.retryAfter) {
          setResendCooldown(data.retryAfter);
        }
        return;
      }

      setShowOtpForm(true);
    } catch {
      setError("Network error. Please check if the backend is running.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch(`${API_URL}/api/waitlist/verify-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp }),
      });

      const data = await response.json();

      if (!data.success) {
        setError(data.error || "Failed to verify OTP");
        return;
      }

      setVerified(true);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResendOtp = async () => {
    if (resendCooldown > 0) return;

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch(`${API_URL}/api/waitlist/resend-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!data.success) {
        setError(data.error || "Failed to resend OTP");
        if (data.retryAfter) {
          setResendCooldown(data.retryAfter);
        }
        return;
      }

      setResendCooldown(120); // 2 minutes cooldown
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Countdown timer for resend cooldown
  useEffect(() => {
    if (resendCooldown <= 0) return;

    const timer = setInterval(() => {
      setResendCooldown((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [resendCooldown]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">
      {/* Header */}
      <header className="pt-8 pb-16 text-center">
        <h1 className="text-lg font-semibold tracking-wide">Mind Archive</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 pb-20">
        {/* Microphone Icon with Animated Glow */}
        <div className="relative mb-12">
          {/* Outer pulsing ring 1 */}
          <div className="absolute inset-0 bg-white/10 rounded-full animate-pulse-ring-1 scale-150"></div>

          {/* Outer pulsing ring 2 */}
          <div className="absolute inset-0 bg-white/10 rounded-full animate-pulse-ring-2 scale-125"></div>

          {/* Breathing glow */}
          <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl scale-150 animate-breathe"></div>

          {/* Main button */}
          <div className="relative bg-white rounded-full p-8 shadow-2xl animate-float">
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

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg">
              <p className="text-red-400 text-sm text-center">{error}</p>
            </div>
          )}

          {!verified ? (
            !showOtpForm ? (
              // Registration Form
              <form onSubmit={handleRegister} className="space-y-3">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 transition"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 transition"
                />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone Number (optional, E.164 format)"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 transition"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Secure My Spot"}
                </button>
              </form>
            ) : (
              // OTP Verification Form
              <div className="space-y-4">
                <div className="text-center mb-4">
                  <p className="text-sm text-gray-400">
                    We&apos;ve sent a 6-digit code to
                  </p>
                  <p className="text-white font-semibold">{email}</p>
                </div>
                <form onSubmit={handleVerifyOtp} className="space-y-3">
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                    placeholder="Enter 6-digit code"
                    required
                    maxLength={6}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white text-center text-2xl tracking-widest placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 transition"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting || otp.length !== 6}
                    className="w-full px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Verifying..." : "Verify Code"}
                  </button>
                </form>
                <div className="text-center">
                  <button
                    onClick={handleResendOtp}
                    disabled={resendCooldown > 0 || isSubmitting}
                    className="text-sm text-gray-400 hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {resendCooldown > 0
                      ? `Resend code in ${resendCooldown}s`
                      : "Resend code"}
                  </button>
                </div>
              </div>
            )
          ) : (
            <div className="text-center py-6 px-6 bg-white/10 rounded-lg border border-white/20">
              <Check className="w-12 h-12 text-green-400 mx-auto mb-3" strokeWidth={2} />
              <p className="text-green-400 font-semibold text-lg mb-2">
                You&apos;re Verified!
              </p>
              <p className="text-gray-400 text-sm">
                Welcome to the Mind Archive waitlist. We&apos;ll be in touch soon.
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
              <div className="shrink-0">
                <Check className="w-5 h-5 text-white" strokeWidth={3} />
              </div>
              <p className="text-gray-300">Priority Beta Access</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="shrink-0">
                <Check className="w-5 h-5 text-white" strokeWidth={3} />
              </div>
              <p className="text-gray-300">Direct Roadmap Input</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="shrink-0">
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
          <Link href="/privacy-policy" className="underline hover:text-gray-300 transition">
            Privacy Policy
          </Link>
        </p>
      </footer>

      {/* Decorative Sparkle - Bottom Right */}
      <div className="fixed bottom-8 right-8 opacity-50">
        <Sparkles className="w-16 h-16 text-white/30" strokeWidth={1} />
      </div>
    </div>
  );
}
