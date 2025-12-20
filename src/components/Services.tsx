import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Palette, Layers, Code, Rocket, Award, Film } from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: Palette,
      title: 'Logo Design',
      description:
        'Creating unique, memorable logos that perfectly capture your brand\'s identity and values. Professional logo design with unlimited revisions.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Film,
      title: 'Video Editing',
      description:
        'Professional video editing and motion graphics for social media, marketing, and promotional content. Bringing your stories to life through engaging visuals.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Award,
      title: 'Branding & Identity',
      description:
        'Complete brand identity packages including logos, color schemes, typography, and brand guidelines. Building cohesive visual identities that stand out.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Layers,
      title: 'Graphic Design',
      description:
        'All types of graphic design including posters, flyers, social media graphics, business cards, and marketing materials. Creative solutions for every need.',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Code,
      title: 'UI/UX Design',
      description:
        'Creating intuitive and visually stunning user interfaces that enhance user engagement and satisfaction.',
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Rocket,
      title: 'Web Development',
      description:
        'Building fast, responsive, and scalable web applications using modern technologies and best practices.',
      gradient: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section
      id="services"
      ref={ref}
      className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            What I <span className="gradient-text">Do</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-4">
            Delivering comprehensive digital solutions from concept to launch
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative h-full glass-card-hover rounded-2xl p-8">
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${service.gradient} rounded-2xl transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <service.icon className="text-white" size={28} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="flex items-center text-sm font-semibold gradient-text group-hover:translate-x-2 transition-transform">
                    Learn more →
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

