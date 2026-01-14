import React from "react";

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
    <div className=" px-13 mb-24 mt-24">
      <h1 className="text-center mb-8 text-3xl font-bold text-gray-500 md:text-4xl   ">
        Our Happy Customers Say it Best
      </h1>
      <div className="">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-5xl lg:max-w-3xl mx-auto"
        >
          <CarouselContent>
            {Array.from({ length: 4 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="border border-green-800">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-3xl font-semibold">
                        {index + 2}
                      </span>
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
    </div>
  );
}

export default Testimonial;
