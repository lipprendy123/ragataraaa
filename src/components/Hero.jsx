'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 via-white to-white flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      {/* Animated floating element for visual interest - not decorative AI blobs */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 rounded-full border-2 border-slate-200 opacity-40"
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
        }}
      />

      {/* Main content container */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Badge */}
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 bg-white">
            <span className="text-sm font-medium text-slate-600">
              ✨ Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, nesciunt.
            </span>
          </div>
        </motion.div>

        {/* Main Headline - Bold and Striking */}
        <motion.h1
          className="text-7xl md:text-8xl lg:text-9xl font-black text-center leading-[1.1] mb-8 text-slate-900 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Stories That
          <br />
          <span className="relative inline-block">
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 blur-lg opacity-60"
              animate={{ opacity: [0.6, 0.8, 0.6] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            />
            <span className="relative bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Move
            </span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-slate-600 text-center max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Crafted by passionate animators and designers. Where imagination
          becomes reality through frame-perfect artistry.
        </motion.p>

        {/* CTA Buttons with creative styling */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.button
            className="px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all hover:shadow-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Play size={18} fill="currentColor" />
            Start Watching
          </motion.button>
          <motion.button
            className="px-8 py-4 border-2 border-slate-900 text-slate-900 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore All Series
            <ArrowRight size={18} />
          </motion.button>
        </motion.div>

        {/* Stats section - More sophisticated */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-12 border-t border-slate-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {[
            { number: '500+', label: 'Episodes' },
            { number: '4K', label: 'Resolution' },
            { number: '48h+', label: 'Content' },
            { number: '99%', label: 'Satisfaction' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.05, duration: 0.4 }}
              whileHover={{ y: -4 }}
            >
              <p className="text-3xl md:text-4xl font-black text-slate-900">
                {stat.number}
              </p>
              <p className="text-sm text-slate-500 font-medium mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom accent element */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-slate-100 to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      />
    </div>
  );
}
