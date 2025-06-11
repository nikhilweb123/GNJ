"use client"

import { motion } from "framer-motion"
import { Menu, Phone, Search, Bookmark } from "lucide-react"

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-3xl text-[#ffffff] font-bold"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            GNJ Worldwide
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            {[
              
              { name: "Services", link: "/services" },
              { name: "Solutions", link: "/solutions" },
              { name: "Industries", link: "/industries" },
              { name: "Works", link: "/works" },
              { name: "About", link: "/about" },
              { name: "Careers", link: "/careers" },
              { name: "Contact", link: "/contact" },
            ].map((item) => (
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
            <Menu className="w-6 h-6 md:hidden" />
          </div>
        </div>
      </div>
    </nav>
  )
} 