
export interface Project {
  id: string; // URL-friendly slug
  title: string;
  category: string;
  description: string; // Short description for cards
  fullDescription: string; // Detailed description for project page
  image: string;
  gradient: string;
  video?: string;
  technologies?: string[]; // Tech stack used
  liveUrl?: string; // Live demo URL
  githubUrl?: string; // GitHub repository URL
  gallery?: string[]; // Additional images/videos
}

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    category: 'Web',
    description: 'Modern e-commerce solution with seamless checkout experience',
    fullDescription: 'A comprehensive e-commerce platform built with modern web technologies. Features include user authentication, product catalog with advanced filtering, shopping cart functionality, secure payment integration, order management, and an admin dashboard for inventory control. The platform is optimized for performance and provides a seamless shopping experience across all devices.',
    image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
    gradient: 'from-blue-500 to-cyan-500',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    gallery: [
      'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'brand-identity-design',
    title: 'Brand Identity Design',
    category: 'Design',
    description: 'Complete branding package for a tech startup',
    fullDescription: 'A comprehensive brand identity system created for an innovative tech startup. The project included logo design, color palette development, typography selection, brand guidelines, business card design, letterhead, and social media templates. The visual identity reflects the company\'s modern, forward-thinking approach while maintaining professional credibility.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    gradient: 'from-purple-500 to-pink-500',
    technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma'],
    gallery: [
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'saas-dashboard',
    title: 'SaaS Dashboard',
    category: 'UI/UX',
    description: 'Analytics dashboard with real-time data visualization',
    fullDescription: 'An intuitive analytics dashboard designed for a SaaS platform. Features real-time data visualization with interactive charts and graphs, customizable widgets, user management, team collaboration tools, and comprehensive reporting capabilities. The interface prioritizes clarity and ease of use while handling complex data sets efficiently.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    gradient: 'from-green-500 to-emerald-500',
    technologies: ['React', 'TypeScript', 'Chart.js', 'Material-UI'],
    gallery: [
      'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'mobile-app-design',
    title: 'Mobile App Design',
    category: 'UI/UX',
    description: 'Fitness tracking app with gamification features',
    fullDescription: 'A mobile fitness application that combines workout tracking with engaging gamification elements. Users can log exercises, track progress, earn achievements, compete with friends, and follow personalized workout plans. The design emphasizes motivation through visual feedback, progress visualization, and social features that keep users engaged in their fitness journey.',
    image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
    gradient: 'from-orange-500 to-red-500',
    technologies: ['Figma', 'Adobe XD', 'Principle', 'InVision'],
    gallery: [
      'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    category: 'Web',
    description: 'Creative portfolio for a professional photographer',
    fullDescription: 'A stunning portfolio website designed for a professional photographer to showcase their work. Features include a full-screen image gallery with lightbox functionality, categorized project sections, about page with biography, contact form, and blog integration. The design is minimal and elegant, allowing the photography to take center stage while providing smooth navigation and fast loading times.',
    image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
    gradient: 'from-indigo-500 to-purple-500',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Sanity CMS'],
    gallery: [
      'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'restaurant-branding',
    title: 'Restaurant Branding',
    category: 'Design',
    description: 'Complete visual identity including logo and menu design',
    fullDescription: 'A comprehensive branding project for a modern restaurant. Deliverables included logo design, menu layouts (both print and digital), signage design, packaging for takeout, staff uniforms, and social media templates. The visual identity captures the restaurant\'s culinary philosophy and creates a cohesive brand experience across all customer touchpoints.',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    gradient: 'from-yellow-500 to-orange-500',
    technologies: ['Adobe Illustrator', 'Adobe InDesign', 'Photoshop'],
    gallery: [
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
];
