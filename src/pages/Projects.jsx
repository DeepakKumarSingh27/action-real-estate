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
    price: '25.5M',
    area: '150,000 sq ft',
  },
  {
    id: 2,
    title: 'Skyline Residences',
    category: 'Residential',
    location: 'Salmiya',
    description: 'Luxury high-rise apartments offering panoramic views of the Arabian Gulf with hotel-like amenities.',
    image: '/assets/skyline_residences_1774808491101.png',
    price: '850,000',
    bedrooms: 3,
    bathrooms: 4,
    area: '2,100 sq ft',
  },
  {
    id: 3,
    title: 'Oasis Hotel & Suites',
    category: 'Hospitality',
    location: 'Hawally',
    description: 'A contemporary 4-star hotel designed for both business and leisure travelers in mind.',
    image: '/assets/oasis_hotel_1774808507962.png',
    price: '12.0M',
    area: '85,000 sq ft',
  },
  {
    id: 4,
    title: 'AGH Corporate Tower',
    category: 'Commercial',
    location: 'Shuwaikh',
    description: 'State-of-the-art corporate office spaces equipped with smart building technology.',
    image: '/assets/corporate_tower_1774808533340.png',
    price: '30.0M',
    area: '200,000 sq ft',
  },
  {
    id: 5,
    title: 'Marina Villas',
    category: 'Residential',
    location: 'Al Khiran',
    description: 'Exclusive beachfront villas featuring modern architecture and private boat moorings.',
    image: '/assets/marina_villas_1774808549897.png',
    price: '1.2M',
    bedrooms: 5,
    bathrooms: 6,
    area: '4,500 sq ft',
  },
  {
    id: 6,
    title: 'Grand Mall Expansion',
    category: 'Commercial',
    location: 'Farwaniya',
    description: 'Extension project bringing 50+ new regional and international retail brands.',
    image: '/assets/grand_mall_1774808570118.png',
    price: '45.0M',
    area: '300,000 sq ft',
  }
];

const categories = ['All', 'Commercial', 'Residential', 'Hospitality'];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [priceFilter, setPriceFilter] = useState('');

  const parsePrice = (priceStr) => {
    if (!priceStr) return 0;
    let numeric = parseFloat(priceStr.replace(/,/g, ''));
    if (priceStr.includes('M')) numeric *= 1000000;
    return numeric;
  };

  const filteredProjects = allProjects.filter(project => {
    const categoryMatch = activeCategory === 'All' || project.category === activeCategory;
    
    let priceMatch = true;
    if (priceFilter === 'under1m') priceMatch = parsePrice(project.price) < 1000000;
    else if (priceFilter === '1m-5m') priceMatch = parsePrice(project.price) >= 1000000 && parsePrice(project.price) <= 5000000;
    else if (priceFilter === 'over5m') priceMatch = parsePrice(project.price) > 5000000;

    return categoryMatch && priceMatch;
  });

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
        <div className="flex flex-col md:flex-row justify-between items-center bg-white dark:bg-gray-900 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 mb-12 gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-primary-MAIN text-white shadow-md'
                    : 'bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center w-full md:w-auto">
            <label className="text-sm text-gray-500 dark:text-gray-400 mr-3 font-medium hidden sm:block">Price Limit:</label>
            <select 
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
              className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full md:w-auto p-2 outline-none transition-colors"
            >
              <option value="">Any Price</option>
              <option value="under1m">Under 1 Million</option>
              <option value="1m-5m">1M - 5M</option>
              <option value="over5m">Over 5M</option>
            </select>
          </div>
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
