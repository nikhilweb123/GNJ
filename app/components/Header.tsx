"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Menu, Phone, Search, Bookmark, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const menuItems = [
    { name: "Services", link: "/services" },
    { name: "Solutions", link: "/solutions" },
    { name: "Industries", link: "/industries" },
    { name: "Works", link: "/works" },
    { name: "About", link: "/about" },
    { name: "Careers", link: "/careers" },
    { name: "Contact", link: "/contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
        <a href="/">
          <motion.div
            className="text-3xl text-[#ffffff] font-bold cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            GNJ Worldwide
          </motion.div>
        </a>
          
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.link}
                className="text-white relative"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {item.name}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          <div className="flex text-white items-center space-x-8">
            <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
              <Phone className="w-6 h-6" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1, rotate: -5 }}>
              <Search className="w-6 h-6" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
              <Bookmark className="w-6 h-6" />
            </motion.div>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed top-[73px] right-0 w-64 h-screen bg-black/95 backdrop-blur-sm border-l border-gray-800 md:hidden"
          >
            <div className="flex flex-col p-6 space-y-6">
              {menuItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.link}
                  className="text-white text-lg"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
} 