"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Instagram, Facebook, Twitter } from "lucide-react"

const trainers = [
  {
    name: "Alex Johnson",
    role: "Head Fitness Trainer",
    bio: "Certified personal trainer with 10+ years of experience specializing in strength training and HIIT workouts.",
    image: "/trainer1.jpg",
    social: {
      instagram: "#",
      facebook: "#",
      twitter: "#",
    },
  },
  {
    name: "Sarah Williams",
    role: "Yoga & Pilates Instructor",
    bio: "Experienced yoga instructor with certifications in various yoga styles and pilates, focusing on mind-body connection.",
    image: "/trainer2.jpg",
    social: {
      instagram: "#",
      facebook: "#",
      twitter: "#",
    },
  },
  {
    name: "Michael Chen",
    role: "Swimming Coach",
    bio: "Former competitive swimmer with extensive coaching experience for all levels from beginners to advanced swimmers.",
    image: "/trainer3.png",
    social: {
      instagram: "#",
      facebook: "#",
      twitter: "#",
    },
  },
  {
    name: "Michael Chen",
    role: "Swimming Coach",
    bio: "Former competitive swimmer with extensive coaching experience for all levels from beginners to advanced swimmers.",
    image: "/trainer4.webp",
    social: {
      instagram: "#",
      facebook: "#",
      twitter: "#",
    },
  },
]

export default function TrainersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Expert Trainers</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our certified professionals are here to guide you on your fitness journey.
            </p>
          </div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {trainers.map((trainer, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="overflow-hidden">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={trainer.image || "/placeholder.svg"}
                    alt={trainer.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{trainer.name}</CardTitle>
                  <CardDescription className="font-medium text-primary">{trainer.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{trainer.bio}</p>
                </CardContent>
                <CardFooter className="flex justify-start space-x-4">
                  <a href={trainer.social.instagram} className="text-muted-foreground hover:text-primary">
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a href={trainer.social.facebook} className="text-muted-foreground hover:text-primary">
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a href={trainer.social.twitter} className="text-muted-foreground hover:text-primary">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
