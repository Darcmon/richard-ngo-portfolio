import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import './App.css';

function App() {
  return (
    // Use CSS variables for background and text color
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--background)', color: 'var(--text)' }}>
      <Navbar />
      {/* Main content area using CSS Grid */}
      <main className="flex-grow p-4 md:p-8 lg:p-12">
        {/* Grid container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {/* Header taking more space initially */}
          <div className="md:col-span-2 lg:col-span-4 p-6 rounded-lg border border-[color:var(--tile-border)] bg-[color:var(--tile-bg)] shadow-md">
            <Header />
          </div>
          {/* Skills */}
          <div className="lg:col-span-2 p-6 rounded-lg border border-[color:var(--tile-border)] bg-[color:var(--tile-bg)] shadow-md">
            <Skills />
          </div>
          {/* Projects taking up remaining space */}
          <div className="md:col-span-2 lg:col-span-2 p-6 rounded-lg border border-[color:var(--tile-border)] bg-[color:var(--tile-bg)] shadow-md">
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
