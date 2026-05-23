import { Project } from '@/types';

export const portfolioProjects: Project[] = [
  {
    slug: 'convertify',
    title: 'Convertify',
    shortDescription: 'A web application for client-side video conversion processing.',
    fullDescription:
      'Convertify is a web application that allows users to convert videos directly in their browser without uploading them to a server. It leverages the power of WebAssembly and FFmpeg to perform video conversion tasks efficiently on the client side.',
    liveUrl: 'https://convertify-vinulays.vercel.app',
    gitHubUrl: 'https://github.com/vinulays/video-converter',
    coverImage: '/projects/convertify/cover.webp',
    technologies: ['Next.js', 'FFmpeg'],
    company: 'Personal Project',
    isFeatured: true,
  },
  {
    slug: 'live-docs',
    title: 'LiveDocs',
    shortDescription: 'A web application for real-time collaborative document editing.',
    fullDescription:
      'LiveDocs is a web application that enables users to create, edit, and collaborate on documents in real-time. It features a rich text editor, live cursor tracking, and seamless synchronization across multiple users.',
    liveUrl: 'https://live-docs-vinula.vercel.app',
    gitHubUrl: 'https://github.com/vinulays/live-docs',
    coverImage: '/projects/live-docs/cover.webp',
    technologies: ['Next.js', 'Node.js', 'Socket.IO'],
    company: 'Personal Project',
    isFeatured: true,
  },

  {
    slug: 'recychamp',
    title: 'RecyChamp',
    shortDescription: 'A mobile app to connect waste producers with recyclers.',
    fullDescription:
      'RecyChamp is a mobile application designed to connect waste producers with recyclers. It allows users to easily find nearby recycling centers, schedule pickups, and track their recycling efforts. The app promotes sustainable waste management practices and encourages users to contribute to a greener environment.',
    gitHubUrl: 'https://github.com/vinulays/recychamp',
    coverImage: '/projects/recychamp/cover.webp',
    technologies: ['Flutter', 'BLoC', 'Firebase', 'Stripe API'],
    company: 'University Project',
    isFeatured: true,
  },
  {
    slug: 'flutter-ecommerce',
    title: 'E-commerce App',
    shortDescription: 'A feature-rich e-commerce mobile application built with Flutter.',
    fullDescription:
      'This e-commerce app is built with Flutter and offers a wide range of features including state management using BLoC, Firebase integration, and Google and Facebook authentication.',
    gitHubUrl: 'https://github.com/vinulays/flutter-ecommerce',
    coverImage: '/projects/flutter-ecommerce/cover.webp',
    technologies: ['Flutter', 'Firebase', 'BLoC'],
    company: 'Client Work',
    isFeatured: true,
  },
  {
    slug: 'myoffice-app',
    title: 'MyOffice App',
    shortDescription: 'A mobile app to manage office resources and bookings.',
    fullDescription:
      'MyOffice is a mobile application designed to help employees manage office resources and bookings. It allows users to reserve meeting rooms, book desks, and access important office information. The app streamlines office management and enhances employee productivity.',
    coverImage: '/projects/myoffice-app/cover.webp',
    technologies: ['Flutter', 'Codemagic', 'Laravel', 'Google Maps API'],
    company: 'Client Work',
    isFeatured: true,
  },
];
