import { FaNode, FaJs, FaGitAlt, FaFigma, FaSass } from 'react-icons/fa6';
import { BiLogoTypescript, BiLogoFirebase } from 'react-icons/bi';
import { SiMysql, SiTailwindcss, SiExpress, SiReact } from 'react-icons/si';

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
    <div className="flex flex-wrap p-8 gap-4 justify-center xl:max-w-7xl m-auto">
      <div className="flex sm:w-full md:w-2/5 bg-cyan-600 p-8 rounded-md">
        <p>
          I've worked over 6 years in the mental health service industry in
          several roles across many populations. I am a person who can
          empathize, listen, and provide service to anyone in need. Working in
          Toronto through these years has allowed me an opportunity to share the
          knowledge and skills I acquired from school. I wouldn't trade that
          experience for anything.
          <br />
          <br />
          In my most recent role, I earned a chance to use my skills around
          audio and visual design to assist the company communicate with
          consumers, donors, and the community over social media and with a
          podcast. It was a truly unique experience as all of these demands were
          met with the help of mental health consumers as well.
          <br />
          <br />
          Over the pandemic, I decided I wanted to hone my skills with
          technology and try something new. I learned how to code using
          JavaScript, Python, React.js and many other tools. The guidance of
          friends and family allowed me to see the talent I have for programming
          and how I may be able to use what I learned over the years into a new
          field.
          <br />
          <br />I left mental health work in the fall of 2022 in hopes of
          refining my skills and building a portfolio to this new goal. I'm
          fortunate to be learning now at BrainStation and working with
          like-minded individuals towards the same achivement!
        </p>
      </div>
      <div className="h-min sm:w-full md:w-2/5 bg-zinc-950 p-8 rounded-md">
        <ul className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li
              className="flex flex-wrap h-10 rounded-md p-2 gap-2 justify-center bg-slate-500"
              key={skill.alt}
            >
              {skill.icon}
              <p>{skill.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
