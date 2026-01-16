import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Why from "./components/Why";
import Type from "./components/Type";
import Plants from "./components/Plants";
import Testimonial from "./components/Testimonial";
import Inbox from "./components/Inbox";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import { MessageCircleMore } from "lucide-react";
export default function Home() {
  return (
    <div className="relative">
      <div
        className=" rounded-full bg-green-800/75 text-center py-2 px-2 cursor-pointer z-10  fixed 
       right-2 lg:right-16 bottom-8  hover:scale-110 transition duration-300 ease-in-out"
      >
        <MessageCircleMore size={30} className="text-white" />
      </div>
      <Navbar />
      <Hero />
      <Why />
      <Type />
      <Plants />
      <Inbox />
      <Testimonial />
      <Blog />
      <Footer />
    </div>
  );
}
