"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LuActivity, LuTrendingUp, LuClock, LuTriangle } from "react-icons/lu";
import Link from "next/link";

const analyticsFeatures = [
  {
    title: "Basic Analytics",
    icon: LuActivity,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    description: "Essential metrics and insights",
    items: [
      "Daily order volume",
      "Popular menu items",
      "Basic revenue tracking",
      "Customer order patterns",
    ],
  },
  {
    title: "Performance Metrics",
    icon: LuTrendingUp,
    color: "text-green-500",
    bgColor: "bg-green-50",
    description: "Track your business growth",
    items: [
      "Order completion rates",
      "Average order value",
      "Peak hours analysis",
      "Basic customer retention",
    ],
  },
  {
    title: "Real-time Updates",
    icon: LuClock,
    color: "text-purple-500",
    bgColor: "bg-purple-50",
    description: "Stay informed with live data",
    items: [
      "Live order tracking",
      "Current day statistics",
      "Active customer count",
      "Real-time revenue updates",
    ],
  },
];

const betaLimitations = [
  {
    title: "Current Limitations",
    icon: LuTriangle,
    color: "text-yellow-500",
    bgColor: "bg-yellow-50",
    items: [
      "Limited historical data (30 days)",
      "Basic reporting features",
      "No custom metrics",
      "Limited data export options",
    ],
  },
  {
    title: "Coming Soon",
    icon: LuClock,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    items: [
      "Advanced analytics dashboard",
      "Custom report builder",
      "Data export capabilities",
      "Predictive analytics",
    ],
  },
];

export default function Analytics() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="mb-12">
            <div className="inline-block bg-primary/10 rounded-full px-4 py-1 mb-4">
              <span className="text-sm font-medium text-primary">Getting Started</span>
            </div>
            <h1 className="text-4xl font-bold mb-6">Analytics Guide</h1>
            <p className="text-xl text-gray-600">
              Learn how to use analytics to grow your business in the Foodo beta.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {analyticsFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl shadow-sm p-6"
              >
                <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.items.map((item) => (
                    <li key={item} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Beta Limitations */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Beta Version Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {betaLimitations.map((section) => (
                <div key={section.title} className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-10 h-10 ${section.bgColor} rounded-lg flex items-center justify-center mr-3`}>
                      <section.icon className={`w-5 h-5 ${section.color}`} />
                    </div>
                    <h3 className="font-semibold">{section.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start">
                        <div className={`w-5 h-5 ${section.bgColor} rounded-full flex items-center justify-center mr-3 mt-1`}>
                          <section.icon className={`w-3 h-3 ${section.color}`} />
                        </div>
                        <p className="text-gray-600">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Best Practices */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Best Practices</h2>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Regular Monitoring</h3>
                  <p className="text-gray-600">
                    Check your analytics dashboard regularly to track performance
                    and identify trends. This helps you make informed business decisions.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Data-Driven Decisions</h3>
                  <p className="text-gray-600">
                    Use the insights from your analytics to optimize your menu,
                    pricing, and operations. Look for patterns in customer behavior.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Performance Goals</h3>
                  <p className="text-gray-600">
                    Set clear goals based on your analytics data. Track your progress
                    and adjust your strategies accordingly to achieve better results.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <h2 className="text-2xl font-bold mb-6">Need More Help?</h2>
            <p className="text-gray-600 mb-8">
              Check out our other guides or contact support for assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/help/getting-started/known-issues">View Known Issues</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
} 