import { FaNode, FaJs, FaGitAlt, FaFigma, FaSass } from 'react-icons/fa6';
import { BiLogoTypescript, BiLogoFirebase } from 'react-icons/bi';
import { SiMysql, SiTailwindcss, SiExpress, SiReact } from 'react-icons/si';
import React from 'react';

const skills = [
  {
    name: 'React',
    href: '#',
    alt: 'react',
    icon: <SiReact className="w-6 h-6" />,
  },
  {
    name: 'Express',
    href: '#',
    alt: 'expressjs',
    icon: <SiExpress className="w-6 h-6" />,
  },
  {
    name: 'Node',
    href: '#',
    alt: 'nodejs',
    icon: <FaNode className="w-6 h-6" />,
  },
  {
    name: 'Typescript',
    href: '#',
    alt: 'typescript',
    icon: <BiLogoTypescript className="w-6 h-6" />,
  },
  {
    name: 'Javascript',
    href: '#',
    alt: 'javascrip',
    icon: <FaJs className="w-6 h-6" />,
  },
  {
    name: 'MySQL',
    href: '#',
    alt: 'mysql',
    icon: <SiMysql className="w-6 h-6" />,
  },
  {
    name: 'Firebase',
    href: '#',
    alt: 'firebase',
    icon: <BiLogoFirebase className="w-6 h-6" />,
  },
  {
    name: 'Figma',
    href: '#',
    alt: 'figma',
    icon: <FaFigma className="w-6 h-6" />,
  },
  {
    name: 'Sass',
    href: '#',
    alt: 'sass',
    icon: <FaSass className="w-6 h-6" />,
  },
  {
    name: 'Tailwind',
    href: '#',
    alt: 'tailwind',
    icon: <SiTailwindcss className="w-6 h-6" />,
  },
  {
    name: 'Git',
    href: '#',
    alt: 'github',
    icon: <FaGitAlt className="w-6 h-6" />,
  },
];

const Skills = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-8">
      <div className="flex-1">
        <h3 className="text-2xl font-semibold mb-4 border-b border-[color:var(--tile-border)] pb-2">
          About Me
        </h3>
        <p className="text-sm leading-relaxed space-y-3">
          <span>
            I've worked over 6 years in the mental health service industry in
            several roles across many populations. I am a person who can
            empathize, listen, and provide service to anyone in need. Working in
            Toronto through these years has allowed me an opportunity to share
            the knowledge and skills I acquired from school.
          </span>
          <span>
            In my most recent role, I earned a chance to use my skills around
            audio and visual design to assist the company communicate with
            consumers, donors, and the community over social media and with a
            podcast.
          </span>
          <span>
            Over the pandemic, I decided I wanted to hone my skills with
            technology and try something new. I learned how to code using
            JavaScript, Python, React.js and many other tools. The guidance of
            friends and family allowed me to see the talent I have for
            programming and how I may be able to use what I learned over the
            years into a new field.
          </span>
        </p>
      </div>
      <div className="flex-1 md:max-w-xs lg:max-w-sm">
        <h3 className="text-2xl font-semibold mb-4 border-b border-[color:var(--tile-border)] pb-2">
          Tech Stack
        </h3>
        <ul className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li
              className="flex items-center h-8 rounded-md px-3 py-1 gap-2 justify-center bg-gray-500/[.15] border border-gray-500/[.3] text-xs font-medium transition-colors hover:bg-gray-500/[.3]"
              key={skill.alt}
            >
              {React.cloneElement(skill.icon, { className: 'w-4 h-4' })}
              <span>{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
