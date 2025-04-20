"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dumbbell, Waves, Sparkles, ArrowRight } from "lucide-react"

const services = [
  {
    title: "State-of-the-Art Gym",
    description:
      "Our gym features the latest equipment, free weights, and functional training areas to help you achieve your fitness goals.",
    icon: <Dumbbell className="h-10 w-10 text-primary" />,
    image: "/cardio1.jpg",
    link: "/services/gym",
  },
  {
    title: "Indoor Swimming Pool",
    description:
      "Dive into our Indoor swimming pool with dedicated lanes for lap swimming, aqua fitness classes, and recreational swimming.",
    icon: <Waves className="h-10 w-10 text-primary" />,
    image: "/swim1.jpg",
    link: "/services/pool",
  },
  {
    title: "Luxury Spa & Wellness",
    description:
      "Relax and rejuvenate in our luxury spa featuring saunas, steam rooms, jacuzzis, and a range of massage and treatment options.",
    icon: <Sparkles className="h-10 w-10 text-primary" />,
    image: "/spa1.jpg",
    link: "/services/spa",
  },
]

export default function ServicesSection() {
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Premium Services</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Experience the best in fitness, swimming, and wellness at our state-of-the-art facility.
            </p>
          </div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto mt-12 grid gap-8 md:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="overflow-hidden">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="mb-2">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild>
                    <Link href={service.link}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <Button variant="outline" asChild className="flex jsutify-center w-2/12 mx-auto mt-8">
                    <Link href="/services">
                     See More Services <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
    </section>
  )
}
