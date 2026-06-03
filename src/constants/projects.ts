// import { Project } from '@/types';

// export const portfolioProjects: Project[] = [
//   {
//     slug: 'convertify',
//     title: 'Convertify',
//     shortDescription: 'A web application for client-side video conversion processing.',
//     fullDescription:
//       'Convertify is a web application that allows users to convert videos directly in their browser without uploading them to a server. It leverages the power of WebAssembly and FFmpeg to perform video conversion tasks efficiently on the client side.',
//     duration: '1 month',
//     role: 'Full Stack Developer',
//     features: [
//       {
//         title: 'Client-Side Processing',
//         description:
//           "All video conversion tasks are performed directly in the user\'s browser, ensuring privacy and reducing server load.",
//       },
//       {
//         title: 'Multiple Format Support',
//         description:
//           'Supports a wide range of video formats for both input and output, allowing users to convert videos to their desired format with ease.',
//       },
//       {
//         title: 'User-Friendly Interface',
//         description:
//           'Features a clean and intuitive interface that guides users through the video conversion process, making it accessible to users of all technical levels.',
//       },
//       {
//         title: 'Fast Conversion',
//         description:
//           'Utilizes WebAssembly and FFmpeg to perform video conversions efficiently, providing users with quick results without the need for server-side processing.',
//       },
//     ],
//     responsibilities: [
//       'Designed and implemented the user interface using Next.js and Tailwind CSS.',
//       'Integrated FFmpeg with WebAssembly to enable client-side video processing.',
//       'Optimized the application for performance and responsiveness across different devices.',
//       'Conducted testing and debugging to ensure a smooth user experience.',
//     ],
//     liveUrl: 'https://convertify-vinulays.vercel.app',
//     gitHubUrl: 'https://github.com/vinulays/video-converter',
//     coverImage: '/projects/convertify/cover.webp',
//     gallery: ['/projects/convertify/cover.webp'],
//     technologies: [
//       { key: 'nextjs', name: 'Next.js' },
//       { key: 'tailwindcss', name: 'Tailwind CSS' },
//       { key: 'ffmpeg', name: 'FFmpeg' },
//       { key: 'webassembly', name: 'WebAssembly' },
//     ],
//     company: 'Personal Project',
//     isFeatured: true,
//   },
//   {
//     slug: 'live-docs',
//     title: 'LiveDocs',
//     shortDescription: 'A web application for real-time collaborative document editing.',
//     fullDescription:
//       'LiveDocs is a web application that enables users to create, edit, and collaborate on documents in real-time. It features a rich text editor, live cursor tracking, and seamless synchronization across multiple users.',
//     duration: '2 months',
//     role: 'Full Stack Developer',
//     features: [
//       {
//         title: 'Real-Time Collaboration',
//         description:
//           'Users can collaborate on documents in real-time, with changes instantly reflected for all collaborators.',
//       },
//       {
//         title: 'Rich Text Editing',
//         description:
//           'Provides a rich text editor with formatting options, allowing users to create visually appealing documents.',
//       },
//       {
//         title: 'Live Cursor Tracking',
//         description:
//           'Displays the cursor position of each collaborator in real-time, enhancing the collaborative experience.',
//       },
//       {
//         title: 'Share and Permissions',
//         description:
//           'Users can easily share documents with others and set permissions to control who can view or edit the document.',
//       },
//       {
//         title: 'Commenting and User Mentions',
//         description:
//           'Allows users to comment on documents and mention other collaborators, facilitating communication and collaboration within the document.',
//       },
//     ],
//     responsibilities: [
//       'Developed the frontend using Next.js and integrated a rich text editor for document creation.',
//       'Implemented real-time collaboration features using Socket.IO for seamless synchronization.',
//       'Designed the backend API with Node.js to handle document management and user authentication.',
//       'Ensured data consistency and conflict resolution during collaborative editing sessions.',
//     ],
//     liveUrl: 'https://live-docs-vinula.vercel.app',
//     gitHubUrl: 'https://github.com/vinulays/live-docs',
//     coverImage: '/projects/live-docs/cover.webp',
//     gallery: ['/projects/live-docs/cover.webp'],
//     technologies: [
//       { key: 'nextjs', name: 'Next.js' },
//       { key: 'tailwindcss', name: 'Tailwind CSS' },
//       { key: 'shadcnui', name: 'Shadcn UI' },
//       { key: 'clerk', name: 'Clerk' },
//       { key: 'socketio', name: 'Socket.IO' },
//     ],
//     company: 'Personal Project',
//     isFeatured: true,
//   },

//   {
//     slug: 'recychamp',
//     title: 'RecyChamp',
//     shortDescription: 'A mobile app to connect waste producers with recyclers.',
//     fullDescription:
//       'RecyChamp is a mobile application designed to connect waste producers with recyclers. It allows users to easily find nearby recycling centers, schedule pickups, and track their recycling efforts. The app promotes sustainable waste management practices and encourages users to contribute to a greener environment.',
//     duration: '3 months',
//     role: 'Full Stack Developer',
//     gitHubUrl: 'https://github.com/vinulays/recychamp',
//     coverImage: '/projects/recychamp/cover.webp',
//     gallery: ['/projects/recychamp/cover.webp'],
//     technologies: [
//       { key: 'flutter', name: 'Flutter' },
//       { key: 'firebase', name: 'Firebase' },
//       { key: 'googlemaps', name: 'Google Maps API' },
//     ],
//     company: 'University Project',
//     isFeatured: true,
//   },
//   {
//     slug: 'flutter-ecommerce',
//     title: 'E-commerce App',
//     shortDescription: 'A feature-rich e-commerce mobile application built with Flutter.',
//     fullDescription:
//       'This e-commerce app is built with Flutter and offers a wide range of features including state management using BLoC, Firebase integration, and Google and Facebook authentication.',
//     duration: '1 month',
//     role: 'Full Stack Developer',
//     gitHubUrl: 'https://github.com/vinulays/flutter-ecommerce',
//     coverImage: '/projects/flutter-ecommerce/cover.webp',
//     gallery: ['/projects/flutter-ecommerce/cover.webp'],
//     technologies: [
//       { key: 'flutter', name: 'Flutter' },
//       { key: 'firebase', name: 'Firebase' },
//     ],
//     company: 'Client Work',
//     isFeatured: true,
//   },
//   {
//     slug: 'myoffice-app',
//     title: 'MyOffice App',
//     shortDescription: 'A mobile app to manage office resources and bookings.',
//     fullDescription:
//       'MyOffice is a mobile application designed to help employees manage office resources and bookings. It allows users to reserve meeting rooms, book desks, and access important office information. The app streamlines office management and enhances employee productivity.',
//     duration: '5 months',
//     role: 'Frontend Developer',
//     coverImage: '/projects/myoffice-app/cover.webp',
//     gallery: ['/projects/myoffice-app/cover.webp'],
//     technologies: [
//       { key: 'flutter', name: 'Flutter' },
//       { key: 'codemagic', name: 'Codemagic' },
//       { key: 'laravel', name: 'Laravel' },
//       { key: 'googlemaps', name: 'Google Maps API' },
//     ],
//     company: 'Client Work',
//     isFeatured: true,
//   },
// ];
