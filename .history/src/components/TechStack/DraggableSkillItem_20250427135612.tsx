import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface DraggableSkillItemProps {
  id: string;
  name: string;
  icon: JSX.Element;
}

const DraggableSkillItem: React.FC<DraggableSkillItemProps> = ({
  id,
  name,
  icon,
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    cursor: 'grab',
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="flex items-center h-8 rounded-md px-3 py-1 gap-2 justify-center bg-gray-500/[.15] border border-gray-500/[.3] text-xs font-medium transition-colors hover:bg-gray-500/[.3]"
    >
      {React.cloneElement(icon, { className: 'w-4 h-4 flex-shrink-0' })}
      <span>{name}</span>
    </li>
  );
};

export default DraggableSkillItem;
