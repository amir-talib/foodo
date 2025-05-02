import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const pricingPlans = [
  {
    name: "Starter",
    target: "Small restaurants, food vendors, new businesses",
    price: "₦50,000",
    period: "month",
    features: [
      "Commission-free online ordering",
      "Basic restaurant website (1 template)",
      "Restaurant dashboard",
      "Rider management (up to 5 riders)",
      "Payment processing (2.5% fee)",
      "Email support",
      "100 orders/month included (₦150/order thereafter)",
    ],
    popular: false,
  },
  {
    name: "Professional",
    target: "Medium-sized restaurants, growing businesses",
    price: "₦100,000",
    period: "month",
    features: [
      "All Starter features",
      "Advanced restaurant website (3 templates)",
      "Enhanced dashboard with analytics",
      "Rider management (unlimited riders)",
      "Marketing tools (SMS campaigns, special offers)",
      "Payment processing (2% fee)",
      "Priority email and chat support",
      "300 orders/month included (₦100/order thereafter)",
      "Inventory management",
    ],
    popular: true,
  },
  {
    name: "Premium",
    target: "Established restaurants, multi-location businesses",
    price: "₦150,000",
    period: "month",
    features: [
      "All Professional features",
      "Custom restaurant website",
      "Advanced analytics and reporting",
      "Loyalty program management",
      "Payment processing (1.5% fee)",
      "Dedicated account manager",
      "24/7 support",
      "700 orders/month included (₦75/order thereafter)",
      "Multi-location support (up to 3 locations)",
    ],
    popular: false,
  },
  {
    name: "Enterprise",
    target: "Large restaurant chains, franchises, hospitality groups",
    price: "Custom",
    period: "Pricing",
    features: [
      "All Premium features",
      "Custom development services",
      "Full API access",
      "White-label options",
      "Custom integration with existing systems",
      "Enterprise-grade security",
      "Unlimited orders",
      "Multi-location support (unlimited)",
      "Dedicated technical account manager",
    ],
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Simple, Transparent Pricing
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Choose the perfect plan for your business needs
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className={`flex flex-col ${
                plan.popular
                  ? "border-primary shadow-lg scale-105"
                  : "border-gray-200"
              }`}
            >
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-sm text-gray-500">
                  {plan.target}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500">/{plan.period}</span>
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 