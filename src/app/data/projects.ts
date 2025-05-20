export interface Project {
  projectName: string;
  description: string;
  techStack: string[];
  imgUrls: string[];
  siteLink: string;
  githubLink?: string;
}

export const projects: Project[] = [
  {
    projectName: 'Xemtio',
    description: 'XEMTIO is a Croatian company focused on the production and installation of custom-made furniture, offering tailored solutions to fit any space and style.',
    techStack: [
        'React',
        'JavaScript',
        'Styled-Components'
    ],
    imgUrls: [

    ],
    siteLink: 'https://xemtio.com',
  },
  {
    projectName: 'SNET',
    description: 'SNET is a social networking app built with Next.JS, ShadCN UI, and Tailwind CSS, designed for a smooth and responsive user experience. SNET is a project that showcases my front-end skills while integrating seamlessly with a powerful backend.',
    techStack: [
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'ShadCN UI',
        'ASP .NET'
    ],
    imgUrls: [

    ],
    siteLink: 'https://zavrsni-snet.vercel.app',
  },
  {
    projectName: 'OPG Nedaća',
    description: 'OPG Nedaća is a family-owned organic farm in Croatia, focused on growing eco-friendly fruit and producing high-quality natural products. The website is built with React and features a cart-based ordering system.',
    techStack: [
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'ASP .NET',
        'Stripe API'
    ],
    imgUrls: [

    ],
    siteLink: 'https://google.com',
  },
];
