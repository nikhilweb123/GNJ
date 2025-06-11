import { useAnimation } from "framer-motion"

export const useTextShadowAnimation = (duration: number) => {
  const controls = useAnimation()
  
  return {
    animate: controls,
    initial: {
      textShadow: [
        "0 0 20px rgba(255, 255, 255, 0.5)",
        "0 0 40px rgba(255, 255, 255, 0.8)",
        "0 0 20px rgba(255, 255, 255, 0.5)",
      ],
    },
    transition: {
      textShadow: {
        duration,
        repeat: Number.POSITIVE_INFINITY,
      }
    }
  }
}

export const useRotationAnimation = (duration: number) => {
  const controls = useAnimation()
  
  return {
    animate: controls,
    initial: {
      rotate: [0, 180, 360],
    },
    transition: {
      duration,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut"
    }
  }
} 