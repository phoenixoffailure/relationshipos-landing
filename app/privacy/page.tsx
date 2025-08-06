// app/privacy/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Lock,
  Eye,
  MessageCircle,
  Server,
  UserCheck,
  FileText,
  ArrowLeft,
  CheckCircle,
  AlertTriangle,
  Heart
} from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-white border-b border-stone-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <ArrowLeft className="w-5 h-5 text-slate-600" />
              <span className="text-slate-600">Back to Home</span>
            </Link>
            <div className="text-2xl font-bold text-teal-600">RelationshipOS</div>
            <Link href="mailto:social@relationshipos.app">
              <Button variant="outline" size="sm">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Privacy-First by Design
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6">
              Your Privacy is <span className="text-teal-600">Sacred</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              We built RelationshipOS with one fundamental principle: your private thoughts and feelings should remain exactly that—private. Here's exactly how we protect your most intimate reflections.
            </p>
            <Badge variant="secondary" className="bg-coral-100 text-coral-700 px-6 py-3 text-base">
              Last updated: August 2025
            </Badge>
          </div>
        </div>
      </section>

      {/* Core Privacy Principles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Our Privacy Commitment</h2>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <Card className="bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mb-6">
                    <Lock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">No Secrets Shared</h3>
                  <p className="text-slate-600 mb-4">
                    Your private journal entries and personal reflections are never directly shared with your partner. Only AI-generated insights and suggestions are shared.
                  </p>
                  <div className="bg-white/60 rounded-lg p-4">
                    <p className="text-sm text-slate-700 font-medium">What you write: "I feel unheard when..."</p>
                    <p className="text-sm text-slate-600 mt-2">What your partner sees: "Try active listening exercises this week"</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-coral-50 to-coral-100 border-coral-200">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-coral-500 rounded-full flex items-center justify-center mb-6">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Zero Data Selling</h3>
                  <p className="text-slate-600 mb-4">
                    We do NOT sell your data to third parties. Your private information is not a product—it's sacred and stays with you.
                  </p>
                  <div className="bg-white/60 rounded-lg p-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <p className="text-sm text-slate-700">No identifying information ever sold</p>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <p className="text-sm text-slate-700">Privacy is our priority</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-slate-200">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center mb-6">
                    <UserCheck className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">You Control Everything</h3>
                  <p className="text-slate-600 mb-4">
                    Export your data anytime or delete your account completely. Your relationship, your rules.
                  </p>
                  <div className="bg-white/60 rounded-lg p-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-slate-600" />
                      <p className="text-sm text-slate-700">One-click data export</p>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <CheckCircle className="w-4 h-4 text-slate-600" />
                      <p className="text-sm text-slate-700">Complete account deletion</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How Privacy Works Technically */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">How Privacy Protection Works</h2>
            
            <div className="space-y-8">
              <Card className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Server className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-3">Secure, Private-by-Design</h3>
                      <p className="text-slate-600 mb-4">
                       Your journal entries are stored securely on our servers so we can analyze patterns over time — but they’re only visible to you.
                      </p>
                      <div className="bg-slate-50 rounded-lg p-4">
                        <p className="text-sm text-slate-700 font-medium mb-2">Peace of mind details:</p>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• You can delete whenever</li>
                          <li>• All personal idnetifiers removed before processing.</li>
                          <li>• Future Zero-knowledge architecture in developement</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-coral-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-coral-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-3">AI Processing Boundary</h3>
                      <p className="text-slate-600 mb-4">
                        Our AI analyzes your encrypted thoughts to understand patterns and emotions, but it never shares your actual words or specific situations. It translates your needs into general relationship guidance.
                      </p>
                      <div className="bg-slate-50 rounded-lg p-4">
                        <p className="text-sm text-slate-700 font-medium mb-2">Example Translation:</p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">Private</span>
                            <span className="text-sm text-slate-600">"I'm starting to feel like we can't talk anymore..."</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Shared</span>
                            <span className="text-sm text-slate-600">AI suggests: "Take a moment to check in and have a meaningful convo."</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Eye className="w-6 h-6 text-slate-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-3">Transparent Data Usage</h3>
                      <p className="text-slate-600 mb-4">
                        We only use anonymized, aggregated patterns to improve our AI—never your personal content. You can opt out of any data usage for AI training at any time.
                      </p>
                      <div className="bg-slate-50 rounded-lg p-4">
                        <p className="text-sm text-slate-700 font-medium mb-2">What we analyze for improvements:</p>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• General communication patterns (anonymized)</li>
                          <li>• Feature usage statistics</li>
                          <li>• Success metrics for relationship insights</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Data Rights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Your Data Rights</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-teal-50 to-white border-teal-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-slate-800 mb-4">What You Can Do</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-600" />
                      <span className="text-slate-700">Export all your data</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-600" />
                      <span className="text-slate-700">Delete specific journal entries</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-600" />
                      <span className="text-slate-700">Permanently delete your account</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-600" />
                      <span className="text-slate-700">Opt out of AI training data</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-600" />
                      <span className="text-slate-700">Review what data we have about you</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-coral-50 to-white border-coral-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-slate-800 mb-4">GDPR Compliance</h3>
                  <p className="text-slate-600 mb-4">
                    We're fully compliant with GDPR, CCPA, and other privacy regulations worldwide.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-coral-500" />
                      <span className="text-slate-700">Right to access your data</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-coral-500" />
                      <span className="text-slate-700">Right to correct inaccuracies</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-coral-500" />
                      <span className="text-slate-700">Right to deletion (right to be forgotten)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-coral-500" />
                      <span className="text-slate-700">Right to data portability</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center"></h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2"></h3>
                <p className="text-slate-600 text-sm"></p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-coral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Server className="w-8 h-8 text-coral-500" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2"></h3>
                <p className="text-slate-600 text-sm"></p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-slate-600" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2"></h3>
                <p className="text-slate-600 text-sm"></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Disclaimers */}
      <section className="py-16 bg-yellow-50 border-y border-yellow-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Important Disclaimers</h2>
                <div className="space-y-4 text-slate-700">
                  <p>
                    <strong>Not a replacement for professional therapy:</strong> RelationshipOS provides AI-powered relationship support and insights, not clinical therapy or medical advice. If you're experiencing serious relationship issues, depression, or mental health concerns, please consult with a licensed professional.
                  </p>
                  <p>
                    <strong>Emergency situations:</strong> If you or your partner are in immediate danger, please contact emergency services or a crisis hotline immediately. RelationshipOS is not designed for crisis intervention.
                  </p>
                  <p>
                    <strong>Beta limitations:</strong> During our beta phase, some privacy features may be in development. Setting the industry standard for privacy while providing high quality insights is our top priority. We look forward to partnering with industry leaders to ensure that vision comes to life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact and Support */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Questions About Privacy? Want to Help?</h2>
            <p className="text-xl text-slate-600 mb-8">
              We're here to help you understand exactly how we protect your relationship data.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="mailto:social@relationshipos.app">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4">
                  Contact Privacy Team
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" size="lg" className="px-8 py-4">
                  Back to Home
                </Button>
              </Link>
            </div>
            
            <p className="text-sm text-slate-500 mt-6">
              Privacy questions? Email us at <a href="mailto:social@relationshipos.app" className="text-teal-600 hover:underline">social@relationshipos.app</a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-5 h-5 text-coral-400" />
              <span className="text-xl font-bold">RelationshipOS</span>
            </div>
            <p className="text-slate-400 text-sm">
              Building the future of connection with privacy and trust at our core.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}