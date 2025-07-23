"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Menu, Phone, Search, Bookmark, X } from "lucide-react"
import { useState, useRef } from "react"
import { services as servicesData } from "../services/Services";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const searchInputRef = useRef(null)
  const [searchQuery, setSearchQuery] = useState("");

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About us", link: "/about" },
    { name: "Solutions", link: "/solutions" },
    { name: "Services", link: "/services" },
    { name: "Industries", link: "/industries" },
    { name: "Technology", link: "/technology" },
    { name: "Careers", link: "/careers" },
    { name: "Contact us", link: "/contact" },
  ]

  // Filter menu items for search
  const filteredMenuItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter services for search
  const filteredServices = servicesData.filter((service: { title: string }) =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
        <a href="/">
          <motion.div
            className="flex items-center cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <img
              src="/Logo.png"
              alt="GNJ Worldwide Logo"
              className="h-16 w-auto mr-2"
              onError={(e) => {
                e.currentTarget.onerror = null;
              }}
            />
          </motion.div>
        </a>
          
          <div className="hidden md:flex items-center space-x-11">
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
              <button
                aria-label="Open search"
                className="focus:outline-none"
                onClick={() => setShowSearch(true)}
              >
                <Search className="w-6 h-6" />
              </button>
            </motion.div>
            {/* Schedule Meeting Button (Desktop) */}
            <a
              href="/contact"
              className="hidden md:inline-flex items-center px-3 py-1 rounded-full font-semibold bg-gradient-to-r from-pink-500 via-yellow-400 to-orange-500 text-black shadow-lg hover:from-pink-600 hover:to-orange-600 transition-colors border-2 border-white/10 ml-2"
              style={{ letterSpacing: '0.03em' }}
            >
              Schedule Meeting
            </a>
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

      {/* Search Overlay */}
      {showSearch && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 backdrop-blur-sm">
          <div className="mt-32 bg-white rounded-2xl flex flex-col items-stretch px-4 py-4 shadow-lg w-full max-w-md">
            <div className="flex items-center mb-2">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search..."
                className="flex-1 px-4 py-2 rounded-full outline-none text-black bg-gray-100"
                autoFocus
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
              <button
                aria-label="Close search"
                className="ml-2 text-black hover:text-red-500"
                onClick={() => { setShowSearch(false); setSearchQuery(""); }}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            {searchQuery && (
              <div className="bg-white rounded-xl shadow border border-gray-200 divide-y divide-gray-100">
                {filteredMenuItems.length > 0 || filteredServices.length > 0 ? (
                  <>
                    {filteredMenuItems.map(item => (
                      <a
                        key={item.name}
                        href={item.link}
                        className="block px-4 py-2 text-black hover:bg-gray-100 rounded-xl transition-colors"
                        onClick={() => { setShowSearch(false); setSearchQuery(""); }}
                      >
                        {item.name}
                      </a>
                    ))}
                    {filteredServices.map((service: { title: string; link: string }) => (
                      <a
                        key={service.title}
                        href={service.link}
                        className="block px-4 py-2 text-black hover:bg-gray-100 rounded-xl transition-colors"
                        onClick={() => { setShowSearch(false); setSearchQuery(""); }}
                      >
                        {service.title}
                      </a>
                    ))}
                  </>
                ) : (
                  <div className="px-4 py-2 text-gray-400">No results found.</div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
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
              {/* Schedule Meeting Button (Mobile) */}
              <a
                href="/contact"
                className="mt-4 ml-auto flex items-center justify-center px-3 py-1.5 rounded-full font-medium bg-gradient-to-r from-pink-500 via-yellow-400 to-orange-500 text-black shadow hover:from-pink-600 hover:to-orange-600 transition-colors border border-white/10 text-base"
                style={{ letterSpacing: '0.03em', maxWidth: 'fit-content' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Schedule Meeting
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
} 