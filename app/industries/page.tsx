"use client"

import { motion } from "framer-motion"

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
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
          className="text-xl text-gray-400 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We provide innovative technology solutions across various industries, helping businesses transform and grow.
        </motion.p>
      </div>
    </div>
  )
} 