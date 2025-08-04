"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, Users, Shield, MessageCircle, Sparkles, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    names: "Sarah & Mike",
    duration: "Together 3 years",
    quote:
      "It felt like couples therapy—without the tension. I could finally be honest about my needs without worrying about hurting Mike's feelings. The AI helped me understand that my 'nagging' was really just asking for quality time.",
    tags: ["Communication", "Emotional Safety"],
    icon: Heart,
    color: "coral",
    benefit: "Safe Communication",
  },
  {
    id: 2,
    names: "Alex & Jordan",
    duration: "Married 7 years",
    quote:
      "We stopped having the same fight over and over. The AI helped us understand what we were really asking for from each other. Now when Jordan says they're 'fine,' I know how to actually connect instead of walking away frustrated.",
    tags: ["Conflict Resolution", "Understanding"],
    icon: MessageCircle,
    color: "teal",
    benefit: "Conflict Resolution",
  },
  {
    id: 3,
    names: "Emma & David",
    duration: "Engaged, planning wedding",
    quote:
      "Before RelationshipOS, we were scared to talk about money and future plans. The app gave us a safe way to explore our fears privately first, then share what we learned. We're going into marriage so much stronger.",
    tags: ["Future Planning", "Trust Building"],
    icon: Shield,
    color: "slate",
    benefit: "Privacy & Trust",
  },
  {
    id: 4,
    names: "Maria & Chris",
    duration: "Married 12 years, 2 kids",
    quote:
      "After kids, we felt like roommates. The AI noticed we both valued quality time but were expressing it differently. Now we have 15-minute coffee dates every morning before the chaos starts. Small change, huge impact.",
    tags: ["Reconnection", "Love Languages"],
    icon: Users,
    color: "coral",
    benefit: "Rekindling Connection",
  },
  {
    id: 5,
    names: "Taylor & Sam",
    duration: "Dating 1.5 years",
    quote:
      "We're both anxious attachers, which used to create this spiral of overthinking. RelationshipOS helped us recognize the pattern and gave us tools to reassure each other before things escalated. Game changer for our anxiety.",
    tags: ["Attachment Styles", "Emotional Growth"],
    icon: Sparkles,
    color: "teal",
    benefit: "Emotional Intelligence",
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  // Touch handlers for mobile swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
    setIsAutoPlaying(false)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    } else if (isRightSwipe) {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const currentTestimonial = testimonials[currentIndex]
  const IconComponent = currentTestimonial.icon

  const getColorClasses = (color: string) => {
    switch (color) {
      case "coral":
        return {
          bg: "bg-coral-100",
          text: "text-coral-500",
          quote: "text-coral-200",
        }
      case "teal":
        return {
          bg: "bg-teal-100",
          text: "text-teal-600",
          quote: "text-teal-200",
        }
      case "slate":
        return {
          bg: "bg-slate-100",
          text: "text-slate-600",
          quote: "text-slate-200",
        }
      default:
        return {
          bg: "bg-gray-100",
          text: "text-gray-600",
          quote: "text-gray-200",
        }
    }
  }

  const colorClasses = getColorClasses(currentTestimonial.color)

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Navigation Arrows - Hidden on mobile, visible on desktop */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm border-slate-200 hover:bg-white hidden md:flex"
        onClick={goToPrevious}
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm border-slate-200 hover:bg-white hidden md:flex"
        onClick={goToNext}
      >
        <ChevronRight className="w-4 h-4" />
      </Button>

      {/* Main Testimonial Card */}
      <div
        className="overflow-hidden cursor-grab active:cursor-grabbing"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => {
            const testimonialColorClasses = getColorClasses(testimonial.color)
            const TestimonialIcon = testimonial.icon

            return (
              <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                <Card className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 mx-auto max-w-2xl">
                  <CardContent className="p-8 md:p-10">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 ${testimonialColorClasses.bg} rounded-full flex items-center justify-center`}
                        >
                          <TestimonialIcon className={`w-6 h-6 ${testimonialColorClasses.text}`} />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-800 text-lg">{testimonial.names}</p>
                          <p className="text-slate-600 text-sm">{testimonial.duration}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs font-medium">
                        {testimonial.benefit}
                      </Badge>
                    </div>

                    {/* Quote */}
                    <div className="relative">
                      <Quote className={`w-10 h-10 ${testimonialColorClasses.quote} mb-4 opacity-50`} />
                      <p className="text-slate-700 text-lg leading-relaxed italic mb-6 relative z-10">
                        {testimonial.quote}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {testimonial.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-teal-600 scale-110" : "bg-slate-300 hover:bg-slate-400"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mt-4 max-w-xs mx-auto">
        <div className="w-full bg-slate-200 rounded-full h-1">
          <div
            className="bg-teal-600 h-1 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
          />
        </div>
        <p className="text-center text-sm text-slate-500 mt-2">
          {currentIndex + 1} of {testimonials.length}
        </p>
      </div>

      {/* Mobile Swipe Hint */}
      <p className="text-center text-sm text-slate-400 mt-4 md:hidden">Swipe left or right to see more stories</p>
    </div>
  )
}
