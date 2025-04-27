import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import AboutMe from './components/AboutMe/AboutMe';
import TechStack from './components/TechStack/TechStack';
import DraggableTile from './components/DraggableTile/DraggableTile';
import './App.css';

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
  rectSortingStrategy, // Strategy for grids
} from '@dnd-kit/sortable';

// Define the structure for tile data
interface TileItem {
  id: string;
  component: React.ReactNode;
  className: string; // Store responsive classes here
}

// Updated initial tiles configuration
const initialTiles: TileItem[] = [
  {
    id: 'header',
    component: <Header />,
    className: 'md:col-span-2 lg:col-span-4',
  },
  { id: 'about', component: <AboutMe />, className: 'lg:col-span-2' }, // New AboutMe tile
  { id: 'tech', component: <TechStack />, className: 'lg:col-span-2' }, // New TechStack tile
  {
    id: 'projects',
    component: <Projects />,
    className: 'md:col-span-2 lg:col-span-4',
  }, // Projects on next row
];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [tiles, setTiles] = useState<TileItem[]>(initialTiles);

  // Effect for theme initialization (remains the same)
  useEffect(() => {
    const savedMode = localStorage.getItem('theme');
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)')
      .matches;
    const initialIsDark = savedMode ? savedMode === 'dark' : prefersDark;
    setIsDarkMode(initialIsDark);
    document.body.classList.toggle('light-mode', !initialIsDark);
    document.body.style.setProperty(
      'color-scheme',
      initialIsDark ? 'dark' : 'light',
    );
  }, []);

  // Theme toggle function (remains the same)
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      document.body.classList.toggle('light-mode', !newMode);
      document.body.style.setProperty(
        'color-scheme',
        newMode ? 'dark' : 'light',
      );
      return newMode;
    });
  };

  // dnd-kit sensors setup
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  // dnd-kit drag end handler
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setTiles((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: 'var(--background)', color: 'var(--text)' }}
    >
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main className="flex-grow p-4 md:p-8 lg:p-12">
        {/* Wrap grid with DndContext and SortableContext */}
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={tiles.map((tile) => tile.id)} // Pass array of IDs
            strategy={rectSortingStrategy} // Use grid strategy
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {/* Map over tiles state to render DraggableTile components */}
              {tiles.map((tile) => (
                <DraggableTile
                  key={tile.id}
                  id={tile.id}
                  className={tile.className}
                >
                  {tile.component}
                </DraggableTile>
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </main>
      <Footer />
    </div>
  );
}

export default App;
