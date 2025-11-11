'use client';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-900 text-white py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
          variants={fadeInUp}
        >
          {/* Logo Section */}
          <motion.div variants={fadeInUp}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-rose-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">J</span>
              </div>
              <span className="text-xl font-bold">Jagatara</span>
            </div>
            <p className="text-gray-400 text-sm">
              Premium HD Animation Platform
            </p>
          </motion.div>

          {/* Links */}
          <motion.div variants={fadeInUp}>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-rose-600 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-600 transition-colors">
                  Series
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-600 transition-colors">
                  Popular
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-600 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={fadeInUp}>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Youtube, label: 'YouTube' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-rose-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <motion.p
            className="text-center text-gray-400 text-sm"
            variants={fadeInUp}
          >
            © 2025 Jagatara. All rights reserved. | Crafted with passion for
            animation lovers worldwide.
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
}
