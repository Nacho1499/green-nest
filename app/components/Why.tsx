import React from "react";
import Image from "next/image";
import { Truck } from "lucide-react";
import { Undo2 } from "lucide-react";
import { Headset } from "lucide-react";
import { BadgeCheck } from "lucide-react";

function Why() {
  return (
    <section className="px-6 mt-24">
      {/* Heading */}
      <h2 className="font-bold text-3xl md:text-4xl text-green-900 mb-4 text-center">
        Why shop with GreenNest?
      </h2>

      <p className="max-w-3xl mx-auto text-sm md:text-base text-gray-600 leading-relaxed text-center">
        From your screen to your space, we make plant shopping simple, seamless,
        and stress-free — delivering quality greenery right to your doorstep.
      </p>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 mb-8 max-w-6xl mx-auto gap-8 mt-20 m run lg:p-8">
        {/* Left features */}
        <div className="space-y-10">
          <div className="shadow-lg p-4 rounded-lg">
            <Truck size={25} className="text-green-800 mb-3" />

            <h3 className="font-bold text-lg text-green-900 mb-2">
              Free & Fast Delivery
            </h3>
            <p className="text-sm text-gray-600">
              Plants delivered fresh to your door — free on orders over $50.
            </p>
          </div>

          <div className="shadow-lg p-4 rounded-lg">
            <Undo2 size={25} className="text-green-800 mb-3" />
            <h3 className="font-bold text-lg text-green-900 mb-2">
              Carefully Hand-Picked
            </h3>
            <p className="text-sm text-gray-600 max-w-xl">
              Each plant is selected and packaged with care to ensure quality.
            </p>
          </div>
        </div>

        {/* Center image */}
        <div className="hidden lg:flex justify-center">
          <Image
            src="/image2.png"
            alt="Indoor plants"
            width={320}
            height={420}
          />
        </div>

        {/* Right features */}
        <div className="space-y-10">
          <div className="shadow-lg p-4 rounded-lg">
            <Headset size={25} className="text-green-800 mb-3" />
            <h3 className="font-semibold text-lg text-green-900 mb-2">
              Plant Care Support
            </h3>
            <p className="text-sm text-gray-600 max-w-xl">
              Get expert tips to keep your plants healthy and thriving.
            </p>
          </div>

          <div className="shadow-lg p-4 rounded-lg">
            <BadgeCheck size={25} className="text-green-800 mb-3" />
            <h3 className="font-semibold text-lg text-green-900 mb-2">
              Sustainable & Eco-Friendly
            </h3>
            <p className="text-sm text-gray-600">
              We use eco-friendly packaging and sustainable sourcing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Why;
