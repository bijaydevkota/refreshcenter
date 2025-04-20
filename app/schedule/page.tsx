"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dumbbell, Waves, Sparkles, ArrowRight } from "lucide-react"

const scheduleData = {
  monday: [
    { time: "06:00 - 07:00", class: "Yoga Flow", instructor: "Sarah Williams", location: "Studio 1", icon: "Sparkles" },
    {
      time: "08:00 - 09:00",
      class: "HIIT Training",
      instructor: "Alex Johnson",
      location: "Gym Floor",
      icon: "Dumbbell",
    },
    {
      time: "10:00 - 11:00",
      class: "Spin Class",
      instructor: "Michael Chen",
      location: "Spin Studio",
      icon: "Dumbbell",
    },
    { time: "12:00 - 13:00", class: "Pilates", instructor: "Emma Rodriguez", location: "Studio 2", icon: "Sparkles" },
    { time: "17:00 - 18:00", class: "Aqua Fitness", instructor: "Michael Chen", location: "Pool", icon: "Waves" },
    { time: "19:00 - 20:00", class: "Body Pump", instructor: "Alex Johnson", location: "Gym Floor", icon: "Dumbbell" },
  ],
  tuesday: [
    {
      time: "06:00 - 07:00",
      class: "Spin Class",
      instructor: "Michael Chen",
      location: "Spin Studio",
      icon: "Dumbbell",
    },
    { time: "08:00 - 09:00", class: "Pilates", instructor: "Emma Rodriguez", location: "Studio 2", icon: "Sparkles" },
    {
      time: "10:00 - 11:00",
      class: "Strength Training",
      instructor: "Alex Johnson",
      location: "Gym Floor",
      icon: "Dumbbell",
    },
    { time: "12:00 - 13:00", class: "Yoga Flow", instructor: "Sarah Williams", location: "Studio 1", icon: "Sparkles" },
    { time: "17:00 - 18:00", class: "Aqua Fitness", instructor: "Michael Chen", location: "Pool", icon: "Waves" },
    {
      time: "19:00 - 20:00",
      class: "HIIT Training",
      instructor: "Alex Johnson",
      location: "Gym Floor",
      icon: "Dumbbell",
    },
  ],
  wednesday: [
    { time: "06:00 - 07:00", class: "Yoga Flow", instructor: "Sarah Williams", location: "Studio 1", icon: "Sparkles" },
    { time: "08:00 - 09:00", class: "Body Pump", instructor: "Alex Johnson", location: "Gym Floor", icon: "Dumbbell" },
    { time: "10:00 - 11:00", class: "Aqua Fitness", instructor: "Michael Chen", location: "Pool", icon: "Waves" },
    { time: "12:00 - 13:00", class: "Pilates", instructor: "Emma Rodriguez", location: "Studio 2", icon: "Sparkles" },
    {
      time: "17:00 - 18:00",
      class: "Spin Class",
      instructor: "Michael Chen",
      location: "Spin Studio",
      icon: "Dumbbell",
    },
    {
      time: "19:00 - 20:00",
      class: "HIIT Training",
      instructor: "Alex Johnson",
      location: "Gym Floor",
      icon: "Dumbbell",
    },
  ],
  thursday: [
    {
      time: "06:00 - 07:00",
      class: "Spin Class",
      instructor: "Michael Chen",
      location: "Spin Studio",
      icon: "Dumbbell",
    },
    { time: "08:00 - 09:00", class: "Yoga Flow", instructor: "Sarah Williams", location: "Studio 1", icon: "Sparkles" },
    {
      time: "10:00 - 11:00",
      class: "Strength Training",
      instructor: "Alex Johnson",
      location: "Gym Floor",
      icon: "Dumbbell",
    },
    { time: "12:00 - 13:00", class: "Aqua Fitness", instructor: "Michael Chen", location: "Pool", icon: "Waves" },
    { time: "17:00 - 18:00", class: "Pilates", instructor: "Emma Rodriguez", location: "Studio 2", icon: "Sparkles" },
    { time: "19:00 - 20:00", class: "Body Pump", instructor: "Alex Johnson", location: "Gym Floor", icon: "Dumbbell" },
  ],
  friday: [
    {
      time: "06:00 - 07:00",
      class: "HIIT Training",
      instructor: "Alex Johnson",
      location: "Gym Floor",
      icon: "Dumbbell",
    },
    { time: "08:00 - 09:00", class: "Pilates", instructor: "Emma Rodriguez", location: "Studio 2", icon: "Sparkles" },
    { time: "10:00 - 11:00", class: "Yoga Flow", instructor: "Sarah Williams", location: "Studio 1", icon: "Sparkles" },
    {
      time: "12:00 - 13:00",
      class: "Spin Class",
      instructor: "Michael Chen",
      location: "Spin Studio",
      icon: "Dumbbell",
    },
    { time: "17:00 - 18:00", class: "Aqua Fitness", instructor: "Michael Chen", location: "Pool", icon: "Waves" },
    {
      time: "19:00 - 20:00",
      class: "Strength Training",
      instructor: "Alex Johnson",
      location: "Gym Floor",
      icon: "Dumbbell",
    },
  ],
  saturday: [
    { time: "08:00 - 09:00", class: "Yoga Flow", instructor: "Sarah Williams", location: "Studio 1", icon: "Sparkles" },
    {
      time: "10:00 - 11:00",
      class: "HIIT Training",
      instructor: "Alex Johnson",
      location: "Gym Floor",
      icon: "Dumbbell",
    },
    { time: "12:00 - 13:00", class: "Aqua Fitness", instructor: "Michael Chen", location: "Pool", icon: "Waves" },
    { time: "14:00 - 15:00", class: "Pilates", instructor: "Emma Rodriguez", location: "Studio 2", icon: "Sparkles" },
  ],
  sunday: [
    { time: "09:00 - 10:00", class: "Yoga Flow", instructor: "Sarah Williams", location: "Studio 1", icon: "Sparkles" },
    {
      time: "11:00 - 12:00",
      class: "Spin Class",
      instructor: "Michael Chen",
      location: "Spin Studio",
      icon: "Dumbbell",
    },
    { time: "13:00 - 14:00", class: "Body Pump", instructor: "Alex Johnson", location: "Gym Floor", icon: "Dumbbell" },
    { time: "15:00 - 16:00", class: "Aqua Fitness", instructor: "Michael Chen", location: "Pool", icon: "Waves" },
  ],
}

