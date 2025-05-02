"use client";

import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  LuShoppingBag, 
  LuSmartphone, 
  LuGlobe, 
  LuCheck, 
  LuCreditCard,
  LuBell,
  LuSettings,
  LuUsers,
  LuBarChart,
  LuShield,
  LuZap
} from "react-icons/lu";

const features = [
  {
    title: "Custom-Branded Digital Menu",
    description: "Create a beautiful, mobile-friendly menu that matches your restaurant's brand. Add photos, descriptions, and prices in Naira.",
    icon: LuShoppingBag,
    color: "text-blue-500",
    bgColor: "bg-blue-100",
  },
  {
    title: "Multi-Channel Order Notifications",
    description: "Receive orders instantly via WhatsApp, SMS, and email. Never miss an order, even when you're busy in the kitchen.",
    icon: LuBell,
    color: "text-green-500",
    bgColor: "bg-green-100",
  },
  {
    title: "Secure Payment Processing",
    description: "Accept payments through Paystack, bank transfers, or cash on delivery. All transactions are secure and encrypted.",
    icon: LuCreditCard,
    color: "text-purple-500",
    bgColor: "bg-purple-100",
  },
  {
    title: "Mobile-First Design",
    description: "Your menu looks great on any device, from smartphones to tablets. Optimized for Nigerian internet speeds.",
    icon: LuSmartphone,
    color: "text-orange-500",
    bgColor: "bg-orange-100",
  },
  {
    title: "Custom Domain",
    description: "Get your own restaurant-name.foodo.ng web address. Build your brand and make it easy for customers to find you.",
    icon: LuGlobe,
    color: "text-red-500",
    bgColor: "bg-red-100",
  },
  {
    title: "Order Management",
    description: "View, accept, and manage orders from a simple dashboard. Track order status and customer details.",
    icon: LuSettings,
    color: "text-indigo-500",
    bgColor: "bg-indigo-100",
  },
];

const benefits = [
  {
    title: "Commission-Free",
    description: "Keep 100% of your earnings. No hidden fees or commission charges.",
    icon: LuCheck,
  },
  {
    title: "Customer Insights",
    description: "Track popular items, peak ordering times, and customer preferences.",
    icon: LuBarChart,
  },
  {
    title: "Loyalty Program",
    description: "Build customer loyalty with our built-in rewards system.",
    icon: LuUsers,
  },
  {
    title: "Secure Platform",
    description: "Enterprise-grade security with SSL encryption and regular backups.",
    icon: LuShield,
  },
];

export default function OnlineOrderingPage() {
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
                  Online Ordering System
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Transform your restaurant with a custom-branded online ordering system. Accept orders 24/7, manage your menu, and grow your business.
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
                Join hundreds of Nigerian restaurants already using Foodo to grow their business.
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
                Join other Abuja restaurants already using Foodo to increase orders and grow their business.
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