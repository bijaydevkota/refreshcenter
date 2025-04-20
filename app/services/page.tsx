import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dumbbell, Waves, Sparkles, Users, Clock, ArrowRight, CheckCircle2 } from "lucide-react"

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-black py-24 text-white md:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Services background"
            fill
            priority
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
        </div>
        <div className="container relative z-10 px-4 text-center md:px-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Premium Services</h1>
          <p className="mx-auto mt-4 max-w-[700px] text-lg text-zinc-200 md:text-xl">
            Experience the best in fitness, swimming, and wellness at our state-of-the-art facility.
          </p>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="gym" className="w-full">
            <TabsList className="mx-auto mb-8 w-full justify-center sm:w-auto">
              <TabsTrigger value="gym" className="flex items-center gap-2">
                <Dumbbell className="h-4 w-4" />
                <span>Gym</span>
              </TabsTrigger>
              <TabsTrigger value="pool" className="flex items-center gap-2">
                <Waves className="h-4 w-4" />
                <span>Swimming</span>
              </TabsTrigger>
              <TabsTrigger value="spa" className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                <span>Spa</span>
              </TabsTrigger>
            </TabsList>

            {/* Gym Content */}
            <TabsContent value="gym" className="space-y-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="relative aspect-video overflow-hidden rounded-xl md:aspect-auto md:h-full">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Gym facilities"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <h2 className="text-3xl font-bold">State-of-the-Art Gym</h2>
                  <p className="text-muted-foreground">
                    Our gym features the latest equipment, free weights, and functional training areas to help you
                    achieve your fitness goals. With over 10,000 square feet of space, there's plenty of room for
                    everyone.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span>Latest cardio and strength equipment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span>Dedicated free weights area</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span>Functional training zone</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span>Personal training available</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span>Open 24/7 for premium members</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <Users className="h-10 w-10 text-primary" />
                    <CardTitle className="mt-4">Group Classes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Join our energetic group classes led by expert instructors. From HIIT to yoga, we offer a variety
                      of classes for all fitness levels.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Dumbbell className="h-10 w-10 text-primary" />
                    <CardTitle className="mt-4">Personal Training</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Get personalized attention from our certified personal trainers who will help you reach your
                      fitness goals faster.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Clock className="h-10 w-10 text-primary" />
                    <CardTitle className="mt-4">24/7 Access</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Premium members enjoy round-the-clock access to our gym facilities, allowing you to work out on
                      your schedule.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Swimming Pool Content */}
            <TabsContent value="pool" className="space-y-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="relative aspect-video overflow-hidden rounded-xl md:aspect-auto md:h-full">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Swimming pool"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <h2 className="text-3xl font-bold">Olympic Swimming Pool</h2>
                  <p className="text-muted-foreground">
                    Dive into our Olympic-sized swimming pool with dedicated lanes for lap swimming, aqua fitness
                    classes, and recreational swimming. Our pool is maintained at the perfect temperature year-round.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span>Olympic-sized 50m pool</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span>Dedicated lap swimming lanes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span>Aqua fitness classes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span>Professional swimming coaches</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span>Children's swimming lessons</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <Users className="h-10 w-10 text-primary" />
                    <CardTitle className="mt-4">Swimming Lessons</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Learn to swim or improve your technique with our certified swimming instructors. Classes available
                      for all ages and skill levels.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Waves className="h-10 w-10 text-primary" />
                    <CardTitle className="mt-4">Aqua Fitness</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Experience low-impact, high-resistance workouts in our aqua fitness classes, perfect for all
                      fitness levels and joint-friendly.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Clock className="h-10 w-10 text-primary" />
                    <CardTitle className="mt-4">Lap Swimming</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Dedicated lanes for serious swimmers looking to train, with lane schedules posted daily for your
                      convenience.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Spa Content */}
            <TabsContent value="spa" className="space-y-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="relative aspect-video overflow-hidden rounded-xl md:aspect-auto md:h-full">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Spa facilities"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <h2 className="text-3xl font-bold">Luxury Spa & Wellness</h2>
                  <p className="text-muted-foreground">
                    Relax and rejuvenate in our luxury spa featuring saunas, steam rooms, jacuzzis, and a range of
                    massage and treatment options. Our spa is designed to help you unwind and recover.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span>Finnish sauna and steam room</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span>Hydrotherapy jacuzzi</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span>Professional massage therapy</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span>Facial and body treatments</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span>Relaxation lounge</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <Sparkles className="h-10 w-10 text-primary" />
                    <CardTitle className="mt-4">Massage Therapy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Choose from a variety of massage styles including Swedish, deep tissue, sports, and hot stone
                      therapies from our licensed therapists.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Sparkles className="h-10 w-10 text-primary" />
                    <CardTitle className="mt-4">Facial Treatments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Rejuvenate your skin with our premium facial treatments, customized to address your specific skin
                      concerns and goals.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Sparkles className="h-10 w-10 text-primary" />
                    <CardTitle className="mt-4">Heat Experiences</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Enjoy our sauna, steam room, and jacuzzi facilities to detoxify, improve circulation, and relax
                      tired muscles.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/10 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Experience Our Services?
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Join our fitness club today and get access to all our premium facilities and services.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="/membership">
                  Become a Member <ArrowRight className="ml-2 h-4 w-4" />
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
