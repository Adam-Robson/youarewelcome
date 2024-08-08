import { TProject } from '../lib/types';

export const projects: TProject[] =[
  {
    id: 1,
    name: "Collabo",
    description: "Create music with collaborators around the world with an opensource song project platform. Collabo is a platform for collaboration.",
    icon: '../assets/project-icons/collabo.svg',
    link: 'https://collabomusic.co/'
  },
  {
    id: 2,
    name: "Pantry Pal",
    description: "Pantry Pal is an app that helps you locate food pantries in your area. Pantry Pal is a platform for finding and sharing food.",
    icon: '../assets/project-icons/pal.svg',
    link: 'https://pantry-pal-colab.herokuapp.com/'
  },
  {
    id: 3,
    name: "Tally Ho!",
    description: "Tally Ho! is a platform for finding and sharing your trips. Assemble your dream road trip with Tally Ho!",
    icon: '../assets/project-icons/tally.svg',
    link: 'https://tally-ho-road-trips.netlify.app/auth/sign-in'
  },
  {
    id: 4,
    name: "Ellington Willoughby",
    description: "Ellington Willoughby & the Mythical Squid is a psychadelic pop band from Portland, Oregon.",
    icon: '../assets/project-icons/ellington.svg',
    link: 'https://ellington-willoughby.vercel.app/'
  }
];
