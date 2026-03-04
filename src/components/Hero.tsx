import { motion } from "motion/react";

const charVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.08,
      duration: 1.2,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  }),
};

export function Hero() {
  const name = "Robert Musin";
  const chars = name.split("");

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 bg-white text-center">
      <div className="max-w-5xl flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-bold tracking-tighter leading-none text-zinc-950 overflow-hidden flex flex-wrap justify-center">
          {chars.map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={charVariants}
              className={char === " " ? "w-[0.25em]" : "inline-block"}
            >
              {char}
            </motion.span>
          ))}
        </h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 2.0, duration: 1, ease: "easeOut" }}
          className="mt-8 text-lg md:text-2xl text-zinc-500 max-w-2xl font-light tracking-wide"
        >
          Digital Product Developer. <br className="hidden md:block" />
          Sviluppo prodotti digitali che scalano.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.8, ease: "easeOut" }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-6"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-black text-white font-semibold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Parliamone</span>
            <div className="absolute inset-0 bg-zinc-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </a>
          <a
            href="#works"
            className="text-zinc-950 font-medium hover:text-zinc-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-zinc-950 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
          >
            Esplora i Progetti
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 0.8, ease: "easeOut" }}
        >
          <TechTicker />
        </motion.div>
      </div>
    </section>
  );
}

const TechTicker = () => {
  const techs = [
    { name: "React", icon: <ReactIcon /> },
    { name: "Next.js", icon: <NextIcon /> },
    { name: "TypeScript", icon: <TSIcon /> },
    { name: "Tailwind", icon: <TailwindIcon /> },
    { name: "Node.js", icon: <NodeIcon /> },
    { name: "Supabase", icon: <SupabaseIcon /> },
    { name: "PostgreSQL", icon: <PostgresIcon /> },
    { name: "Framer", icon: <FramerIcon /> },
  ];

  // Create 4 copies to ensure seamless loop
  const allTechs = [...techs, ...techs, ...techs, ...techs];

  return (
    <div className="w-screen max-w-[100vw] overflow-hidden mt-32 -ml-[50vw] left-[50%] relative">
      <motion.div
        className="flex gap-16 md:gap-24 w-max pr-16 md:pr-24"
        animate={{ x: ["0%", "-25%"] }}
        transition={{ 
          duration: 40, 
          ease: "linear", 
          repeat: Infinity 
        }}
        style={{ willChange: "transform" }}
      >
        {allTechs.map((tech, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-3 text-zinc-400 grayscale hover:grayscale-0 hover:text-black transition-all duration-500 cursor-default"
            animate={{ y: [0, -12, 0, 12, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          >
            <div className="w-8 h-8 md:w-10 md:h-10">{tech.icon}</div>
            <span className="text-lg md:text-xl font-semibold tracking-tight">{tech.name}</span>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Gradient Masks for fade effect */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
    </div>
  );
};

// Icons
const ReactIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="12" cy="12" r="2" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
    </g>
  </svg>
);

const NextIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 8V16" stroke="currentColor" strokeWidth="1.5" />
    <path d="M16 16V8" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 8L16 16" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const TSIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" />
    <path d="M6 8H14M10 8V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M14 16C14 16 15 16.5 16 16.5C17 16.5 18 16 18 15C18 14 16.5 13.5 16.5 13.5C16.5 13.5 15 13 15 12C15 11 16 10.5 17 10.5C18 10.5 19 11 19 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M7 15C4.5 14 3 12.5 3 10C3 7.5 5 6 7.5 6C10 6 11 7.5 11.5 9C12 10.5 11.5 12 14 13C16.5 14 18 12.5 18 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M11 19C8.5 18 7 16.5 7 14C7 11.5 9 10 11.5 10C14 10 15 11.5 15.5 13C16 14.5 15.5 16 18 17C20.5 18 22 16.5 22 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const NodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M12 2L20.6603 7V17L12 22L3.33975 17V7L12 2Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 22V12" stroke="currentColor" strokeWidth="1.5" />
    <path d="M20.6603 7L12 12L3.33975 7" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const SupabaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M12.5 2L4 13H11.5L10.5 22L20 10H12.5L12.5 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const PostgresIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 6V18" stroke="currentColor" strokeWidth="1.5" />
    <path d="M6 12H18" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 8L16 16" stroke="currentColor" strokeWidth="1.5" />
    <path d="M16 8L8 16" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const FramerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M6 2H18L12 12H18L6 22V12H12L6 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);
