"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Cloud, Wrench, Box, RefreshCw, Shield, BarChart2, CheckCircle, ArrowRight } from "lucide-react"

export default function CloudSolutions() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-28 pb-19">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h1
            className="text-5xl md:text-6xl font-light mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Cloud Solutions
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-3xl font-light mb-8 text-blue-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Elevate Your Business with Scalable, Secure, and Intelligent Cloud Services
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 mb-12 max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            At GNJ Worldwide, we empower businesses to accelerate digital transformation through customized cloud solutions that are reliable, scalable, and cost-effective. Whether you're a startup aiming to build on cloud-native infrastructure or an enterprise migrating legacy systems, our cloud experts help you harness the full potential of cloud technologies.
          </motion.p>
        </div>
      </section>

      {/* Cloud Services Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-light mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Cloud Services Include
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div className="bg-gray-800 rounded-2xl p-8 shadow-md flex flex-col items-start" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
              <Cloud className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-400">Cloud Infrastructure (IaaS)</h3>
              <p className="text-gray-300">Get flexible, on-demand computing resources to scale your operations without the need for physical hardware. We provide robust IaaS platforms with high availability and security.</p>
            </motion.div>
            <motion.div className="bg-gray-800 rounded-2xl p-8 shadow-md flex flex-col items-start" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
              <Wrench className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-400">Cloud Platform Services (PaaS)</h3>
              <p className="text-gray-300">Build, test, and deploy applications faster using our Platform-as-a-Service solutions. Our PaaS offering streamlines development workflows, reduces time-to-market, and enables agile innovation.</p>
            </motion.div>
            <motion.div className="bg-gray-800 rounded-2xl p-8 shadow-md flex flex-col items-start" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
              <Box className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-400">Cloud Storage & Backup</h3>
              <p className="text-gray-300">Secure and scalable cloud storage solutions to keep your data safe and accessible. We ensure encrypted, redundant backups with disaster recovery support.</p>
            </motion.div>
            <motion.div className="bg-gray-800 rounded-2xl p-8 shadow-md flex flex-col items-start" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}>
              <RefreshCw className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-400">Cloud Migration</h3>
              <p className="text-gray-300">Our experts ensure a smooth, secure, and seamless migration of your apps, data, and infrastructure to the cloud—minimizing downtime and business disruption.</p>
            </motion.div>
            <motion.div className="bg-gray-800 rounded-2xl p-8 shadow-md flex flex-col items-start" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }}>
              <Shield className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-400">Cloud Security</h3>
              <p className="text-gray-300">With built-in encryption, identity management, and threat detection, we provide comprehensive cloud security strategies tailored to your needs.</p>
            </motion.div>
            <motion.div className="bg-gray-800 rounded-2xl p-8 shadow-md flex flex-col items-start" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} viewport={{ once: true }}>
              <BarChart2 className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-400">Cloud Analytics & AI</h3>
              <p className="text-gray-300">Leverage powerful data analytics, machine learning, and AI tools in the cloud to gain real-time insights and drive smarter decisions.</p>
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
            {["Tailored Solutions: We customize every cloud setup based on your unique business needs and industry.",
              "Global Expertise: Our cloud specialists have deep experience in AWS, Microsoft Azure, Google Cloud, and hybrid environments.",
              "24/7 Support: Round-the-clock technical assistance to ensure maximum uptime and peace of mind.",
              "Cost Optimization: We help you reduce operational costs by optimizing cloud resource usage without compromising performance."
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
            Let's Build Your Cloud Future
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Partner with GNJ Worldwide to modernize your IT infrastructure, improve efficiency, and future-proof your business with intelligent cloud technologies.
          </motion.p>
          <Link href="/contact">
            <motion.button
              className="inline-flex items-center space-x-2 text-lg border border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span>Schedule a Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  )
}
