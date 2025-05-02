"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LuCircle, LuClock, LuTriangle } from "react-icons/lu";
import Link from "next/link";

const faqCategories = [
  {
    title: "Getting Started",
    icon: LuCircle,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    questions: [
      {
        question: "What is the Foodo beta program?",
        answer: "The Foodo beta program is our early access version that allows restaurants to try out our platform before the full release. It includes core features for menu management, order processing, and basic analytics.",
      },
      {
        question: "How do I join the beta program?",
        answer: "To join the beta program, simply sign up on our website and complete the registration process. You'll need to provide basic information about your restaurant and agree to the beta terms of service.",
      },
      {
        question: "What features are available in the beta?",
        answer: "The beta includes essential features like menu management, order processing, basic analytics, and customer communication tools. Check our 'Getting Started' guides for detailed information about available features.",
      },
    ],
  },
  {
    title: "Technical Support",
    icon: LuTriangle,
    color: "text-yellow-500",
    bgColor: "bg-yellow-50",
    questions: [
      {
        question: "What should I do if I encounter a bug?",
        answer: "If you encounter any issues, please report them through our 'Report an Issue' form in the help center. Include as much detail as possible about the problem, including steps to reproduce it.",
      },
      {
        question: "How do I get technical support?",
        answer: "For technical support, you can contact our support team through the help center, email us at support@foodo.ng, or use the in-app chat feature during business hours.",
      },
      {
        question: "What are the system requirements?",
        answer: "Foodo works on any modern web browser. We recommend using Chrome, Firefox, or Safari with the latest updates. A stable internet connection is required for optimal performance.",
      },
    ],
  },
  {
    title: "Future Updates",
    icon: LuClock,
    color: "text-green-500",
    bgColor: "bg-green-50",
    questions: [
      {
        question: "When will new features be added?",
        answer: "We regularly update the beta with new features and improvements. Check our 'Known Issues' page for the latest roadmap and upcoming features.",
      },
      {
        question: "Will my data be preserved when the full version launches?",
        answer: "Yes, all your data, including menu items, order history, and analytics, will be preserved when we transition to the full version. We'll provide advance notice before any major updates.",
      },
      {
        question: "How can I provide feedback about the beta?",
        answer: "We welcome your feedback! You can submit suggestions through the feedback form in the help center, participate in our beta user surveys, or contact our support team directly.",
      },
    ],
  },
];

export default function FAQ() {
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
              <span className="text-sm font-medium text-primary">Help Center</span>
            </div>
            <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600">
              Find answers to common questions about the Foodo beta program.
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-12">
            {faqCategories.map((category) => (
              <section key={category.title}>
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h2 className="text-2xl font-bold">{category.title}</h2>
                </div>
                <div className="space-y-4">
                  {category.questions.map((faq) => (
                    <div
                      key={faq.question}
                      className="bg-white rounded-xl shadow-sm p-6"
                    >
                      <h3 className="font-semibold mb-3">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* CTA */}
          <section className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-gray-600 mb-8">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Contact Support</Link>
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