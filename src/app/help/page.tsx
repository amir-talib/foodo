"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Layout } from "@/components/layout/Layout";
import { AnimatedBackground } from "@/components/ui/animated-background";
import {
  LuSearch,
  LuBook,
  LuCircle,
  LuTriangle,
  LuClock,
  LuActivity,
  LuShoppingBag,
  LuUtensils,
  LuRocket,
  LuMessageSquare,
  LuSettings,
} from "react-icons/lu";
import Link from "next/link";

const helpCategories = [
  {
    title: "Getting Started",
    icon: LuBook,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    description: "Learn the basics of using Foodo",
    links: [
      {
        title: "Beta Program Overview",
        href: "/help/getting-started/beta-overview",
        description: "Learn about the beta program and its features",
      },
      {
        title: "Account Setup",
        href: "/help/getting-started/account-setup",
        description: "Set up your restaurant account",
      },
      {
        title: "Known Issues",
        href: "/help/getting-started/known-issues",
        description: "Current limitations and upcoming fixes",
      },
    ],
  },
  {
    title: "Menu Management",
    icon: LuUtensils,
    color: "text-green-500",
    bgColor: "bg-green-50",
    description: "Manage your restaurant's menu",
    links: [
      {
        title: "Menu Setup Guide",
        href: "/help/getting-started/menu-management",
        description: "Create and manage your menu items",
      },
      {
        title: "Image Guidelines",
        href: "/help/getting-started/menu-management#images",
        description: "Best practices for menu images",
      },
      {
        title: "Category Management",
        href: "/help/getting-started/menu-management#categories",
        description: "Organize your menu with categories",
      },
    ],
  },
  {
    title: "Order Management",
    icon: LuShoppingBag,
    color: "text-purple-500",
    bgColor: "bg-purple-50",
    description: "Handle customer orders",
    links: [
      {
        title: "Order Processing",
        href: "/help/getting-started/order-management",
        description: "Process and manage incoming orders",
      },
      {
        title: "Order Status Updates",
        href: "/help/getting-started/order-management#status",
        description: "Keep customers informed about their orders",
      },
      {
        title: "Customer Communication",
        href: "/help/getting-started/order-management#communication",
        description: "Best practices for customer interaction",
      },
    ],
  },
  {
    title: "Analytics",
    icon: LuActivity,
    color: "text-yellow-500",
    bgColor: "bg-yellow-50",
    description: "Track your business performance",
    links: [
      {
        title: "Analytics Overview",
        href: "/help/getting-started/analytics",
        description: "Understand your business metrics",
      },
      {
        title: "Performance Tracking",
        href: "/help/getting-started/analytics#performance",
        description: "Monitor your restaurant's performance",
      },
      {
        title: "Data Insights",
        href: "/help/getting-started/analytics#insights",
        description: "Make data-driven decisions",
      },
    ],
  },
];

const quickLinks = [
  {
    title: "FAQ",
    icon: LuCircle,
    href: "/help/faq",
    description: "Find answers to common questions",
  },
  {
    title: "Known Issues",
    icon: LuTriangle,
    href: "/help/getting-started/known-issues",
    description: "Current limitations and upcoming fixes",
  },
  {
    title: "Contact Support",
    icon: LuClock,
    href: "/contact",
    description: "Get help from our support team",
  },
];

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log("Searching for:", searchQuery);
  };

  const toggleCategory = (title: string) => {
    setExpandedCategory(expandedCategory === title ? null : title);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-primary text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-block bg-white/10 rounded-full px-4 py-1 mb-4">
                <span className="text-sm font-medium">Beta Version</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Foodo Help Center
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Your guide to mastering Foodo's beta features. Find answers, learn best practices, and help shape the future of restaurant management.
              </p>
              <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search help articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-6 text-lg rounded-full bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
                  />
                  <LuSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-white/60" />
                </div>
              </form>
            </motion.div>
          </div>
          <AnimatedBackground />
        </section>

        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            {/* Quick Links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {quickLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                      <link.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold">{link.title}</h3>
                  </div>
                  <p className="text-gray-600">{link.description}</p>
                </Link>
              ))}
            </div>

            {/* Main Categories */}
            <div className="space-y-12">
              {helpCategories.map((category) => (
                <section key={category.title}>
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                      <category.icon className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">{category.title}</h2>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {category.links.map((link) => (
                      <Link
                        key={link.title}
                        href={link.href}
                        className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-200"
                      >
                        <h3 className="font-semibold mb-2">{link.title}</h3>
                        <p className="text-gray-600">{link.description}</p>
                      </Link>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* CTA */}
            <section className="mt-16 text-center">
              <h2 className="text-2xl font-bold mb-6">Need More Help?</h2>
              <p className="text-gray-600 mb-8">
                Our support team is here to help you succeed with Foodo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Contact Support</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/help/faq">View FAQ</Link>
                </Button>
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
} 