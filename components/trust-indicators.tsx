import { Shield, Lock, Eye, Award, CheckCircle } from "lucide-react"

export default function TrustIndicators() {
  return (
    <section className="py-12 bg-gradient-to-r from-teal-50 to-coral-50 border-y border-slate-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Trusted by Relationship Experts</h3>
            <p className="text-slate-600">Built with privacy-first architecture and expert guidance</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <p className="font-semibold text-slate-800 text-sm">GDPR Compliant</p>
                <p className="text-slate-600 text-xs">EU privacy standards</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
              <div className="w-10 h-10 bg-coral-100 rounded-full flex items-center justify-center">
                <Lock className="w-5 h-5 text-coral-500" />
              </div>
              <div>
                <p className="font-semibold text-slate-800 text-sm">End-to-End Encrypted</p>
                <p className="text-slate-600 text-xs">Bank-level security</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
              <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                <Award className="w-5 h-5 text-slate-600" />
              </div>
              <div>
                <p className="font-semibold text-slate-800 text-sm">Expert Validated</p>
                <p className="text-slate-600 text-xs">Gottman Institute methods</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                <Eye className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <p className="font-semibold text-slate-800 text-sm">Zero Data Selling</p>
                <p className="text-slate-600 text-xs">Never monetized</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-600" />
                <span>Open Source Security</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-600" />
                <span>Regular Security Audits</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-600" />
                <span>Transparent Privacy Practices</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
