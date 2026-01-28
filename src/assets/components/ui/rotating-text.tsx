"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

interface RotatingTextProps {
  texts: string[]
  interval?: number
  className?: string
}

export function RotatingText({
  texts,
  interval = 2000,
  className,
}: RotatingTextProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length)
    }, interval)

    return () => clearInterval(timer)
  }, [texts.length, interval])
  return (
    <span className={`inline-block ${className}`} style={{ overflow: 'visible' }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="inline-block"
          style={{ overflow: 'visible' }}
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
