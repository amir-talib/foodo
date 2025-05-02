"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LuRocket, LuBug, LuMessageSquare, LuSettings } from "react-icons/lu";
import Link from "next/link";

export default function BetaOverview() {
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
            <h1 className="text-4xl font-bold mb-6">Welcome to Foodo Beta</h1>
            <p className="text-xl text-gray-600">
              You're among the first to experience Foodo. Help us shape the future of restaurant management.
            </p>
          </div>

          {/* What to Expect */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">What to Expect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <LuRocket className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="font-semibold mb-2">Early Access</h3>
                <p className="text-gray-600">
                  Be the first to try new features and provide feedback that shapes the platform.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                  <LuBug className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="font-semibold mb-2">Known Limitations</h3>
                <p className="text-gray-600">
                  Some features are still in development. We'll keep you updated on progress.
                </p>
              </div>
            </div>
          </section>

          {/* Current Features */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Current Beta Features</h2>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-50 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-green-500">✓</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Basic Menu Management</h3>
                    <p className="text-gray-600">Add and manage your menu items with basic customization options.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-50 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-green-500">✓</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Order Processing</h3>
                    <p className="text-gray-600">Receive and manage orders through the platform.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-50 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-green-500">✓</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Basic Analytics</h3>
                    <p className="text-gray-600">View essential metrics and performance data.</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Coming Soon */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Coming Soon</h2>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-yellow-50 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-yellow-500">⟳</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Advanced Analytics</h3>
                    <p className="text-gray-600">Detailed insights and reporting features.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-yellow-50 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-yellow-500">⟳</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Inventory Management</h3>
                    <p className="text-gray-600">Track and manage your inventory in real-time.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-yellow-50 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-yellow-500">⟳</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Customer Loyalty Program</h3>
                    <p className="text-gray-600">Build and manage customer relationships.</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* How to Participate */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">How to Participate</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <LuMessageSquare className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="font-semibold mb-2">Provide Feedback</h3>
                <p className="text-gray-600 mb-4">
                  Share your thoughts and suggestions to help improve Foodo.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/help/support/feedback">Give Feedback</Link>
                </Button>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                  <LuBug className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="font-semibold mb-2">Report Issues</h3>
                <p className="text-gray-600 mb-4">
                  Help us identify and fix bugs or problems you encounter.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/help/support/report-issues">Report Issue</Link>
                </Button>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                  <LuSettings className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="font-semibold mb-2">Stay Updated</h3>
                <p className="text-gray-600 mb-4">
                  Keep track of new features and improvements.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/help/support/updates">View Updates</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <h2 className="text-2xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-8">
              Set up your account and start exploring Foodo's beta features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/help/getting-started/account-setup">Set Up Account</Link>
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