import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Start growing your restaurant business today
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-white/90">
          Join other Abuja restaurants already using Foodo to increase orders, manage deliveries,
          and build customer loyalty—all without high commission fees from Jumia or Glovo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-white"
            asChild
          >
            <Link href="/get-started">
              Get Started Free
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white/10"
            asChild
          >
            <Link href="/demo">
              Request Demo
            </Link>
          </Button>
        </div>
        <p className="mt-6 text-sm text-white/80">
          No credit card required. Free 14-day trial for all features.
        </p>
      </div>
    </section>
  );
}
