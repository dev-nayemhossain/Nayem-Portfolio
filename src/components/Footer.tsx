import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: '#contact', label: 'Email' },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Branding Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div 
              className="flex items-center gap-3 mb-6 cursor-pointer inline-flex group"
              onClick={scrollToTop}
            >
              <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
                  <img 
                      src="/logo.png" 
                      alt="Logo" 
                      className="relative h-10 w-10 object-contain p-1 rounded-full border-2 border-white/50 dark:border-white/10 shadow-lg bg-black" 
                  />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent transform group-hover:scale-[1.02] transition-transform duration-300">
                Nayem Hossain
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-md">
              A passionate Professional Graphics Designer & Web Developer crafting pixel-perfect designs, engaging video content, and high-performance web applications.
            </p>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
              Menu
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-base font-medium"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
              Connect
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 flex items-center justify-center group transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-blue-500/25 border border-gray-100 dark:border-gray-700 hover:border-transparent"
                  aria-label={social.label}
                >
                  <social.icon 
                    size={22} 
                    className="text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors" 
                  />
                </motion.a>
              ))}
            </div>
            <p className="text-gray-500 dark:text-gray-500 text-sm mt-6">
              Available for freelance projects and collaborations.
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-800 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-2 text-gray-500 dark:text-gray-500 text-sm"
          >
            <span>© {currentYear} Nayem Hossain. All rights reserved.</span>
            <span className="hidden md:inline text-gray-300 dark:text-gray-700">|</span>
            <div className="flex items-center gap-1.5">
              <span>Made with</span>
              <Heart size={14} className="text-red-500 fill-current animate-pulse" />
              <span>in Dhaka, Bangladesh</span>
            </div>
          </motion.div>

          {/* Scroll to Top Button */}
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="px-6 py-2.5 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-semibold transition-all shadow-sm hover:shadow-md border border-gray-200 dark:border-gray-700 flex items-center gap-2"
            aria-label="Scroll to top"
          >
            Back to Top
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
