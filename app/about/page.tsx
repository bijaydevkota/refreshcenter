import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dumbbell, Award, Users, Clock, Building, ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-black py-24 text-white md:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="About us background"
            fill
            priority
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
        </div>
        <div className="container relative z-10 px-4 text-center md:px-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">About Us</h1>
          <p className="mx-auto mt-4 max-w-[700px] text-lg text-zinc-200 md:text-xl">
            Learn about our story, mission, and the team behind EliteFit.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Story</h2>
                <div className="mt-4 space-y-4">
                  <p>
                    Founded in 2010, EliteFit began with a simple mission: to create a fitness club that offers more
                    than just equipment—a place where members feel supported, motivated, and part of a community.
                  </p>
                  <p>
                    What started as a small gym with basic equipment has grown into a comprehensive fitness center with
                    state-of-the-art facilities, including an Olympic swimming pool and luxury spa.
                  </p>
                  <p>
                    Over the years, we've helped thousands of members transform their lives through fitness, wellness,
                    and community. Our success is measured by the success of our members in achieving their personal
                    health and fitness goals.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl md:aspect-square">
              <Image src="/swim1.jpg" alt="Our story" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-muted py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Mission & Values</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                The principles that guide everything we do at EliteFit.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Excellence</h3>
                <p className="mt-2 text-muted-foreground">
                  We strive for excellence in everything we do, from our facilities and equipment to our customer
                  service and class instruction.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Community</h3>
                <p className="mt-2 text-muted-foreground">
                  We believe in building a supportive community where members feel welcome, motivated, and connected to
                  others on their fitness journey.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Dumbbell className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Innovation</h3>
                <p className="mt-2 text-muted-foreground">
                  We continuously seek new ways to improve our offerings, incorporating the latest fitness trends,
                  technology, and research.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Journey</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Key milestones in our growth and development over the years.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            <div className="relative border-l border-primary/30 pl-6">
              <div className="mb-10 ml-6">
                <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-xs font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold">2010: The Beginning</h3>
                <p className="mt-2 text-muted-foreground">
                  EliteFit opens its doors as a small gym with basic equipment and a handful of dedicated trainers.
                </p>
              </div>
              <div className="mb-10 ml-6">
                <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-xs font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold">2013: Expansion</h3>
                <p className="mt-2 text-muted-foreground">
                  After rapid growth in membership, we expand our facilities to include more equipment and our first
                  group fitness studio.
                </p>
              </div>
              <div className="mb-10 ml-6">
                <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-xs font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold">2015: Swimming Pool</h3>
                <p className="mt-2 text-muted-foreground">
                  We add our Olympic-sized swimming pool, bringing aquatic fitness options to our members.
                </p>
              </div>
              <div className="mb-10 ml-6">
                <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-xs font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold">2018: Spa & Wellness</h3>
                <p className="mt-2 text-muted-foreground">
                  The addition of our luxury spa and wellness center completes our transformation into a comprehensive
                  fitness and wellness destination.
                </p>
              </div>
              <div className="ml-6">
                <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-xs font-bold">5</span>
                </div>
                <h3 className="text-xl font-bold">2023: Digital Transformation</h3>
                <p className="mt-2 text-muted-foreground">
                  Launch of our mobile app and digital platforms to enhance member experience and provide virtual
                  fitness options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="bg-muted py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Facilities</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                State-of-the-art equipment and amenities for a premium fitness experience.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">
            <div className="grid gap-4">
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image src="/banner1.jpg" alt="Gym facilities" fill className="object-cover" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image src="/cardio1.jpg" alt="Equipment" fill className="object-cover" />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src="/gym1.jpg"
                    alt="Training area"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src="/swim1.jpg"
                    alt="Swimming pool"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image src="/gym2.jpg" alt="Spa" fill className="object-cover" />
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image src="/spa1.jpg" alt="Locker rooms" fill className="object-cover" />
              </div>
            </div>
          </div>

          <div className="mx-auto mt-8 grid max-w-5xl gap-8 md:grid-cols-4">
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Building className="mb-2 h-8 w-8 text-primary" />
                <h3 className="font-bold">10,000+ sq ft</h3>
                <p className="text-sm text-muted-foreground">Gym Space</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Dumbbell className="mb-2 h-8 w-8 text-primary" />
                <h3 className="font-bold">100+</h3>
                <p className="text-sm text-muted-foreground">Pieces of Equipment</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Users className="mb-2 h-8 w-8 text-primary" />
                <h3 className="font-bold">25+</h3>
                <p className="text-sm text-muted-foreground">Expert Trainers</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Clock className="mb-2 h-8 w-8 text-primary" />
                <h3 className="font-bold">24/7</h3>
                <p className="text-sm text-muted-foreground">Access for Premium</p>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Community</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Become a part of the EliteFit family and start your fitness journey today.
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
