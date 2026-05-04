import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to see your sales climb?
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-white/90">
          Join the restaurants already partnering with Foodo to take control of their growth,
          protect their margins, and build a customer base they actually own.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-white"
            asChild
          >
            <Link href="/contact">
              Partner With Us
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white/10"
            asChild
          >
            <Link href="/demo">
              Book a Free Strategy Call
            </Link>
          </Button>
        </div>
        <p className="mt-6 text-sm text-white/80">
          No commitment required. See how we can grow your sales in 30 days.
        </p>
      </div>
    </section>
  );
}
