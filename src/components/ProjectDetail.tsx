import { motion } from "motion/react";
import { X, ExternalLink, TrendingUp, Clock, Zap, Users, Eye, Smartphone } from "lucide-react";

export interface Work {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription?: string;
  image: string;
  video?: string;
  tech: string[];
  year: string;
  link?: string;
  metrics?: {
    value: string;
    label: string;
    icon?: "TrendingUp" | "Clock" | "Zap" | "Users" | "Eye" | "Smartphone";
  }[];
}

const IconMap = {
  TrendingUp,
  Clock,
  Zap,
  Users,
  Eye,
  Smartphone
};

interface ProjectDetailProps {
  work: Work;
  onClose: () => void;
}

export function ProjectDetail({ work, onClose }: ProjectDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-md p-4 md:p-8"
    >
      <motion.div
        layoutId={`project-${work.id}`}
        className="w-full max-w-6xl h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row relative border border-zinc-100"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 w-10 h-10 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white transition-colors border border-zinc-200"
        >
          <X size={20} className="text-zinc-900" />
        </button>

        {/* Left: Image & Hero */}
        <div className="w-full md:w-1/2 h-1/3 md:h-full relative overflow-hidden bg-zinc-100">
          {work.video ? (
            <motion.video
              src={work.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "circOut" }}
            />
          ) : (
            <motion.img
              src={work.image}
              alt={work.title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              referrerPolicy="no-referrer"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 md:p-12">
            <div className="text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex gap-2 mb-4"
              >
                {work.tech.map((t) => (
                  <span key={t} className="px-3 py-1 text-xs font-mono border border-white/30 rounded-full backdrop-blur-md bg-white/10">
                    {t}
                  </span>
                ))}
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-6xl font-bold tracking-tighter leading-none mb-2"
              >
                {work.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-white/80 font-mono text-sm"
              >
                {work.category} — {work.year}
              </motion.p>
            </div>
          </div>
        </div>

        {/* Right: Content & Stats */}
        <div className="w-full md:w-1/2 h-2/3 md:h-full bg-white p-8 md:p-10 flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex-1 flex flex-col"
          >
            {/* Header with Button */}
            <div className="flex justify-start items-start mb-6">
              {work.link && (
                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-full font-medium text-xs hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95"
                >
                  Visita Sito
                  <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              )}
            </div>

            <p className="text-zinc-600 text-base leading-relaxed mb-8 font-light">
              {work.fullDescription || work.description}
            </p>

            {/* Stats / Improvements */}
            {work.metrics && work.metrics.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-auto">
                {work.metrics.map((metric, idx) => {
                  const IconComponent = metric.icon ? IconMap[metric.icon] : Zap;
                  const isFullWidth = work.metrics!.length % 2 !== 0 && idx === work.metrics!.length - 1;

                  return (
                    <div key={idx} className={`p-5 bg-zinc-50 rounded-2xl border border-zinc-100 ${isFullWidth ? 'sm:col-span-2' : ''}`}>
                      <IconComponent className="w-5 h-5 text-black mb-2" />
                      <div className="text-2xl font-bold text-zinc-900 mb-1">{metric.value}</div>
                      <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wide">{metric.label}</div>
                      {isFullWidth && (
                        <div className="w-full bg-zinc-200 h-1 mt-3 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ delay: 1, duration: 1.5, ease: "circOut" }}
                            className="h-full bg-black"
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </motion.div>

          {/* Footer Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="pt-6 border-t border-zinc-100 mt-6"
          >
            <div className="flex flex-col">
              <span className="text-xs font-mono text-zinc-400 uppercase">Status</span>
              <span className="text-sm font-medium text-emerald-600 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Live Production
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
