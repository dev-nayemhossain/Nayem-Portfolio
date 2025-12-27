import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Code } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Project Not Found
          </h1>
          <button
            onClick={() => navigate('/')}
            className="btn-gradient inline-flex items-center gap-2"
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 to-white dark:from-gray-900 dark:to-gray-900 py-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${project.gradient} mb-6`}>
              {project.category}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
              {project.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gradient inline-flex items-center gap-2"
                >
                  <ExternalLink size={20} />
                  View Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card-hover px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold text-gray-900 dark:text-white inline-flex items-center gap-2"
                >
                  <Github size={20} />
                  View Code
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Image */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-2xl overflow-hidden shadow-2xl"
        >
          {project.video ? (
            <video
              src={project.video}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto"
            />
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover"
            />
          )}
        </motion.div>
      </section>

      {/* Content Section */}
      <section ref={ref} className="max-w-7xl mx-auto px-6 mt-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Project Overview
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                {project.fullDescription}
              </p>

              {/* Gallery */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Gallery
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {project.gallery.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                      >
                        <img
                          src={item}
                          alt={`${project.title} - Image ${index + 1}`}
                          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="sticky top-24"
            >
              {/* Technologies */}
              {project.technologies && project.technologies.length > 0 && (
                <div className="liquid-glass rounded-2xl p-6 mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Code className="text-blue-600 dark:text-blue-400" size={24} />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      Technologies
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 text-gray-900 dark:text-white rounded-lg text-sm font-medium border border-blue-500/20 dark:border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Project Info */}
              <div className="liquid-glass rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Project Details
                </h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Category</span>
                    <p className="text-gray-900 dark:text-white font-semibold">{project.category}</p>
                  </div>
                  {project.liveUrl && (
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Status</span>
                      <p className="text-green-600 dark:text-green-400 font-semibold">Live</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          More Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects
            .filter((p) => p.id !== project.id)
            .slice(0, 3)
            .map((relatedProject) => (
              <motion.div
                key={relatedProject.id}
                whileHover={{ y: -5 }}
                onClick={() => navigate(`/project/${relatedProject.id}`)}
                className="group cursor-pointer"
              >
                <div className="liquid-glass rounded-2xl overflow-hidden hover:bg-white/10 dark:hover:bg-white/5 transition-all">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={relatedProject.image}
                      alt={relatedProject.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${relatedProject.gradient} mb-3`}>
                      {relatedProject.category}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {relatedProject.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {relatedProject.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
