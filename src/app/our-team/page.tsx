"use client";

import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { LuRocket, LuCode, LuCpu, LuSettings, LuLinkedin } from "react-icons/lu";
import { AnimatedBackground } from "@/components/ui/animated-background";

const team = [
  {
    name: "Amir Talib",
    role: "Chief Executive Officer",
    icon: LuRocket,
    color: "text-blue-500",
    bgColor: "bg-blue-100",
    description: "Visionary leader with a passion for transforming the food industry. Amir brings 5+ years of experience in business strategy and digital innovation, driving Foodo's mission to empower Nigerian restaurants.",
    funFact: "Can cook a mean jollof rice! 🍚",
    linkedin: "https://linkedin.com/in/amir-talib"
  },
  {
    name: "Walid Yakudima",
    role: "Chief Technology Officer",
    icon: LuCode,
    color: "text-purple-500",
    bgColor: "bg-purple-100",
    description: "Tech wizard with a knack for building scalable solutions. Walid leads our engineering team, ensuring Foodo's platform remains cutting-edge and reliable for our restaurant partners.",
    funFact: "Built his first website at age 12! 💻",
    linkedin: "https://linkedin.com/in/walid-yakudima"
  },
  {
    name: "Khalifa IMM",
    role: "Senior Developer",
    icon: LuCpu,
    color: "text-green-500",
    bgColor: "bg-green-100",
    description: "Full-stack expert who turns complex problems into elegant solutions. Khalifa's expertise in modern web technologies helps keep Foodo's platform fast, secure, and user-friendly.",
    funFact: "Can debug code in his sleep! 🛠️",
    linkedin: "https://linkedin.com/in/khalifa-imm"
  },
  {
    name: "Sadiq Yakudima",
    role: "Chief Operations Officer",
    icon: LuSettings,
    color: "text-orange-500",
    bgColor: "bg-orange-100",
    description: "Operations maestro who ensures everything runs smoothly. Sadiq's attention to detail and process optimization helps Foodo deliver exceptional service to our restaurant partners.",
    funFact: "Can juggle 5 tasks simultaneously! 🤹",
    linkedin: "https://linkedin.com/in/sadiq-yakudima"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function TeamPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Meet the Team Behind Foodo
              </h1>
              <p className="text-xl text-white/90 mb-8">
                We're a passionate team of food lovers and tech innovators working together to transform how Nigerian restaurants do business.
              </p>
            </motion.div>
          </div>
          <AnimatedBackground />
        </section>

        {/* Team Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {team.map((member) => (
                <motion.div
                  key={member.name}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className={`p-8 ${member.bgColor}`}>
                      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white flex items-center justify-center shadow-lg">
                        <member.icon className={`w-10 h-10 ${member.color}`} />
                      </div>
                      <h3 className="text-xl font-bold text-center mb-2">{member.name}</h3>
                      <p className="text-gray-600 text-center mb-4">{member.role}</p>
                      <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                      <div className="text-center">
                        <p className="text-sm text-gray-500 italic mb-4">{member.funFact}</p>
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block text-primary hover:text-primary/80 transition-colors"
                        >
                          Connect on LinkedIn →
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Fun Stats Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            >
              <div className="p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-3xl font-bold text-primary mb-2">10+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-3xl font-bold text-primary mb-2">100+</h3>
                <p className="text-gray-600">Restaurants Served</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-3xl font-bold text-primary mb-2">24/7</h3>
                <p className="text-gray-600">Support Available</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-3xl font-bold text-primary mb-2">4</h3>
                <p className="text-gray-600">Team Members</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
} 