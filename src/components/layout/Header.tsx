"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { LuMenu, LuPhone, LuChevronDown } from "react-icons/lu";

const navigation = {
  resources: [
    { name: "Success Stories", href: "/resources/success-stories" },
    { name: "Blog", href: "/blog" },
    { name: "Help Center", href: "/help" },
    { name: "Partners", href: "/partners" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
  ],
};

export function Header() {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [isMouseOverDropdown, setIsMouseOverDropdown] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setHoveredMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      if (!isMouseOverDropdown) {
        setHoveredMenu(null);
      }
    }, 100); // Small delay before closing
  };

  const handleDropdownMouseEnter = () => {
    setIsMouseOverDropdown(true);
  };

  const handleDropdownMouseLeave = () => {
    setIsMouseOverDropdown(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setHoveredMenu(null);
    }, 100);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">foodo</span>
            <span className="ml-1 text-xs bg-secondary/20 text-secondary px-1.5 py-0.5 rounded-sm font-medium">BETA</span>
          </Link>

          <nav className="hidden md:flex ml-10 space-x-8">
            {/* Desktop Navigation */}
            <Link href="/features" className="text-sm font-medium text-gray-600 hover:text-primary">
              Features
            </Link>

            <Link href="/pricing" className="text-sm font-medium text-gray-600 hover:text-primary">
              Pricing
            </Link>

            <div
              onMouseEnter={() => handleMouseEnter("resources")}
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              <button className="flex items-center text-sm font-medium text-gray-600 hover:text-primary">
                Resources <LuChevronDown className="ml-1 h-4 w-4" />
              </button>
              {hoveredMenu === "resources" && (
                <div 
                  className="absolute left-0 mt-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <div className="py-1">
                    {navigation.resources.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-primary">
              Contact Us
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <a href="tel:+2349012345678" className="hidden md:flex items-center text-sm font-medium text-gray-600 hover:text-primary">
            <LuPhone className="mr-2 h-4 w-4" />
            +234 901 234 5678
          </a>

          <Button
            size="sm"
            className="hidden md:flex bg-primary hover:bg-primary/90"
            asChild
          >
            <Link href="/waitlist">
              Get Started
            </Link>
          </Button>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <LuMenu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80%] sm:w-[350px]">
              <div className="flex flex-col gap-6 mt-8">
                <Link href="/features" className="text-lg font-medium hover:text-primary">
                  Features
                </Link>

                <Link href="/pricing" className="text-lg font-medium hover:text-primary">
                  Pricing
                </Link>

                <div className="space-y-3">
                  <h3 className="text-lg font-medium">Resources</h3>
                  <div className="flex flex-col space-y-2">
                    {navigation.resources.map((item) => (
                      <Link key={item.name} href={item.href} className="text-sm hover:text-primary">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link href="/contact" className="text-lg font-medium hover:text-primary">
                  Contact Us
                </Link>

                <div className="pt-4 border-t">
                  <a href="tel:+2349012345678" className="flex items-center text-primary">
                    <LuPhone className="mr-2 h-4 w-4" />
                    +234 901 234 5678
                  </a>
                </div>

                <Button
                  className="w-full bg-primary hover:bg-primary/90"
                  asChild
                >
                  <Link href="/waitlist">
                    Get Started
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
