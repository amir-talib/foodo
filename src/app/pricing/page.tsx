import { Layout } from "@/components/layout/Layout";
import { PricingSection } from "@/components/sections/PricingSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const faqs = [
  {
    question: "How does the order limit work?",
    answer: "Each plan includes a certain number of orders per month. For example, the Starter plan includes 100 orders. After reaching this limit, you'll be charged per order at the specified rate (₦150 for Starter, ₦100 for Professional, ₦75 for Premium). Enterprise plans have unlimited orders."
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can change your plan at any time. When upgrading, you'll be prorated for the remainder of your billing cycle. When downgrading, the new rate will apply at the start of your next billing cycle."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, bank transfers, and local payment methods. For Enterprise customers, we can also accommodate custom payment terms."
  },
  {
    question: "Is there a setup fee?",
    answer: "No, there are no setup fees for any of our plans. You only pay the monthly subscription fee and any additional usage charges if you exceed your included order limits."
  },
  {
    question: "What kind of support do you offer?",
    answer: "Support varies by plan: Starter includes email support, Professional includes priority email and chat support, Premium includes 24/7 support with a dedicated account manager, and Enterprise includes all of the above plus a dedicated technical account manager."
  }
];

const benefits = [
  {
    title: "No Hidden Fees",
    description: "Transparent pricing with no surprise charges. Pay only for what you use beyond your included limits."
  },
  {
    title: "Flexible Scaling",
    description: "Start small and scale up as your business grows. Upgrade or downgrade your plan at any time."
  },
  {
    title: "Dedicated Support",
    description: "Get the help you need when you need it, with support options that grow with your business."
  }
];

export default function PricingPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-primary/5 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Choose Your Perfect Plan
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Scale your restaurant business with our flexible pricing plans. No hidden fees, no surprises.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/waitlist">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                  <p className="text-gray-500">{benefit.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Everything you need to know about our pricing and plans
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl mt-12">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Get Started?
              </h2>
              <p className="mx-auto max-w-[600px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of restaurants already using foodo to grow their business
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link href="/waitlist">Start Free Trial</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 