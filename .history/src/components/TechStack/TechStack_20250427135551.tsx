import React from 'react';
import { FaNode, FaJs, FaGitAlt, FaFigma, FaSass } from 'react-icons/fa6';
import { BiLogoTypescript, BiLogoFirebase } from 'react-icons/bi';
import { SiMysql, SiTailwindcss, SiExpress, SiReact } from 'react-icons/si';

// Define the skill structure if needed for state later
interface Skill {
  id: string; // Use 'alt' as a unique ID for DnD
  name: string;
  href: string;
  alt: string;
  icon: JSX.Element;
}

// Initial skills data
const initialSkills: Skill[] = [
  { id: 'react', name: 'React', href: '#', alt: 'react', icon: <SiReact /> },
  {
    id: 'expressjs',
    name: 'Express',
    href: '#',
    alt: 'expressjs',
    icon: <SiExpress />,
  },
  { id: 'nodejs', name: 'Node', href: '#', alt: 'nodejs', icon: <FaNode /> },
  {
    id: 'typescript',
    name: 'Typescript',
    href: '#',
    alt: 'typescript',
    icon: <BiLogoTypescript />,
  },
  {
    id: 'javascript',
    name: 'Javascript',
    href: '#',
    alt: 'javascript',
    icon: <FaJs />,
  },
  { id: 'mysql', name: 'MySQL', href: '#', alt: 'mysql', icon: <SiMysql /> },
  {
    id: 'firebase',
    name: 'Firebase',
    href: '#',
    alt: 'firebase',
    icon: <BiLogoFirebase />,
  },
  { id: 'figma', name: 'Figma', href: '#', alt: 'figma', icon: <FaFigma /> },
  { id: 'sass', name: 'Sass', href: '#', alt: 'sass', icon: <FaSass /> },
  {
    id: 'tailwind',
    name: 'Tailwind',
    href: '#',
    alt: 'tailwind',
    icon: <SiTailwindcss />,
  },
  { id: 'github', name: 'Git', href: '#', alt: 'github', icon: <FaGitAlt /> },
];

const TechStack = () => {
  // We'll add state and DnD logic here in the next step
  const [skills, setSkills] = React.useState(initialSkills);

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 border-b border-[color:var(--tile-border)] pb-2">
        Tech Stack
      </h3>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          // Replace with DraggableSkillItem later
          <li
            className="flex items-center h-8 rounded-md px-3 py-1 gap-2 justify-center bg-gray-500/[.15] border border-gray-500/[.3] text-xs font-medium transition-colors hover:bg-gray-500/[.3] cursor-grab"
            key={skill.id}
          >
            {React.cloneElement(skill.icon, {
              className: 'w-4 h-4 flex-shrink-0',
            })}
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechStack;
