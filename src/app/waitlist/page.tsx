"use client";

import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { LuChevronRight, LuCheck, LuClock, LuMapPin, LuShield } from "react-icons/lu";

const locations = [
  "Wuse 1, Abuja",
  "Wuse 2, Abuja",
  "Garki, Abuja",
  "Maitama, Abuja",
  "Asokoro, Abuja",
  "Gwarinpa, Abuja",
  "Other Area in Abuja",
  "Other City",
];

const benefits = [
  {
    icon: LuShield,
    title: "Commission-Free Platform",
    description: "Keep more of your earnings with our transparent pricing model",
  },
  {
    icon: LuMapPin,
    title: "Built for Nigeria",
    description: "Optimized for Nigerian restaurants and local customer preferences",
  },
  {
    icon: LuClock,
    title: "Early Access",
    description: "Be among the first to use Foodo when we launch in Abuja",
  },
];

interface FormData {
  restaurantName: string;
  contactName: string;
  email: string;
  phone: string;
  location: string;
}

export default function WaitlistPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    restaurantName: "",
    contactName: "",
    email: "",
    phone: "",
    location: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    // For now, we'll just simulate a submission
    setIsSubmitted(true);
  };

  return (
    <Layout>
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-primary/5 rounded-full transform rotate-45" />
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-secondary/5 rounded-full transform -rotate-45" />
        </div>

        <div className="container relative px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get Ready, Abuja!{" "}
                <span className="text-primary">Foodo</span> is Launching Soon
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Join the waitlist for Abuja's first commission-free restaurant platform. 
                Manage online orders, deliveries, and get your own website – all without the high fees.
              </p>
            </motion.div>

            {/* Benefits Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid md:grid-cols-3 gap-6 mb-12"
            >
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 bg-primary/10 rounded-full mb-4">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {!isSubmitted ? (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-xl shadow-lg max-w-xl mx-auto border border-gray-100"
              >
                <h2 className="text-2xl font-bold mb-6">Join the Abuja Waitlist</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="restaurantName">Restaurant Name</Label>
                    <Input
                      id="restaurantName"
                      placeholder="Enter your restaurant name"
                      value={formData.restaurantName}
                      onChange={(e) => setFormData({ ...formData, restaurantName: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="contactName">Contact Person Name</Label>
                    <Input
                      id="contactName"
                      placeholder="Enter your full name"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="e.g., 0801 234 5678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="location">Restaurant Location</Label>
                    <Select
                      value={formData.location}
                      onValueChange={(value) => setFormData({ ...formData, location: value })}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your location" />
                      </SelectTrigger>
                      <SelectContent>
                        {locations.map((location) => (
                          <SelectItem key={location} value={location}>
                            {location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Join Waitlist <LuChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-8 rounded-xl shadow-lg max-w-xl mx-auto text-center border border-gray-100"
              >
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
                  <LuCheck className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
                <p className="text-gray-600">
                  You're on the list! We'll contact you soon with updates about the Foodo launch in Abuja.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
} 