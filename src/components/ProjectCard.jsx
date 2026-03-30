import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BedDouble, Bath, Maximize, DollarSign } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-2xl dark:hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] border border-gray-100 dark:border-gray-800 transition-all cursor-pointer"
    >
      <div className="relative overflow-hidden aspect-video">
        <div className="absolute inset-0 bg-primary-900/20 group-hover:bg-transparent transition-colors z-10" />
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 z-20">
          <span className="px-3 py-1 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm text-primary-MAIN dark:text-primary-500 text-xs font-semibold rounded-full shadow-sm">
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

        {project.price && (
          <div className="flex items-center text-primary-MAIN dark:text-primary-400 font-bold mb-3 text-lg">
             <DollarSign size={18} className="mr-0.5" />
             <span>{project.price}</span>
          </div>
        )}
        
        <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 text-sm mb-5">
           {project.bedrooms && (
             <div className="flex items-center gap-1" title="Bedrooms">
               <BedDouble size={16} />
               <span>{project.bedrooms} Beds</span>
             </div>
           )}
           {project.bathrooms && (
             <div className="flex items-center gap-1" title="Bathrooms">
               <Bath size={16} />
               <span>{project.bathrooms} Baths</span>
             </div>
           )}
           {project.area && (
             <div className="flex items-center gap-1" title="Area">
               <Maximize size={16} />
               <span>{project.area}</span>
             </div>
           )}
        </div>
        
        <div className="flex items-center justify-between text-sm pt-4 border-t border-gray-100 dark:border-gray-800">
          <span className="text-gray-500 dark:text-gray-500 font-medium truncate pr-2">
            {project.location}
          </span>
          <span className="flex items-center text-primary-MAIN dark:text-primary-500 space-x-1 group-hover:translate-x-1 transition-transform shrink-0">
            <span className="font-medium">Details</span>
            <ArrowRight size={16} />
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
