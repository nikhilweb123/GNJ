"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <div className="space-y-4">
              {[
                { name: "About", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Industries", href: "/industries" },
                { name: "Works", href: "/works" },
                { name: "Careers", href: "/careers" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <Link key={item.name} href={item.href} passHref legacyBehavior>
                  <motion.a
                    className="block text-gray-400 hover:text-black transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {item.name}
                  </motion.a>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <div className="space-y-4">
              {[
                
                { name: "Cyber Security", href: "/Cyber-Security" },
                { name: "IT Support", href: "/IT-Support" },
                { name: "IT Infrastructure", href: "/IT-Infrastructure" },
                { name: "Refurbished, Rental Solutions", href: "#" },
                { name: "Helpdesk Solutions", href: "/IT-Support" },
              ].map((item) => (
                <Link key={item.name} href={item.href} passHref legacyBehavior>
                  <motion.a
                    className="block text-gray-400 hover:text-black transition-colors"
                    whileHover={{ x: 6 }}
                  >
                    {item.name}
                  </motion.a>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Other</h3>
            <div className="space-y-4">
              {["Partnership", "Awards and Recognitions", "Insights", "Blogs", "Resource", "Augmentation"].map(
                (item) => (
                  <motion.a
                    key={item}
                    href="#"
                    className="block text-gray-400 hover:text-black transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.a>
                ),
              )}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Connect</h3>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-400 mb-1">General Enquiry</div>
                <div>+91 8446419217</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Sales Enquiry</div>
                <div>+91 9099126937</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Email</div>
                <div>Support@gnjworldwide.com</div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      {/* Policy Links Row with Copyright Right-Aligned */}
      <div className="border-t border-gray-200 bg-gray-50 py-4 w-full mt-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between text-sm text-gray-500">
          <div className="flex flex-wrap gap-12">
            <a href="#" className="hover:underline">User Policy</a>
            <a href="#" className="hover:underline">Terms & Conditions</a>
            <a href="#" className="hover:underline">Product Policy</a>
            <a href="#" className="hover:underline">Refund Policy</a>
            <a href="#" className="hover:underline">Guidelines</a>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400 mt-2 sm:mt-0">
            <img src="/Logo.png" alt="GNJ Worldwide Logo" className="h-5 w-auto" />
            <span>© 2025 GNJ Worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  )
} 