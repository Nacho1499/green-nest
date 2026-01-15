import React from "react";

function Type() {
  return (
    <section
      className="flex justify-center items-center h-fit bg-cover bg-center relative py-20 mb-4 bg-fixed "
      style={{ backgroundImage: "url('/image3.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className=" relative z-10 grid grid-cols-1 p-4 max-w-5xl mx-auto lg:grid-cols-2 items-center gap-8">
        <div className="backdrop-blur py-8 px-8 rounded-xl hover:scale-105 transition duration-300 ease-in-out ">
          <h2
            className="mb-3 inline-flex items-center text-white text-xs font-medium 
               bg-slate-200/50 backdrop-blur-md 
               rounded-full py-1.5 px-4 "
          >
            Indoors
          </h2>

          <h1 className="text-white font-bold text-2xl mb-4">
            Low Maintainance Greens
          </h1>
          <p className="text-white text-sm ">
            Elevate your interior with easy-care indoor plants. this beauties
            purify the air, add a calming vibe, and grow happily in low to
            medium light. perfect for office and home.
          </p>
          <button className="mt-4 rounded-full bg-white py-3 text-sm px-6 cursor-pointer font-semibold text-green-800">
            Explore Now
          </button>
        </div>

        <div className="backdrop-blur py-8 px-8 rounded-xl  hover:scale-105 transition duration-300 ease-in-out ">
          <div className="flex-row justify-center items-center ">
            <h2
              className="mb-3 inline-flex items-center text-white text-xs font-medium 
               bg-slate-200/50 backdrop-blur-md 
               rounded-full py-1.5 px-4 "
            >
              Outdoors
            </h2>

            <h1 className="text-white font-bold text-2xl mb-4">
              Garden Ready Plants
            </h1>
            <p className="text-white  text-sm">
              Bring life to your outdoor space with vibrant , sun loving plants.
              perfect for patios, balconies and home gardens- built to thrive in
              natural light and fresh air.
            </p>
            <button className="mt-4 rounded-full bg-white py-3 text-green-800 text-sm px-6 cursor-pointer font-semibold">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Type;
