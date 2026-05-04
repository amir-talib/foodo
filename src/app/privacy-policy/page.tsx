"use client";

import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-primary/5 to-white">
        <div className="container py-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
            >
              <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
              <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                  <p className="text-gray-600 mb-4">
                    Welcome to Foodo ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our platform. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, mobile application, and services (collectively, the "Services").
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium">2.1 Information You Provide</h3>
                    <ul className="list-disc pl-6 text-gray-600 space-y-2">
                      <li>Account information (name, email, phone number)</li>
                      <li>Restaurant details and business information</li>
                      <li>Payment and billing information</li>
                      <li>Communications with us</li>
                      <li>User-generated content</li>
                    </ul>

                    <h3 className="text-xl font-medium">2.2 Automatically Collected Information</h3>
                    <ul className="list-disc pl-6 text-gray-600 space-y-2">
                      <li>Device information (IP address, browser type, device type)</li>
                      <li>Usage data (pages visited, time spent, features used)</li>
                      <li>Location information (with your consent)</li>
                      <li>Cookies and similar technologies</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Provide, maintain, and improve our Services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send administrative information and updates</li>
                    <li>Respond to comments and questions</li>
                    <li>Personalize your experience</li>
                    <li>Monitor and analyze trends and usage</li>
                    <li>Detect, prevent, and address technical issues</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">4. Information Sharing and Disclosure</h2>
                  <p className="text-gray-600 mb-4">
                    We may share your information with:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Service providers and business partners</li>
                    <li>Payment processors and financial institutions</li>
                    <li>Legal authorities when required by law</li>
                    <li>Other users as part of the Services (e.g., restaurant information)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
                  <p className="text-gray-600 mb-4">
                    We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">6. Your Rights and Choices</h2>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Access and update your information</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Delete your account</li>
                    <li>Control cookie preferences</li>
                    <li>Request data portability</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">7. Children's Privacy</h2>
                  <p className="text-gray-600 mb-4">
                    Our Services are not intended for children under 13. We do not knowingly collect personal information from children under 13.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">8. Changes to This Policy</h2>
                  <p className="text-gray-600 mb-4">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
                  <p className="text-gray-600 mb-4">
                    If you have any questions about this Privacy Policy, please contact us at:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-600">Email: privacy@foodo.ng</p>
                    <p className="text-gray-600">Phone: 0916 492 4074</p>
                    <p className="text-gray-600">Address: Plot 123, Wuse Zone 5, Abuja, Nigeria</p>
                  </div>
                </section>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 