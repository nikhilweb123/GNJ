"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Check, Code, Smartphone, Globe, Building, Wrench } from "lucide-react"

export default function SoftwareDevelopment() {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description:
        "We create fully customized applications designed around your unique needs, ensuring flexibility, efficiency, and seamless user experiences.",
      link: "/contact",
    },
    {
      icon: Globe,
      title: "Web Application Development",
      description:
        "From dynamic websites to robust web portals, we develop scalable, secure, and responsive web apps that drive engagement and deliver results.",
      link: "/contact",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Reach your audience on any device. Our team builds intuitive iOS, Android, and cross-platform mobile apps using the latest frameworks and design practices.",
      link: "/contact",
    },
    {
      icon: Building,
      title: "Enterprise Solutions",
      description:
        "We develop and integrate enterprise-grade software to streamline operations, improve productivity, and enhance decision-making.",
      link: "/contact",
    },
    {
      icon: Wrench,
      title: "Software Maintenance & Support",
      description:
        "Stay ahead of the curve with our continuous support and maintenance services, including version upgrades, bug fixes, and performance optimization.",
      link: "/contact",
    },
  ]

  const benefits = [
    "Experienced Developers: A highly skilled team with expertise across various programming languages and platforms.",
    "Agile Methodology: Transparent, iterative processes for faster delivery and better collaboration.",
    "End-to-End Service: From consultation and UX/UI design to development, testing, and deployment.",
    "Industry-Focused: Proven success across multiple industries including finance, healthcare, retail, and logistics.",
    "Client-Centric Approach: We align every solution with your business objectives for maximum impact.",
  ]

  const technologies = {
    Frontend: ["React", "Angular", "Vue.js"],
    Backend: ["Node.js", ".NET", "Python", "Java"],
    Mobile: ["Flutter", "React Native", "Kotlin", "Swift"],
    Databases: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
    "Cloud & DevOps": ["AWS", "Azure", "Google Cloud", "Docker", "CI/CD Pipelines"],
  }

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
            Software Development Services
          </motion.h1>
          <motion.h2
            className="text-3xl md:text-4xl font-light mb-8 text-blue-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Transforming Ideas Into Scalable, Secure, and Smart Solutions
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 mb-12 max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            At GNJ Worldwide, we specialize in building powerful software solutions tailored to meet your business
            goals. Whether you're a startup aiming to build your MVP or an enterprise seeking digital transformation,
            our expert development team is ready to turn your vision into reality.
          </motion.p>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-light mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            What We Offer
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const IconComponent = service.icon
              const card = (
                <motion.div
                  key={idx}
                  className="bg-gray-800 rounded-2xl p-8 shadow-md hover:shadow-lg hover:ring-2 hover:ring-blue-400 transition cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <IconComponent className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-blue-400">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </motion.div>
              )
              return service.link ? (
                <Link key={idx} href={service.link} passHref legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">{card}</a>
                </Link>
              ) : card
            })}
          </div>
        </div>  
      </section>

      {/* Why Choose GNJ Worldwide Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-light mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Why Choose GNJ Worldwide?
          </motion.h2>
          <div className="grid gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                className="flex items-start space-x-4 p-6 bg-gray-800 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Check className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-gray-900">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            Ready to Build the Future?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's create software that empowers your business. Contact GNJ Worldwide today to schedule a consultation.
          </motion.p>
          <Link href="/contact">
            <motion.button
              className="inline-flex items-center space-x-2 text-lg border border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  )
}
