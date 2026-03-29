import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Eye, Building2 } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20 pb-24 bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20 pt-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6"
          >
            About <span className="text-primary-MAIN dark:text-primary-500">AREC</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Established in 2004, Action Real Estate Company (AREC) has grown to become a premier real estate entity, transforming skylines and building enduring value.
          </motion.p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800"
          >
            <div className="w-12 h-12 bg-primary-50 dark:bg-gray-800 text-primary-MAIN dark:text-primary-500 rounded-lg flex items-center justify-center mb-6">
              <Award size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our History</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Founded in 2004 and becoming a Kuwaiti shareholding closed company in 2005 with a paid-up capital of KD 18 Million. As a major subsidiary of Action Group Holdings Company (AGH), we have continuously expanded our footprint across Kuwait and the GCC, setting benchmarks in quality and innovation.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800"
          >
            <div className="w-12 h-12 bg-primary-50 dark:bg-gray-800 text-primary-MAIN dark:text-primary-500 rounded-lg flex items-center justify-center mb-6">
              <Building2 size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Portfolio</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Our diverse portfolio encompasses retail showrooms, commercial properties, dynamic office spaces, large-scale mixed-use developments, exclusive residential projects, and premium hospitality venues, demonstrating our versatile expertise in the industry.
            </p>
          </motion.div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden group bg-primary-900 rounded-2xl text-white p-10 flex flex-col justify-center"
          >
            <div className="absolute top-0 right-0 -mt-10 -mr-10 text-primary-800 opacity-50 group-hover:scale-110 transition-transform duration-500">
              <Eye size={180} />
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg text-primary-100 font-light leading-relaxed">
                To be the region's most trusted and innovative real estate developer, creating sustainable and inspiring spaces that elevate the quality of life and deliver exceptional value to our stakeholders.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative overflow-hidden group bg-accent-MAIN rounded-2xl text-white p-10 flex flex-col justify-center"
          >
            <div className="absolute bottom-0 right-0 -mb-10 -mr-10 text-yellow-600 opacity-50 group-hover:scale-110 transition-transform duration-500">
              <Target size={180} />
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Our Mission</h3>
              <p className="text-lg text-gray-800 font-light leading-relaxed">
                To continuously drive excellence through strategic investments, state-of-the-art property developments, and unmatched operational management across Kuwait and the GCC.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default About;
