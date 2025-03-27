
// Helper functions for the Download page

// Define types for project data
export interface ProjectData {
  name: string;
  version: string;
  description: string;
  technologies: string[];
  pages: string[];
  key_components: string[];
  structure: Record<string, string>;
  buildTimestamp: string;
}

// Generate project information JSON
export const generateProjectData = (): ProjectData => {
  return {
    name: "Andrew Freeman Portfolio",
    version: "1.0.0",
    description: "Personal portfolio website for Andrew Freeman",
    technologies: [
      "React", "TypeScript", "Tailwind CSS", "Vite", "shadcn/ui"
    ],
    pages: [
      "Home", "Skills", "Portfolio", "Blog", "Contact", "Download"
    ],
    key_components: [
      "Header.tsx", "Footer.tsx", "ParticleBackground.tsx",
      "AIIntegrationSection.tsx", "SalesLeadershipSection.tsx",
      "TechnicalExpertiseSection.tsx", "VideoProductionSection.tsx"
    ],
    structure: {
      "src/": "Source code directory",
      "src/components/": "Reusable UI components",
      "src/pages/": "Page components",
      "src/styles/": "CSS styling",
      "src/utils/": "Utility functions",
      "src/hooks/": "Custom React hooks",
      "src/data/": "Data files"
    },
    buildTimestamp: new Date().toISOString()
  };
};

// README content for download
export const getReadmeContent = (): string => {
  return `# Andrew Freeman Portfolio

## Project Overview

This is a personal portfolio website for Andrew Freeman, showcasing skills and projects in:
- AI Integration
- Sales Leadership
- Technical Expertise
- Video Production

## Getting Started

To run this project locally:
\`\`\`
git clone <repository-url>
cd <project-directory>
npm install
npm run dev
\`\`\`

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite
- shadcn/ui components

## Project Structure

- \`/src\` - Source code
  - \`/components\` - React components
  - \`/pages\` - Page components
  - \`/styles\` - CSS styles
  - \`/hooks\` - Custom React hooks
  - \`/utils\` - Utility functions
`;
};

// Default project structure text
export const getProjectStructure = (): string => {
  return `
src/
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ParticleBackground.tsx
│   ├── competencies/
│   │   └── [Component files]
│   ├── sections/
│   │   └── [Section component files]
│   └── ui/
│       └── [shadcn components]
├── pages/
│   ├── index.tsx
│   ├── Skills.tsx
│   ├── Portfolio.tsx
│   ├── Blog.tsx
│   ├── Contact.tsx
│   └── Download.tsx
├── styles/
│   └── [CSS files]
├── utils/
│   └── [Utility functions]
├── hooks/
│   └── [Custom React hooks]
└── data/
    └── [Data files]
`;
};
