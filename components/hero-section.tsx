"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export default function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative w-full overflow-hidden bg-black text-white" style={{ height: "100vh" }}>
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner2.webp"
          alt="Fitness club hero image"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="container relative z-10 flex h-full flex-col items-center justify-center px-4 text-center md:px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            ELEVATE YOUR <span className="text-primary">FITNESS</span> JOURNEY
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-zinc-200 md:text-xl">
            Premium facilities, expert trainers, and a supportive community to help you achieve your fitness goals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
        >
          <Button size="lg" asChild>
            <Link href="/membership">
              Join Now <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-white text-primary hover:bg-white/10" asChild>
            <Link href="/tour">
              <Play className="mr-2 h-4 w-4" /> Virtual Tour
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <p className="mb-2 text-sm">Scroll to explore</p>
            <div className="h-10 w-6 rounded-full border-2 border-white p-1">
              <motion.div
                className="h-2 w-2 rounded-full bg-white"
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
