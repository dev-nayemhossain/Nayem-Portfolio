import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const experiences = [
    {
      id: 1,
      role: 'Senior Graphic Designer',
      company: 'Creative Studio X',
      location: 'Dhaka, Bangladesh',
      period: '2022 - Present',
      description: 'Leading a team of designers to create compelling visual identities for global brands.',
      skills: ['Branding', 'UI/UX', 'Team Leadership']
    },
    {
      id: 2,
      role: 'Full Stack Developer',
      company: 'Tech Solutions Ltd.',
      location: 'Remote',
      period: '2020 - 2022',
      description: 'Developed scalable web applications using React and Node.js, improving site performance by 40%.',
      skills: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 3,
      role: 'Freelance Visual Designer',
      company: 'Upwork / Fiverr',
      location: 'Global',
      period: '2018 - 2020',
      description: 'Delivered high-quality video editing and motion graphics projects for diverse international clients.',
      skills: ['After Effects', 'Premiere Pro', 'Customer Service']
    }
  ];

  return (
    <section id="experience" ref={ref} className="py-24 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-white dark:border-gray-900 z-10 mt-1.5 shadow-lg group-hover:scale-125 transition-transform" />

                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'text-left' : 'md:text-right'}`}>
                   <div className={`inline-block group relative p-6 rounded-2xl liquid-glass hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300 border border-white/20 dark:border-gray-700/30 ${
                       index % 2 === 0 ? 'ml-6 md:ml-0 md:mr-12' : 'ml-6 md:ml-12'
                   }`}>
                    <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'justify-start' : 'md:justify-end justify-start'}`}>
                        <Briefcase size={18} className="text-blue-500" />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                    </div>
                    
                    <div className={`flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4 ${
                        index % 2 === 0 ? 'justify-start' : 'md:justify-end justify-start'
                    }`}>
                        <span className="flex items-center gap-1">
                            <Briefcase size={14} /> {exp.company}
                        </span>
                        <span className="flex items-center gap-1">
                            <MapPin size={14} /> {exp.location}
                        </span>
                        <span className="flex items-center gap-1 text-blue-500 font-medium">
                            <Calendar size={14} /> {exp.period}
                        </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {exp.description}
                    </p>

                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-start' : 'md:justify-end justify-start'}`}>
                        {exp.skills.map(skill => (
                            <span key={skill} className="px-3 py-1 text-xs font-medium rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 border border-blue-100 dark:border-blue-800/30">
                                {skill}
                            </span>
                        ))}
                    </div>
                  </div>
                </div>
                
                {/* Spacer for the other side */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
