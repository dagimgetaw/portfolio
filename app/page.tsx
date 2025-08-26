"use client";

import dynamic from "next/dynamic";

const NavBar = dynamic(() => import("@/components/Navbar"));
const Hero = dynamic(() => import("@/components/Hero"));
const Grid = dynamic(() => import("@/components/Grid"));
const Project = dynamic(() => import("@/components/Project"));
const Experience = dynamic(() => import("@/components/Experience"));
const Testimonial = dynamic(() => import("@/components/Testimonial"));
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main className="relative bg-black/[1] flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="sm:px-10 px-2">
        <NavBar />
        <div className="max-w-7xl w-full">
          <Hero />
          <Grid />
          <Project />
          <Experience />
          <Testimonial />
        </div>
      </div>
      <div className="w-full">
        <Contact />
      </div>
      <div className="max-w-5xl w-full">
        <Footer />
      </div>
    </main>
  );
}
