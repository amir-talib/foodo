import Link from "next/link";
import { LuLinkedin, LuInstagram, LuTwitter, LuFacebook } from "react-icons/lu";

const navigation = {
  features: [
    { name: "Online Ordering", href: "/features/online-ordering" },
    { name: "Delivery Coordination", href: "/features/delivery" },
    { name: "Marketing Automation", href: "/features/marketing" },
  ],
  pricing: [
    { name: "Small Restaurants", href: "/pricing/small-restaurants" },
    { name: "Food Vendors", href: "/pricing/food-vendors" },
    { name: "Enterprise", href: "/pricing/enterprise" },
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "Our Team", href: "/our-team" },
    { name: "Help Center", href: "/help" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <span className="text-2xl font-bold">foodo</span>
            </Link>
            <p className="text-sm text-white/80 mb-4">
              Partnering with Nigerian restaurants to drive sales, protect margins, and build loyal customer relationships.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80">
                <LuInstagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80">
                <LuTwitter className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80">
                <LuFacebook className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80">
                <LuLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-white/80 hover:text-white">
                  Features Overview
                </Link>
              </li>
              {navigation.features.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-white/80 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Pricing</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/pricing" className="text-white/80 hover:text-white">
                  Pricing Plans
                </Link>
              </li>
              {navigation.pricing.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-white/80 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-white/80 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold mt-6 mb-2">Company</h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-white/80 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-white/80 mb-2">
              Plot 123, Wuse Zone 5<br />
              Abuja, Nigeria
            </p>
            <p className="text-white/80 mb-2">
              <a href="mailto:hello@foodo.ng" className="hover:text-white">hello@foodo.ng</a>
            </p>
            <p className="text-white/80 mb-4">
              <a href="tel:09164924074" className="hover:text-white">0916 492 4074</a>
            </p>

            <Link
              href="/waitlist"
              className="bg-secondary text-white px-4 py-2 rounded hover:bg-secondary/90 inline-block mt-2"
            >
              Partner With Us
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-white/80 text-sm">
              © 2023-{new Date().getFullYear()} Foodo. All Rights Reserved.
            </div>
            <div className="flex md:justify-end space-x-6">
              {navigation.legal.map((item) => (
                <Link key={item.name} href={item.href} className="text-white/80 text-sm hover:text-white">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
