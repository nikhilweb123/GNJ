"use client"

import { motion } from "framer-motion"

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
            <motion.div
              key={industry.title}
              className="group relative overflow-hidden rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.4 + index * 0.08,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              {/* Gradient border effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-300 -z-10`}
              />

              <div className="relative p-8 h-full flex flex-col">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${industry.gradient} mb-6 flex items-center justify-center`}
                >
                  <div className="w-6 h-6 bg-white/20 rounded-sm" />
                </div>

                <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  {industry.title}
                </h3>

                <p className="text-gray-400 leading-relaxed flex-grow group-hover:text-gray-300 transition-colors duration-300">
                  {industry.description}
                </p>

                <div className="mt-6 pt-4 border-t border-gray-800 group-hover:border-gray-700 transition-colors duration-300">
                  <span className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                    Explore solutions →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

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
          
        </motion.div>
      </div>
    </div>
  )
}
