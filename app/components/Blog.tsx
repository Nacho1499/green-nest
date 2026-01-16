import React from "react";
import Image from "next/image";
import { blogs } from "@/lib/blog";
function Blog() {
  return (
    <section className="p-4 mt-24">
      <h1 className="text-2xl md:text-4xl font-bold text-green-800 text-center">
        From The GreenNest Blog
      </h1>
      <p className="text-center text-sm max-w-sm mt-4 mx-auto text-gray-700 leading-relaxed">
        Grow your plants with expert tips, care guard and a little leafy
        inspiration
      </p>
      <div className="grid grid-cols-1 max-w-6xl mx-auto lg:grid-cols-4 md:grid-cols-3 gap-4 mt-14">
        {blogs.map((blog, id) => (
          <div
            className="shadow-lg rounded-xl h-fit hover:scale-105 transition duration-300 ease-in-out"
            key={id}
          >
            <Image
              className="w-full h-50 rounded-tl-xl rounded-tr-xl object-cover"
              src={blog.image}
              alt="Blog-image"
              width={200}
              height={100}
            />
            <div className="p-4 rounded-xl">
              <h4 className="text-gray-400  mt-2  text-sm mb-2">{blog.date}</h4>
              <h1 className="font-bold mb-2 mt-2 text-gray-600 ">
                {blog.topic}
              </h1>
              <p className="text-sm text-gray-700">{blog.info}</p>
              <button className="mt-4 text-sm bg-green-800 cursor-pointer py-2 mb-2 px-4 rounded-lg text-white">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">

      
      <button
        className="font-bold text-green-800 text-sm mt-12 mb-12 border inline-flex items-center gap-2 cursor-pointer
       border-green-800 py-2 px-4 rounded-xl hover:scale-110 transition duration-300 ease-in-out"
      >
        <h1>Explore More</h1>
      </button>
      </div>
    </section>
  );
}

export default Blog;
