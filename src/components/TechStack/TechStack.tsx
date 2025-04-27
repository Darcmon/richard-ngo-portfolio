import { useState } from 'react';
import { FaNode, FaJs, FaGitAlt, FaFigma, FaSass } from 'react-icons/fa6';
import { BiLogoTypescript, BiLogoFirebase } from 'react-icons/bi';
import { SiMysql, SiTailwindcss, SiExpress, SiReact } from 'react-icons/si';
import DraggableSkillItem from './DraggableSkillItem';

// Import dnd-kit components
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  horizontalListSortingStrategy,
} from '@dnd-kit/sortable';

// Define the skill structure if needed for state later
interface Skill {
  id: string; // Use 'alt' as a unique ID for DnD
  name: string;
  href: string;
  alt: string;
  icon: JSX.Element;
}

// Initial skills data
const initialSkillsData: Skill[] = [
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
  const [skills, setSkills] = useState(initialSkillsData);

  // dnd-kit sensors setup for skills list
  const sensors = useSensors(
    useSensor(PointerSensor, {
      // Require the mouse to move by 10 pixels before initiating
      // dragging; this is useful for preventing accidental drags when
      // clicking on links or buttons within the item.
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  // dnd-kit drag end handler for skills list
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setSkills((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 border-b border-[color:var(--tile-border)] pb-2">
        Tech Stack
      </h3>
      {/* Wrap list with DndContext and SortableContext */}
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter} // Or closestCorners
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={skills.map((skill) => skill.id)} // Pass array of IDs
          strategy={horizontalListSortingStrategy} // Strategy for horizontal/wrapping lists
        >
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <DraggableSkillItem
                key={skill.id}
                id={skill.id}
                name={skill.name}
                icon={skill.icon}
              />
            ))}
          </ul>
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default TechStack;
