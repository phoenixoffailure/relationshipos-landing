"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Shield,
  Heart,
  MessageCircle,
  Users,
  Lock,
  Eye,
  Zap,
  Instagram,
  Youtube,
  Twitter,
  Brain,
  Target,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
// Import your components (you'll need to create these)
// import TestimonialCarousel from "@/components/TestimonialCarousel"
// import TrustIndicators from "@/components/trust-indicators"
// import ConnectionGaps from "@/components/connection-gaps"

export default function LandingPage() {
  const [email, setEmail] = useState('')
  const [partnerEmail, setPartnerEmail] = useState('')
  const [connectionGap, setConnectionGap] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSignup = async (e: React.FormEvent, source: string = 'landing') => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          partnerEmail: partnerEmail || null,
          connectionGap: connectionGap || null,
          source
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSuccess(true)
        setMessage('🎉 Successfully joined the beta! Look out for an email when your spot opens up!')
        setEmail('')
        setPartnerEmail('')
        setConnectionGap('')
      } else {
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setMessage('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleHeroSignup = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      setMessage('Please enter your email address')
      return
    }
    handleSignup(e, 'hero-button')
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-50 to-stone-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.05),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,113,133,0.05),transparent_50%)] pointer-events-none" />

        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8 flex justify-center">
              <div className="text-3xl font-bold text-teal-600">RelationshipOS</div>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Your Private AI Companion for <span className="text-teal-600">Deeper Connections</span>
            </h1>

            <p className="text-xl lg:text-2xl text-slate-600 mb-8 leading-relaxed">
              Each person reflects privately. Your relationship grows together.
              <br />
              <span className="text-slate-500">No secrets shared, only insights gained.</span>
            </p>

            {/* Hero Form */}
            <div className="max-w-md mx-auto mb-8">
              <form onSubmit={handleHeroSignup} className="flex flex-col gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-3 text-lg rounded-full bg-white border-slate-300"
                  required
                />
                <Button
                  type="submit"
                  disabled={loading}
                  size="lg"
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  {loading ? 'Joining...' : 'Join Private Beta - Limited Spots'}
                </Button>
              </form>
              {message && (
                <p className={`mt-3 text-sm ${success ? 'text-green-600' : 'text-red-600'}`}>
                  {message}
                </p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/privacy">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-300 text-slate-700 px-8 py-4 text-lg rounded-full hover:bg-slate-50 bg-transparent"
                >
                  See How Privacy Works
                </Button>
              </Link>
            </div>

            <div className="text-center mb-6">
              <Badge variant="secondary" className="bg-coral-100 text-coral-700 px-4 py-2">
                🔥 Less than 157 spots left
              </Badge>
            </div>

            <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg border border-slate-200 mb-8">
              <Shield className="w-6 h-6 text-teal-600" />
              <div className="text-left">
                <p className="text-slate-800 font-semibold text-sm">100% Private & Secure</p>
                <p className="text-slate-600 text-xs">Your secrets stay yours. Zero data selling, ever.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators - Placeholder */}
      <section className="py-8 bg-white border-b border-stone-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-8 opacity-60">
            <span className="text-sm text-slate-500"></span>
            <span className="text-sm text-slate-600 font-medium"></span>
            <span className="text-sm text-slate-600 font-medium"></span>
            <span className="text-sm text-slate-600 font-medium"></span>
          </div>
        </div>
      </section>

      {/* Privacy Promise */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-12">Privacy-First by Design</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <Lock className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">No Secrets Shared</h3>
                <p className="text-slate-600 text-sm">Without your explicit permission</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-coral-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-coral-500" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">End-to-End Protection</h3>
                <p className="text-slate-600 text-sm">Your data is always protected</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                  <MessageCircle className="w-8 h-8 text-slate-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">AI Translates Insights</h3>
                <p className="text-slate-600 text-sm">Not raw emotions or confessions</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <Eye className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">GDPR Compliant</h3>
                <p className="text-slate-600 text-sm">Full control over your data</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connection Gaps - Placeholder */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-12">Bridge the Connection Gaps</h2>
            <p className="text-xl text-slate-600 mb-8">The unspoken barriers that keep relatinships apart</p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-slate-800 mb-3">"They never seem to understand what I need"</h3>
                  <p className="text-slate-600 text-sm">AI helps translate your needs into actionable suggestions for your partner</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-slate-800 mb-3">"I want to help but don't know how"</h3>
                  <p className="text-slate-600 text-sm">Get personalized guidance on how to support your relationships better</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-slate-800 mb-3">"We keep having the same issues"</h3>
                  <p className="text-slate-600 text-sm">AI helps break negative cycles with proven relationship strategies</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">How It Works</h2>
            <p className="text-xl text-slate-600 mb-12">Three simple steps to stronger connection</p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-coral-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-8 h-8 text-coral-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">1. You Reflect Privately</h3>
                  <p className="text-slate-600">
                    Share your thoughts, feelings, and concerns with AI in complete privacy. No judgment, just
                    AI-powered understanding and support.
                  </p>
                </div>
                {/* Connection line */}
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-teal-200" />
              </div>

              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">2. AI Creates Insights</h3>
                  <p className="text-slate-600">
                    Our AI analyzes patterns and creates personalized suggestions based on relationship research and
                    your unique connection style.
                  </p>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-teal-200" />
              </div>

              <div>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-slate-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">3. Safe Nudges Shared</h3>
                  <p className="text-slate-600">
                    Your partner receives AI-generated, emotionally intelligent suggestions—never your raw thoughts or
                    confessions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beta Signup */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-gradient-to-br from-teal-50 to-coral-50 border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-coral-100 text-coral-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                    <span className="w-2 h-2 bg-coral-500 rounded-full animate-pulse"></span>
                    Only 150 Couples Will Be Accepted
                  </div>
                  <h2 className="text-3xl font-bold text-slate-800 mb-4">Join the Private Beta</h2>
                  <p className="text-lg text-slate-600 mb-2">A private, AI-powered system for better relationships — romantic, familial, friendship, or professional.</p>
                  <p className="text-sm text-slate-500">
                    Beta members get lifetime founder pricing + direct access to our team
                  </p>
                </div>

                <form onSubmit={(e) => handleSignup(e, 'bottom-form')} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Your Email</label>
                      <Input
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-white border-slate-200 focus:border-teal-500 focus:ring-teal-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Partner's Email (Optional)
                      </label>
                      <Input
                        type="email"
                        placeholder="partner@example.com"
                        value={partnerEmail}
                        onChange={(e) => setPartnerEmail(e.target.value)}
                        className="bg-white border-slate-200 focus:border-teal-500 focus:ring-teal-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      What connection gap do you hope RelationshipOS can help bridge?
                    </label>
                    <Textarea
                      placeholder="e.g., 'I want my partner to understand my need for quality time without me having to ask for it every time...'"
                      value={connectionGap}
                      onChange={(e) => setConnectionGap(e.target.value)}
                      className="bg-white border-slate-200 focus:border-teal-500 focus:ring-teal-500 min-h-[100px]"
                    />
                  </div>

                  <Button 
                    type="submit"
                    disabled={loading}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
                  >
                    {loading ? 'Securing Your Spot...' : 'Secure My Beta Access'}
                  </Button>

                  {message && (
                    <p className={`text-center ${success ? 'text-green-600' : 'text-red-600'}`}>
                      {message}
                    </p>
                  )}

                  <div className="text-center space-y-2">
                    <p className="text-sm text-slate-600">
                      🎁 <strong>Beta Bonus:</strong> Lifetime 50% discount + exclusive founder community access
                    </p>
                    <p className="text-xs text-slate-500">
                      Expected beta launch: Septemeber 2025 • No spam, unsubscribe anytime • Zero data selling, ever
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div className="mb-6 md:mb-0">
                <div className="text-2xl font-bold text-white">RelationshipOS</div>
              </div>

              <div className="flex items-center gap-6">
                <Instagram className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
                <Youtube className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>

            <div className="text-center mb-8">
              <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
                <span className="text-teal-400">Privacy</span>
                <span className="text-coral-400">Growth</span>
                <span className="text-slate-300">Connection</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400 mb-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="https://relationshipos.app/login" className="hover:text-white transition-colors">
                Login
              </a>
              <a href="mailto:social@relationshipos.app" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>

            <div className="text-center text-sm text-slate-500">
              <p>&copy; 2025 RelationshipOS. Building the future of connection, one insight at a time.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}