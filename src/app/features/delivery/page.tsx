"use client";

import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  LuTruck, 
  LuMapPin, 
  LuClock, 
  LuUsers,
  LuCheck,
  LuSettings,
  LuShield,
  LuActivity,
  LuSmartphone,
  LuZap,
  LuMessageSquare,
  LuPhone
} from "react-icons/lu";

const features = [
  {
    title: "Local Dispatch Integration",
    description: "Seamlessly connect with local dispatch services in Abuja. No need to manage multiple delivery apps.",
    icon: LuTruck,
    color: "text-blue-500",
    bgColor: "bg-blue-100",
  },
  {
    title: "Real-Time Tracking",
    description: "Track delivery status in real-time. Keep customers informed about their order's location.",
    icon: LuMapPin,
    color: "text-green-500",
    bgColor: "bg-green-100",
  },
  {
    title: "Driver Management",
    description: "Schedule and manage your own delivery team. Assign orders and track performance.",
    icon: LuUsers,
    color: "text-purple-500",
    bgColor: "bg-purple-100",
  },
  {
    title: "Delivery Time Estimates",
    description: "Accurate delivery time estimates based on traffic conditions and distance.",
    icon: LuClock,
    color: "text-orange-500",
    bgColor: "bg-orange-100",
  },
  {
    title: "Customer Communication",
    description: "Automated SMS and WhatsApp notifications for delivery updates.",
    icon: LuMessageSquare,
    color: "text-red-500",
    bgColor: "bg-red-100",
  },
  {
    title: "Performance Analytics",
    description: "Track delivery times, success rates, and customer satisfaction.",
    icon: LuActivity,
    color: "text-indigo-500",
    bgColor: "bg-indigo-100",
  },
];

const benefits = [
  {
    title: "Commission-Free",
    description: "No delivery commission fees. Keep more of your earnings.",
    icon: LuCheck,
  },
  {
    title: "Rider App",
    description: "Dedicated Android app for riders with real-time navigation.",
    icon: LuSmartphone,
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock support for delivery issues and emergencies.",
    icon: LuPhone,
  },
  {
    title: "Secure Platform",
    description: "End-to-end encryption for all delivery data and communications.",
    icon: LuShield,
  },
];

export default function DeliveryPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-primary/5 to-white">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Delivery Coordination
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Streamline your delivery operations with our integrated dispatch system. Connect with local riders, manage your own delivery team, and delight your customers.
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
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                >
                  <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Why Choose Foodo?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Join hundreds of Nigerian restaurants already using Foodo to manage their deliveries efficiently.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                >
                  <benefit.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-primary text-white rounded-2xl p-8 md:p-12 text-center"
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-white/90 max-w-2xl mx-auto mb-8">
                Join other Abuja restaurants already using Foodo to streamline their delivery operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90" asChild>
                  <Link href="/waitlist">Get Started Free</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
                  <Link href="/demo">Request Demo</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
} 