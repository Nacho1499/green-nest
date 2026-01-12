import React from "react";

function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center text-center"
      style={{ backgroundImage: "url('/hero-image.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div>
        <div className="relative z-10 max-w-4xl">
          <p className="text-white text-sm   mb-3">
            Breathe life into your space
          </p>

          <h1 className="text-white text-5xl md:text-5xl font-bold leading-tight mb-6">
            Discover beautiful indoor plants for every corner of your home
          </h1>
          <div>
            <button className="bg-white py-2 px-4 font-bold text-sm  rounded-lg">Shop Now</button>
          </div>
          <div className="grid grid-cols-1 max-w-4xl mx-auto gap-4 lg:grid-cols-4 mt-24">
            <div className="bg-white/40 backdrop-blur px-4 py-6 rounded-lg">
              <p className="text-green-800 text-sm font-semibold">Trusted by</p>
              <h4 className="font-bold text-green-800 text-3xl">1,900+</h4>
              <p className="text-green-800 text-sm font-semibold">
                Happy plants lover
              </p>
            </div>
            <div className="bg-white/40 backdrop-blur px-4 py-6 rounded-lg">
              <p className="text-green-800 text-sm font-semibold">Trusted by</p>
              <h4 className="font-bold text-green-800 text-3xl">1,900+</h4>
              <p className="text-green-800 text-sm font-semibold">
                Happy plants lover
              </p>
            </div>
            <div className="bg-white/40 backdrop-blur px-4 py-6 rounded-lg">
              <p className="text-green-800 text-sm font-semibold">Trusted by</p>
              <h4 className="font-bold text-green-800 text-3xl">1,900+</h4>
              <p className="text-green-800 text-sm font-semibold">
                Happy plants lover
              </p>
            </div>
            <div className="bg-white/40 backdrop-blur px-4 py-6 rounded-lg">
              <p className="text-green-800 text-sm font-semibold">Trusted by</p>
              <h4 className="font-bold text-green-800 text-3xl">1,900+</h4>
              <p className="text-green-800 text-sm font-semibold">
                Happy plants lover
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
