import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface DraggableTileProps {
  id: string;
  children: React.ReactNode;
  className?: string; // Allow passing additional classes like column spans
}

const DraggableTile: React.FC<DraggableTileProps> = ({
  id,
  children,
  className,
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging, // Useful for styling the dragged item
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.8 : 1,
    zIndex: isDragging ? 10 : undefined, // Bring dragging item to front
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes} // Props for dnd-kit to control dragging
      {...listeners} // Event listeners for drag handles
      className={`bento-tile ${className || ''}`} // Combine base class with passed classes
    >
      {children}
    </div>
  );
};

export default DraggableTile;
