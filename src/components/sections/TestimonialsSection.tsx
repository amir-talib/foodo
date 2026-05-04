"use client";

import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  image?: string;
};

export function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: "1",
      quote: "With Foodo, our delivery orders increased by 40% in the first month. The integration with local dispatch riders saved us from managing logistics ourselves.",
      name: "Chioma Eze",
      role: "Owner",
      company: "Flavors of Abuja",
      image: "https://ext.same-assets.com/3930127789/3664451482.avif",
    },
    {
      id: "2",
      quote: "The WhatsApp ordering notifications are perfect for our setup. Our kitchen staff knows immediately when new orders come in, and customers love the automated updates.",
      name: "Emmanuel Okafor",
      role: "Manager",
      company: "Urban Grill",
      image: "https://ext.same-assets.com/3930127789/3970014826.avif",
    },
    {
      id: "3",
      quote: "We were losing so much money to Jumia. Since switching to Foodo, our profit margins are back, and we've kept all our loyal customers who now order directly.",
      name: "Amina Ibrahim",
      role: "Owner",
      company: "Spice Kitchen",
    },
    {
      id: "4",
      quote: "Their SMS marketing features helped us reconnect with customers who hadn't ordered in months. The automated messages bring people back without any work from our team.",
      name: "David Adeyemi",
      role: "Owner",
      company: "Catfish Point",
    },
    {
      id: "5",
      quote: "Setting up our menu with pictures took just one day, and we started receiving orders immediately. So much easier than what we tried before.",
      name: "Grace Nwosu",
      role: "Manager",
      company: "Lagos Bites",
      image: "https://ext.same-assets.com/3930127789/4226840210.avif",
    },
  ];

  return (
    <section className="py-20 bg-[#F8F5FB]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">
          Restaurants growing with Foodo
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Here's what our restaurant partners across Abuja are saying about working with Foodo.
        </p>

        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 p-4">
                <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
                  <blockquote className="text-lg mb-6 flex-grow">
                    <p className="italic">"{testimonial.quote}"</p>
                  </blockquote>
                  <div className="flex items-center">
                    {testimonial.image && (
                      <div className="w-12 h-12 mr-4 rounded-full overflow-hidden">
                        <img
                          src={testimonial.image}
                          alt={`${testimonial.name} from ${testimonial.company}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative mr-2" />
            <CarouselNext className="relative ml-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
