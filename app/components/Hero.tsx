import React from "react";
import { Play } from "lucide-react";

const stats = [
  { label: "Happy Plant Lovers", value: "1,900+" },
  { label: "Plants Delivered", value: "3,500+" },
  { label: "Cities Covered", value: "120+" },
  { label: "Customer Rating", value: "4.9★" },
];

function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center text-center bg-fixed"
      style={{ backgroundImage: "url('/hero-image.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6">
        <p className="text-white/80 text-sm  tracking-wider mb-2">
          Breathe life into your space
        </p>

        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
          Discover beautiful indoor plants for every corner of your home
        </h1>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-10">
          <button className="bg-white text-black font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition">
            Shop Now
          </button>

          <button className="flex items-center  gap-3 bg-white/20 backdrop-blur px-6 py-3 rounded-xl text-white hover:bg-white/30 transition cursor-pointer">
            <Play size={18} />
            <span className="text-sm text-left leading-tight">
              Watch how <br /> GreenNext works
            </span>
          </button>
        </div>

        {/* Stats */}
        <div className=" hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white/30 backdrop-blur-md px-6 py-8 rounded-2xl"
            >
              <h4 className="text-green-900 text-3xl font-bold mb-1">
                {item.value}
              </h4>
              <p className="text-green-900 text-sm font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
