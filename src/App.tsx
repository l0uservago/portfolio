import { Hero } from "./components/Hero";
import { Expertise } from "./components/Expertise";
import { SelectedWorks } from "./components/SelectedWorks";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import React from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { useRef, useState } from "react";

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll({ container: containerRef });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (e.currentTarget.scrollTop > 50) {
      if (!isScrolled) setIsScrolled(true);
    } else {
      if (isScrolled) setIsScrolled(false);
    }
  };

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      className="bg-white text-zinc-950 selection:bg-black selection:text-white font-sans antialiased h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth relative"
    >
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-black origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 p-6 md:px-12 lg:px-24 flex justify-between items-center z-40 mix-blend-difference text-white"
        initial={{ opacity: 1 }}
        animate={{ opacity: isScrolled ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: isScrolled ? "none" : "auto" }}
      >
        <div className="text-xl font-bold tracking-tighter">RM.</div>
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
          <a href="#expertise" className="hover:text-zinc-300 transition-colors">Expertise</a>
          <a href="#works" className="hover:text-zinc-300 transition-colors">Progetti</a>
          <a href="#contact" className="hover:text-zinc-300 transition-colors">Contatti</a>
        </div>
      </motion.nav>

      <main>
        <div className="snap-start snap-always h-screen w-full overflow-hidden">
          <Hero />
        </div>
        <div className="snap-start snap-always h-screen w-full overflow-hidden flex flex-col justify-center gap-[40px] md:gap-[80px]">
          <Expertise />
        </div>
        <div className="snap-start snap-always h-screen w-full overflow-hidden flex flex-col justify-center">
          <SelectedWorks />
        </div>
        <div className="snap-start snap-always min-h-screen w-full flex flex-col justify-between">
          <div className="flex-grow flex flex-col justify-center">
            <ContactForm />
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
}
