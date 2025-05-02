"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LuShoppingBag, LuClock, LuTriangle, LuCheck } from "react-icons/lu";
import Link from "next/link";

const orderFeatures = [
  {
    title: "Order Processing",
    icon: LuShoppingBag,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    description: "Basic order management features",
    items: [
      "View incoming orders",
      "Accept or reject orders",
      "Update order status",
      "Basic order notifications",
    ],
  },
  {
    title: "Order Status",
    icon: LuClock,
    color: "text-green-500",
    bgColor: "bg-green-50",
    description: "Track order progress",
    items: [
      "Real-time status updates",
      "Estimated preparation time",
      "Order history view",
      "Basic order analytics",
    ],
  },
  {
    title: "Customer Communication",
    icon: LuCheck,
    color: "text-purple-500",
    bgColor: "bg-purple-50",
    description: "Stay connected with customers",
    items: [
      "Order confirmation messages",
      "Status update notifications",
      "Basic customer support",
      "Order feedback collection",
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
      "Limited to 100 orders per day",
      "Basic notification system",
      "No bulk order processing",
      "Limited order customization",
    ],
  },
  {
    title: "Coming Soon",
    icon: LuClock,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    items: [
      "Advanced order analytics",
      "Bulk order processing",
      "Custom order workflows",
      "Enhanced notifications",
    ],
  },
];

export default function OrderManagement() {
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
            <h1 className="text-4xl font-bold mb-6">Order Management Guide</h1>
            <p className="text-xl text-gray-600">
              Learn how to manage orders effectively in the Foodo beta.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {orderFeatures.map((feature) => (
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
                  <h3 className="font-semibold mb-2">Quick Response Time</h3>
                  <p className="text-gray-600">
                    Respond to new orders promptly to maintain good customer service.
                    Set up notifications to ensure you don't miss any orders.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Clear Communication</h3>
                  <p className="text-gray-600">
                    Keep customers informed about their order status. Update the status
                    regularly and communicate any delays or issues immediately.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Order Organization</h3>
                  <p className="text-gray-600">
                    Maintain a clear system for tracking orders. Use the status updates
                    effectively and keep your order history organized for reference.
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