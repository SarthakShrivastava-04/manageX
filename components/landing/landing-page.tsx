"use client"

import { motion } from "framer-motion"
import { ArrowRight, Users, Shield, Zap, BarChart3, CheckCircle, Star, Sparkles } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "./header"
import { Footer } from "./footer"

const features = [
  {
    icon: Users,
    title: "User Management",
    description: "Efficiently manage all your users with advanced filtering and search capabilities.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Built with security best practices and reliable data handling mechanisms.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance with modern React patterns and efficient state management.",
  },
  {
    icon: BarChart3,
    title: "Analytics Ready",
    description: "Comprehensive user insights and analytics to help you make informed decisions.",
  },
]

const benefits = [
  "Real-time user search and filtering",
  "Multi-step form validation",
  "Dark/Light mode support",
  "Responsive design for all devices",
  "Local storage persistence",
  "Modern UI with smooth animations",
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    content:
      "This dashboard has streamlined our user management process significantly. The interface is intuitive and the features are exactly what we needed.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Developer",
    company: "StartupXYZ",
    content:
      "The code quality is exceptional and the TypeScript implementation makes it easy to maintain and extend. Highly recommended!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Team Lead",
    company: "InnovateLab",
    content:
      "The multi-step form and validation system saved us weeks of development time. The user experience is top-notch.",
    rating: 5,
  },
]

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-gray-900/5 dark:from-white/5 dark:to-gray-100/5" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl text-center"
          >
            <Badge variant="secondary" className="mb-8 px-4 py-2 text-sm font-medium">
              <Sparkles className="mr-2 h-4 w-4" />
              Modern User Management Solution
            </Badge>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6">
              Manage Users with <span className="text-gradient">Precision</span>
            </h1>
            <p className="text-xl leading-8 text-gray-600 dark:text-gray-400 sm:text-2xl max-w-3xl mx-auto">
              A powerful, intuitive dashboard for managing users with advanced filtering, multi-step forms, and
              beautiful animations. Built with Next.js, TypeScript, and modern best practices.
            </p>
            <div className="mt-12 flex items-center justify-center gap-6">
              <Link href="/dashboard">
                <Button size="lg" className="h-14 px-10 text-lg font-semibold rounded-xl">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="h-14 px-10 text-lg font-semibold rounded-xl border-2">
                View Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32 bg-gray-50/50 dark:bg-gray-950/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Everything you need</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Comprehensive features designed to make user management effortless and efficient.
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full card-hover border-2 rounded-2xl">
                  <CardHeader className="pb-4">
                    <div className="h-14 w-14 rounded-2xl bg-black dark:bg-white flex items-center justify-center mb-6">
                      <feature.icon className="h-7 w-7 text-white dark:text-black" />
                    </div>
                    <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 sm:py-32">
        <div className="container">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Built for modern teams</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
                Our dashboard combines powerful functionality with an intuitive interface, making user management
                accessible to everyone on your team.
              </p>
              <ul className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                  >
                    <CheckCircle className="h-6 w-6 text-black dark:text-white flex-shrink-0" />
                    <span className="text-lg text-gray-700 dark:text-gray-300">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-8 border-2">
                <div className="h-full w-full rounded-2xl glass-effect flex items-center justify-center">
                  <div className="text-center">
                    <Users className="h-20 w-20 text-black dark:text-white mx-auto mb-6" />
                    <h3 className="text-2xl font-bold mb-2">Dashboard Preview</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                      Clean, modern interface designed for productivity
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 sm:py-32 bg-gray-50/50 dark:bg-gray-950/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Loved by teams worldwide</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              See what our users have to say about their experience with our platform.
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full card-hover border-2 rounded-2xl">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-black text-black dark:fill-white dark:text-white" />
                      ))}
                    </div>
                    <CardDescription className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      "{testimonial.content}"
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <p className="font-bold text-lg">{testimonial.name}</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-black dark:bg-white text-white dark:text-black">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Ready to get started?</h2>
            <p className="text-xl opacity-80 mb-10">
              Join thousands of teams already using our platform to manage their users efficiently.
            </p>
            <div className="flex items-center justify-center gap-6">
              <Link href="/dashboard">
                <Button size="lg" variant="secondary" className="h-14 px-10 text-lg font-semibold rounded-xl">
                  Start Managing Users
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
