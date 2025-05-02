"use client";

import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LuCheck, LuClock, LuShield } from "react-icons/lu";
import { motion } from "framer-motion";
import { ReCaptcha } from "@/components/ui/recaptcha";

const benefits = [
  {
    title: "Early Access",
    description: "Be among the first to use Foodo when we launch",
    icon: LuClock,
  },
  {
    title: "Priority Support",
    description: "Get dedicated onboarding and setup assistance",
    icon: LuCheck,
  },
  {
    title: "Special Pricing",
    description: "Lock in our best rates as an early adopter",
    icon: LuShield,
  },
];

const locations = [
  "Wuse",
  "Garki",
  "Maitama",
  "Asokoro",
  "Gwarinpa",
  "Other",
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
  const [isLoading, setIsLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    restaurantName: "",
    contactName: "",
    email: "",
    phone: "",
    location: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLocationChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      location: value,
    }));
  };

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const handleCaptchaExpired = () => {
    setCaptchaToken(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!captchaToken) {
      alert('Please complete the reCAPTCHA verification');
      return;
    }

    setIsLoading(true);

    const submitData = {
      restaurantName: formData.restaurantName.trim(),
      contactName: formData.contactName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      location: formData.location.trim(),
      captchaToken: captchaToken
    };

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwuQzKnGb2ZmALJG6An4Fu-B6D-ijCPK-DP6mlZt7AMPzNBzv0jnIDj4Jwu2NAt2apRuA/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData)
      });
      
      // Since we're using no-cors, we can't read the response
      // But we can check if the request was sent
      setIsSubmitted(true);
      
      // Reset form and captcha
      setFormData({
        restaurantName: "",
        contactName: "",
        email: "",
        phone: "",
        location: "",
      });
      setCaptchaToken(null);

    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to join waitlist. Please try again or contact support if the issue persists.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-primary/5 to-white">
        <div className="container py-20">
          <div className="max-w-4xl mx-auto">
            {!isSubmitted ? (
              <>
                {/* Hero Content */}
                <motion.div
                  className="text-center mb-12"
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
                        <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* Form Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
                >
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="restaurantName">Restaurant Name</Label>
                        <Input
                          id="restaurantName"
                          name="restaurantName"
                          placeholder="Enter your restaurant name"
                          value={formData.restaurantName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="contactName">Contact Person</Label>
                        <Input
                          id="contactName"
                          name="contactName"
                          placeholder="Enter contact person's name"
                          value={formData.contactName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div>
                        <Label>Location</Label>
                        <Select
                          value={formData.location}
                          onValueChange={handleLocationChange}
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
                    </div>

                    <div className="space-y-4">
                      <ReCaptcha
                        onChange={handleCaptchaChange}
                        onExpired={handleCaptchaExpired}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90"
                      disabled={isLoading || !captchaToken}
                    >
                      {isLoading ? "Joining..." : "Join Waitlist"}
                    </Button>
                  </form>
                </motion.div>
              </>
            ) : (
              <motion.div
                className="text-center py-20"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-8">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <LuCheck className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">You're on the List!</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Thanks for joining our waitlist. We'll be in touch soon with updates about our launch.
                  </p>
                </div>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                >
                  Add Another Restaurant
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
} 