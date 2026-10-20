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
    id: 'hantiile-app',
    title: 'Hantiile.com',
    description: 'A real estate platform for Gulf and East African markets, spanning a public property marketplace, an agent CRM, and iOS and Android applications, all backed by Spring Boot microservices behind a single API gateway.',
    period: '2026',
    technologies: ['Java', 'Spring Boot', 'Spring Cloud Gateway', 'Spring Security', 'PostgreSQL', 'Flyway', 'RabbitMQ', 'Redis', 'AWS S3', 'TypeScript', 'React', 'Chakra UI', 'MapLibre', 'Kotlin', 'Jetpack Compose', 'Swift', 'SwiftUI', 'Docker', 'Maven', 'Microservices'],
    category: 'Full Stack',
    githubUrl: 'https://github.com/iabdinur/hantiile',
    liveUrl: 'https://hantiile.com',
  },
  {
    id: 'blog-app',
    title: 'Blog App',
    description: 'Blog writing on software engineering and system design, with UIUC MCS course reviews that explain trade-offs for a nonspecialist audience. Posts live as Markdown in git and are served as a static React site on GitHub Pages.',
    period: '2026',
    technologies: ['TypeScript', 'React', 'Vite', 'Chakra UI', 'Zustand', 'React Query', 'Markdown', 'Node.js', 'GitHub Actions', 'GitHub Pages'],
    category: 'Frontend',
    githubUrl: 'https://github.com/iabdinur/blog',
    liveUrl: 'https://blog.iabdinur.dev',
  },
  {
    id: 'qclm',
    title: 'QCLM',
    description: 'A Quantum Cascade Laser Microscopy system with a desktop application for real-time instrument control, spectral acquisition, and imaging, backed by Spring Boot microservices that stream data through Kafka.',
    period: '2026',
    technologies: ['Java', 'JavaFX', 'Spring Boot', 'Spring Security', 'Kafka', 'PostgreSQL', 'AWS S3', 'Docker', 'Kubernetes', 'Prometheus', 'Grafana', 'Maven', 'Microservices'],
    category: 'Full Stack',
    githubUrl: 'https://github.com/iabdinur/qclm',
    liveUrl: 'https://qclm.iabdinur.dev',
  },
  {
    id: 'cimilada-android-app',
    title: 'Cimilada Android App',
    description: 'A multi-user Android app for managing a personal city list with live weather, maps, and Gemini-powered weather insights and LLM-generated UI themes.',
    period: '2026',
    technologies: ['Java', 'Android', 'Room', 'Retrofit', 'OkHttp', 'Google Maps', 'WorkManager', 'Gemini API', 'Spring Boot', 'JUnit', 'Espresso', 'Robolectric', 'Gradle'],
    category: 'Mobile',
    liveUrl: 'https://weather.iabdinur.dev',
  },
  {
    id: 'car-booking-system',
    title: 'Booking System',
    description: 'A car rental and booking system with a Spring Boot REST API and console client for browsing cars, filtering electric vehicles, and managing user bookings.',
    period: '2025',
    technologies: ['Java', 'Spring Boot', 'Spring Data JPA', 'PostgreSQL', 'REST', 'JavaFaker', 'Maven'],
    category: 'Backend',
    githubUrl: 'https://github.com/iabdinur/car-booking-system',
    liveUrl: 'https://booking.iabdinur.dev',
  },
  {
    id: 'caymis',
    title: 'Caymis',
    description: 'An insurance booking system for auto, home, and life policies, with premium calculation and agent commission tracking.',
    period: '2025',
    technologies: ['Java', 'OOP', 'Maven'],
    category: 'Backend',
    liveUrl: 'https://insure.iabdinur.dev',
  },
  {
    id: 'banking-design',
    title: 'ATM System',
    description: 'An object-oriented ATM system for managing person and company customers with checking and savings accounts, deposits, withdrawals, interest, and account fees, built test-first.',
    period: '2023',
    technologies: ['Java', 'OOP', 'JUnit', 'TDD', 'Maven'],
    category: 'Backend',
    githubUrl: 'https://github.com/iabdinur/bank-design-project',
    liveUrl: 'https://atm.iabdinur.dev',
  },
]
