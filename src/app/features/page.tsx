import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { 
  LuGlobe, 
  LuLayoutDashboard, 
  LuTruck, 
  LuCheck,
  LuClock,
  LuSmartphone,
  LuShield,
  LuZap,
  LuMapPin,
  LuUsers,
  LuActivity,
  LuSettings,
  LuBell,
  LuMessageSquare,
  LuPhone,
  LuCalendar,
  LuFileText,
  LuCreditCard,
  LuWifiOff
} from "react-icons/lu";

const coreComponents = [
  {
    title: "Restaurant Dashboard",
    description: "Manage orders, menu, and business operations from one powerful dashboard",
    icon: LuLayoutDashboard,
  },
  {
    title: "Riders App",
    description: "Efficient delivery management with our dedicated Android app for riders",
    icon: LuTruck,
  },
  {
    title: "Customizable Website",
    description: "Your own branded online ordering website optimized for Nigerian customers",
    icon: LuGlobe,
  },
];

const websiteFeatures = [
  {
    title: "Mobile-First Design",
    description: "Modern, responsive templates optimized for all devices",
    icon: LuSmartphone,
  },
  {
    title: "Easy Menu Browsing",
    description: "Intuitive menu navigation with categories, photos, and Naira pricing",
    icon: LuFileText,
  },
  {
    title: "Simple Checkout",
    description: "Streamlined add-to-cart and checkout process",
    icon: LuCheck,
  },
  {
    title: "Multiple Payment Options",
    description: "Paystack, Cash on Delivery, and Bank Transfer",
    icon: LuCreditCard,
  },
  {
    title: "Custom Domain",
    description: "Your own restaurant-name.foodo.ng web address",
    icon: LuGlobe,
  },
  {
    title: "PWA Optimized",
    description: "Progressive Web App optimized for 2G/3G connections",
    icon: LuZap,
  },
];

const dashboardFeatures = [
  {
    title: "Real-time Order Feed",
    description: "Live order updates with sound notifications and clear status tracking",
    icon: LuBell,
  },
  {
    title: "Order Management",
    description: "Accept/reject orders, set prep times, and update statuses easily",
    icon: LuSettings,
  },
  {
    title: "Menu Editor",
    description: "Simple interface to manage your menu items, prices, and availability",
    icon: LuFileText,
  },
  {
    title: "Business Hours",
    description: "Set regular hours, temporary closures, and special holiday schedules",
    icon: LuClock,
  },
  {
    title: "Analytics Dashboard",
    description: "Track daily orders, revenue, and popular items",
    icon: LuActivity,
  },
  {
    title: "Offline Mode",
    description: "Manage orders even during internet disruptions",
    icon: LuWifiOff,
  },
];

const riderFeatures = [
  {
    title: "Order Queue",
    description: "Efficient delivery assignment and management system",
    icon: LuUsers,
  },
  {
    title: "Route Optimization",
    description: "Integrated maps with turn-by-turn directions",
    icon: LuMapPin,
  },
  {
    title: "Status Updates",
    description: "Clear delivery workflow tracking from pickup to delivery",
    icon: LuCheck,
  },
  {
    title: "Earnings Tracking",
    description: "Monitor delivery earnings within the app",
    icon: LuActivity,
  },
  {
    title: "Battery Efficient",
    description: "Optimized for minimal battery and data usage",
    icon: LuZap,
  },
];

const benefits = [
  {
    title: "Commission-Free",
    description: "Keep more of your earnings with our transparent pricing model",
    icon: LuCheck,
  },
  {
    title: "Nigerian Focus",
    description: "Platform designed specifically for the needs of Nigerian restaurants",
    icon: LuMapPin,
  },
  {
    title: "24/7 Support",
    description: "Dedicated support team available via phone, WhatsApp, and email",
    icon: LuMessageSquare,
  },
  {
    title: "Secure Platform",
    description: "Enterprise-grade security with 2FA protection",
    icon: LuShield,
  },
];

export default function FeaturesPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-primary/5 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Empower Your Restaurant with Foodo
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Your Commission-Free Digital Partner in Nigeria. Manage online ordering, delivery, and web presence without high fees.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/waitlist">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Platform Components */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {coreComponents.map((component, index) => (
              <Card key={index} className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <component.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{component.title}</h3>
                  <p className="text-gray-500">{component.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customizable Website Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Your Brand, Your Customers
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Get your own online ordering website optimized for the Nigerian market
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {websiteFeatures.map((feature, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{feature.title}</h3>
                    <p className="text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurant Dashboard Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Manage Your Operations Effortlessly
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Powerful tools to streamline your restaurant management
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {dashboardFeatures.map((feature, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{feature.title}</h3>
                    <p className="text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Riders App Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Streamlined Deliveries, Happy Customers
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Efficient delivery management system for your restaurant
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {riderFeatures.map((feature, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{feature.title}</h3>
                    <p className="text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Foodo Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Why Choose Foodo?
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The platform designed specifically for Nigerian restaurants
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                  <p className="text-gray-500">{benefit.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Get Started?
              </h2>
              <p className="mx-auto max-w-[600px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join the growing number of restaurants in Abuja using Foodo to grow their business. Currently available in Wuse, Maitama, and Garki.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link href="/waitlist">Start Free Trial</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 