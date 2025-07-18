"use client"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Users, Clock, Award, Zap } from "lucide-react"
import Link from "next/link"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const services = [
  {
    title: "Software Development",
    description:
      "Custom software solutions tailored to your business needs with cutting-edge technologies and best practices.",
    gradient: "from-purple-400 via-pink-400 to-blue-400",
    link: "/software-development",
  },
  {
    title: "Web Development",
    description:
      "Responsive and dynamic web applications built with modern frameworks for optimal performance and user experience",
    gradient: "from-blue-400 via-cyan-400 to-teal-400",
    link: "/web-Development",
  },
  {
    title: "IT Support",
    description: "Comprehensive technical assistance and maintenance services to keep your systems running smoothly",
    gradient: "from-teal-400 via-green-400 to-cyan-400",
    link: "/IT-Support",
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive and engaging user interfaces that enhance user satisfaction and drive conversion",
    gradient: "from-purple-400 via-blue-400 to-cyan-400",
    link: "/UIUX-Design",
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile solutions that connect users to your brand anywhere, anytime",
    gradient: "from-pink-400 via-purple-400 to-blue-400",
    link: "/Mobile-App-Development",
  },
  {
    title: "Integrations",
    description:
      "Seamless integration of third-party services and APIs to enhance functionality and streamline workflows",
    gradient: "from-cyan-400 via-blue-400 to-purple-400",
    link: "/Integrations",
  },
  {
    title: "Cloud Solutions",
    description:
      "Scalable and secure cloud infrastructure setup and management for improved efficiency and reduced costs",
    gradient: "from-purple-400 via-pink-400 to-blue-400",
    link: "/Cloud-Solutions",
  },
  {
    title: "IT Infrastructure",
    description:
      "Design and implementation of robust IT infrastructure tailored to your organization's specific requirements",
    gradient: "from-blue-400 via-cyan-400 to-teal-400",
    link: "/IT-Infrastructure",
  },
  {
    title: "Cyber Security",
    description:
      "Comprehensive security solutions to protect your digital assets from threats and ensure data integrity",
    gradient: "from-teal-400 via-green-400 to-cyan-400",
    link: "/Cyber-Security",
  },
]

const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We start by understanding your business goals, challenges, and requirements through detailed consultation.",
  },
  {
    step: "02",
    title: "Strategy",
    description:
      "Our team develops a comprehensive strategy and roadmap tailored to your specific needs and objectives.",
  },
  {
    step: "03",
    title: "Development",
    description: "We implement the solution using industry best practices and cutting-edge technologies.",
  },
  {
    step: "04",
    title: "Delivery",
    description: "We deliver the final product with thorough testing, documentation, and ongoing support.",
  },
]

const stats = [
  { icon: Users, number: "350+", label: "Projects Completed" },
  { icon: Clock, number: "24/7", label: "Support Available" },
  { icon: Award, number: "99%", label: "Client Satisfaction" },
  { icon: Zap, number: "8+", label: "Years Experience" },
]

export default function Services() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h1
            className="text-6xl md:text-7xl font-light mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Services
          </motion.h1>
          <motion.p
            className="text-xl text-gray-400 mb-12 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We provide comprehensive technology solutions to help your business thrive in the digital age. From custom
            software development to cloud infrastructure, we've got you covered.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-light mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            What We Offer
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => {
              const card = (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group relative bg-gray-900 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 overflow-hidden cursor-pointer border border-transparent hover:border-blue-400"
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${service.gradient} mb-6 flex items-center justify-center`}
                    >
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-2xl font-semibold mb-4 group-hover:text-white transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              )
              return service.link ? (
                <Link key={index} href={service.link} passHref legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">{card}</a>
                </Link>
              ) : card
            })}
          </motion.div>
          {/* Contact Us Button */}
          <div className="flex justify-center mt-12">
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
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-t border-gray-800 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-4xl md:text-5xl font-light text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-light mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Process
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 mb-16 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We follow a proven methodology to ensure successful project delivery and client satisfaction.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 opacity-30 -translate-y-1/2 z-0"></div>

            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative z-10 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 border-t border-gray-800 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-light mb-6">Why Choose GNJ?</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                We combine technical expertise with business acumen to deliver solutions that not only work but drive
                real results for your organization.
              </p>

              <div className="space-y-4">
                {[
                  "Expert team with proven track record",
                  "Cutting-edge technologies and best practices",
                  "Transparent communication throughout the project",
                  "Ongoing support and maintenance",
                  "Competitive pricing and flexible engagement models",
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <Zap className="w-24 h-24 text-white mx-auto mb-4" />
                  <p className="text-2xl font-light text-white">Innovative Solutions</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-light mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's discuss your project requirements and how we can help bring your vision to life.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            
            <a href="tel:+918446419217">
              <button className="bg-green-500 text-white px-8 py-3 rounded-full font-medium hover:bg-green-600 transition-colors">
                Call Now
              </button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
