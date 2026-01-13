import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Why from "./components/Why";
import Type from "./components/Type";
import Plants from "./components/Plants";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Why/>
      <Type/>
      <Plants/>
    </>
  );
}
