"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  ArrowRight,
  Palette,
  ShoppingCart,
  FileText,
  Globe,
  Smartphone,
  Wrench,
  ShoppingBag,
  GraduationCap,
  Heart,
  Plane,
  Home,
  DollarSign,
} from "lucide-react"

export default function WebDevelopment() {
  const services = [
    {
      icon: Palette,
      title: "Custom Website Design & Development",
      description:
        "We don't believe in one-size-fits-all. Our developers create unique, fully responsive websites that align perfectly with your brand identity and functionality requirements.",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Development",
      description:
        "Looking to sell online? We develop powerful, secure, and easy-to-manage e-commerce platforms that drive sales and improve customer experience.",
    },
    {
      icon: FileText,
      title: "CMS Development",
      description:
        "Manage your content with ease. We build websites using leading Content Management Systems (like WordPress, Joomla, Drupal) that allow you to stay in control.",
    },
    {
      icon: Globe,
      title: "Web Application Development",
      description:
        "Need more than a static website? Our team builds scalable and secure web applications with intuitive UI/UX to support your digital transformation.",
    },
    {
      icon: Smartphone,
      title: "Mobile-Responsive & SEO-Friendly",
      description:
        "Every website we build is optimized for performance across all devices and is search-engine ready to help you rank higher and reach more users.",
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description:
        "Beyond launch, we offer ongoing support and maintenance to keep your site secure, updated, and running smoothly.",
    },
  ]

  const technologies = {
    Frontend: ["HTML5", "CSS3", "JavaScript", "React", "Angular", "Vue.js"],
    Backend: ["PHP", "Python", "Node.js"],
    "CMS & E-commerce": ["WordPress", "Shopify", "Magento"],
    Databases: ["MySQL", "MongoDB"],
  }

  const industries = [
    { name: "Retail & E-commerce", icon: ShoppingBag },
    { name: "Education", icon: GraduationCap },
    { name: "Healthcare", icon: Heart },
    { name: "Travel & Hospitality", icon: Plane },
    { name: "Real Estate", icon: Home },
    { name: "Finance & Insurance", icon: DollarSign },
  ]

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
            Web Development Services
          </motion.h1>
          <motion.h2
            className="text-3xl md:text-4xl font-light mb-8 text-blue-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Empowering Your Digital Presence with Scalable, Secure & Smart Web Solutions
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 mb-12 max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            At GNJ Worldwide, we specialize in building dynamic, high-performing websites tailored to your business
            goals. Whether you're a startup, an established business, or an enterprise, our custom web development
            solutions help you stand out in the digital space.
          </motion.p>
        </div>
      </section>

      {/* Why Choose GNJ Worldwide Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-light mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Why Choose GNJ Worldwide for Web Development?
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={idx}
                  className="bg-gray-800 rounded-2xl p-8 shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <IconComponent className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-blue-400">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-light mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Technologies We Work With
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            We utilize the latest and most reliable technologies including:
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(technologies).map(([category, techs], idx) => (
              <motion.div
                key={idx}
                className="bg-gray-800 rounded-2xl p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-blue-400">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech, techIdx) => (
                    <span key={techIdx} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-light mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Industries We Serve
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            We have experience delivering web solutions across diverse industries including:
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, idx) => {
              const IconComponent = industry.icon
              return (
                <motion.div
                  key={idx}
                  className="bg-gray-800 rounded-2xl p-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <IconComponent className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white">{industry.name}</h3>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-light mb-6"
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
            Whether you need a new website or want to revamp your existing one, GNJ Worldwide is your trusted partner in
            digital growth.
          </motion.p>
          <Link href="/contact">
            <motion.button
              className="inline-flex items-center space-x-2 text-lg border border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span>Get in Touch Today</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  )
}
