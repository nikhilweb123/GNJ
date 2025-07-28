"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-4 mt-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <div className="space-y-4">
              {[
                { name: "About", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Industries", href: "/industries" },
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
              {/* Social Media Icons */}
              <div className="flex items-center space-x-8 mt-4">
                <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-blue-700 transition">
                  <svg width="30" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
                </a>
                <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-blue-600 transition">
                  <svg width="30" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12v9.294h6.116c.73 0 1.323-.593 1.323-1.326v-21.349c0-.734-.593-1.326-1.324-1.326z"/></svg>
                </a>
                <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-blue-400 transition">
                  <svg width="30" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482c-4.083-.205-7.697-2.162-10.125-5.134a4.822 4.822 0 0 0-.664 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636a9.936 9.936 0 0 0 2.457-2.548z"/></svg>
                </a>
                <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-pink-500 transition">
                  <svg width="30" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.678 1.325-.991.991-1.267 2.402-1.325 3.678-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.325 3.678.991.991 2.402 1.267 3.678 1.325 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.678-1.325.991-.991 1.267-2.402 1.325-3.678.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.267-3.678-1.325-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                </a>
              </div>
            </div>
          </div>  
        </div>
      </div>
      {/* Policy Links Row with Copyright Right-Aligned */}
      <div className="border-t border-gray-200 bg-gray-50 py-4 w-full mt-3">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-2 text-xs text-gray-400 mt-2 sm:mt-0">
            <img src="/Logo.png" alt="GNJ Worldwide Logo" className="h-5 w-auto" />
            <span>© 2025 GNJ Worldwide | <a href="https://konceptsolution.in/" target="_blank" rel="noopener noreferrer">Designed by Koncept Solution</a></span>
          </div>
          <div className="flex flex-wrap gap-12">
            <a href="#" className="hover:underline">User Policy</a>
            <a href="#" className="hover:underline">Terms & Conditions</a>
            <a href="#" className="hover:underline">Product Policy</a>
            <a href="#" className="hover:underline">Refund Policy</a>
            <a href="#" className="hover:underline">Guidelines</a>
          </div>
        </div>
      </div>
    </footer>
  )
}