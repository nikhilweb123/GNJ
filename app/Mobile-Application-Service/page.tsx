"use client"

import { motion } from "framer-motion"
import { Smartphone, Apple, PenTool, Layers, RefreshCw, CheckCircle, ArrowRight, Briefcase, ShoppingCart, Heart, GraduationCap, Plane, DollarSign, Home, Cpu, Cloud } from "lucide-react"
import Link from "next/link"

// Reusable Card component for sections
interface InfoCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  className?: string;
}

function InfoCard({ icon: Icon, title, description, className = "" }: InfoCardProps) {
  return (
    <motion.div
      className={`bg-gray-800 rounded-2xl p-8 shadow-md flex flex-col items-start ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {Icon && <Icon className="w-8 h-8 text-blue-400 mb-4" />}
      <h3 className="text-xl font-semibold mb-2 text-blue-400">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}

export default function MobileApplicationService() {
  // Data for sections
  const whatWeOffer = [
    { icon: Smartphone, title: "Custom App Development", description: "We create scalable, secure, and feature-rich mobile apps from scratch—built to match your business requirements and user needs." },
    { icon: Apple, title: "iOS and Android Solutions", description: "From native iOS to Android apps and cross-platform development, we ensure seamless performance across all major mobile devices." },
    { icon: PenTool, title: "UI/UX Design", description: "Our expert designers craft clean, intuitive, and engaging user interfaces that deliver excellent user experiences across all screen sizes." },
    { icon: RefreshCw, title: "App Maintenance & Support", description: "We provide continuous monitoring, bug fixes, performance optimization, and regular updates to keep your app running smoothly." },
    { icon: Briefcase, title: "Enterprise Mobile Solutions", description: "Our enterprise-grade mobile applications help businesses automate processes, improve productivity, and stay ahead in their industry." },
  ]

  const technologies = [
    { name: "React Native", icon: Cpu },
    { name: "Flutter", icon: Layers },
    { name: "Swift (iOS)", icon: Apple },
    { name: "Kotlin (Android)", icon: Smartphone },
    { name: "Firebase & AWS", icon: Cloud },
    { name: "Figma, Adobe XD", icon: PenTool },
  ]

  const industries = [
    { name: "E-commerce & Retail", icon: ShoppingCart },
    { name: "Healthcare", icon: Heart },
    { name: "Education", icon: GraduationCap },
    { name: "Travel & Hospitality", icon: Plane },
    { name: "Finance", icon: DollarSign },
    { name: "Real Estate", icon: Home },
  ]

  const whyChooseUs = [
    "Innovation-Driven Approach",
    "Focus on Security & Performance",
    "Rapid Development with Agile Methodologies",
    "Transparent Communication & Support",
    "Experienced Team of Developers & Designers"
  ]

  const process = [
    { icon: PenTool, title: "1. Discovery & Strategy", description: "We start by understanding your business goals, target audience, and technical requirements to craft a winning app strategy." },
    { icon: Layers, title: "2. Design & Prototyping", description: "Our designers create wireframes and interactive prototypes, ensuring a seamless and engaging user experience before development begins." },
    { icon: Smartphone, title: "3. Agile Development & Launch", description: "We build your app using agile sprints, provide regular updates, and launch with robust QA and post-launch support for ongoing success." },
  ]

  const testimonials = [
    {
      text: "GNJ Worldwide delivered our mobile app on time and exceeded our expectations. The team's expertise and communication made the process seamless.",
      name: "Amit S.",
      role: "CEO, Retail Startup"
    },
    {
      text: "Our healthcare app is now live and getting great feedback. GNJ's design and development process was transparent and highly professional.",
      name: "Dr. Priya K.",
      role: "Medical Director"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h1
            className="text-5xl md:text-6xl font-light mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Mobile Application Services
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-3xl font-light mb-8 text-blue-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Transforming Ideas into Intuitive Mobile Experiences
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 mb-12 max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            At GNJ Worldwide, we specialize in designing and developing custom mobile applications that empower businesses, engage users, and drive digital growth. Whether you're a startup with a bold new idea or an enterprise looking to enhance customer experience, our mobile app development services are tailored to meet your unique goals.
          </motion.p>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-light mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            What We Offer
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatWeOffer.map((item, idx) => (
              <InfoCard key={item.title} icon={item.icon} title={item.title} description={item.description} className={idx === 1 ? "items-center" : ""} />
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-light mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Technologies We Use
          </motion.h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {technologies.map((tech, idx) => {
              const IconComponent = tech.icon
              return (
                <div key={tech.name} className="flex items-center bg-gray-800 rounded-full px-5 py-2 text-gray-300 text-lg">
                  {IconComponent && <IconComponent className="w-6 h-6 text-blue-400 mr-2" />}
                  {tech.name}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-light mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Industries We Serve
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, idx) => {
              const IconComponent = industry.icon
              return (
                <motion.div
                  key={industry.name}
                  className="bg-gray-800 rounded-2xl p-8 shadow-md flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  {IconComponent && <IconComponent className="w-8 h-8 text-blue-400 mb-4" />}
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">{industry.name}</h3>
            </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-light mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Why Choose GNJ Worldwide?
          </motion.h2>
          <div className="grid gap-6 max-w-3xl mx-auto">
            {whyChooseUs.map((reason, idx) => (
              <motion.div
                key={reason}
                className="flex items-start space-x-4 p-6 bg-gray-800 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300">{reason}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Development Process Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-light mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Mobile App Development Process
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {process.map((step, idx) => (
              <InfoCard key={step.title} icon={step.icon} title={step.title} description={step.description} className="items-center" />
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-light mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            What Our Clients Say
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div key={t.name} className="bg-gray-800 rounded-2xl p-8 shadow-md" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: idx * 0.1 }} viewport={{ once: true }}>
                <p className="text-gray-300 mb-4">“{t.text}”</p>
                <div className="flex items-center space-x-4">
                  <Avatar name={t.name} />
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-gray-400 text-sm">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-light mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Let's Build the Future of Mobile, Together.
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Partner with GNJ Worldwide to bring your app idea to life. Whether it's a customer-facing mobile app or a powerful internal tool, we have the expertise to deliver top-notch results.
          </motion.p>
          <Link href="/contact">
            <motion.button
              className="inline-flex items-center space-x-2 text-lg border border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span>Get in touch today</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  )
}

// Simple Avatar component for testimonials
interface AvatarProps {
  name: string;
}

function Avatar({ name }: AvatarProps) {
  return (
    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
      {name.split(' ').map((n: string) => n[0]).join('')}
    </div>
  )
}