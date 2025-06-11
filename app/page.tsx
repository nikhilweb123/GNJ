"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Menu, Phone, Search, Bookmark, ArrowRight } from "lucide-react"

export default function Component() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const [currentSection, setCurrentSection] = useState(0)

  // Transform values for different animations
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.8])

  const butterflyX = useTransform(scrollYProgress, [0, 1], [0, 500])
  const butterflyY = useTransform(scrollYProgress, [0, 1], [0, -300])
  const butterflyRotate = useTransform(scrollYProgress, [0, 1], [0, 720])

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest < 0.12) setCurrentSection(0)
      else if (latest < 0.25) setCurrentSection(1)
      else if (latest < 0.4) setCurrentSection(2)
      else if (latest < 0.55) setCurrentSection(3)
      else if (latest < 0.7) setCurrentSection(4)
      else if (latest < 0.85) setCurrentSection(5)
      else setCurrentSection(6)
    })

    return () => unsubscribe()
  }, [scrollYProgress])

  const services = [
    {
      title: "Software Development",
      description:
        "Custom software solutions tailored to your business needs with cutting-edge technologies and best practices.",
      gradient: "from-purple-400 via-pink-400 to-blue-400",
    },
    {
      title: "Web Development",
      description: "Responsive and dynamic web applications built with modern frameworks for optimal performance and user experience",
      gradient: "from-blue-400 via-cyan-400 to-teal-400",
    },
    {
      title: "IT Support",
      description: "Comprehensive technical assistance and maintenance services to keep your systems running smoothly",
      gradient: "from-teal-400 via-green-400 to-cyan-400",
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user interfaces that enhance user satisfaction and drive conversion",
      gradient: "from-purple-400 via-blue-400 to-cyan-400",
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile solutions that connect users to your brand anywhere, anytime",
      gradient: "from-pink-400 via-purple-400 to-blue-400",
    },
    {
      title: "Integrations",
      description: "Seamless integration of third-party services and APIs to enhance functionality and streamline workflows",
      gradient: "from-cyan-400 via-blue-400 to-purple-400",
    },
    {
      title: "Cloud Solutions",
      description: "Scalable and secure cloud infrastructure setup and management for improved efficiency and reduced costs",
      gradient: "from-purple-400 via-pink-400 to-blue-400",
    },
    {
      title: "IT Infrastructure",
      description: "Design and implementation of robust IT infrastructure tailored to your organization's specific requirements",
      gradient: "from-blue-400 via-cyan-400 to-teal-400",
    },
    {
      title: "Cyber Security",
      description: "Comprehensive security solutions to protect your digital assets from threats and ensure data integrity",
      gradient: "from-teal-400 via-green-400 to-cyan-400",
    },
    {
      title: "Mobile Application Service",
      description: "Ongoing support, maintenance, and enhancement services for your mobile applications",
      gradient: "from-purple-400 via-blue-400 to-cyan-400",
    },
  ]

  const clients = [
    "IKEA",
    "Star",
    "LuLu GROUP INTERNATIONAL",
    "GARMIN",
    "FEDERAL BANK",
    "Marriott",
    "Joyalukkas",
    "Synthite",
    "alyasra FASHION",
    "GEOJIT",
    "Middlesex University Dubai",
    "Al-Qatami GROUP",
    "ETIHAD RAIL",
    "AGAPPE",
    "LANDMARK Group",
  ]

  return (
    <div ref={containerRef} className="bg-black text-white overflow-hidden">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="text-2xl font-bold"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              GNJ
            </motion.div>
              <div className="hidden md:flex items-center space-x-8">
                {[
                  { name: "Services", link: "#services" },
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
                      className="hover:text-gray-300 transition-colors relative"
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


            <div className="flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                <Phone className="w-5 h-5" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.1, rotate: -5 }}>
                <Search className="w-5 h-5" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                <Bookmark className="w-5 h-5" />
              </motion.div>
              <Menu className="w-6 h-6 md:hidden" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Video Banner */}
      <motion.section
        className="relative h-screen flex items-center justify-center"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop className="w-full h-full object-cover opacity-30">
            <source src="/placeholder.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-8"
          >
            <motion.div
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 mb-8"
              whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(255, 255, 255, 0.1)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h2 className="text-lg text-gray-300 mb-4">Welcome to GNJ</h2>
              <div className="flex items-center justify-center space-x-4 mb-4">
                <motion.span
                  className="text-3xl font-bold"
                  animate={{
                    textShadow: ["0 0 0px #fff", "0 0 20px #fff", "0 0 0px #fff"],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  GNJ
                </motion.span>
                <motion.span
                  className="text-2xl"
                  animate={{ rotate: [0, 180, 360] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  +
                </motion.span>
                <motion.span
                  className="text-3xl font-bold text-blue-500"
                  animate={{
                    color: ["#3B82F6", "#8B5CF6", "#EF4444", "#3B82F6"],
                  }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                >
                  Cyber Solutions
                </motion.span>
              </div>
              <p className="text-gray-400">Empowering Innovation Together</p>
            </motion.div>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-light mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
              className="bg-gradient-to-r from-white via-gray-300 to-white bg-[length:200%_100%] bg-clip-text text-transparent"
            >
              Welcome to GNJ,
            </motion.span>
            <br />
            <span className="text-gray-400">Team GNJ!</span>
          </motion.h1>

          <motion.button
            className="inline-flex items-center space-x-2 text-lg hover:text-gray-300 transition-colors border border-white/30 px-6 py-3 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(255, 255, 255, 0.1)",
              borderColor: "rgba(255, 255, 255, 0.8)",
            }}
          >
            <span>Read more</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Next Story Reel */}
        <motion.div
          className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-sm rounded-lg p-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-sm text-gray-400 mb-2">Next</div>
          <div className="font-semibold">Story Reel</div>
          <div className="flex space-x-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className={`w-8 h-1 rounded ${i === 0 ? "bg-white" : "bg-gray-600"}`}
                animate={i === 0 ? { scaleX: [1, 0.5, 1] } : {}}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Animated Elements */}
      <motion.div
        className="fixed top-1/2 left-1/4 z-30 pointer-events-none"
        style={{
          x: butterflyX,
          y: butterflyY,
          rotate: butterflyRotate,
        }}
      >
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 20, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="w-12 h-12 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full opacity-60"
        />
      </motion.div>

      {/* Mission Statement Section */}
      <AnimatedSection delay={0.2}>
        <div className="max-w-6xl mx-auto text-center px-6 py-32">
          <motion.h2
            className="text-5xl md:text-7xl font-light leading-tight"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            We believe in a world where{" "}
            <motion.span
              className="text-gray-400"
              whileInView={{ color: ["#9CA3AF", "#FFFFFF", "#9CA3AF"] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              technology fosters
            </motion.span>{" "}
            your everyday experiences.{" "}
            <motion.span
              className="text-gray-400"
              whileInView={{ color: ["#9CA3AF", "#FFFFFF", "#9CA3AF"] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
            >
              And our mission is to make it happen!
            </motion.span>
          </motion.h2>
        </div>
      </AnimatedSection>

      {/* Design Section */}
      <AnimatedSection delay={0.1}>
        <div className="min-h-screen flex items-center justify-center px-6 relative">
          <div className="max-w-6xl mx-auto text-center relative">
            <motion.h2
              className="text-8xl md:text-9xl lg:text-[12rem] font-light text-white"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
              animate={{
                textShadow: [
                  "0 0 20px rgba(255, 255, 255, 0.5)",
                  "0 0 40px rgba(255, 255, 255, 0.8)",
                  "0 0 20px rgba(255, 255, 255, 0.5)",
                ],
              }}
              transition={{
                textShadow: {
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                },
              }}
            >
              Design
            </motion.h2>

            {/* Floating Butterfly Animation */}
            <motion.div
              className="absolute top-1/4 right-1/4 w-16 h-16"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              viewport={{ once: true }}
              animate={{
                x: [0, 50, -30, 20, 0],
                y: [0, -30, 20, -40, 0],
                rotate: [0, 15, -10, 25, 0],
              }}
              transition={{
                duration: 12,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <motion.div
                className="relative"
                animate={{
                  scale: [1, 1.2, 0.9, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                {/* Butterfly Wings */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <div className="w-8 h-12 bg-gradient-to-br from-purple-400 via-pink-500 to-blue-500 rounded-full transform -rotate-12 absolute -left-2" />
                  <div className="w-6 h-8 bg-gradient-to-br from-blue-400 via-cyan-500 to-purple-400 rounded-full transform -rotate-12 absolute -left-1 top-2" />
                </motion.div>
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    rotate: [0, -5, 5, 0],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 0.1,
                  }}
                >
                  <div className="w-8 h-12 bg-gradient-to-bl from-purple-400 via-pink-500 to-blue-500 rounded-full transform rotate-12 absolute -right-2" />
                  <div className="w-6 h-8 bg-gradient-to-bl from-blue-400 via-cyan-500 to-purple-400 rounded-full transform rotate-12 absolute -right-1 top-2" />
                </motion.div>
                {/* Butterfly Body */}
                <div className="w-1 h-12 bg-gray-800 rounded-full absolute left-1/2 transform -translate-x-1/2" />
              </motion.div>
            </motion.div>

            {/* Floating Design Elements */}
            <motion.div
              className="absolute top-1/3 left-1/4 w-20 h-20"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <div className="w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-30" />
            </motion.div>

            <motion.div
              className="absolute bottom-1/4 right-1/3 w-12 h-12"
              animate={{
                y: [-20, 20, -20],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <div className="w-full h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-40" />
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Build Section */}
      <AnimatedSection delay={0.2}>
        <div className="min-h-screen flex items-center justify-center px-6 relative">
          <div className="max-w-6xl mx-auto text-center relative">
            <motion.h2
              className="text-8xl md:text-9xl lg:text-[12rem] font-light text-white"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
              animate={{
                textShadow: [
                  "0 0 30px rgba(6, 182, 212, 0.6)",
                  "0 0 60px rgba(139, 92, 246, 0.8)",
                  "0 0 30px rgba(6, 182, 212, 0.6)",
                ],
              }}
              transition={{
                textShadow: {
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                },
              }}
            >
              Build
            </motion.h2>

            {/* Floating Bubble Elements */}
            <motion.div
              className="absolute top-1/2 left-0 transform -translate-y-1/2"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: true }}
              animate={{
                y: [-30, 30, -30],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <div className="w-32 h-32 border-2 border-cyan-400 rounded-full opacity-40" />
            </motion.div>

            <motion.div
              className="absolute top-1/4 right-1/4 transform -translate-y-1/2"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
              viewport={{ once: true }}
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-30" />
            </motion.div>

            <motion.div
              className="absolute bottom-1/3 left-1/3"
              animate={{
                x: [-20, 20, -20],
                y: [-10, 10, -10],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <div className="w-16 h-16 border border-purple-400 rounded-full opacity-50" />
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Create Section */}
      <AnimatedSection delay={0.3}>
        <div className="min-h-screen flex items-center justify-center px-6 relative">
          <div className="max-w-6xl mx-auto text-center relative">
            <motion.h2
              className="text-8xl md:text-9xl lg:text-[12rem] font-light text-white"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
              animate={{
                textShadow: [
                  "0 0 25px rgba(236, 72, 153, 0.6)",
                  "0 0 50px rgba(168, 85, 247, 0.8)",
                  "0 0 25px rgba(236, 72, 153, 0.6)",
                ],
              }}
              transition={{
                textShadow: {
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                },
              }}
            >
              Create
            </motion.h2>

            {/* Floating Creative Elements */}
            <motion.div
              className="absolute top-1/4 left-1/4"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <div className="w-6 h-6 bg-yellow-400 transform rotate-45 opacity-60" />
            </motion.div>

            <motion.div
              className="absolute top-1/3 right-1/4"
              animate={{
                y: [-25, 25, -25],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 7,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <div className="w-8 h-8 bg-green-400 rounded-full opacity-50" />
            </motion.div>

            <motion.div
              className="absolute bottom-1/4 left-1/3"
              animate={{
                x: [-30, 30, -30],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <div className="w-4 h-12 bg-pink-400 rounded-full opacity-70" />
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Innovate Section */}
      <AnimatedSection delay={0.4}>
        <div className="min-h-screen flex items-center justify-center px-6 relative">
          <div className="max-w-6xl mx-auto text-center relative">
            <motion.h2
              className="text-7xl md:text-8xl lg:text-[10rem] font-light text-white"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              viewport={{ once: true }}
              animate={{
                textShadow: [
                  "0 0 35px rgba(34, 197, 94, 0.6)",
                  "0 0 70px rgba(59, 130, 246, 0.8)",
                  "0 0 35px rgba(34, 197, 94, 0.6)",
                ],
              }}
              transition={{
                textShadow: {
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                },
              }}
            >
              Innovate
            </motion.h2>

            {/* Tech-inspired floating elements */}
            <motion.div
              className="absolute top-1/4 right-1/4"
              animate={{
                rotate: [0, 90, 180, 270, 360],
                scale: [1, 1.1, 1, 1.1, 1],
              }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <div className="w-12 h-12 border-2 border-cyan-400 opacity-60" />
            </motion.div>

            <motion.div
              className="absolute bottom-1/3 left-1/4"
              animate={{
                y: [-20, 0, 20, 0, -20],
                opacity: [0.4, 0.8, 0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 transform rotate-45 opacity-70" />
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Our Story Section */}
      <AnimatedSection>
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-6xl md:text-7xl font-light mb-8">Our Story</h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                In a world brimming with possibilities, we sprouted, seizing our destiny to create an extraordinary
                narrative - a tale that encapsulates laughter, tears, challenges, and triumphs.
              </p>
              <motion.button
                className="inline-flex items-center space-x-2 text-lg border border-white/30 px-6 py-3 rounded-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(255, 255, 255, 0.1)",
                  borderColor: "rgba(255, 255, 255, 0.8)",
                }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span>About us</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>

            <motion.div
              className="relative flex items-center justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              {/* 3D Holographic Ring */}
              <motion.div
                className="relative w-96 h-96"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"
                  style={{
                    background: "conic-gradient(from 0deg, #06b6d4, #8b5cf6, #ec4899, #06b6d4)",
                    borderRadius: "50%",
                    padding: "4px",
                  }}
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(6, 182, 212, 0.5)",
                      "0 0 40px rgba(139, 92, 246, 0.5)",
                      "0 0 20px rgba(236, 72, 153, 0.5)",
                      "0 0 20px rgba(6, 182, 212, 0.5)",
                    ],
                  }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                >
                  <div className="w-full h-full bg-black rounded-full" />
                </motion.div>

                {/* Stats */}
                <motion.div
                  className="absolute -left-16 top-20 bg-gray-800/80 backdrop-blur-sm rounded-lg p-4"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-2xl font-bold">450+</div>
                  <div className="text-sm text-gray-400">Projects</div>
                </motion.div>

                <motion.div
                  className="absolute -right-20 -top-8 bg-gray-800/80 backdrop-blur-sm rounded-lg p-4"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-2xl font-bold">600+</div>
                  <div className="text-sm text-gray-400">International</div>
                  <div className="text-sm text-gray-400">Clients</div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Services Section */}
      <section className="py-32 bg-gray-50 text-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-6xl md:text-7xl font-light mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Services
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden rounded-xl">
                  <motion.div
                    className={`h-48 bg-gradient-to-br ${service.gradient} opacity-80`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                <div className="mt-6">
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <motion.button
                    className="inline-flex items-center space-x-2 text-blue-600 font-medium"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <AnimatedSection>
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <motion.h2
              className="text-6xl md:text-7xl font-light"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              Clients
            </motion.h2>

            <motion.p
              className="text-xl text-gray-300"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our clients are everything to us; so are we to them.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                className="flex items-center justify-center p-6 border border-gray-800 rounded-lg hover:border-gray-600 transition-colors"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(255, 255, 255, 0.1)",
                }}
              >
                <span className="text-white font-medium text-center text-sm">{client}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="inline-flex items-center space-x-2 text-lg border border-white/30 px-8 py-4 rounded-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(255, 255, 255, 0.1)",
                borderColor: "rgba(255, 255, 255, 0.8)",
              }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span>View all clients</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection>
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-6xl md:text-7xl font-light mb-4">Get started now!</h2>
              <p className="text-xl text-gray-400">It takes less than a minute of your time.</p>
            </motion.div>

            <motion.button
              className="mt-8 lg:mt-0 inline-flex items-center space-x-2 text-lg border border-white/30 px-8 py-4 rounded-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(255, 255, 255, 0.1)",
                borderColor: "rgba(255, 255, 255, 0.8)",
              }}
            >
              <span>Request a quote</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
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
                    className="block text-gray-400 hover:text-white transition-colors"
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
                    className="block text-gray-400 hover:text-white transition-colors"
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
                      className="block text-gray-400 hover:text-white transition-colors"
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
                <div>
                  <div className="text-sm text-gray-400 mb-1">HR Enquiry</div>
                  <div>+91 480 2733 999</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Whatsapp (Sales)</div>
                  <div>+91 8606 483 399</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed w-1 h-1 bg-white rounded-full opacity-20 pointer-events-none"
          style={{
            top: `${10 + i * 8}%`,
            left: `${5 + i * 7}%`,
          }}
          animate={{
            y: [-30, 30, -30],
            x: [-20, 20, -20],
            opacity: [0.1, 0.8, 0.1],
          }}
          transition={{
            duration: 4 + i * 0.3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}

      {/* Progress Indicator */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40">
        <div className="flex flex-col space-y-3">
          {[0, 1, 2, 3, 4, 5, 6].map((section) => (
            <motion.div
              key={section}
              className={`w-2 h-6 rounded-full transition-all duration-300 ${
                currentSection === section ? "bg-white" : "bg-gray-600"
              }`}
              whileHover={{ scale: 1.3 }}
              animate={
                currentSection === section
                  ? {
                      boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
                    }
                  : {}
              }
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// Reusable Animated Section Component
function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1, delay }}
      className="relative"
    >
      {children}
    </motion.section>
  )
}
