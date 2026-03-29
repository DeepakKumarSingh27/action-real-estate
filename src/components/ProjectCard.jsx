import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-800 transition-all cursor-pointer"
    >
      <div className="relative overflow-hidden aspect-video">
        <div className="absolute inset-0 bg-primary-900/20 group-hover:bg-transparent transition-colors z-10" />
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 z-20">
          <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-primary-MAIN dark:text-primary-500 text-xs font-semibold rounded-full shadow-sm">
            {project.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary-MAIN dark:group-hover:text-primary-500 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500 dark:text-gray-500 font-medium">
            {project.location}
          </span>
          <span className="flex items-center text-primary-MAIN dark:text-primary-500 space-x-1 group-hover:translate-x-1 transition-transform">
            <span>View Details</span>
            <ArrowRight size={16} />
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
