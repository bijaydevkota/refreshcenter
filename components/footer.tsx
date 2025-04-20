import Link from "next/link"
import { Dumbbell, Instagram, Facebook, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-muted py-12 md:py-16 lg:py-20">
      <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-4">
        <div className="flex flex-col space-y-4">
          <Link href="/" className="flex items-center space-x-2">
            <Dumbbell className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">EliteFit</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Premium fitness facilities with state-of-the-art gym equipment, Olympic swimming pool, and luxury spa
            services.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <nav className="flex flex-col space-y-2">
            <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">
              Our Services
            </Link>
            <Link href="/membership" className="text-sm text-muted-foreground hover:text-primary">
              Membership Plans
            </Link>
            <Link href="/schedule" className="text-sm text-muted-foreground hover:text-primary">
              Class Schedule
            </Link>
            <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
              About Us
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
              Contact Us
            </Link>
          </nav>
        </div>

        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold">Contact Info</h3>
          <div className="flex flex-col space-y-2">
            <div className="flex items-start space-x-2">
              <MapPin className="mt-0.5 h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">123 Fitness Avenue, Wellness City, WC 12345</span>
            </div>
            <div className="flex items-start space-x-2">
              <Phone className="mt-0.5 h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">(123) 456-7890</span>
            </div>
            <div className="flex items-start space-x-2">
              <Mail className="mt-0.5 h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">info@fitnessclubelite.com</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold">Opening Hours</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="font-medium">Monday - Friday</div>
            <div className="text-muted-foreground">5:00 AM - 11:00 PM</div>
            <div className="font-medium">Saturday</div>
            <div className="text-muted-foreground">7:00 AM - 9:00 PM</div>
            <div className="font-medium">Sunday</div>
            <div className="text-muted-foreground">7:00 AM - 9:00 PM</div>
          </div>
        </div>
      </div>

      <div className="container mt-8 border-t pt-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} EliteFit. All rights reserved.
          </p>
          <nav className="flex gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="text-sm text-muted-foreground hover:text-primary">
              Cookie Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
