"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card"

const industries = [
  {
    title: "Healthcare",
    description:
      "Digital transformation solutions for hospitals, clinics, and medical practices to improve patient care and streamline operations.",
    gradient: "from-red-400 via-pink-400 to-rose-400",
  },
  {
    title: "Finance & Banking",
    description:
      "Secure fintech solutions, digital banking platforms, and compliance systems for financial institutions and startups.",
    gradient: "from-green-400 via-emerald-400 to-teal-400",
  },
  {
    title: "E-commerce & Retail",
    description:
      "Online stores, inventory management systems, and customer engagement platforms to boost sales and customer satisfaction.",
    gradient: "from-blue-400 via-cyan-400 to-sky-400",
  },
  {
    title: "Education",
    description:
      "Learning management systems, educational apps, and digital classroom solutions for schools and training organizations.",
    gradient: "from-purple-400 via-violet-400 to-indigo-400",
  },
  {
    title: "Manufacturing",
    description:
      "Industrial IoT solutions, automation systems, and supply chain management tools to optimize production processes.",
    gradient: "from-orange-400 via-amber-400 to-yellow-400",
  },
  {
    title: "Real Estate",
    description:
      "Property management platforms, virtual tour solutions, and CRM systems for real estate agencies and developers.",
    gradient: "from-teal-400 via-cyan-400 to-blue-400",
  },
  {
    title: "Hospitality & Tourism",
    description:
      "Booking systems, guest management platforms, and mobile apps to enhance customer experience in hotels and restaurants.",
    gradient: "from-pink-400 via-rose-400 to-red-400",
  },
  {
    title: "Transportation & Logistics",
    description:
      "Fleet management systems, route optimization tools, and tracking solutions for shipping and delivery companies.",
    gradient: "from-indigo-400 via-blue-400 to-cyan-400",
  },
  {
    title: "Government & Public Sector",
    description:
      "Digital governance solutions, citizen service portals, and data management systems for government agencies.",
    gradient: "from-slate-400 via-gray-400 to-zinc-400",
  },
  {
    title: "Entertainment & Media",
    description:
      "Content management systems, streaming platforms, and digital marketing tools for media companies and creators.",
    gradient: "from-purple-400 via-pink-400 to-red-400",
  },
  {
    title: "Agriculture & Food",
    description:
      "Farm management software, supply chain tracking, and food safety systems for agricultural and food processing businesses.",
    gradient: "from-green-400 via-lime-400 to-emerald-400",
  },
  {
    title: "Legal Services",
    description:
      "Case management systems, document automation, and client portals for law firms and legal departments.",
    gradient: "from-blue-400 via-indigo-400 to-purple-400",
  },
  {
    title: "Non-Profit Organizations",
    description:
      "Donor management systems, volunteer platforms, and fundraising tools to help non-profits achieve their missions.",
    gradient: "from-rose-400 via-pink-400 to-purple-400",
  },
  {
    title: "Automotive",
    description:
      "Connected car solutions, dealership management systems, and automotive service platforms for the modern vehicle industry.",
    gradient: "from-gray-400 via-slate-400 to-zinc-400",
  },
  {
    title: "Energy & Utilities",
    description:
      "Smart grid solutions, energy management systems, and utility billing platforms for power and utility companies.",
    gradient: "from-yellow-400 via-orange-400 to-red-400",
  },
]

const industryFacts = {
  "Healthcare": "AI and IoT are revolutionizing patient care and hospital management.",
  "Finance & Banking": "Fintech adoption is growing rapidly with blockchain and digital wallets.",
  "E-commerce & Retail": "Personalized shopping experiences boost customer loyalty.",
  "Education": "EdTech is making learning accessible worldwide.",
  "Manufacturing": "Industry 4.0 is driving automation and smart factories.",
  "Real Estate": "Virtual tours and AI-driven CRMs are transforming property sales.",
  "Hospitality & Tourism": "Mobile apps and digital bookings enhance guest experiences.",
  "Transportation & Logistics": "Real-time tracking and route optimization save costs.",
  "Government & Public Sector": "Digital portals improve citizen engagement and transparency.",
  "Entertainment & Media": "Streaming and content management are key to digital media.",
  "Agriculture & Food": "IoT and data analytics improve crop yields and food safety.",
  "Legal Services": "Document automation and e-discovery streamline legal work.",
  "Non-Profit Organizations": "Digital fundraising and volunteer platforms increase impact.",
  "Automotive": "Connected vehicles and digital dealerships are the future.",
  "Energy & Utilities": "Smart grids and IoT enable efficient energy management."
}

