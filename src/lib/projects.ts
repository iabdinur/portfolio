export interface Project {
  id: string
  title: string
  description: string
  period: string
  technologies: string[]
  category: string
  githubUrl?: string
  liveUrl?: string
  imageUrl?: string
}

export const projects: Project[] = [
  {
    id: 'blog-app',
    title: 'Blog App',
    description: 'A full-stack blog platform combining features from Hashnode and Substack, built with modern technologies and designed to scale to 10,000+ readers.',
    period: '2026',
    technologies: ['TypeScript', 'Java', 'React', 'Spring Boot', 'PostgreSQL', 'MVC'],
    category: 'Full Stack',
    githubUrl: 'https://github.com/iabdinur/blog',
    liveUrl: 'https://blog.iabdinur.com',
  },
  {
    id: 'hantiile-app',
    title: 'Hantiile App',
    description: 'A mobile and web application for Hantiile, featuring user management and core business functionality.',
    period: '2026',
    technologies: ['TypeScript', 'Java', 'React', 'Spring Boot', 'PostgreSQL', 'AWS', 'Docker', 'Maven', 'Microservices'],
    category: 'Full Stack',
    githubUrl: 'https://github.com/iabdinur/hantiile',
    liveUrl: 'https://hantiile.com',
  },
  {
    id: 'car-booking-system',
    title: 'Car Booking System',
    description: 'A comprehensive car rental and booking system with reservation management and user dashboard.',
    period: '2025',
    technologies: ['Java', 'TypeScript', 'React', 'Spring Boot', 'PostgreSQL'],
    category: 'Full Stack',
    githubUrl: 'https://github.com/iabdinur/car-booking-system',
    liveUrl: 'https://booking.iabdinur.com',
  },
  {
    id: 'littlelemon',
    title: 'Little Lemon',
    description: 'A restaurant management and reservation app for the Little Lemon restaurant chain.',
    period: '2024',
    technologies: ['TypeScript', 'React', 'CSS'],
    category: 'Frontend',
    githubUrl: 'https://github.com/iabdinur/littlelemon',
    liveUrl: 'https://littlelemon.iabdinur.com',
  },
  {
    id: 'weather-app',
    title: 'Weather App',
    description: 'A responsive weather application that provides real-time weather forecasts and location-based weather data.',
    period: '2024',
    technologies: ['TypeScript', 'JavaScript', 'React'],
    category: 'Frontend',
    githubUrl: 'https://github.com/iabdinur/weather-app',
    liveUrl: 'https://weather.iabdinur.com',
  },
  {
    id: 'banking-design',
    title: 'Banking Design Project',
    description: 'An object-oriented design project for a banking application system, demonstrating software architecture and design patterns.',
    period: '2023',
    technologies: ['Java'],
    category: 'Backend',
    githubUrl: 'https://github.com/iabdinur/bank-design-project',
    liveUrl: 'https://banking.iabdinur.com',
  },
]
