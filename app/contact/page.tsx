"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e:any) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-black py-24 text-white md:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Contact background"
            fill
            priority
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
        </div>
        <div className="container relative z-10 px-4 text-center md:px-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Contact Us</h1>
          <p className="mx-auto mt-4 max-w-[700px] text-lg text-zinc-200 md:text-xl">
            Have questions? We're here to help. Reach out to our team.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">Get in Touch</h2>
              <p className="mt-2 text-muted-foreground">
                We'd love to hear from you. Fill out the form or contact us directly using the information below.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-muted-foreground">123 Fitness Avenue, Wellness City, WC 12345</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">(123) 456-7890</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">info@fitnessclubelite.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday: 5:00 AM - 11:00 PM</p>
                    <p className="text-muted-foreground">Saturday - Sunday: 7:00 AM - 9:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold">Location</h3>
                <div className="mt-4 aspect-video overflow-hidden rounded-md bg-muted">
                  {/* Replace with actual map component or iframe */}
                  <div className="flex h-full items-center justify-center">
                    <p className="text-muted-foreground"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0071950197303!2d85.35736947492342!3d27.71706412506376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b0065e315e9%3A0xbad0de5e81e7201f!2sRefresh%20Recreation%20Center%20Pvt%20Ltd!5e0!3m2!1sen!2snp!4v1744891034110!5m2!1sen!2snp" width="600" height="450"loading="lazy"></iframe></p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Enter the subject"
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter your message"
                        className="min-h-[120px]"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Find answers to common questions about our fitness club.
              </p>
            </div>
          </div>

          <Tabs defaultValue="general" className="mx-auto mt-12 max-w-3xl">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="membership">Membership</TabsTrigger>
              <TabsTrigger value="facilities">Facilities</TabsTrigger>
            </TabsList>
            <TabsContent value="general" className="mt-6 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>What are your opening hours?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Our club is open Monday to Friday from 5:00 AM to 11:00 PM, and Saturday to Sunday from 7:00 AM to
                    9:00 PM. Premium members have 24/7 access to the gym facilities.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Do you offer free trials?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Yes, we offer a 1-day free trial pass for new visitors. This gives you access to our gym, group
                    classes, and swimming pool. Contact us to arrange your free trial.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Is there parking available?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Yes, we have a large parking lot with free parking for all members. There are also designated spots
                    for disabled parking near the entrance.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="membership" className="mt-6 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>What membership plans do you offer?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We offer three main membership plans: Basic ($49/month), Premium ($89/month), and Ultimate
                    ($129/month). Each plan offers different levels of access to our facilities and services.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Can I freeze my membership?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Yes, you can freeze your membership for up to 3 months per year with our Premium and Ultimate plans.
                    Basic plan members can freeze for up to 1 month per year. A small administrative fee may apply.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>How do I cancel my membership?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    To cancel your membership, please visit our reception desk or contact our customer service team.
                    Monthly memberships require 30 days notice, while term contracts may have different cancellation
                    policies.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="facilities" className="mt-6 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>What facilities do you have?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Our club features a state-of-the-art gym with cardio and strength equipment, an Olympic-sized
                    swimming pool, group fitness studios, a spin studio, and a luxury spa with sauna, steam room, and
                    jacuzzi.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Are towels provided?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Yes, towels are provided for all members. Small towels for use during workouts are free, while
                    larger shower towels are available for a small fee or included in Premium and Ultimate memberships.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Do you have personal trainers?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Yes, we have a team of certified personal trainers available for one-on-one sessions. Premium
                    members receive one complimentary session per month, and Ultimate members receive four sessions per
                    month.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Get Started?</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Join our fitness club today and transform your life with our premium facilities and expert guidance.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="/membership">
                  Join Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
