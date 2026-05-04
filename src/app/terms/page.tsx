"use client";

import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";

export default function TermsPage() {
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
              <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
              <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
                  <p className="text-gray-600 mb-4">
                    By accessing or using Foodo's services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">2. Use of Services</h2>
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium">2.1 Eligibility</h3>
                    <p className="text-gray-600 mb-4">
                      You must be at least 18 years old to use our services. By using our services, you represent and warrant that you meet all eligibility requirements.
                    </p>

                    <h3 className="text-xl font-medium">2.2 Account Registration</h3>
                    <p className="text-gray-600 mb-4">
                      You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">3. Restaurant Services</h2>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Restaurants must maintain accurate menu information and pricing</li>
                    <li>Food quality and safety standards must be maintained</li>
                    <li>Delivery times must be reasonable and accurate</li>
                    <li>Restaurants must comply with all applicable laws and regulations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>
                  <div className="space-y-4">
                    <p className="text-gray-600 mb-4">
                      All payments are processed securely through our payment partners. By using our services, you agree to pay all charges at the prices then in effect.
                    </p>
                    <ul className="list-disc pl-6 text-gray-600 space-y-2">
                      <li>Prices are subject to change without notice</li>
                      <li>All payments are non-refundable unless required by law</li>
                      <li>Service fees may apply to certain transactions</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">5. User Conduct</h2>
                  <p className="text-gray-600 mb-4">
                    You agree not to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Impersonate any person or entity</li>
                    <li>Interfere with the proper functioning of the service</li>
                    <li>Attempt to gain unauthorized access</li>
                    <li>Engage in any fraudulent activity</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
                  <p className="text-gray-600 mb-4">
                    All content, features, and functionality of our services are owned by Foodo and are protected by international copyright, trademark, and other intellectual property laws.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
                  <p className="text-gray-600 mb-4">
                    To the maximum extent permitted by law, Foodo shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">8. Termination</h2>
                  <p className="text-gray-600 mb-4">
                    We may terminate or suspend your account and access to our services immediately, without prior notice or liability, for any reason whatsoever, including breach of these Terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
                  <p className="text-gray-600 mb-4">
                    We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new Terms on this page and updating the "Last updated" date.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
                  <p className="text-gray-600 mb-4">
                    These Terms shall be governed by and construed in accordance with the laws of Nigeria, without regard to its conflict of law provisions.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">11. Contact Information</h2>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-600">Email: legal@foodo.ng</p>
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