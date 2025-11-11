'use client';
import { motion } from 'framer-motion';
import { Zap, Eye, Palette } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const features = [
  {
    icon: Palette,
    title: 'Stunning Visuals',
    description: 'Cinema-quality animation with meticulous attention to detail',
  },
  {
    icon: Eye,
    title: 'HD Quality',
    description: 'Pristine 4K resolution for the ultimate viewing experience',
  },
  {
    icon: Zap,
    title: 'Fast Streaming',
    description: 'Lightning-quick streaming with no buffering delays',
  },
];

export default function AboutSection() {
  return (
    <motion.section
      className="py-20 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={fadeInUp}
        >
          {/* Left Content */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Jagatara?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Jagatara is dedicated to delivering premium animation content with
              uncompromising quality. We bring together the world's finest
              animators and storytellers to create magical experiences that
              captivate audiences of all ages.
            </p>

            <div className="space-y-4">
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  className="flex gap-4"
                  whileHover={{ x: 4 }}
                  variants={fadeInUp}
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-rose-600">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="rounded-lg overflow-hidden shadow-lg"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="/animation-process.jpg"
              alt="Animation Studio"
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
