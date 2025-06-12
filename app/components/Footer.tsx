"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <div className="space-y-4">
              {["About", "Services", "Industries", "Works", "Careers", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  className="block text-gray-400 hover:text-black transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <div className="space-y-4">
              {["Branding", "Experience Design", "Technology", "Digital Marketing"].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  className="block text-gray-400 hover:text-black transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {item}
                </motion.a>
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
                <div>+91 480 2733 111</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Sales Enquiry</div>
                <div>+91 480 2733 555</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Email</div>
                <div>info@webandcrafts.com</div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 