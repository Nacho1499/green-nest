import React from "react";

function Inbox() {
  return (
    <section
      className="flex justify-center items-center h-fit bg-cover bg-center relative py-20 mb-4  mt-24"
      style={{ backgroundImage: "url('/index.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className=" relative z-10 p-4 flex justify-center items-center text-center gap-8">
        <div className="backdrop-blur px-8 py-8 rounded-xl">
          <h1 className="text-white font-bold text-2xl text-center lg:text-3xl ">
            Get The Green in Your Inbox
          </h1>
          <p className="text-white text-center text-sm max-w-sm mt-4 ">
            Subscribe for exclusive plant care tips, New arrivals and fresh
            deals
          </p>
          <input
            placeholder="Enter your email..."
            type="text"
            className="bg-white text-sm px-2 border border-green-800 mt-6 py-2 rounded-lg lg:w-80 "
          />
          <button className=" ml-2 py-2 px-4 bg-green-800 text-white rounded-lg text-sm cursor-pointer
           hover:bg-green-700 transition ease-in-out duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

export default Inbox;
