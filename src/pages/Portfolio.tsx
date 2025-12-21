import { motion } from 'framer-motion';
import { useState } from 'react';
import Footer from '../components/Footer';
import { Eye, Plus } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'collections'>('grid');
  const filters = ['All', 'Design', 'Web', 'UI/UX', 'Video'];

  // Placeholder data - to be expanded
  const allProjects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web',
      image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'Brand Identity Design',
      category: 'Design',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      title: 'SaaS Dashboard',
      category: 'UI/UX',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-green-500 to-emerald-500',
    },
     {
      id: 4,
      title: 'Mobile App Design',
      category: 'UI/UX',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      id: 5,
      title: 'Portfolio Website',
      category: 'Web',
      image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      id: 6,
      title: 'Restaurant Branding',
      category: 'Design',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
        id: 7,
        title: 'Cinematic Travel Vlog',
        category: 'Video',
        image: 'https://images.pexels.com/photos/2533318/pexels-photo-2533318.jpeg?auto=compress&cs=tinysrgb&w=800',
        gradient: 'from-pink-500 to-rose-500', 
    }
  ];

  const collections = [
      {
          id: 'web',
          title: 'Web Development',
          count: allProjects.filter(p => p.category === 'Web').length,
          image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
          filter: 'Web'
      },
      {
          id: 'design',
          title: 'Graphic Design',
          count: allProjects.filter(p => p.category === 'Design').length,
          image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
          filter: 'Design'
      },
      {
          id: 'uiux',
          title: 'UI/UX Design',
          count: allProjects.filter(p => p.category === 'UI/UX').length,
          image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=800',
          filter: 'UI/UX'
      },
       {
          id: 'video',
          title: 'Video Production',
          count: allProjects.filter(p => p.category === 'Video').length,
          image: 'https://images.pexels.com/photos/2533318/pexels-photo-2533318.jpeg?auto=compress&cs=tinysrgb&w=800',
          filter: 'Video'
      }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.category === activeFilter);

  const handleCollectionClick = (filter: string) => {
      setActiveFilter(filter);
      setViewMode('grid');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            A curated collection of my work across design, development, and video production.
          </p>

          <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}
              >
                  All Projects
              </button>
              <button
                onClick={() => setViewMode('collections')}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${viewMode === 'collections' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}
              >
                  Collections
              </button>
          </div>
        </motion.div>

        {viewMode === 'grid' ? (
            <>
                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
                        activeFilter === filter
                            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                            : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500'
                        }`}
                    >
                        {filter}
                    </button>
                    ))}
                </motion.div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Upload Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.02 }}
                        className="group relative flex flex-col justify-center items-center h-64 rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 cursor-pointer overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative z-10 flex flex-col items-center gap-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-500 transition-colors">
                            <div className="p-4 rounded-full bg-white dark:bg-gray-800 shadow-sm group-hover:shadow-md transition-all">
                                <Plus size={32} />
                            </div>
                            <span className="font-semibold">Add New Project</span>
                            <span className="text-xs text-center px-4">Contact me to add your project here</span>
                        </div>
                    </motion.div>

                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="group relative"
                        >
                            <div className="relative overflow-hidden rounded-2xl liquid-glass hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300 h-64">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-3 rounded-full bg-white/90 backdrop-blur-sm text-gray-900 hover:bg-white transition-colors"
                                        >
                                        <Eye size={20} strokeWidth={2} />
                                    </motion.button>
                                </div>
                                
                                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${project.gradient} mb-2`}>
                                        {project.category}
                                    </div>
                                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </>
        ) : (
             <div className="grid md:grid-cols-2 gap-8">
                {collections.map((collection) => (
                    <motion.div
                        key={collection.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => handleCollectionClick(collection.filter)}
                        className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                        <img 
                            src={collection.image} 
                            alt={collection.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                         <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                         <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 to-transparent">
                             <h3 className="text-3xl font-bold text-white mb-2">{collection.title}</h3>
                             <p className="text-gray-200">{collection.count} Projects</p>
                         </div>
                    </motion.div>
                ))}
             </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
