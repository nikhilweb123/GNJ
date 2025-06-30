"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Monitor, Cloud, Wrench, Server, HelpCircle, ArrowRight, Cpu, Globe, Database, CheckCircle, Layers, Network } from "lucide-react"
import Link from "next/link"

export default function ITInfrastructure() {
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
            IT Infrastructure & Support Services
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-3xl font-light mb-8 text-blue-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Reliable. Scalable. Always Available. Future-Ready.
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 mb-12 max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            At GNJ Worldwide, we deliver comprehensive IT infrastructure and support solutions that empower your business to thrive in a digital-first world. From startups to global enterprises, our proactive, security-focused, and innovative services ensure your technology backbone is robust, agile, and always available.
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
            Our IT Infrastructure & Support Services
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div className="bg-gray-800 rounded-2xl p-8 shadow-md flex flex-col items-start" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
              <HelpCircle className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-400">24/7 Help Desk & Remote Support</h3>
              <p className="text-gray-300">Our certified technicians are available around the clock to resolve issues quickly via remote tools or on-site visits. We minimize downtime and keep your teams productive.</p>
            </motion.div>
            <motion.div className="bg-gray-800 rounded-2xl p-8 shadow-md flex flex-col items-start" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
              <ShieldCheck className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-400">Cybersecurity Monitoring & Defense</h3>
              <p className="text-gray-300">We deploy advanced security solutions—firewalls, endpoint protection, threat detection, and compliance audits—to safeguard your data and operations from evolving cyber threats.</p>
            </motion.div>
            <motion.div className="bg-gray-800 rounded-2xl p-8 shadow-md flex flex-col items-start" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
              <Server className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-400">Network & Infrastructure Management</h3>
              <p className="text-gray-300">We design, implement, and manage secure networks, servers, and hybrid cloud environments. Our team ensures high availability, performance, and disaster recovery readiness.</p>
            </motion.div>
            <motion.div className="bg-gray-800 rounded-2xl p-8 shadow-md flex flex-col items-start" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}>
              <Wrench className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-400">Hardware & Software Lifecycle</h3>
              <p className="text-gray-300">From procurement and deployment to upgrades and troubleshooting, we manage the full lifecycle of your IT assets for maximum ROI and minimal disruption.</p>
            </motion.div>
            <motion.div className="bg-gray-800 rounded-2xl p-8 shadow-md flex flex-col items-start" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }}>
              <Cloud className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-400">Cloud Support & Integration</h3>
              <p className="text-gray-300">We help you migrate, manage, and optimize your cloud environment—AWS, Azure, Google Cloud, or hybrid. Our experts ensure secure, seamless integration and cost efficiency.</p>
            </motion.div>
            <motion.div className="bg-gray-800 rounded-2xl p-8 shadow-md flex flex-col items-start" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} viewport={{ once: true }}>
              <Database className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-400">Data Backup, Recovery & Business Continuity</h3>
              <p className="text-gray-300">We implement automated, encrypted backups and disaster recovery plans to protect your critical data and ensure business continuity in any scenario.</p>
            </motion.div>
            <motion.div className="bg-gray-800 rounded-2xl p-8 shadow-md flex flex-col items-start" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} viewport={{ once: true }}>
              <Cpu className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-400">IT Automation & Monitoring</h3>
              <p className="text-gray-300">We leverage AI-driven monitoring and automation tools to proactively detect issues, optimize performance, and reduce manual intervention.</p>
            </motion.div>
            <motion.div className="bg-gray-800 rounded-2xl p-8 shadow-md flex flex-col items-start" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.7 }} viewport={{ once: true }}>
              <Network className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-400">Unified Communications</h3>
              <p className="text-gray-300">We deploy and manage VoIP, video conferencing, and collaboration platforms to keep your teams connected and productive—anywhere, anytime.</p>
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
            {["Certified & Experienced IT Professionals",
              "Proactive, Security-First Approach",
              "Custom Solutions for Every Industry",
              "Transparent Communication & Reporting",
              "Scalable Support for Growing Businesses",
              "Cutting-Edge Tools & Technologies",
              "End-to-End Project Management & Support"
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
            Get Peace of Mind with GNJ Worldwide
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Technology should work for you—not against you. Let GNJ Worldwide handle your IT challenges while you focus on growing your business. Contact us today to learn more or request a customized IT infrastructure and support package tailored to your needs.
          </motion.p>
          <Link href="/contact">
            <motion.button
              className="inline-flex items-center space-x-2 text-lg border border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span>Request IT Infrastructure Support</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  )
}