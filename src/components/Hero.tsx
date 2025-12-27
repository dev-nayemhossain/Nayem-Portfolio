import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-animated-gradient"
    >
      {/* Enhanced Background Effects */}
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] max-w-[500px] max-h-[500px] bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] max-w-[500px] max-h-[500px] bg-purple-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-gradient-to-r from-pink-500/20 to-blue-500/20 rounded-full blur-3xl" />
      </div>

      {/* Floating Particles */}
      {/* Left Side Bubbles - Elegant Upward Drift */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`left-${i}`}
          className="absolute liquid-glass rounded-full border border-blue-500/20 dark:border-white/10"
          style={{
            left: `${Math.random() * 30}%`,
            width: Math.random() * 60 + 20 + 'px',
            height: Math.random() * 60 + 20 + 'px',
          }}
          initial={{
            y: window.innerHeight + 100,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            y: -100,
            opacity: [0, 0.8, 0], // Increased opacity
            scale: [0.5, 1, 0.5],
            x: [0, Math.random() * 50 - 25, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear",
          }}
        >
            <div className="w-full h-full bg-blue-500/10 dark:bg-white/5 rounded-full" />
        </motion.div>
      ))}

      {/* Right Side Bubbles - Elegant Upward Drift */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`right-${i}`}
          className="absolute liquid-glass rounded-full border border-purple-500/20 dark:border-white/10"
          style={{
            right: `${Math.random() * 30}%`, // Fixed: explicit right positioning
            left: 'auto', // Ensure left is unset
            width: Math.random() * 80 + 30 + 'px',
            height: Math.random() * 80 + 30 + 'px',
          }}
          initial={{
            y: window.innerHeight + 100,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            y: -100,
            opacity: [0, 0.8, 0], // Increased opacity
            scale: [0.5, 1, 0.5],
            x: [0, Math.random() * 50 - 25, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear",
          }}
         >
            <div className="w-full h-full bg-purple-500/10 dark:bg-white/5 rounded-full" />
        </motion.div>
      ))}

      {/* Glowing Particles - Magic Dust Effect */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className={`absolute rounded-full shadow-lg ${
            i % 3 === 0 ? 'bg-blue-500 shadow-blue-500/50' : 
            i % 3 === 1 ? 'bg-purple-500 shadow-purple-500/50' : 
            'bg-pink-500 shadow-pink-500/50'
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: Math.random() * 4 + 2 + 'px', // Slightly larger
            height: Math.random() * 4 + 2 + 'px',
          }}
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0, 1.2, 0],
            y: [0, -60],
          }}
          transition={{
            duration: Math.random() * 3 + 3,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-fluid-title font-bold mb-fluid-md leading-tight"
        >
          <span className="text-gray-900 dark:text-white text-shadow-lg">I design & build</span>
          <br />
          <span className="gradient-text text-shadow-lg">
            digital experiences
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Professional Graphics Designer & Web Developer with{' '}
          <span className="font-semibold text-blue-600 dark:text-blue-400">7+ years of experience</span>{' '}
          crafting stunning{' '}
          <span className="font-semibold text-purple-600 dark:text-purple-400">logos</span>,{' '}
          <span className="font-semibold text-pink-600 dark:text-pink-400">video content</span>, and{' '}
          <span className="font-semibold text-blue-600 dark:text-blue-400">pixel-perfect designs</span>{' '}
          alongside high-performance web applications
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('projects')}
            className="btn-gradient group"
          >
            View Projects
            <ArrowRight
              size={20}
              className="inline-block ml-2 group-hover:translate-x-1 transition-transform"
            />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="glass-card-hover px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-gray-900 dark:text-white"
          >
            Hire Me
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex items-start justify-center p-2 cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-gray-600 dark:bg-gray-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

