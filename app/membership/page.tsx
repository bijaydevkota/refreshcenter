"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CheckCircle2 } from "lucide-react"

const plans = [
  {
    id: "basic",
    name: "Basic",
    price: "$49",
    description: "Perfect for beginners",
    features: ["Full gym access", "2 group classes per week", "Locker access", "Fitness assessment"],
    popular: false,
  },
  {
    id: "premium",
    name: "Premium",
    price: "$89",
    description: "Our most popular plan",
    features: [
      "Full gym access",
      "Unlimited group classes",
      "Swimming pool access",
      "Locker access",
      "Fitness assessment",
      "1 personal training session/month",
    ],
    popular: true,
  },
  {
    id: "ultimate",
    name: "Ultimate",
    price: "$129",
    description: "The complete experience",
    features: [
      "Full gym access",
      "Unlimited group classes",
      "Swimming pool access",
      "Spa access",
      "Locker access",
      "Fitness assessment",
      "4 personal training sessions/month",
      "Nutrition consultation",
    ],
    popular: false,
  },
]

export default function MembershipPage() {
  const [selectedPlan, setSelectedPlan] = useState("premium")

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-black py-24 text-white md:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Membership background"
            fill
            priority
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
        </div>
        <div className="container relative z-10 px-4 text-center md:px-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Membership Plans</h1>
          <p className="mx-auto mt-4 max-w-[700px] text-lg text-zinc-200 md:text-xl">
            Choose the perfect membership plan that fits your fitness goals and lifestyle.
          </p>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Choose Your Plan</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                We offer flexible membership options to suit your needs and budget.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
            {plans.map((plan) => (
              <Card
                key={plan.id}
                className={`relative overflow-hidden ${plan.popular ? "border-primary shadow-lg" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute right-0 top-0 bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    Choose Plan
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Signup Form */}
      <section className="bg-muted py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <Card>
              <CardHeader>
                <CardTitle>Complete Your Membership</CardTitle>
                <CardDescription>
                  Fill out the form below to join our fitness club with your selected plan.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="personal" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="personal">Personal Info</TabsTrigger>
                    <TabsTrigger value="membership">Membership</TabsTrigger>
                    <TabsTrigger value="payment">Payment</TabsTrigger>
                  </TabsList>
                  <TabsContent value="personal" className="space-y-4 pt-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="grid gap-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" placeholder="Enter your first name" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" placeholder="Enter your last name" />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="address">Address</Label>
                      <Input id="address" placeholder="Enter your address" />
                    </div>
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="grid gap-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" placeholder="City" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="state">State</Label>
                        <Input id="state" placeholder="State" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="zip">Zip Code</Label>
                        <Input id="zip" placeholder="Zip Code" />
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="membership" className="space-y-4 pt-4">
                    <div className="grid gap-2">
                      <Label>Select Membership Plan</Label>
                      <RadioGroup defaultValue={selectedPlan} className="grid gap-4 pt-2">
                        {plans.map((plan) => (
                          <div key={plan.id} className="flex items-center space-x-2">
                            <RadioGroupItem value={plan.id} id={plan.id} />
                            <Label htmlFor={plan.id} className="flex items-center justify-between w-full">
                              <span>
                                {plan.name} - {plan.price}/month
                              </span>
                              {plan.popular && (
                                <span className="ml-2 rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                                  Popular
                                </span>
                              )}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="start-date">Start Date</Label>
                      <Input id="start-date" type="date" />
                    </div>
                    <div className="grid gap-2">
                      <Label>Contract Length</Label>
                      <RadioGroup defaultValue="monthly" className="grid gap-4 pt-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="monthly" id="monthly" />
                          <Label htmlFor="monthly">Monthly (No commitment)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="6months" id="6months" />
                          <Label htmlFor="6months">6 Months (10% discount)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="annual" id="annual" />
                          <Label htmlFor="annual">Annual (20% discount)</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </TabsContent>
                  <TabsContent value="payment" className="space-y-4 pt-4">
                    <div className="grid gap-2">
                      <Label htmlFor="card-name">Name on Card</Label>
                      <Input id="card-name" placeholder="Enter name as it appears on card" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="card-number">Card Number</Label>
                      <Input id="card-number" placeholder="0000 0000 0000 0000" />
                    </div>
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="grid gap-2">
                        <Label htmlFor="expiry-month">Expiry Month</Label>
                        <Input id="expiry-month" placeholder="MM" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="expiry-year">Expiry Year</Label>
                        <Input id="expiry-year" placeholder="YY" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input id="cvc" placeholder="CVC" />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="billing-address">Billing Address</Label>
                      <Input id="billing-address" placeholder="Enter billing address" />
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Complete Signup</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Find answers to common questions about our membership plans.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-6">
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
                <CardTitle>Is there a joining fee?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We occasionally run promotions with no joining fee. Standard joining fee is $49, which covers your
                  initial fitness assessment and membership card.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Can I cancel my membership at any time?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Monthly memberships can be cancelled with 30 days notice. 6-month and annual contracts require
                  completion of the minimum term before cancellation or an early termination fee will apply.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Can I upgrade my membership plan?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Yes, you can upgrade your membership plan at any time. The new rate will be prorated for the remainder
                  of your billing cycle.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
