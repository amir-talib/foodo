"use client";

import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { LuSearch, LuChevronRight, LuCalendar, LuClock, LuTag } from "react-icons/lu";

// Sample blog data (in a real app, this would come from a CMS)
const blogPosts = [
  {
    id: 1,
    title: "How to Increase Your Restaurant's Online Presence",
    excerpt: "Discover effective strategies to boost your restaurant's visibility in the digital world...",
    category: "Digital Marketing",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "/blog/restaurant-marketing.jpg",
    tags: ["Marketing", "Social Media", "SEO"],
  },
  {
    id: 2,
    title: "Essential Restaurant Management Tips for 2024",
    excerpt: "Learn the latest best practices in restaurant management to streamline your operations...",
    category: "Management",
    author: "Michael Chen",
    date: "March 12, 2024",
    readTime: "7 min read",
    image: "/blog/restaurant-management.jpg",
    tags: ["Management", "Operations", "Efficiency"],
  },
  {
    id: 3,
    title: "Leveraging Food Delivery Apps for Business Growth",
    excerpt: "Maximize your revenue potential with strategic use of food delivery platforms...",
    category: "Delivery",
    author: "Alex Thompson",
    date: "March 10, 2024",
    readTime: "6 min read",
    image: "/blog/food-delivery.jpg",
    tags: ["Delivery", "Growth", "Technology"],
  },
];

const categories = [
  "All Posts",
  "Digital Marketing",
  "Management",
  "Delivery",
  "Technology",
  "Customer Service",
  "Industry News",
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Posts");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All Posts" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-primary/5 to-white">
        <div className="container py-20">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Foodo Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Insights, tips, and strategies to help your restaurant thrive in the digital age
            </p>
          </motion.div>

          {/* Search and Filter Section */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              <div className="relative w-full md:w-96">
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
                <LuSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <div className="flex gap-3 overflow-x-auto pb-2 w-full md:w-auto">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className="whitespace-nowrap"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                variants={item}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="aspect-video relative overflow-hidden bg-gray-100">
                  <div className="absolute inset-0 bg-primary/10" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <LuCalendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <LuClock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-primary/5 text-primary rounded-full"
                      >
                        <LuTag className="inline w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      By {post.author}
                    </span>
                    <Button variant="ghost" className="text-primary">
                      Read More <LuChevronRight className="ml-1 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-500">No posts found matching your criteria.</p>
            </motion.div>
          )}
        </div>
      </div>
    </Layout>
  );
} 