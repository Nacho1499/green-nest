import React from "react";
import Image from "next/image";
import { plants } from "@/lib/plants";

function Plants() {
  return (
    <section className="mt-24 px-6 mb-12 text-center">
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {plants.map((img, id) => (
          <div
            key={id}
            className="bg-slate-100 rounded-2xl p-5
                       hover:shadow-lg duration-300 cursor-pointer"
          >
            <Image
              src={img.image}
              width={260}
              height={100}
              alt="Favourite plant"
              className="object-contain  hover:scale-110 transition duration-400 ease-in-out"
            />
            <h1 className="text-center  font-semibold text-md text-slate-600">
              {img.name}
            </h1>
            <div className="flex items-center gap-2 text-sm mt-2 justify-center">
              <p className="text-gray-500 line-through">₦{img.old}</p>
              <p className="text-green-900 font-semibold">₦{img.new}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="font-bold text-green-800 text-sm mt-16 border inline-flex items-center gap-2 cursor-pointer
       border-green-800 py-2 px-4 rounded-xl hover:scale-110 transition duration-300 ease-in-out"
      >
        <h1>Explore More</h1>
      </button>
    </section>
  );
}

export default Plants;
