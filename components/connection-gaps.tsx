import { Card, CardContent } from "@/components/ui/card"
import { Heart, MessageCircle, Clock, Users } from "lucide-react"

export default function ConnectionGaps() {
  const gaps = [
    {
      icon: Heart,
      title: "The Intimacy Gap",
      problem: '"I want more physical affection but don\'t want to seem needy"',
      solution: "AI translates your private desires into gentle partner nudges",
      color: "coral",
    },
    {
      icon: MessageCircle,
      title: "The Communication Gap",
      problem: '"I wish they would just know I need support without me having to ask"',
      solution: "Your partner receives emotionally intelligent suggestions",
      color: "teal",
    },
    {
      icon: Clock,
      title: "The Quality Time Gap",
      problem: '"We\'re roommates managing life, not lovers connecting"',
      solution: "AI recognizes when you need connection and creates opportunities",
      color: "slate",
    },
    {
      icon: Users,
      title: "The Understanding Gap",
      problem: '"They love me but don\'t understand how I receive love"',
      solution: "Personalized insights based on your unique love language",
      color: "coral",
    },
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case "coral":
        return "from-coral-50 to-coral-100 border-coral-200"
      case "teal":
        return "from-teal-50 to-teal-100 border-teal-200"
      case "slate":
        return "from-slate-50 to-slate-100 border-slate-200"
      default:
        return "from-gray-50 to-gray-100 border-gray-200"
    }
  }

  const getIconColor = (color: string) => {
    switch (color) {
      case "coral":
        return "text-coral-500"
      case "teal":
        return "text-teal-600"
      case "slate":
        return "text-slate-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Bridge the Connection Gaps</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Every relationship has invisible gaps between what you need and what your partner naturally provides.
              RelationshipOS makes these needs visible—safely and privately.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {gaps.map((gap, index) => {
              const IconComponent = gap.icon
              return (
                <Card
                  key={index}
                  className={`bg-gradient-to-br ${getColorClasses(gap.color)} hover:shadow-lg transition-shadow`}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <IconComponent className={`w-6 h-6 ${getIconColor(gap.color)}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">{gap.title}</h3>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-white/60 rounded-lg p-4">
                        <p className="text-slate-700 italic text-sm mb-2">The Problem:</p>
                        <p className="text-slate-800 font-medium">{gap.problem}</p>
                      </div>

                      <div className="bg-white/80 rounded-lg p-4">
                        <p className="text-slate-700 italic text-sm mb-2">How RelationshipOS Helps:</p>
                        <p className="text-slate-800">{gap.solution}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
