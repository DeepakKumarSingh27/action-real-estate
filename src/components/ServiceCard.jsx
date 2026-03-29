import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="p-8 rounded-2xl bg-white dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 hover:border-primary-MAIN/50 dark:hover:border-primary-500/50 transition-colors group"
    >
      <div className="w-14 h-14 rounded-lg bg-primary-50 dark:bg-gray-800 flex items-center justify-center mb-6 group-hover:bg-primary-MAIN transition-colors">
        <Icon className="w-7 h-7 text-primary-MAIN dark:text-primary-500 group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed md:text-sm lg:text-base">
        {description}
      </p>
    </motion.div>
  );
};

export default ServiceCard;
