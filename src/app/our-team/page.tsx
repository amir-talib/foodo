"use client";

import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { 
  LuBrain, 
  LuCode, 
  LuCpu, 
  LuSettings2,
  LuLinkedin,
  LuMail,
  LuTwitter
} from "react-icons/lu";
import { IconType } from "react-icons";

const team = [
  {
    name: "Amir Talib",
    role: "Chief Executive Officer",
    icon: LuBrain,
    bio: "Visionary leader and entrepreneur passionate about revolutionizing Nigeria's restaurant tech landscape. When not strategizing Foodo's next big move, you'll find Amir exploring Abuja's vibrant food scene for inspiration.",
    funFact: "Can name over 100 Nigerian dishes by heart",
    links: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:amir@foodo.ng"
    }
  },
  {
    name: "Walid Yakudima",
    role: "Chief Technology Officer",
    icon: LuCpu,
    bio: "Tech wizard extraordinaire who architects Foodo's robust platform. Walid turns complex restaurant problems into elegant digital solutions, ensuring our platform stays ahead of the curve.",
    funFact: "Once debugged code in his sleep (literally!)",
    links: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:walid@foodo.ng"
    }
  },
  {
    name: "Khalifa IMM",
    role: "Senior Developer",
    icon: LuCode,
    bio: "Code craftsman and problem-solver who brings Foodo's features to life. Khalifa's expertise in modern web technologies ensures our platform delivers a seamless experience for restaurants and their customers.",
    funFact: "Can type 120 words per minute while eating jollof rice",
    links: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:khalifa@foodo.ng"
    }
  },
  {
    name: "Sadiq Yakudima",
    role: "Chief Operations Officer",
    icon: LuSettings2,
    bio: "Operations mastermind who keeps Foodo running like a well-oiled machine. Sadiq's deep understanding of restaurant operations helps us create solutions that truly work in the real world.",
    funFact: "Has a secret recipe for the perfect suya spice mix",
    links: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:sadiq@foodo.ng"
    }
  }
];

export default function TeamPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const socialIcons: Record<string, IconType> = {
    linkedin: LuLinkedin,
    twitter: LuTwitter,
    email: LuMail
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
              Meet the Foodo Team
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're a passionate team of tech enthusiasts and food lovers, working to revolutionize 
              restaurant operations in Nigeria.
            </p>
          </motion.div>

          {/* Team Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={item}
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-full">
                          <member.icon className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{member.name}</h3>
                          <p className="text-primary">{member.role}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {Object.entries(member.links).map(([platform, url]) => {
                          const Icon = socialIcons[platform];
                          return (
                            <a
                              key={platform}
                              href={url}
                              className="p-2 text-gray-400 hover:text-primary transition-colors"
                              target={platform === 'email' ? '_self' : '_blank'}
                              rel="noopener noreferrer"
                            >
                              <Icon className="w-5 h-5" />
                            </a>
                          );
                        })}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {member.bio}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-primary/80">
                      <span className="font-medium">Fun fact:</span>
                      <span>{member.funFact}</span>
                    </div>
                  </div>
                  <div className="h-2 bg-gradient-to-r from-primary/20 via-primary to-primary/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-20 text-center"
          >
            <h2 className="text-3xl font-bold mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white rounded-lg shadow-sm border border-gray-100"
              >
                <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                  <LuBrain className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Innovation First</h3>
                <p className="text-gray-600">
                  We're constantly pushing boundaries to create better solutions for restaurants.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white rounded-lg shadow-sm border border-gray-100"
              >
                <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                  <LuCode className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Tech Excellence</h3>
                <p className="text-gray-600">
                  Building robust, reliable technology that restaurants can count on.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white rounded-lg shadow-sm border border-gray-100"
              >
                <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                  <LuSettings2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Customer Success</h3>
                <p className="text-gray-600">
                  Your growth is our growth. We succeed when you succeed.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
} 