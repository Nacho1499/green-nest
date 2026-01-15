import React from "react";
import { reviews } from "@/lib/reviews";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Testimonial() {
  return (
    <div className=" p-12 mt-24 mb-24 lg:px-6 ">
      <h1 className="text-center mb-10 text-2xl md:text-4xl font-bold text-gray-600">
         “ Our Happy Customers Say It Best ”
      </h1>

      <Carousel opts={{ align: "start" }} className="w-full max-w-4xl mx-auto">
        <CarouselContent>
          {reviews.map((review, id) => (
            <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-2">
                <Card
                  className="border border-green-800/60 rounded-xl bg-white hover:scale-105
                 transition duration-300 ease-in-out"
                >
                  <CardContent className="p-6 ">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      “{review.testimonial}”
                    </p>
                    <Image
                      src={review.image}
                      className=" rounded-full mt-4 h-10 w-10 object-cover border-2 border-green-800"
                      alt="testimonial-image"
                      width={50}
                      height={50}
                    />

                    <p className="text-green-800 font-semibold text-sm mt-4">
                      — {review.name}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default Testimonial;
