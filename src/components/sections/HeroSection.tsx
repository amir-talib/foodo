import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LuPhone, LuBell } from "react-icons/lu";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-[#F8F5FB]">
      <div className="absolute inset-0 opacity-10 bg-pattern-dots"></div>
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-2">
              Trusted by 15+ restaurants across Abuja
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              We don't just build tools. We build your sales.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-xl">
              Foodo partners hands-on with restaurants to grow orders, eliminate commission drain,{" "}
              and turn one-time diners into loyal regulars. No tech skills required. Just results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
                asChild
              >
                <Link href="/contact">
                  Partner With Us
                </Link>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              {/* Floating notification */}
              <div className="absolute -top-4 right-12 z-20 animate-float">
                <div className="bg-white rounded-lg shadow-lg p-3 flex items-center gap-2">
                  <div className="p-2 bg-green-100 rounded-full">
                    <LuBell className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="text-sm">
                    <p className="font-medium text-gray-900">New Order Received!</p>
                    <p className="text-gray-500 text-xs">₦12,500 • Just now</p>
                  </div>
                </div>
              </div>
              
              {/* Background decorative elements */}
              <div className="absolute -top-12 -left-12 w-24 h-24 bg-secondary/10 rounded-full"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/10 rounded-full"></div>
              
              {/* Main dashboard image */}
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/dashboard-preview.png"
                  alt="Foodo Restaurant Dashboard Preview"
                  width={800}
                  height={500}
                  priority
                  className="w-full h-auto rounded-lg"
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
