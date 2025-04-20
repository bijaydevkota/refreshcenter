import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dumbbell, Waves, Sparkles, ArrowRight } from "lucide-react"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import TestimonialsSection from "@/components/testimonials-section"
import MembershipSection from "@/components/membership-section"
import TrainersSection from "@/components/trainers-section"
import ContactSection from "@/components/contact-section"
import AnimatedCounter from "@/components/animated-counter"
import NewsletterSection from "@/components/newsletter-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />

      {/* Stats Section */}
      <section className="w-full bg-primary/5 py-12 md:py-16">
        <div className="container grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          <div className="flex flex-col items-center justify-center space-y-2 text-center">
            <AnimatedCounter end={5000} duration={2} />
            <p className="text-sm font-medium text-muted-foreground md:text-base">Happy Members</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 text-center">
            <AnimatedCounter end={25} duration={2} />
            <p className="text-sm font-medium text-muted-foreground md:text-base">Expert Trainers</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 text-center">
            <AnimatedCounter end={15} duration={2} />
            <p className="text-sm font-medium text-muted-foreground md:text-base">Years Experience</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 text-center">
            <AnimatedCounter end={30} duration={2} />
            <p className="text-sm font-medium text-muted-foreground md:text-base">Fitness Programs</p>
          </div>
        </div>
      </section>

      <ServicesSection />
      <MembershipSection />
      <TrainersSection />
      <TestimonialsSection />

      {/* Schedule Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Weekly Schedule</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join our classes at a time that works for you. We offer a variety of programs throughout the week.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-8 max-w-5xl">
            <Tabs defaultValue="monday" className="w-full">
              <TabsList className="grid w-full grid-cols-7">
                <TabsTrigger value="monday">Mon</TabsTrigger>
                <TabsTrigger value="tuesday">Tue</TabsTrigger>
                <TabsTrigger value="wednesday">Wed</TabsTrigger>
                <TabsTrigger value="thursday">Thu</TabsTrigger>
                <TabsTrigger value="friday">Fri</TabsTrigger>
                <TabsTrigger value="saturday">Sat</TabsTrigger>
                <TabsTrigger value="sunday">Sun</TabsTrigger>
              </TabsList>
              <TabsContent value="monday" className="mt-6 space-y-4">
                <div className="grid gap-4 md:grid-cols-3">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold">Yoga Flow</p>
                          <p className="text-sm text-muted-foreground">6:00 AM - 7:00 AM</p>
                        </div>
                        <Sparkles className="h-5 w-5 text-primary" />
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold">HIIT Training</p>
                          <p className="text-sm text-muted-foreground">12:00 PM - 1:00 PM</p>
                        </div>
                        <Dumbbell className="h-5 w-5 text-primary" />
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold">Aqua Fitness</p>
                          <p className="text-sm text-muted-foreground">6:00 PM - 7:00 PM</p>
                        </div>
                        <Waves className="h-5 w-5 text-primary" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              {/* Other days would have similar content structure */}
              <TabsContent value="tuesday" className="mt-6 space-y-4">
                <div className="grid gap-4 md:grid-cols-3">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold">Spin Class</p>
                          <p className="text-sm text-muted-foreground">6:00 AM - 7:00 AM</p>
                        </div>
                        <Dumbbell className="h-5 w-5 text-primary" />
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold">Pilates</p>
                          <p className="text-sm text-muted-foreground">12:00 PM - 1:00 PM</p>
                        </div>
                        <Sparkles className="h-5 w-5 text-primary" />
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold">Strength Training</p>
                          <p className="text-sm text-muted-foreground">6:00 PM - 7:00 PM</p>
                        </div>
                        <Dumbbell className="h-5 w-5 text-primary" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              {/* Add content for other days */}
            </Tabs>
          </div>
          <div className="mt-8 flex justify-center">
            <Button asChild>
              <Link href="/schedule">
                View Full Schedule <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <NewsletterSection />
      <ContactSection />
    </main>
  )
}
