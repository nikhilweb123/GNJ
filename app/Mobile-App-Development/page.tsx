"use client"

import { motion } from "framer-motion"
import { Smartphone, Apple, PenTool, Layers, RefreshCw, CheckCircle, Shield, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function MobileAppDevelopment() {
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
            Mobile App Development
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-3xl font-light mb-8 text-blue-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Empower Your Business with Innovative Mobile Solutions
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 mb-12 max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            At GNJ Worldwide, we specialize in crafting powerful, user-centric mobile applications that drive growth, engagement, and digital transformation. Whether you're a startup with a groundbreaking idea or an established business looking to expand your mobile presence, our team of expert developers and designers is here to bring your vision to life.
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
              <Smartphone className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-400">Custom Mobile App Development</h3>
              <p className="text-gray-300">We build tailor-made apps designed to meet your unique business requirements—ensuring performance, scalability, and an exceptional user experience.</p>
            </motion.div>
            <motion.div className="bg-gray-800 rounded-2xl p-8 shadow-md flex flex-col items-start" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
              <Apple className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-400">iOS & Android App Development</h3>
              <p className="text-gray-300">From sleek iOS apps for Apple users to robust Android applications, we deliver high-quality solutions for both major platforms—using native and cross-platform technologies.</p>
            </motion.div>
            <motion.div className="bg-gray-800 rounded-2xl p-8 shadow-md flex flex-col items-start" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
              <PenTool className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-400">UI/UX Design</h3>
              <p className="text-gray-300">Our designers create intuitive, beautiful, and engaging user interfaces that enhance usability and reflect your brand's identity.</p>
            </motion.div>
            <motion.div className="bg-gray-800 rounded-2xl p-8 shadow-md flex flex-col items-start" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}>
              <Layers className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-400">Cross-Platform Solutions</h3>
              <p className="text-gray-300">Need an app that works seamlessly on multiple devices? We develop hybrid mobile applications using tools like Flutter and React Native to save you time and cost without compromising quality.</p>
            </motion.div>
            <motion.div className="bg-gray-800 rounded-2xl p-8 shadow-md flex flex-col items-start" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }}>
              <RefreshCw className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-400">App Maintenance & Support</h3>
              <p className="text-gray-300">We offer post-launch support, regular updates, performance monitoring, and feature enhancements to keep your app running smoothly.</p>
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
            {["Experienced Team: Our developers bring years of experience and a passion for innovation to every project.",
              "Agile Development: We follow agile methodologies for faster delivery, continuous feedback, and collaborative development.",
              "Transparent Process: Stay updated at every stage with clear timelines, regular reports, and direct communication.",
              "Security & Compliance: We prioritize data security and ensure compliance with relevant industry standards and regulations."
            ].map((reason, idx) => (
              <motion.div
                key={idx}
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
            Let's Build Something Great Together
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Your mobile app is more than just a tool—it's a digital extension of your brand. Let GNJ Worldwide help you create an impactful, future-ready app that your users will love.
          </motion.p>
          <Link href="/contact">
            <motion.button
              className="inline-flex items-center space-x-2 text-lg border border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  )
}