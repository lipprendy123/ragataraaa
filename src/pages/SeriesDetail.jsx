'use client';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { seriesData } from '../data/seriesData';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function SeriesDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const series = seriesData.find((s) => s.id === Number.parseInt(id));
  const [playingEpisode, setPlayingEpisode] = useState(null);

  if (!series) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Series not found</p>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-white"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <Navbar />

      <motion.div
        className="max-w-6xl mx-auto px-4 py-8 sm:py-12"
        variants={fadeInUp}
      >
        {/* Back Button */}
        <motion.button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-rose-600 mt-10 hover:text-rose-700 mb-8 font-medium"
          whileHover={{ x: -4 }}
        >
          <ArrowLeft size={20} />
          Back to Series
        </motion.button>

        {/* Series Header */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={fadeInUp}
        >
          {/* Poster */}
          <motion.div
            className="md:col-span-1"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <video
              src={series.poster || '/placeholder.svg'}
              controls
              className="w-full rounded-lg shadow-lg object-cover"
            />
          </motion.div>

          {/* Series Info */}
          <motion.div className="md:col-span-2" variants={fadeInUp}>
            <motion.h1
              className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
              variants={fadeInUp}
            >
              {series.title}
            </motion.h1>

            <motion.div
              className="flex flex-wrap gap-3 mb-6"
              variants={fadeInUp}
            >
              <span className="px-4 py-1 bg-rose-100 text-rose-700 rounded-full text-sm font-medium">
                {series.genre}
              </span>
              <span className="px-4 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                {series.episodes.length} Episodes
              </span>
              <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                HD Quality
              </span>
            </motion.div>

            <motion.p
              className="text-lg text-gray-600 leading-relaxed mb-6"
              variants={fadeInUp}
            >
              {series.description}
            </motion.p>

            <motion.div
              className="bg-gray-50 p-4 rounded-lg"
              variants={fadeInUp}
            >
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">Director:</span>{' '}
                {series.director}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                <span className="font-semibold text-gray-900">
                  Release Year:
                </span>{' '}
                {series.year}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Episodes Section */}
        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Episodes</h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {series.episodes.map((episode) => (
              <motion.div
                key={episode.id}
                className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-rose-300 hover:shadow-lg transition-all"
                whileHover={{ y: -4 }}
                variants={fadeInUp}
              >
                <div
                  className="relative overflow-hidden bg-gray-900 aspect-video cursor-pointer"
                  onClick={() =>
                    setPlayingEpisode(
                      playingEpisode === episode.id ? null : episode.id
                    )
                  }
                >
                  {playingEpisode === episode.id ? (
                    <video
                      controls
                      autoPlay
                      src={episode.video}
                      className="w-full h-full object-cover"
                    >
                      Maaf, browser Anda tidak mendukung video tag.
                    </video>
                  ) : (
                    <>
                      <video
                        src={episode.video}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        muted
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all flex items-center justify-center pointer-events-none">
                        <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <svg
                            className="w-5 h-5 text-white ml-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                          </svg>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-rose-600 transition-colors">
                    Episode {episode.id}: {episode.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {episode.description}
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    {episode.duration}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      <Footer />
    </motion.div>
  );
}
