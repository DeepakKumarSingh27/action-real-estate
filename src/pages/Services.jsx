import React from 'react';
import { motion } from 'framer-motion';
import { Building, Target, Users, LayoutDashboard, Briefcase, Activity } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const servicesList = [
  {
    icon: Building,
    title: 'Property Development',
    description: 'We lead the region in state-of-the-art property developments spanning retail showrooms, luxury residential, commercial buildings, and comprehensive mixed-use developments.'
  },
  {
    icon: Briefcase,
    title: 'Real Estate Advisory',
    description: 'Market research, feasibility studies, and strategic advisory services helping investors maximize their portfolio yields and identify lucrative real estate opportunities.'
  },
  {
    icon: Target,
    title: 'Project Management',
    description: 'Expert oversight over all phases of construction and development. Ensuring projects are completed on time, within budget, and meeting international quality standards.'
  },
  {
    icon: Users,
    title: 'Letting Services',
    description: 'A comprehensive approach to leasing covering commercial, residential, and retail assets. We connect prime properties with premium tenants effectively.'
  },
  {
    icon: LayoutDashboard,
    title: 'Design & Construction',
    description: 'Integrating innovative architectural concepts with robust construction methodologies to create aesthetic, structurally sound, and sustainable spaces.'
  },
  {
    icon: Activity,
    title: 'Operations Oversight',
    description: 'Delivering end-to-end facility management and operational excellence to ensure properties maintain their value, functionality, and aesthetic appeal.'
  }
];

const Services = () => {
  return (
    <div className="pt-20 pb-24 bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 pt-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6"
          >
            Our <span className="text-primary-MAIN dark:text-primary-500">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Delivering comprehensive, end-to-end real estate solutions tailored to the diverse needs of the Kuwait and GCC markets.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-10 md:p-16 text-center shadow-sm"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Need a custom solution for your project?</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
            Our advisory and management teams are ready to draft a customized development and operations plan for your real estate investments.
          </p>
          <a href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-primary-MAIN text-white font-medium rounded-full hover:bg-primary-900 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900">
            Get in touch today
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
