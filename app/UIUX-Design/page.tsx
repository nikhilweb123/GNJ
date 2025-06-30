"use client"

import { motion } from "framer-motion"
import { LayoutDashboard, Smartphone, Users, Layers, PenTool, Figma, BookOpen, Heart, GraduationCap, Cloud, Globe, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function UIUXDesign() {
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
            UI/UX Design Services
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-3xl font-light mb-8 text-blue-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Crafting Digital Experiences That Inspire
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 mb-12 max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            At GNJ Worldwide, we don't just design interfaces — we design intuitive, user-focused experiences that leave a lasting impression. Our UI/UX design services combine creativity with strategy to ensure every interaction is smooth, engaging, and purpose-driven.
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
            <motion.div className="bg-gray-800 rounded-2xl p-8 shadow-md flex flex-col items-start" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
              <LayoutDashboard className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-400">User Interface (UI) Design</h3>
              <ul className="text-gray-300 list-disc ml-6 mb-2">
                <li>Visually stunning interfaces aligned with your brand</li>
                <li>Wireframes to high-fidelity designs</li>
                <li>Responsive & adaptive layouts</li>
                <li>Interactive prototypes</li>
                <li>Design systems & UI kits</li>
                <li>Cross-platform consistency (Web, Mobile, Tablet)</li>
              </ul>
            </motion.div>
            <motion.div className="bg-gray-800 rounded-2xl p-8 shadow-md flex flex-col items-start" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
              <Users className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-400">User Experience (UX) Design</h3>
              <ul className="text-gray-300 list-disc ml-6 mb-2">
                <li>UX research & user personas</li>
                <li>Information architecture</li>
                <li>User flow & journey mapping</li>
                <li>Usability testing & feedback analysis</li>
              </ul>
            </motion.div>
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
            {["Human-Centered Design: We put your users at the heart of everything we create.",
              "Scalable Solutions: From startups to enterprises, our designs grow with your business.",
              "Collaborative Process: We work closely with clients to ensure the final product exceeds expectations.",
              "Latest Tools & Trends: We stay ahead of the curve with tools like Figma, Adobe XD, Sketch, and more.",
            ].map((reason, idx) => (
              <motion.div
                key={idx}
                className="flex items-start space-x-4 p-6 bg-gray-800 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <PenTool className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300">{reason}</p>
              </motion.div>
            ))}
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
            {[
              
              { name: "Healthcare", icon: Heart },
              { name: "Education", icon: GraduationCap },
              { name: "SaaS & Technology", icon: Cloud },
              { name: "Travel & Hospitality", icon: Globe },
            ].map((industry, idx) => {
              const IconComponent = industry.icon
              return (
                <motion.div
                  key={idx}
                  className="bg-gray-800 rounded-2xl p-8 shadow-md flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <IconComponent className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">{industry.name}</h3>
                </motion.div>
              )
            })}
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
            Ready to Transform Your Digital Experience?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Whether you're building a new product or revamping an existing one, GNJ Worldwide can bring your vision to life with modern, intuitive UI/UX design.
          </motion.p>
          <Link href="/contact">
            <motion.button
              className="inline-flex items-center space-x-2 text-lg border border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span>Request UI/UX Design</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  )
}