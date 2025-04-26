import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import './App.css';

function App() {
  // State for theme mode (true = dark, false = light)
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Effect to toggle .light-mode class on body
  useEffect(() => {
    // Attempt to load saved preference from localStorage
    const savedMode = localStorage.getItem('theme');
    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    // Initialize based on localStorage > prefers-color-scheme > default (dark)
    const initialIsDark = savedMode ? savedMode === 'dark' : prefersDark;
    setIsDarkMode(initialIsDark);

    // Apply the correct class initially
    document.body.classList.toggle('light-mode', !initialIsDark);
    document.body.style.setProperty(
      'color-scheme',
      initialIsDark ? 'dark' : 'light',
    );
  }, []); // Run only once on mount

  // Function to toggle theme
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

  return (
    // Use CSS variables for background and text color
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: 'var(--background)', color: 'var(--text)' }}
    >
      {/* Pass theme state and toggle function to Navbar */}
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      {/* Main content area using CSS Grid */}
      <main className="flex-grow p-4 md:p-8 lg:p-12">
        {/* Grid container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {/* Header taking more space initially */}
          <div className="bento-tile md:col-span-2 lg:col-span-4">
            <Header />
          </div>
          {/* Skills (takes 1 column on lg screens) */}
          <div className="bento-tile lg:col-span-1">
            <Skills />
          </div>
          {/* Projects (takes 3 columns on lg screens) */}
          <div className="bento-tile md:col-span-2 lg:col-span-3">
            <Projects />
          </div>
          {/* Add more tiles here as needed */}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
