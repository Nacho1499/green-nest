import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Why from "./components/Why";
import Type from "./components/Type";
import Plants from "./components/Plants";
import Testimonial from "./components/Testimonial";
import Inbox from "./components/Inbox";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Why/>
      <Type/>
      <Plants/>
      <Inbox/>
      <Testimonial/>
    </>
  );
}
