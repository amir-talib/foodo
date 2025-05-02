"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LuBug, LuTriangle, LuClock, LuCheck } from "react-icons/lu";
import Link from "next/link";
import { IconType } from "react-icons";

const knownIssues = [
  {
    category: "Menu Management",
    issues: [
      {
        title: "Bulk Menu Updates",
        description: "Currently, menu items must be updated individually. Bulk update functionality coming soon.",
        status: "in-progress" as const,
        eta: "2 weeks",
      },
      {
        title: "Image Upload Size",
        description: "Menu item images are limited to 2MB. Higher resolution support coming in the next update.",
        status: "planned" as const,
        eta: "1 month",
      },
    ],
  },
  {
    category: "Order Processing",
    issues: [
      {
        title: "Real-time Updates",
        description: "Order status updates may have a 30-second delay. Real-time updates are being implemented.",
        status: "in-progress" as const,
        eta: "1 week",
      },
      {
        title: "Order Modifications",
        description: "Customers cannot modify orders after placement. This feature is in development.",
        status: "planned" as const,
        eta: "3 weeks",
      },
    ],
  },
  {
    category: "Analytics",
    issues: [
      {
        title: "Data Export",
        description: "Analytics data can only be viewed in the dashboard. Export functionality coming soon.",
        status: "planned" as const,
        eta: "2 weeks",
      },
      {
        title: "Custom Reports",
        description: "Limited to predefined report templates. Custom report builder in development.",
        status: "planned" as const,
        eta: "1 month",
      },
    ],
  },
  {
    category: "User Interface",
    issues: [
      {
        title: "Mobile Responsiveness",
        description: "Some pages may not be fully optimized for mobile devices. Mobile improvements ongoing.",
        status: "in-progress" as const,
        eta: "2 weeks",
      },
      {
        title: "Dark Mode",
        description: "Dark mode is not yet available. Coming in a future update.",
        status: "planned" as const,
        eta: "1 month",
      },
    ],
  },
];

type StatusType = "in-progress" | "planned" | "fixed";

const statusIcons: Record<StatusType, { icon: IconType; color: string; bgColor: string }> = {
  "in-progress": {
    icon: LuClock,
    color: "text-yellow-500",
    bgColor: "bg-yellow-50",
  },
  planned: {
    icon: LuTriangle,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  fixed: {
    icon: LuCheck,
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
};

export default function KnownIssues() {
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
              <span className="text-sm font-medium text-primary">Beta Program</span>
            </div>
            <h1 className="text-4xl font-bold mb-6">Known Issues & Limitations</h1>
            <p className="text-xl text-gray-600">
              We're transparent about our current limitations. Here's what we're working on.
            </p>
          </div>

          {/* Status Legend */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Status Legend</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm flex items-center">
                <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center mr-4">
                  <LuClock className="w-5 h-5 text-yellow-500" />
                </div>
                <div>
                  <h3 className="font-medium">In Progress</h3>
                  <p className="text-sm text-gray-600">Currently being fixed</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm flex items-center">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
                  <LuTriangle className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-medium">Planned</h3>
                  <p className="text-sm text-gray-600">Scheduled for future updates</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm flex items-center">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mr-4">
                  <LuCheck className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <h3 className="font-medium">Fixed</h3>
                  <p className="text-sm text-gray-600">Resolved in latest update</p>
                </div>
              </div>
            </div>
          </div>

          {/* Known Issues List */}
          <div className="space-y-12">
            {knownIssues.map((category) => (
              <section key={category.category}>
                <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
                <div className="space-y-4">
                  {category.issues.map((issue) => {
                    const status = statusIcons[issue.status];
                    const StatusIcon = status.icon;
                    return (
                      <div
                        key={issue.title}
                        className="bg-white rounded-xl shadow-sm p-6"
                      >
                        <div className="flex items-start">
                          <div className={`w-10 h-10 ${status.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                            <StatusIcon className={`w-5 h-5 ${status.color}`} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-semibold">{issue.title}</h3>
                              <span className="text-sm text-gray-500">ETA: {issue.eta}</span>
                            </div>
                            <p className="text-gray-600">{issue.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>

          {/* Report New Issue */}
          <section className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-6">Found a New Issue?</h2>
            <p className="text-gray-600 mb-8">
              Help us improve by reporting any issues you encounter.
            </p>
            <Button size="lg" asChild>
              <Link href="/help/support/report-issues">Report an Issue</Link>
            </Button>
          </section>
        </motion.div>
      </div>
    </div>
  );
} 