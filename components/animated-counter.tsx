"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  end: number
  duration?: number
  delay?: number
}

export default function AnimatedCounter({ end, duration = 2, delay = 0 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      const timeout = setTimeout(() => {
        let startTime: number
        let animationFrame: number

        const animate = (timestamp: number) => {
          if (!startTime) startTime = timestamp
          const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
          const currentCount = Math.floor(progress * end)

          setCount(currentCount)

          if (progress < 1) {
            animationFrame = requestAnimationFrame(animate)
          } else {
            setCount(end)
            setHasAnimated(true)
          }
        }

        animationFrame = requestAnimationFrame(animate)

        return () => {
          cancelAnimationFrame(animationFrame)
        }
      }, delay * 1000)

      return () => clearTimeout(timeout)
    }
  }, [isInView, end, duration, delay, hasAnimated])

  return (
    <div ref={ref} className="text-4xl font-bold md:text-5xl">
      {count.toLocaleString()}+
    </div>
  )
}