export default function SchedulePage() {
  const [day, setDay] = useState("monday")
  const [filter, setFilter] = useState("all")

  const filteredClasses = scheduleData[day].filter((item) => {
    if (filter === "all") return true
    if (filter === "gym") return item.icon === "Dumbbell"
    if (filter === "pool") return item.icon === "Waves"
    if (filter === "studio") return item.icon === "Sparkles"
    return true
  })

  const getIcon = (iconName) => {
    switch (iconName) {
      case "Dumbbell":
        return <Dumbbell className="h-5 w-5 text-primary" />
      case "Waves":
        return <Waves className="h-5 w-5 text-primary" />
      case "Sparkles":
        return <Sparkles className="h-5 w-5 text-primary" />
      default:
        return null
    }
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-black py-24 text-white md:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Schedule background"
            fill
            priority
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
        </div>
        <div className="container relative z-10 px-4 text-center md:px-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Class Schedule</h1>
          <p className="mx-auto mt-4 max-w-[700px] text-lg text-zinc-200 md:text-xl">
            Find the perfect class to fit your schedule and fitness goals.
          </p>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mb-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <h2 className="text-3xl font-bold">Weekly Schedule</h2>
              <p className="text-muted-foreground">Find a class that fits your schedule</p>
            </div>
            <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Classes</SelectItem>
                  <SelectItem value="gym">Gym Classes</SelectItem>
                  <SelectItem value="pool">Pool Classes</SelectItem>
                  <SelectItem value="studio">Studio Classes</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Tabs value={day} onValueChange={setDay} className="w-full">
            <TabsList className="grid w-full grid-cols-7">
              <TabsTrigger value="monday">Mon</TabsTrigger>
              <TabsTrigger value="tuesday">Tue</TabsTrigger>
              <TabsTrigger value="wednesday">Wed</TabsTrigger>
              <TabsTrigger value="thursday">Thu</TabsTrigger>
              <TabsTrigger value="friday">Fri</TabsTrigger>
              <TabsTrigger value="saturday">Sat</TabsTrigger>
              <TabsTrigger value="sunday">Sun</TabsTrigger>
            </TabsList>

            {Object.keys(scheduleData).map((dayKey) => (
              <TabsContent key={dayKey} value={dayKey} className="mt-6">
                {filteredClasses.length > 0 ? (
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {filteredClasses.map((item, index) => (
                      <Card key={index}>
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              {getIcon(item.icon)}
                              <div>
                                <h3 className="font-semibold">{item.class}</h3>
                                <p className="text-sm text-muted-foreground">{item.time}</p>
                              </div>
                            </div>
                          </div>
                          <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                            <div>
                              <p className="font-medium">Instructor</p>
                              <p className="text-muted-foreground">{item.instructor}</p>
                            </div>
                            <div>
                              <p className="font-medium">Location</p>
                              <p className="text-muted-foreground">{item.location}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="flex h-40 items-center justify-center rounded-md border border-dashed">
                    <p className="text-muted-foreground">No classes found with the selected filter.</p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Class Descriptions */}
      <section className="bg-muted py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Class Descriptions</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Learn more about our fitness classes and what to expect.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <Dumbbell className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">HIIT Training</h3>
                    <p className="text-muted-foreground">High Intensity Interval Training</p>
                  </div>
                </div>
                <p className="mt-4">
                  A full-body workout that alternates between intense bursts of activity and fixed periods of
                  less-intense activity or rest. Perfect for burning calories and improving cardiovascular fitness.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  <span className="font-medium">Difficulty:</span> Intermediate to Advanced
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">Duration:</span> 45-60 minutes
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <Sparkles className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">Yoga Flow</h3>
                    <p className="text-muted-foreground">Mind-Body Connection</p>
                  </div>
                </div>
                <p className="mt-4">
                  A dynamic practice that connects breath with movement through a sequence of postures. Builds strength,
                  flexibility, and mental clarity while reducing stress.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  <span className="font-medium">Difficulty:</span> All Levels
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">Duration:</span> 60 minutes
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <Dumbbell className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">Spin Class</h3>
                    <p className="text-muted-foreground">Indoor Cycling</p>
                  </div>
                </div>
                <p className="mt-4">
                  A high-energy indoor cycling workout that simulates outdoor riding with varying speeds and resistance
                  levels. Great for cardiovascular health and lower body strength.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  <span className="font-medium">Difficulty:</span> All Levels
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">Duration:</span> 45 minutes
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <Waves className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">Aqua Fitness</h3>
                    <p className="text-muted-foreground">Water-Based Workout</p>
                  </div>
                </div>
                <p className="mt-4">
                  A low-impact, high-resistance workout performed in water. Ideal for all fitness levels, especially
                  those with joint issues, as it reduces stress on the body while providing effective resistance.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  <span className="font-medium">Difficulty:</span> All Levels
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">Duration:</span> 45 minutes
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Join a Class?</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Become a member today and get access to all our classes and facilities.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="/membership">
                  Join Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
