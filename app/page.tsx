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
import TestimonialCarousel from "@/components/TestimonialCarousel"
import TrustIndicators from "@/components/trust-indicators"
import ConnectionGaps from "@/components/connection-gaps"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-50 to-stone-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.05),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,113,133,0.05),transparent_50%)] pointer-events-none" />

        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8 flex justify-center">
              <Image src="/logo.svg" alt="RelationshipOS" width={300} height={90} className="h-16 w-auto" />
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Your Private AI Companion for <span className="text-teal-600">Deeper Love</span>
            </h1>

            <p className="text-xl lg:text-2xl text-slate-600 mb-8 leading-relaxed">
              Each partner reflects privately. Your relationship grows together.
              <br />
              <span className="text-slate-500">No secrets shared, only AI-generated insights gained.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Join Private Beta - Limited Spots
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-slate-300 text-slate-700 px-8 py-4 text-lg rounded-full hover:bg-slate-50 bg-transparent"
              >
                See How Privacy Works
              </Button>
            </div>

            <div className="text-center mb-6">
              <Badge variant="secondary" className="bg-coral-100 text-coral-700 px-4 py-2">
                🔥 Join 2,847+ couples on the waitlist
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

      <TrustIndicators />

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
                <h3 className="font-semibold text-slate-800 mb-2">End-to-End Encryption</h3>
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

      <ConnectionGaps />

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

      {/* Deep Dive: The Science Behind RelationshipOS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">The Research Behind RelationshipOS</h2>
              <p className="text-xl text-slate-600">
                Built on decades of relationship psychology research and cutting-edge AI
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mb-6">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Emotional Intelligence AI</h3>
                  <p className="text-slate-600 mb-4">
                    Our AI understands emotional context, attachment styles, and communication patterns to provide
                    supportive relationship insights based on established research.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-600" />
                      Sentiment analysis and emotional mapping
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-600" />
                      Pattern recognition in relationship dynamics
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-600" />
                      Personalized communication strategies
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-coral-50 to-coral-100 border-coral-200">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-coral-500 rounded-full flex items-center justify-center mb-6">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Connection Compatibility Analysis</h3>
                  <p className="text-slate-600 mb-4">
                    Inspired by research on how people express and receive affection, our AI helps you understand your
                    unique connection preferences and attachment patterns.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-coral-500" />
                      Personalized affection preference mapping
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-coral-500" />
                      Attachment style compatibility insights
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-coral-500" />
                      Tailored connection recommendations
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-slate-200">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center mb-6">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Relationship Dynamics Research</h3>
                  <p className="text-slate-600 mb-4">
                    Applies insights from research by John and Julie Gottman on what makes relationships succeed or fail
                    over time, translated into AI-powered support.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-slate-600" />
                      Conflict pattern detection and guidance
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-slate-600" />
                      Positive interaction ratio insights
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-slate-600" />
                      AI-generated repair attempt suggestions
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Preview */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">A Glimpse Inside</h2>
              <p className="text-xl text-slate-600">See how privacy and AI-powered connection work together</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <Card className="bg-gradient-to-br from-coral-50 to-coral-100 border-coral-200">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-3 h-3 bg-coral-500 rounded-full" />
                      <h3 className="text-lg font-semibold text-slate-800">Private Reflections</h3>
                      <Badge variant="secondary" className="ml-auto">
                        Only You
                      </Badge>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-white/80 rounded-lg p-4">
                        <p className="text-slate-700 font-medium mb-2">Emotional Journaling</p>
                        <p className="text-slate-600 text-sm">
                          Express your feelings with AI-powered emotional support
                        </p>
                      </div>
                      <div className="bg-white/80 rounded-lg p-4">
                        <p className="text-slate-700 font-medium mb-2">Conflict Processing</p>
                        <p className="text-slate-600 text-sm">Work through disagreements with AI guidance privately</p>
                      </div>
                      <div className="bg-white/80 rounded-lg p-4">
                        <p className="text-slate-700 font-medium mb-2">Connection Style Discovery</p>
                        <p className="text-slate-600 text-sm">Understand how you give and receive affection</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-3 h-3 bg-teal-500 rounded-full" />
                      <h3 className="text-lg font-semibold text-slate-800">AI-Generated Insights</h3>
                      <Badge variant="secondary" className="ml-auto">
                        Both Partners
                      </Badge>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-white/80 rounded-lg p-4">
                        <p className="text-slate-700 font-medium mb-2">Smart Partner Suggestions</p>
                        <p className="text-slate-600 text-sm">
                          {'"AI suggests: Try asking about their day with curiosity"'}
                        </p>
                      </div>
                      <div className="bg-white/80 rounded-lg p-4">
                        <p className="text-slate-700 font-medium mb-2">De-escalation Tools</p>
                        <p className="text-slate-600 text-sm">
                          {'"AI recommends: Take a 10-minute break and try this approach"'}
                        </p>
                      </div>
                      <div className="bg-white/80 rounded-lg p-4">
                        <p className="text-slate-700 font-medium mb-2">Connection Opportunities</p>
                        <p className="text-slate-600 text-sm">
                          {'"AI insight: Your partner values quality time together"'}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Perfect For Every Stage of Love</h2>
              <p className="text-xl text-slate-600">Whether you're dating, engaged, or married for decades</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-coral-100 rounded-full flex items-center justify-center mb-6">
                    <Heart className="w-6 h-6 text-coral-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">New Relationships</h3>
                  <p className="text-slate-600 mb-4">
                    Build healthy communication patterns from the start with AI-powered insights into each other's
                    needs.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-coral-500" />
                      Discover connection preferences together
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-coral-500" />
                      Navigate early conflicts with AI guidance
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-coral-500" />
                      Build emotional intimacy safely
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                    <Users className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Established Couples</h3>
                  <p className="text-slate-600 mb-4">
                    Break through communication barriers and rediscover connection with AI-powered relationship
                    insights.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-teal-600" />
                      Resolve recurring conflicts with AI support
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-teal-600" />
                      Reignite emotional connection
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-teal-600" />
                      Navigate life transitions together
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                    <Shield className="w-6 h-6 text-slate-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Couples in Crisis</h3>
                  <p className="text-slate-600 mb-4">
                    Create a safe space to work through difficult issues with AI-powered de-escalation support.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-slate-600" />
                      De-escalate heated arguments with AI tools
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-slate-600" />
                      Rebuild trust and understanding
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-slate-600" />
                      Find path forward together
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Outcome - Enhanced Carousel */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Grow Closer Without Growing Apart</h2>
            <p className="text-xl text-slate-600 mb-12">Real couples, real results with AI-powered support</p>

            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-slate-600">Everything you need to know about RelationshipOS</p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="safety-first" className="bg-stone-50 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-slate-800">
                  How is this different from couples therapy or relationship apps?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Unlike couples therapy, there's no judgment or awkward conversations. Unlike other relationship apps,
                  your private thoughts never become shared content. RelationshipOS creates a safe space for individual
                  reflection that translates into AI-powered relationship support—without exposing your vulnerabilities
                  or forcing difficult conversations before you're ready. Our AI provides supportive insights, not
                  clinical or therapeutic advice.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="privacy" className="bg-stone-50 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-slate-800">
                  How do you ensure my private thoughts stay private?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Your private reflections are encrypted and never shared directly with your partner. Our AI analyzes
                  patterns and emotions to create general insights and suggestions, but your specific words and
                  confessions remain completely private unless you explicitly choose to share them. We're building with
                  privacy-first architecture and plan to implement end-to-end encryption before launch. We never sell
                  your data, ever.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="ai-accuracy" className="bg-stone-50 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-slate-800">
                  How accurate is the AI in understanding relationships?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Our AI is trained on decades of publicly available relationship research and continuously learns from
                  anonymized patterns while respecting individual privacy. The AI provides supportive suggestions based
                  on research insights, not clinical decisions—you always maintain control over your relationship
                  choices. Our AI offers support and guidance, not professional therapeutic advice.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="research-disclaimer" className="bg-stone-50 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-slate-800">
                  What research is RelationshipOS based on?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  RelationshipOS is inspired by a range of relationship psychology research including publicly available
                  findings by Dr. Gary Chapman and the Gottman Institute. This application is not affiliated with or
                  endorsed by any of the researchers or institutions mentioned. Our AI translates research insights into
                  supportive suggestions, not clinical or therapeutic interventions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="both-partners" className="bg-stone-50 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-slate-800">
                  Do both partners need to use the app?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  While RelationshipOS works best when both partners participate, you can start alone. The AI will
                  provide insights about your communication style and suggest ways to improve your relationship
                  dynamics. When your partner joins, the AI-powered experience becomes more comprehensive and
                  collaborative.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="cost" className="bg-stone-50 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-slate-800">
                  How much will RelationshipOS cost?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  We're still finalizing pricing for our full launch. Beta participants will receive special founding
                  member pricing and early access to all features. Our goal is to make AI-powered relationship support
                  accessible to everyone—significantly more affordable than traditional couples therapy.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="therapy-replacement" className="bg-stone-50 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-slate-800">
                  Is this a replacement for couples therapy?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  RelationshipOS is designed to complement, not replace, professional therapy. Think of it as daily
                  relationship maintenance and growth—like a gym membership for your relationship powered by AI support.
                  For serious issues or trauma, we always recommend working with a licensed therapist alongside using
                  our platform. Our AI provides supportive insights, not clinical treatment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="data-usage" className="bg-stone-50 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-slate-800">
                  How is my data used to improve the AI?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  We use only anonymized, aggregated patterns to improve our AI—never your personal content or
                  identifiable information. You can opt out of data usage for AI training at any time. Your privacy and
                  trust are more important to us than AI improvements. We never sell your data to third parties, ever.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
                    2,847 couples already joined
                  </div>
                  <h2 className="text-3xl font-bold text-slate-800 mb-4">Join the Private Beta</h2>
                  <p className="text-lg text-slate-600 mb-2">We're accepting our final 153 founding couples.</p>
                  <p className="text-sm text-slate-500">
                    Beta members get lifetime founder pricing + direct access to our team
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Your Email</label>
                      <Input
                        type="email"
                        placeholder="you@example.com"
                        className="bg-white border-slate-200 focus:border-teal-500 focus:ring-teal-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Partner's Email (Optional)
                      </label>
                      <Input
                        type="email"
                        placeholder="partner@example.com"
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
                      className="bg-white border-slate-200 focus:border-teal-500 focus:ring-teal-500 min-h-[100px]"
                    />
                  </div>

                  <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
                    Secure My Beta Access
                  </Button>

                  <div className="text-center space-y-2">
                    <p className="text-sm text-slate-600">
                      🎁 <strong>Beta Bonus:</strong> Lifetime 50% discount + exclusive founder community access
                    </p>
                    <p className="text-xs text-slate-500">
                      Expected beta launch: March 2024 • No spam, unsubscribe anytime • Zero data selling, ever
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Disclaimer */}
      <section className="py-8 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Research Inspired By</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              RelationshipOS draws inspiration from decades of relationship psychology research, including publicly
              available findings by Dr. Gary Chapman on affection preferences, research by John and Julie Gottman on
              relationship dynamics, and attachment theory research. This application is not affiliated with, endorsed
              by, or licensed by any of the researchers, institutions, or organizations mentioned. Our AI provides
              supportive insights based on research principles, not clinical or therapeutic advice. All AI-generated
              suggestions are for informational and relationship enhancement purposes only.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div className="mb-6 md:mb-0">
                <Image
                  src="/logo.svg"
                  alt="RelationshipOS"
                  width={150}
                  height={45}
                  className="h-8 w-auto brightness-0 invert"
                />
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
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Login
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>

            <div className="text-center text-sm text-slate-500">
              <p>&copy; 2024 RelationshipOS. Building the future of love, one connection at a time.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
