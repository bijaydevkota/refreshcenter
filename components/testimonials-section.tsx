"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Jennifer K.",
    role: "Member for 2 years",
    content:
      "Joining this fitness club was one of the best decisions I've made. The facilities are top-notch, and the trainers are incredibly supportive. I've achieved fitness goals I never thought possible!",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "David M.",
    role: "Member for 1 year",
    content:
      "The swimming pool is Olympic quality, and the spa services are the perfect way to recover after an intense workout. The staff is friendly and the atmosphere is always welcoming.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Sophia L.",
    role: "Member for 3 years",
    content:
      "I've been to many fitness clubs, but none compare to this one. The variety of classes, quality of equipment, and expertise of the trainers make it stand out. It's become my second home!",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Robert T.",
    role: "Member for 6 months",
    content:
      "As a beginner, I was intimidated at first, but the staff made me feel comfortable from day one. The personalized approach to fitness has helped me make incredible progress in just six months.",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <section ref={ref} className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Members Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take our word for it. Hear from our satisfied members.
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-12 max-w-4xl"
        >
          <div className="relative overflow-hidden px-4 py-8">
            <div className="absolute left-0 top-8 z-10 h-full">
              <Button variant="ghost" size="icon" onClick={prev} className="h-12 w-12 rounded-full">
                <ChevronLeft className="h-6 w-6" />
                <span className="sr-only">Previous testimonial</span>
              </Button>
            </div>

            <AnimatePresence mode="wait" custom={current}>
              <motion.div
                key={current}
                custom={current}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="px-8"
              >
                <Card className="border-none bg-transparent shadow-none">
                  <CardHeader className="flex items-center justify-center pb-2">
                    <Quote className="h-12 w-12 text-primary opacity-20" />
                  </CardHeader>
                  <CardContent className="pb-4 pt-0 text-center">
                    <p className="text-lg font-medium italic md:text-xl">{testimonials[current].content}</p>
                  </CardContent>
                  <CardFooter className="flex flex-col items-center justify-center space-y-2">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full">
                      <Image
                        src={testimonials[current].image || "/placeholder.svg"}
                        alt={testimonials[current].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardDescription className="text-center">
                      <div className="text-base font-semibold">{testimonials[current].name}</div>
                      <div className="text-sm text-muted-foreground">{testimonials[current].role}</div>
                    </CardDescription>
                  </CardFooter>
                </Card>
              </motion.div>
            </AnimatePresence>

            <div className="absolute right-0 top-8 z-10 h-full">
              <Button variant="ghost" size="icon" onClick={next} className="h-12 w-12 rounded-full">
                <ChevronRight className="h-6 w-6" />
                <span className="sr-only">Next testimonial</span>
              </Button>
            </div>
          </div>

          <div className="mt-4 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                onClick={() => setCurrent(index)}
                className={`h-3 w-3 rounded-full p-0 ${current === index ? "bg-primary" : "bg-muted-foreground/30"}`}
              >
                <span className="sr-only">Go to testimonial {index + 1}</span>
              </Button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
