import React from "react";
import Image from "next/image";

const plants = [
  "/image2.png",
  "/plant2.jpg",
  "/plant3.jpg",
  "/image2.png",
  "/image2.png",
  "/image2.png",
];

function Plants() {
  return (
    <section className="mt-24 px-6 mb-12">
      {/* Heading */}
      <div className="mb-10 text-center">
        <h1 className="font-bold text-3xl md:text-4xl text-green-900 mb-3">
          Our Favourite Plants
        </h1>
        <p className="max-w-xl mx-auto text-sm text-slate-600">
          Take home one of our favourites — easy to care for, hard not to love.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {plants.map((img, index) => (
          <div
            key={index}
            className="bg-slate-100 rounded-2xl p-5 flex items-center justify-center
                       hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={img}
              width={260}
              height={200}
              alt="Favourite plant"
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Plants;
