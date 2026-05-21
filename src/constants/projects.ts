import liveDocsPage from '@/assets/images/live-docs.png';
import convertifyPage from '@/assets/images/convertify.png';
import ecommerceApp from '@/assets/images/ecommerce.png';
import ecommerceAppMobile from '@/assets/images/ecommerce_mobile.png';
import coworkingSpaceApp from '@/assets/images/coworking_space.png';
import coworkingSpaceAppMobile from '@/assets/images/coworking_space._mobile.png';
import recyChampApp from '@/assets/images/recychamp.png';

export const portfolioProjects = [
  {
    id: 1,
    company: 'Flutter',
    year: '2024',
    title: 'Environment based mobile application',
    results: [
      { title: 'State management using BLoC' },
      { title: 'Firebase integration' },
      { title: 'Stripe payment gateway' },
    ],
    link: 'https://github.com/vinulays/recychamp',
    image: recyChampApp,
    type: 'mobile',
  },
  {
    id: 2,
    company: 'Flutter',
    year: '2024',
    title: 'E-commerce mobile application',
    results: [
      { title: 'State management using BLoC' },
      { title: 'Firebase integration' },
      { title: 'Google and Facebook authentication' },
    ],
    link: 'https://github.com/vinulays/flutter-ecommerce',
    image: ecommerceApp,
    mobileImage: ecommerceAppMobile,
    type: 'mobile',
  },
  {
    id: 3,
    company: 'Flutter',
    year: '2024',
    title: 'Co-working space booking mobile application',
    results: [
      { title: 'State management using BLoC' },
      { title: 'PayPal payment gateway' },
      { title: 'Google maps custom marker integration' },
    ],
    link: '',
    image: coworkingSpaceApp,
    mobileImage: coworkingSpaceAppMobile,
    type: 'mobile',
  },
  {
    id: 4,
    company: 'Next.js',
    year: '2024',
    title: 'Realtime Collaborative Document Editing Platform',
    results: [
      { title: 'Realtime notifications' },
      { title: 'Authentication using clerk' },
      { title: 'Collaborative threads and comments' },
    ],
    link: 'https://live-docs-vinula.vercel.app',
    image: liveDocsPage,
    type: 'web',
  },
  {
    id: 5,
    company: 'Next.js',
    year: '2024',
    title: 'Client side video converter application',
    results: [
      { title: 'Video conversion progress' },
      { title: "Use client's system resources" },
      { title: 'Skip server hassles' },
    ],
    link: 'https://convertify-vinulays.vercel.app',
    image: convertifyPage,
    type: 'web',
  },
];
