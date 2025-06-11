"use client"

import { motion } from "framer-motion"

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h1 
          className="text-6xl md:text-7xl font-light mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Solutions
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-400 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover our comprehensive range of technology solutions designed to drive your business forward.
        </motion.p>
      </div>
    </div>
  )
} 