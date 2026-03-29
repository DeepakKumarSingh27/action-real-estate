import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building, Users, Target, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';

// Real world dummy data
const projects = [
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
  }
];

const services = [
  {
    icon: Building,
    title: 'Property Development',
    description: 'End-to-end development of commercial, residential, and hospitality projects.'
  },
  {
    icon: Target,
    title: 'Project Management',
    description: 'Expert oversight ensuring projects are delivered on time, within budget, and to specification.'
  },
  {
    icon: Users,
    title: 'Letting Services',
    description: 'Comprehensive leasing solutions connecting premium properties with quality tenants.'
  },
  {
    icon: Activity,
    title: 'Operations Oversight',
    description: 'Maintaining the highest standards of facility management and operational excellence.'
  }
];

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/hero_bg_1774808458075.png"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/70 dark:bg-gray-950/80 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary-500 font-semibold tracking-wider uppercase mb-4 block">
              Action Real Estate Company
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 drop-shadow-lg">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-MAIN">Future Spaces</span>
            </h1>
            <p className="mt-4 max-w-2xl text-xl text-gray-200 mx-auto mb-10 font-light">
              Transforming the landscape of Kuwait and the GCC through innovative development, expert advisory, and premium management since 2004.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/projects">
                <Button size="lg" className="rounded-full flex items-center gap-2">
                  Explore Projects
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="rounded-full bg-white/10 backdrop-blur-sm border-white/50 text-white hover:bg-white/20">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
            >
              Our Expertise
            </motion.h2>
            <div className="w-20 h-1 bg-primary-MAIN mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Featured Developments
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Discover our portfolio of flagship projects spanning retail, commercial, residential, and hospitality sectors across the region.
              </p>
            </div>
            <Link to="/projects" className="mt-6 md:mt-0">
              <Button variant="ghost" className="hidden md:flex items-center gap-2">
                View All Projects <ArrowRight size={18} />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          <div className="mt-10 text-center md:hidden">
            <Link to="/projects">
              <Button variant="outline" className="w-full justify-center">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 dark:bg-primary-950 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-10 pointer-events-none">
          <svg width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
            <defs>
              <pattern id="pattern-squares" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="404" fill="url(#pattern-squares)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to start your next project?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-primary-100 max-w-2xl mx-auto mb-8">
            Get in touch with our team of experts to discuss how we can bring your vision to life.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary-900 hover:bg-gray-50 z-10 relative">
              Contact Our Team
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
