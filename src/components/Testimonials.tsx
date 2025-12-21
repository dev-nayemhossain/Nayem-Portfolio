import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star, CheckCircle } from 'lucide-react';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO at TechStart',
      content:
        'Working with this designer was an absolute pleasure. The attention to detail and creative solutions exceeded our expectations. Our brand identity truly stands out now.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      verified: true,
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager at InnovateLab',
      content:
        'The web application developed was not only visually stunning but also highly performant. The project was delivered on time and the communication throughout was excellent.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      verified: true,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director at GrowthCo',
      content:
        'Our landing page conversion rate increased by 45% after the redesign. The combination of beautiful design and strategic UX decisions made all the difference.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      verified: true,
    },
    {
      name: 'David Thompson',
      role: 'Founder at DesignHub',
      content:
        'Exceptional work on our brand identity. The logo and visual system perfectly captures our company values. Highly recommended for any branding project.',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      verified: true,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // Auto-play effect
  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000); // 5 seconds interval
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-32 relative overflow-hidden border-t border-gray-200/50 dark:border-gray-800/50"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-teal-500/10 to-emerald-500/10 rounded-full blur-[120px]" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">
            <Star size={14} className="fill-blue-600 dark:fill-blue-400" />
            <span>Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real feedback from clients who have transformed their digital presence
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <div className="relative liquid-glass rounded-3xl p-8 md:p-12 hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-500 group">
                <div className="absolute top-6 right-8 text-blue-500/20 group-hover:text-blue-500/40 transition-colors">
                  <Quote size={80} fill="currentColor" />
                </div>

                <div className="flex flex-col md:flex-row gap-8 relative z-10">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-lg opacity-50 group-hover:opacity-80 transition-opacity" />
                       <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full p-[3px] bg-gradient-to-br from-blue-500 to-purple-500">
                          <img
                            src={testimonials[currentIndex].image}
                            alt={testimonials[currentIndex].name}
                            className="w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-900"
                          />
                       </div>
                       <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-1.5 rounded-full border-4 border-white dark:border-gray-900 shadow-lg" title="Verified Client">
                          <CheckCircle size={16} strokeWidth={3} />
                       </div>
                    </div>
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} className="text-yellow-400 fill-yellow-400 drop-shadow-sm" />
                       ))}
                    </div>

                    <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-100 leading-relaxed mb-6 font-medium">
                      "{testimonials[currentIndex].content}"
                    </p>

                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-gray-500 dark:text-gray-400 font-medium">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-6 mt-10">
            <motion.button
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="p-4 rounded-full liquid-glass hover:bg-white/20 dark:hover:bg-white/10 text-gray-700 dark:text-white transition-all shadow-lg hover:shadow-xl"
            >
              <ChevronLeft size={24} />
            </motion.button>

            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-12 bg-gradient-to-r from-blue-600 to-purple-600 shadow-md'
                      : 'w-2 bg-gray-300 dark:bg-gray-700 hover:bg-blue-400'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="p-4 rounded-full liquid-glass hover:bg-white/20 dark:hover:bg-white/10 text-gray-700 dark:text-white transition-all shadow-lg hover:shadow-xl"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