function IndustryIcon() {
  return (
    <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
      <rect x="4" y="8" width="24" height="16" rx="4" fill="#fff" fillOpacity="0.15" />
      <rect x="10" y="14" width="12" height="4" rx="2" fill="#fff" fillOpacity="0.25" />
    </svg>
  )
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h1
          className="text-6xl md:text-7xl font-light mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Industries We Serve
        </motion.h1>
        <motion.p
          className="text-xl text-gray-400 mb-16 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We provide innovative technology solutions across diverse industries, helping businesses transform their
          operations, enhance customer experiences, and drive growth in the digital age.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <HoverCard key={industry.title}>
              <HoverCardTrigger asChild>
                <Card className="group relative overflow-hidden bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-blue-500 transition-all duration-300 cursor-pointer">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className={`w-14 h-14 rounded-lg flex items-center justify-center bg-gradient-to-br ${industry.gradient}`}>
                      <IndustryIcon />
                    </div>
                    <CardTitle className="text-white group-hover:text-blue-400 transition-colors duration-300">
                      {industry.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                      {industry.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </HoverCardTrigger>
              <HoverCardContent sideOffset={12} className="bg-gray-900 border-blue-500">
                <div className="font-semibold mb-2">Did you know?</div>
                <div className="text-sm text-gray-300">
                  {industryFacts[industry.title as keyof typeof industryFacts] || "Digital transformation is impacting every industry!"}
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>

        

        {/* Testimonials Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-light mb-10 text-center mt-10">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote: "GNJ delivered a robust digital platform for our hospital, improving patient engagement and operational efficiency.",
                name: "Dr. Meera Nair",
                role: "Hospital Director, Healthcare Industry",
              },
              {
                quote: "Their fintech expertise helped us launch a secure, user-friendly banking app ahead of schedule.",
                name: "Rohit Sharma",
                role: "CTO, Fintech Startup",
              },
              {
                quote: "The e-commerce solution GNJ built for us boosted our online sales by 40% in just six months!",
                name: "Anjali Patel",
                role: "Head of Digital, Retail Brand",
              },
            ].map((t, i) => (
              <div key={i} className="bg-gray-900 rounded-xl p-8 border border-gray-800 flex flex-col items-center text-center shadow-lg">
                <svg className="w-8 h-8 text-blue-500 mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8v12H6v-8c0-2.2 1.8-4 4-4zm16 0v12h-4v-8c0-2.2 1.8-4 4-4z" />
                </svg>
                <p className="text-gray-200 italic mb-6">{t.quote}</p>
                <div className="font-semibold text-white">{t.name}</div>
                <div className="text-blue-400 text-sm">{t.role}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* How We Work Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-center">How We Work</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { icon: "💡", title: "Consultation", desc: "We listen to your needs and analyze your business challenges." },
              { icon: "🧭", title: "Strategy", desc: "We design a tailored digital roadmap for your industry." },
              { icon: "⚙️", title: "Implementation", desc: "Our experts build and deploy robust, scalable solutions." },
              { icon: "🤝", title: "Support", desc: "We provide ongoing support and optimization for your success." },
            ].map((step, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl p-8 border border-gray-800 flex flex-col items-center text-center shadow-md">
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="font-semibold text-white mb-2">{step.title}</div>
                <div className="text-gray-400 text-sm">{step.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-light mb-6">Don't See Your Industry?</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            We work with businesses across all sectors. Our adaptable technology solutions can be customized to meet the
            unique needs of any industry.
          </p>
          <a href="/contact">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
              Contact Us for Industry Solutions
            </button>
          </a>
        </motion.div>
      </div>
    </div>
  )
}
