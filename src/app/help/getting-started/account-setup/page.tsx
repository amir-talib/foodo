"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LuUser, LuStore, LuSettings, LuCheck } from "react-icons/lu";
import Link from "next/link";

const setupSteps = [
  {
    title: "Create Your Account",
    icon: LuUser,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    steps: [
      "Visit foodo.ng and click 'Sign Up'",
      "Enter your email address and create a password",
      "Verify your email address",
      "Complete your profile information",
    ],
  },
  {
    title: "Set Up Your Restaurant",
    icon: LuStore,
    color: "text-green-500",
    bgColor: "bg-green-50",
    steps: [
      "Add your restaurant's basic information",
      "Upload your restaurant logo and cover image",
      "Set your business hours",
      "Add your location and contact details",
    ],
  },
  {
    title: "Configure Settings",
    icon: LuSettings,
    color: "text-purple-500",
    bgColor: "bg-purple-50",
    steps: [
      "Set up your notification preferences",
      "Configure order settings",
      "Set up your payment information",
      "Review and adjust privacy settings",
    ],
  },
];

const requirements = [
  {
    title: "Required Documents",
    items: [
      "Valid business registration document",
      "Tax identification number",
      "Valid government-issued ID",
      "Proof of address",
    ],
  },
  {
    title: "Technical Requirements",
    items: [
      "Stable internet connection",
      "Smartphone or computer",
      "Digital menu items and prices",
      "High-quality food images",
    ],
  },
];

export default function AccountSetup() {
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
            <h1 className="text-4xl font-bold mb-6">Setting Up Your Foodo Account</h1>
            <p className="text-xl text-gray-600">
              Follow these steps to get your restaurant up and running on Foodo.
            </p>
          </div>

          {/* Setup Steps */}
          <div className="space-y-12 mb-12">
            {setupSteps.map((section, index) => (
              <section key={section.title}>
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 ${section.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                    <section.icon className={`w-6 h-6 ${section.color}`} />
                  </div>
                  <h2 className="text-2xl font-bold">{section.title}</h2>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <ol className="space-y-4">
                    {section.steps.map((step, stepIndex) => (
                      <li key={step} className="flex items-start">
                        <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                          <span className="text-primary text-sm font-medium">
                            {index * 4 + stepIndex + 1}
                          </span>
                        </div>
                        <p className="text-gray-600">{step}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </section>
            ))}
          </div>

          {/* Requirements */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {requirements.map((requirement) => (
                <div key={requirement.title} className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="font-semibold mb-4">{requirement.title}</h3>
                  <ul className="space-y-3">
                    {requirement.items.map((item) => (
                      <li key={item} className="flex items-start">
                        <div className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center mr-3 mt-1">
                          <LuCheck className="w-3 h-3 text-green-500" />
                        </div>
                        <p className="text-gray-600">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Tips */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Pro Tips</h2>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-blue-500">💡</span>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Complete Your Profile</h3>
                    <p className="text-gray-600">
                      A complete profile helps build trust with customers and improves your visibility.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-blue-500">💡</span>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">High-Quality Images</h3>
                    <p className="text-gray-600">
                      Use clear, well-lit photos of your food and restaurant to attract more customers.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-blue-500">💡</span>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Regular Updates</h3>
                    <p className="text-gray-600">
                      Keep your menu and business information up to date to maintain customer trust.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <h2 className="text-2xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-8">
              Create your account now and start managing your restaurant with Foodo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/signup">Create Account</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/help/getting-started/known-issues">View Known Issues</Link>
              </Button>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
} 