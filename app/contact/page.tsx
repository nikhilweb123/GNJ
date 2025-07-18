"use client"

import React, { useState } from "react"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, Headphones } from "lucide-react"

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

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "Support@gnjworldwide.com",
    description: "Send us an email anytime",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "10th Floor, BKC Complex, Awfis, East Bandra, Mumbai, 400051 Maharashtra, India",
    description: "Come say hello at our office",
  },
  {
    icon: MapPin,
    title: "Register Address",
    details: "32/147, Ramanand Nagar, Near Ram Mandir, Jalgaon, 425002 Maharashtra, India",
    description: "Our Register Address",
  },
  {
    icon: MapPin,
    title: "Singapore Office",
    details: "Co.:- GnJ Worldwide Private Limited, Office no.: 36, 5 Temasek Boulevard, 17th Floor Singapore, Central Singapore 038985",
    description: "Our Singapore Headquarters",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: "Mon-Fri: 9am-6pm PST",
    description: "We're here to help during business hours",
  },
  {
    icon: Phone,
    title: "General Enquiry",
    details: "+91 8446419217",
    description: "For general questions and support",
  },
  {
    icon: Phone,
    title: "Sales Enquiry",
    details: "+91 9016753422",
    description: "Reach out to our sales team",
  },
]


const services = [
  { icon: MessageSquare, title: "General Inquiry", description: "Questions about our services" },
  { icon: Users, title: "Partnership", description: "Collaboration opportunities" },
  { icon: Headphones, title: "Support", description: "Technical assistance" },
]

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on scope and complexity. Most projects range from 4-16 weeks. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "We love working with startups and have flexible engagement models to accommodate different budgets and growth stages.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "We specialize in modern web technologies including React, Next.js, Node.js, Python, and cloud platforms like AWS and Vercel.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes, we offer comprehensive support and maintenance packages to ensure your applications continue to perform optimally after launch.",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitResult(null)
    const payload = {
      access_key: "8ca542ba-f12b-42f5-9d21-6291de3ace17",
      name: formData.name,
      email: formData.email,
      company: formData.company,
      service: formData.service,
      message: formData.message,
    }
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      })
      const result = await response.json()
      if (result.success) {
        setSubmitResult({ success: true, message: "Thank you for your message! We'll get back to you soon." })
        setFormData({ name: "", email: "", company: "", service: "", message: "" })
      } else {
        setSubmitResult({ success: false, message: result.message || "Something went wrong. Please try again." })
      }
    } catch (error) {
      setSubmitResult({ success: false, message: "Network error. Please try again later." })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h1
            className="text-6xl md:text-7xl font-light mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-xl text-gray-400 mb-12 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Get in touch with us to discuss how we can help transform your business with our technology solutions.
          </motion.p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-light mb-8">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Hidden access key for Web3Forms */}
                <input type="hidden" name="access_key" value="8ca542ba-f12b-42f5-9d21-6291de3ace17" />
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="software-development">Software Development</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-development">Mobile App Development</option>
                      <option value="ui-ux-design">UI/UX Design</option>
                      <option value="cloud-solutions">Cloud Solutions</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </button>
              </form>
              {submitResult && (
                <div className={`mt-4 text-center rounded-lg p-4 ${submitResult.success ? 'bg-green-700 text-white' : 'bg-red-700 text-white'}`}>
                  {submitResult.message}
                </div>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-light mb-8">Get in touch</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                We'd love to hear from you. Choose the most convenient way to reach out, and we'll get back to you as
                soon as possible.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      <p className="text-blue-400 mb-1">{info.details}</p>
                      <p className="text-gray-400 text-sm">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Quick Contact */}
      <section className="py-16 border-t border-gray-800 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-light mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            How can we help?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 mb-16 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Choose the type of inquiry that best matches your needs.
          </motion.p>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-black p-8 rounded-xl text-center hover:bg-gray-800 transition-colors cursor-pointer group"
              >
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600/30 transition-colors">
                  <service.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Dropdown/Accordion */}
      <section className="py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-light mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>

          {/* FAQ Dropdown/Accordion */}
          <FAQAccordion faqs={faqs} />

        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 border-t border-gray-800 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-light mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Find Us
          </motion.h2>

          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="aspect-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 flex flex-col items-center justify-center space-y-6"
            >
              <div className="text-center">
                <MapPin className="w-16 h-16 text-white mx-auto mb-4" />
                <p className="text-2xl font-light text-white mb-2">Our Office</p>
                <p className="text-blue-100">
                  Co.:- GnJ Worldwide Private Limited,<br />
                  10th Floor, BKC Complex, Awfis, East Bandra, Mumbai, 400051 Maharashtra, India
                </p>
              </div>

              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="w-full h-[400px] rounded-xl overflow-hidden shadow-2xl border-4 border-white/20 hover:border-blue-400 transition-all duration-500"
              >
                <iframe
                  src="https://www.google.com/maps?q=10th+Floor,+BKC+Complex,+Awfis,+East+Bandra,+Mumbai,+400051+Maharashtra,+India&output=embed"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="border-0 w-full h-full"
                  style={{ filter: 'brightness(0.95) saturate(1.1)' }}
                ></iframe>
              </motion.div>
          </motion.div>


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
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's schedule a consultation to discuss your needs and how we can help bring your vision to life.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
              Schedule Consultation
            </button>
            <button className="border border-gray-600 text-white px-8 py-3 rounded-full font-medium hover:border-white transition-colors">
              View Our Work
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

function FAQAccordion({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => (
        <div key={idx} className="border border-gray-800 rounded-xl">
          <button
            className="w-full text-left p-6 focus:outline-none flex justify-between items-center hover:border-gray-600 transition-colors"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            aria-expanded={openIndex === idx}
          >
            <span className="text-xl font-semibold">{faq.question}</span>
            <span className={`ml-4 transition-transform ${openIndex === idx ? 'rotate-90' : ''}`}>▶</span>
          </button>
          {openIndex === idx && (
            <div className="px-6 pb-6 text-gray-400 leading-relaxed animate-fade-in">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
