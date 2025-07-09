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
                { name: "Software Development", href: "/software-development" },
                { name: "Web Development", href: "/web-Development" },
                { name: "UI/UX Design", href: "/UIUX-Design" },
                { name: "Cyber Security", href: "/Cyber-Security" },
                { name: "Cloud Solutions", href: "/Cloud-Solutions" },
                { name: "IT Support", href: "/IT-Support" },
                { name: "Integrations", href: "/Integrations" },
                { name: "IT Infrastructure", href: "/IT-Infrastructure" },
                { name: "Mobile App Development", href: "/Mobile-App-Development" },
                { name: "Mobile Application Service", href: "/Mobile-Application-Service" },
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
                <div>+91 9016753422</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Email</div>
                <div>Support@gnjworldwide.com</div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 