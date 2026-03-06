import { motion, useScroll, useTransform, useSpring, useMotionValue, useVelocity, useAnimationFrame } from "motion/react";
import { useRef } from "react";

// Utility for wrapping numbers
const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

/* ═══════════════════════════════════════════════════
   1. AI PRODUCT ANIMATION — Neural Network
   ═══════════════════════════════════════════════════ */
const AIProductAnimation = () => {
  // Node positions for the neural network
  const nodes = [
    // Input layer
    { x: 30, y: 40, r: 5, layer: 0 },
    { x: 30, y: 96, r: 5, layer: 0 },
    { x: 30, y: 152, r: 5, layer: 0 },
    // Hidden layer 1
    { x: 100, y: 56, r: 6, layer: 1 },
    { x: 100, y: 96, r: 6, layer: 1 },
    { x: 100, y: 136, r: 6, layer: 1 },
    // Hidden layer 2
    { x: 170, y: 48, r: 6, layer: 2 },
    { x: 170, y: 96, r: 7, layer: 2 },
    { x: 170, y: 144, r: 6, layer: 2 },
    // Output layer
    { x: 240, y: 72, r: 5, layer: 3 },
    { x: 240, y: 120, r: 5, layer: 3 },
  ];

  // Connections between layers
  const connections: [number, number][] = [];
  // Input → Hidden 1
  for (let i = 0; i < 3; i++) for (let j = 3; j < 6; j++) connections.push([i, j]);
  // Hidden 1 → Hidden 2
  for (let i = 3; i < 6; i++) for (let j = 6; j < 9; j++) connections.push([i, j]);
  // Hidden 2 → Output
  for (let i = 6; i < 9; i++) for (let j = 9; j < 11; j++) connections.push([i, j]);

  return (
    <div className="w-full h-48 bg-white rounded-xl border border-zinc-200 overflow-hidden relative shadow-sm group-hover:shadow-md transition-shadow duration-500">
      {/* Browser UI */}
      <div className="h-6 bg-zinc-50 border-b border-zinc-100 flex items-center px-3 gap-1.5">
        <div className="w-2 h-2 rounded-full bg-zinc-300" />
        <div className="w-2 h-2 rounded-full bg-zinc-300" />
        <div className="w-16 h-3 bg-zinc-200 rounded-full ml-2 opacity-50" />
      </div>

      <div className="relative w-full h-full flex items-center justify-center p-4">
        <svg viewBox="0 0 270 192" className="w-full h-full max-h-[160px]" fill="none">
          {/* Connections */}
          {connections.map(([from, to], i) => (
            <g key={`conn-${i}`}>
              <line
                x1={nodes[from].x}
                y1={nodes[from].y}
                x2={nodes[to].x}
                y2={nodes[to].y}
                stroke="rgba(0,0,0,0.06)"
                strokeWidth="1"
              />
              {/* Traveling data pulse */}
              <motion.circle
                r="2"
                fill="rgba(0,0,0,0.4)"
                initial={{ opacity: 0 }}
                animate={{
                  cx: [nodes[from].x, nodes[to].x],
                  cy: [nodes[from].y, nodes[to].y],
                  opacity: [0, 0.8, 0.8, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: (nodes[from].layer * 1.2) + (i % 3) * 0.3,
                  ease: "easeInOut",
                  times: [0, 0.1, 0.9, 1],
                }}
              />
            </g>
          ))}

          {/* Nodes */}
          {nodes.map((node, i) => (
            <g key={`node-${i}`}>
              {/* Glow ring */}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={node.r + 4}
                fill="none"
                stroke="rgba(0,0,0,0.08)"
                strokeWidth="1"
                animate={{
                  r: [node.r + 4, node.r + 8, node.r + 4],
                  opacity: [0.3, 0.08, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: node.layer * 0.5 + i * 0.15,
                  ease: "easeInOut",
                }}
              />
              {/* Core node */}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={node.r}
                fill="white"
                stroke="rgba(0,0,0,0.25)"
                strokeWidth="1.5"
                animate={{
                  fill: ["rgba(255,255,255,1)", "rgba(0,0,0,0.9)", "rgba(255,255,255,1)"],
                  stroke: ["rgba(0,0,0,0.25)", "rgba(0,0,0,0.7)", "rgba(0,0,0,0.25)"],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: node.layer * 1.2 + (i % 3) * 0.2,
                  ease: "easeInOut",
                }}
              />
            </g>
          ))}

          {/* Central "brain" icon — subtle AI badge */}
          <motion.g
            animate={{ opacity: [0.15, 0.35, 0.15] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <text x="135" y="185" textAnchor="middle" fontSize="9" fill="rgba(0,0,0,0.3)" fontFamily="system-ui" fontWeight="300" letterSpacing="0.1em">
              AI MODEL
            </text>
          </motion.g>
        </svg>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════
   2. WEB APP / DASHBOARD ANIMATION (preserved)
   ═══════════════════════════════════════════════════ */
const WebAppAnimation = () => (
  <div className="w-full h-48 bg-white rounded-xl border border-zinc-200 overflow-hidden relative shadow-sm group-hover:shadow-md transition-shadow duration-500">
    {/* Browser UI */}
    <div className="h-6 bg-zinc-50 border-b border-zinc-100 flex items-center px-3 gap-1.5">
      <div className="w-2 h-2 rounded-full bg-zinc-300" />
      <div className="w-2 h-2 rounded-full bg-zinc-300" />
      <div className="w-16 h-3 bg-zinc-200 rounded-full ml-2 opacity-50" />
    </div>

    {/* Content */}
    <div className="p-4 flex gap-4 h-full">
      {/* Sidebar */}
      <motion.div
        className="w-12 h-32 bg-zinc-50 rounded-lg flex flex-col gap-2 p-2"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {[1, 2, 3].map(i => (
          <motion.div
            key={i}
            className="w-full h-2 bg-zinc-200 rounded-sm"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </motion.div>

      {/* Main Dashboard */}
      <div className="flex-1 flex flex-col gap-3">
        {/* Header */}
        <motion.div
          className="w-full h-8 bg-zinc-50 rounded-lg flex items-center px-3"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-1/3 h-3 bg-zinc-200 rounded-sm" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-3">
          <motion.div
            className="h-20 bg-zinc-900 rounded-lg p-2 relative overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Graph Line */}
            <svg className="absolute bottom-0 left-0 w-full h-full" preserveAspectRatio="none">
              <motion.path
                d="M0 80 C 20 60, 40 20, 60 40 S 100 10, 140 30"
                fill="none"
                stroke="white"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>
          <motion.div
            className="h-20 bg-zinc-100 rounded-lg p-2 flex flex-col justify-between"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="w-8 h-8 rounded-full border-2 border-zinc-300 border-t-zinc-900 animate-spin" />
            <div className="w-1/2 h-2 bg-zinc-300 rounded-sm" />
          </motion.div>
        </div>
      </div>
    </div>

    {/* Cursor Overlay */}
    <motion.div
      className="absolute top-0 left-0 pointer-events-none"
      animate={{
        x: [100, 160, 140, 60, 100],
        y: [100, 120, 60, 80, 100]
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19169L11.7841 12.3673H5.65376Z" fill="black" stroke="white" />
      </svg>
    </motion.div>
  </div>
);

/* ═══════════════════════════════════════════════════
   3. API FLOW / AUTOMATION ANIMATION
   ═══════════════════════════════════════════════════ */
const APIFlowAnimation = () => {
  const services = [
    { x: 24, y: 50, label: "CRM", icon: "👤" },
    { x: 24, y: 120, label: "DB", icon: "🗄" },
    { x: 230, y: 50, label: "API", icon: "⚡" },
    { x: 230, y: 120, label: "MKT", icon: "📊" },
  ];

  const hub = { x: 127, y: 85 };

  return (
    <div className="w-full h-48 bg-white rounded-xl border border-zinc-200 overflow-hidden relative shadow-sm group-hover:shadow-md transition-shadow duration-500">
      {/* Browser UI */}
      <div className="h-6 bg-zinc-50 border-b border-zinc-100 flex items-center px-3 gap-1.5">
        <div className="w-2 h-2 rounded-full bg-zinc-300" />
        <div className="w-2 h-2 rounded-full bg-zinc-300" />
        <div className="w-16 h-3 bg-zinc-200 rounded-full ml-2 opacity-50" />
      </div>

      <div className="relative w-full h-full flex items-center justify-center p-2">
        <svg viewBox="0 0 270 170" className="w-full h-full max-h-[150px]" fill="none">

          {/* Connection lines from services to hub */}
          {services.map((svc, i) => (
            <g key={`line-${i}`}>
              <line
                x1={svc.x + 16}
                y1={svc.y + 12}
                x2={hub.x}
                y2={hub.y}
                stroke="rgba(0,0,0,0.08)"
                strokeWidth="1.5"
                strokeDasharray="4 3"
              />
              {/* Data packet traveling to hub */}
              <motion.circle
                r="3"
                fill="rgba(0,0,0,0.5)"
                animate={{
                  cx: [svc.x + 16, hub.x, svc.x + 16],
                  cy: [svc.y + 12, hub.y, svc.y + 12],
                  opacity: [0, 0.7, 0.7, 0.7, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  delay: i * 0.8,
                  ease: "easeInOut",
                  times: [0, 0.3, 0.5, 0.7, 1],
                }}
              />
            </g>
          ))}

          {/* Central Hub — orchestration node */}
          <motion.circle
            cx={hub.x}
            cy={hub.y}
            r="22"
            fill="white"
            stroke="rgba(0,0,0,0.15)"
            strokeWidth="1.5"
          />
          <motion.circle
            cx={hub.x}
            cy={hub.y}
            r="26"
            fill="none"
            stroke="rgba(0,0,0,0.06)"
            strokeWidth="1"
            animate={{
              r: [26, 34, 26],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Hub rotating ring */}
          <motion.circle
            cx={hub.x}
            cy={hub.y}
            r="18"
            fill="none"
            stroke="rgba(0,0,0,0.15)"
            strokeWidth="1"
            strokeDasharray="6 10"
            style={{ transformOrigin: `${hub.x}px ${hub.y}px` }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          {/* Hub icon */}
          <motion.text
            x={hub.x}
            y={hub.y + 1}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize="14"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            ⚙️
          </motion.text>

          {/* Service boxes */}
          {services.map((svc, i) => (
            <g key={`svc-${i}`}>
              <motion.rect
                x={svc.x}
                y={svc.y}
                width="32"
                height="24"
                rx="6"
                fill="white"
                stroke="rgba(0,0,0,0.15)"
                strokeWidth="1.5"
                animate={{
                  stroke: ["rgba(0,0,0,0.15)", "rgba(0,0,0,0.4)", "rgba(0,0,0,0.15)"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.8,
                  ease: "easeInOut",
                }}
              />
              <text
                x={svc.x + 16}
                y={svc.y + 14}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize="10"
              >
                {svc.icon}
              </text>
              <text
                x={svc.x + 16}
                y={svc.y + 34}
                textAnchor="middle"
                fontSize="7"
                fill="rgba(0,0,0,0.3)"
                fontFamily="system-ui"
                fontWeight="400"
              >
                {svc.label}
              </text>
            </g>
          ))}

          {/* Subtle label */}
          <motion.g
            animate={{ opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <text x="135" y="162" textAnchor="middle" fontSize="8" fill="rgba(0,0,0,0.25)" fontFamily="system-ui" fontWeight="300" letterSpacing="0.1em">
              ORCHESTRATION
            </text>
          </motion.g>
        </svg>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════
   EXPERTISE DATA
   ═══════════════════════════════════════════════════ */
const expertiseAreas = [
  {
    title: "Prodotti AI su Misura",
    description: "Integro le API dei modelli più avanzati (GPT, Claude, Gemini) per creare soluzioni intelligenti: chatbot, generazione contenuti, automazioni cognitive. Non uso l'AI — la costruisco dentro il prodotto.",
    animation: AIProductAnimation,
  },
  {
    title: "Web App & Gestionali",
    description: "Sistemi custom, dashboard, SPA robuste. Costruite con React, TypeScript e backend moderni (Supabase, Node.js) per automatizzare e scalare il tuo business.",
    animation: WebAppAnimation,
  },
  {
    title: "Automazioni & Integrazioni API",
    description: "Orchestro flussi complessi tra API, database e servizi di terze parti. Collego il tuo ecosistema (CRM, Analytics, Marketing) con soluzioni low-code e custom che lavorano 24/7.",
    animation: APIFlowAnimation,
  },
];

/* ═══════════════════════════════════════════════════
   PARALLAX TEXT (unchanged)
   ═══════════════════════════════════════════════════ */
function ParallaxText({ children, baseVelocity = 100 }: { children: string; baseVelocity: number }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap">
      <motion.div className="flex whitespace-nowrap gap-4 flex-nowrap" style={{ x }}>
        <span className="block text-2xl md:text-4xl font-light uppercase leading-[0.85] tracking-widest text-zinc-100" style={{ WebkitTextStroke: "1px rgba(0,0,0,0.1)" }}>{children} </span>
        <span className="block text-2xl md:text-4xl font-light uppercase leading-[0.85] tracking-widest text-zinc-100" style={{ WebkitTextStroke: "1px rgba(0,0,0,0.1)" }}>{children} </span>
        <span className="block text-2xl md:text-4xl font-light uppercase leading-[0.85] tracking-widest text-zinc-100" style={{ WebkitTextStroke: "1px rgba(0,0,0,0.1)" }}>{children} </span>
        <span className="block text-2xl md:text-4xl font-light uppercase leading-[0.85] tracking-widest text-zinc-100" style={{ WebkitTextStroke: "1px rgba(0,0,0,0.1)" }}>{children} </span>
        <span className="block text-2xl md:text-4xl font-light uppercase leading-[0.85] tracking-widest text-zinc-100" style={{ WebkitTextStroke: "1px rgba(0,0,0,0.1)" }}>{children} </span>
        <span className="block text-2xl md:text-4xl font-light uppercase leading-[0.85] tracking-widest text-zinc-100" style={{ WebkitTextStroke: "1px rgba(0,0,0,0.1)" }}>{children} </span>
        <span className="block text-2xl md:text-4xl font-light uppercase leading-[0.85] tracking-widest text-zinc-100" style={{ WebkitTextStroke: "1px rgba(0,0,0,0.1)" }}>{children} </span>
        <span className="block text-2xl md:text-4xl font-light uppercase leading-[0.85] tracking-widest text-zinc-100" style={{ WebkitTextStroke: "1px rgba(0,0,0,0.1)" }}>{children} </span>
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════ */
export function Expertise() {
  return (
    <section id="expertise" className="py-0 pb-10 relative overflow-hidden w-full">
      {/* Premium Divider / Parallax Text */}
      <div className="relative py-4 mb-2 w-full pointer-events-none z-0">
        <ParallaxText baseVelocity={-1}>EXPERTISE • </ParallaxText>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24 relative z-10 w-full">
        {/* Simulated Mac Window */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden"
        >
          {/* Window Header */}
          <div className="bg-white/60 backdrop-blur-xl border-b border-zinc-200/50 px-4 py-3 flex items-center gap-2 sticky top-0 z-10">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57] border border-[#E0443E]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
              <div className="w-3 h-3 rounded-full bg-[#28C840] border border-[#1AAB29]" />
            </div>
            <div className="ml-4 text-xs font-medium text-zinc-400 font-mono flex-1 text-center pr-12">
              robert_musin_expertise.tsx
            </div>
          </div>

          {/* Window Content */}
          <div className="p-5 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 bg-white">
            {expertiseAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col gap-6"
              >
                {/* Animation Container */}
                <div className="w-full aspect-[4/3] flex items-center justify-center">
                  <area.animation />
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl font-medium text-zinc-900 tracking-tight">
                    {area.title}
                  </h3>
                  <p className="text-zinc-500 leading-relaxed font-light text-sm md:text-base">
                    {area.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
