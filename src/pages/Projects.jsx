import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const allProjects = [
  {
    id: 1,
    title: 'Action Retail Center',
    category: 'Commercial',
    location: 'Kuwait City',
    description: 'A modern mixed-use development featuring premium retail spaces, hypermarkets, and entertainment facilities.',
    image: '/assets/retail_center_1774808471177.png',
  },
  {
    id: 2,
    title: 'Skyline Residences',
    category: 'Residential',
    location: 'Salmiya',
    description: 'Luxury high-rise apartments offering panoramic views of the Arabian Gulf with hotel-like amenities.',
    image: '/assets/skyline_residences_1774808491101.png',
  },
  {
    id: 3,
    title: 'Oasis Hotel & Suites',
    category: 'Hospitality',
    location: 'Hawally',
    description: 'A contemporary 4-star hotel designed for both business and leisure travelers in mind.',
    image: '/assets/oasis_hotel_1774808507962.png',
  },
  {
    id: 4,
    title: 'AGH Corporate Tower',
    category: 'Commercial',
    location: 'Shuwaikh',
    description: 'State-of-the-art corporate office spaces equipped with smart building technology.',
    image: '/assets/corporate_tower_1774808533340.png',
  },
  {
    id: 5,
    title: 'Marina Villas',
    category: 'Residential',
    location: 'Al Khiran',
    description: 'Exclusive beachfront villas featuring modern architecture and private boat moorings.',
    image: '/assets/marina_villas_1774808549897.png',
  },
  {
    id: 6,
    title: 'Grand Mall Expansion',
    category: 'Commercial',
    location: 'Farwaniya',
    description: 'Extension project bringing 50+ new regional and international retail brands.',
    image: '/assets/grand_mall_1774808570118.png',
  }
];

const categories = ['All', 'Commercial', 'Residential', 'Hospitality'];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeCategory);

  return (
    <div className="pt-20 pb-24 bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 pt-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6"
          >
            Featured <span className="text-primary-MAIN dark:text-primary-500">Portfolio</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Explore our curated selection of flagship properties that redefine the architectural landscape of Kuwait.
          </motion.p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-primary-MAIN text-white shadow-md'
                  : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
};

export default Projects;
