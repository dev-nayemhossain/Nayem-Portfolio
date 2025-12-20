import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState, ElementType } from 'react';
import { Award, Users, Briefcase, Target, Code, Palette, Zap } from 'lucide-react';
import profileImage from '../assets/profile.jpg';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { icon: Briefcase, value: 7, suffix: '+', label: 'Years Experience' },
    { icon: Target, value: 120, suffix: '+', label: 'Projects Completed' },
    { icon: Users, value: 85, suffix: '+', label: 'Happy Clients' },
    { icon: Award, value: 15, suffix: '+', label: 'Awards Won' },
  ];

  const highlights = [
    { icon: Palette, text: 'Logo Design & Branding', color: 'from-blue-500 to-cyan-500' },
    { icon: Zap, text: 'Video Editing & Motion Graphics', color: 'from-purple-500 to-pink-500' },
    { icon: Code, text: 'Web Development & UI/UX', color: 'from-orange-500 to-red-500' },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Profile Photo Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto float">
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 bg-gradient-vibrant rounded-full blur-2xl opacity-50" />
              
              {/* Photo Container */}
              <div className="relative">
                {/* Gradient Border Ring */}
                <div className="absolute -inset-[2px] bg-gradient-vibrant rounded-full blur-[2px] opacity-40 animate-pulse" />
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-full p-[2px] bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-pink-500/40"
                >
                  <div className="rounded-full overflow-hidden bg-white dark:bg-gray-900 border-2 border-white/10 dark:border-white/5">
                    <img
                      src={profileImage}
                      alt="Profile"
                      className="w-full h-full object-cover aspect-square hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full" />
                </motion.div>
              </div>

              {/* Floating Badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -top-4 -right-4 glass-card px-4 py-2 rounded-full"
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">Available</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -bottom-4 -left-4 glass-card px-4 py-2 rounded-full"
              >
                <span className="text-sm font-semibold gradient-text">7+ Years</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Professional Graphics Designer & Web Developer
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                I'm <strong>Nayem Hossain</strong>, a 21-year-old university student from <strong>Dhaka, Bangladesh</strong>, with a strong passion for creative design and modern web technologies. As a Professional Graphics Designer, Web Developer, and Video Editor, I specialize in crafting visually compelling and performance-driven digital experiences.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                With a keen eye for detail and a deep understanding of design principles, I create modern, user-focused graphics, responsive websites, and high-quality video content that effectively communicate brand identity and engage audiences. My work combines creativity with technical precision, ensuring both aesthetic excellence and functional performance.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid gap-4 mt-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-4 glass-card-hover p-4 rounded-xl group"
                >
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${item.color} shadow-lg group-hover:scale-110 transition-transform`}>
                    <item.icon className="text-white" size={24} />
                  </div>
                  <span className="text-gray-900 dark:text-white font-semibold text-lg">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} delay={index * 0.1} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const StatCard = ({
  stat,
  delay,
}: {
  stat: { icon: ElementType; value: number; suffix: string; label: string };
  delay: number;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = stat.value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, stat.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative glass-card-hover rounded-2xl p-8 text-center">
        <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 mb-4 group-hover:scale-110 transition-transform">
          <stat.icon className="text-white" size={32} />
        </div>
        <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
          {count}
          {stat.suffix}
        </div>
        <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">
          {stat.label}
        </div>
      </div>
    </motion.div>
  );
};

export default About;

