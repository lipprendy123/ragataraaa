'use client';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import SeriesCard from './SeriesCard';
import { seriesData } from '../data/seriesData';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function FeaturedSeries() {
  const navigate = useNavigate();
  const featured = seriesData.slice(0, 6);

  const handleViewAll = () => {
    Swal.fire({
      title: 'Coming Soon!',
      text: 'More series will be available soon. Stay tuned!',
      icon: 'info',
      confirmButtonText: 'OK',
      confirmButtonColor: '#e11d48',
    });
  };

  return (
    <motion.section
      className="py-20 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-12" variants={fadeInUp}>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Featured Series
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dive into our handpicked collection of stunning animated
            masterpieces
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {featured.map((series) => (
            <motion.div
              key={series.id}
              onClick={() => navigate(`/series/${series.id}`)}
              className="cursor-pointer"
              variants={fadeInUp}
            >
              <SeriesCard series={series} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="text-center mt-12" variants={fadeInUp}>
          <button
            onClick={handleViewAll}
            className="px-8 py-3 bg-rose-600 text-white rounded-lg font-semibold hover:bg-rose-700 transition-colors"
          >
            View All Series
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}
