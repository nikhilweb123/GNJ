"use client"

import { motion } from "framer-motion"
import { Link2, Cloud, Code, Database, Wrench, CheckCircle, ArrowRight, Truck, ShoppingCart, Heart, Banknote, Factory } from "lucide-react"
import Link from "next/link"

export default function Integrations() {
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
Integration Services
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-3xl font-light mb-8 text-blue-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
Seamless Connectivity for Scalable Business Growth
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 mb-12 max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
At GNJ Worldwide, our Integration Services are designed to help businesses unify their digital ecosystem, streamline operations, and accelerate innovation. Whether you are integrating software applications, cloud platforms, or third-party tools, we ensure your systems work together flawlessly — enabling efficiency, visibility, and control across your entire infrastructure.
          </motion.p>
        </div>
      </section>

      {/* Integration Capabilities Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-light mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
Our Integration Capabilities
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div className="bg-gray-800 rounded-2xl p-8 shadow-md flex flex-col items-start" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
              <Link2 className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-400">Application Integration</h3>
              <p className="text-gray-300">We connect diverse applications across your business to ensure seamless data flow, eliminating data silos and enabling real-time collaboration between systems.</p>
            </motion.div>
            <motion.div className="bg-gray-800 rounded-2xl p-8 shadow-md flex flex-col items-start" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
              <Cloud className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-400">Cloud Integration</h3>
              <p className="text-gray-300">GNJ helps organizations transition to the cloud and integrate cloud-based platforms (SaaS, PaaS, IaaS) with existing on-premises systems, ensuring performance and security.</p>
            </motion.div>
            <motion.div className="bg-gray-800 rounded-2xl p-8 shadow-md flex flex-col items-start" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
              <Code className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-400">API Integration</h3>
              <p className="text-gray-300">We develop and implement robust API-based solutions that enable your systems to communicate securely and efficiently with external services, partners, and third-party apps.</p>
            </motion.div>
            <motion.div className="bg-gray-800 rounded-2xl p-8 shadow-md flex flex-col items-start" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}>
              <Database className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-400">Data Integration</h3>
              <p className="text-gray-300">Our solutions bring data together from multiple sources into a single, unified view to support analytics, reporting, and strategic decision-making.</p>
            </motion.div>
            <motion.div className="bg-gray-800 rounded-2xl p-8 shadow-md flex flex-col items-start" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }}>
              <Wrench className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-400">Legacy System Integration</h3>
              <p className="text-gray-300">Modernize your IT infrastructure by integrating legacy systems with modern platforms without disrupting existing workflows or performance.</p>
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
            {["Custom-Built Integration Solutions tailored to your business needs",
              "Experienced Integration Specialists across multiple industries and platforms",
              "Security-First Approach to protect your data during and after integration",
              "Scalable Architecture for long-term growth and adaptability",
              "Ongoing Support to maintain and optimize integration performance"
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
              { name: "Manufacturing & Supply Chain", icon: Factory },
              { name: "Healthcare & Life Sciences", icon: Heart },
              { name: "Finance & Banking", icon: Banknote },
              { name: "E-commerce & Retail", icon: ShoppingCart },
              { name: "Logistics & Transportation", icon: Truck },
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
            Let's Connect Your Business
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
Unlock the full potential of your technology investments. Contact GNJ Worldwide today to explore how our Integration Services can transform your operations and drive digital success.
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