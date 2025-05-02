"use client";

import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  LuMegaphone, 
  LuUsers, 
  LuMessageSquare, 
  LuTrendingUp,
  LuCheck,
  LuSettings,
  LuShield,
  LuActivity,
  LuSmartphone,
  LuZap,
  LuGift,
  LuCalendar
} from "react-icons/lu";

const features = [
  {
    title: "WhatsApp Marketing",
    description: "Send automated WhatsApp messages to engage customers and promote special offers.",
    icon: LuMessageSquare,
    color: "text-blue-500",
    bgColor: "bg-blue-100",
  },
  {
    title: "SMS Campaigns",
    description: "Reach customers directly with SMS promotions and order updates.",
    icon: LuSmartphone,
    color: "text-green-500",
    bgColor: "bg-green-100",
  },
  {
    title: "Loyalty Program",
    description: "Reward repeat customers with points, discounts, and special offers.",
    icon: LuGift,
    color: "text-purple-500",
    bgColor: "bg-purple-100",
  },
  {
    title: "Customer Segmentation",
    description: "Group customers by behavior and preferences for targeted marketing.",
    icon: LuUsers,
    color: "text-orange-500",
    bgColor: "bg-orange-100",
  },
  {
    title: "Analytics Dashboard",
    description: "Track campaign performance and customer engagement metrics.",
    icon: LuTrendingUp,
    color: "text-red-500",
    bgColor: "bg-red-100",
  },
  {
    title: "Automated Campaigns",
    description: "Set up automated marketing campaigns based on customer behavior.",
    icon: LuCalendar,
    color: "text-indigo-500",
    bgColor: "bg-indigo-100",
  },
];

const benefits = [
  {
    title: "Commission-Free",
    description: "No marketing fees. Keep 100% of your revenue.",
    icon: LuCheck,
  },
  {
    title: "Easy Setup",
    description: "Get started in minutes with pre-built templates.",
    icon: LuZap,
  },
  {
    title: "Customer Insights",
    description: "Understand your customers better with detailed analytics.",
    icon: LuActivity,
  },
  {
    title: "Secure Platform",
    description: "Compliant with data protection regulations.",
    icon: LuShield,
  },
];

export default function MarketingPage() {
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
                  Marketing Automation
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Grow your customer base and increase repeat orders with our powerful marketing tools. Automate your marketing campaigns and build customer loyalty.
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
                Join hundreds of Nigerian restaurants already using Foodo to grow their customer base.
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
                Join other Abuja restaurants already using Foodo to grow their customer base.
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