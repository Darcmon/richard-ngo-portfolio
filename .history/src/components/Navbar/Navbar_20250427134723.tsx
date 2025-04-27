import React, { useState } from 'react';
import { CpuChipIcon } from '@heroicons/react/24/outline';
import {
  SunIcon,
  MoonIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/solid';

const navigation = [
  { name: 'About Me', href: '#about', current: false },
  { name: 'Skills', href: '#skills', current: false },
  { name: 'Projects', href: '#projects', current: false },
  { name: 'Resume', href: '#resume', current: false },
  { name: 'Contact Me', href: '#contact', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="p-4 md:p-6 lg:p-8 bg-transparent relative z-50">
      <div className="flex items-center justify-between xl:max-w-7xl m-auto">
        <a href="#" className="flex items-center text-[color:var(--text)]">
          <CpuChipIcon className="w-8 h-8 md:w-10 md:h-10 mr-2" />
          <span className="text-lg md:text-xl font-bold">Richard Ngo</span>
        </a>
        <div className="hidden md:flex items-center space-x-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? 'bg-sky-500 text-white'
                  : 'text-[color:var(--text)] hover:bg-sky-700/[.2] hover:text-[color:var(--text)]',
                'rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150',
              )}
              aria-current={item.current ? 'page' : undefined}
            >
              {item.name}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md text-[color:var(--text)] hover:bg-gray-500/[.3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[color:var(--background)] focus:ring-white transition-colors duration-150"
            aria-label={
              isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'
            }
          >
            {isDarkMode ? (
              <SunIcon className="h-6 w-6" />
            ) : (
              <MoonIcon className="h-6 w-6" />
            )}
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleTheme}
            className="p-2 mr-2 rounded-md text-[color:var(--text)] hover:bg-gray-500/[.3]"
            aria-label={
              isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'
            }
          >
            {isDarkMode ? (
              <SunIcon className="h-6 w-6" />
            ) : (
              <MoonIcon className="h-6 w-6" />
            )}
          </button>
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-md text-[color:var(--text)] hover:bg-gray-500/[.3] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-label="Open main menu"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300 ease-in-out md:hidden ${
          isSidebarOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleSidebar}
        aria-hidden="true"
      ></div>
      <div
        className={`fixed top-0 right-0 h-full w-64 max-w-[80vw] bg-[color:var(--tile-bg)] shadow-xl z-50 p-6 flex flex-col transition-transform duration-300 ease-in-out md:hidden ${
          isSidebarOpen
            ? 'transform translate-x-0'
            : 'transform translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="sidebar-title"
      >
        <div className="flex items-center justify-between mb-6">
          <h2
            id="sidebar-title"
            className="text-lg font-semibold text-[color:var(--text)]"
          >
            Menu
          </h2>
          <button
            onClick={toggleSidebar}
            className="-mr-2 p-2 rounded-md text-[color:var(--text)] hover:bg-gray-500/[.3]"
            aria-label="Close menu"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col space-y-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={toggleSidebar}
              className={classNames(
                item.current
                  ? 'bg-sky-500 text-white'
                  : 'text-[color:var(--text)] hover:bg-sky-700/[.2]',
                'block rounded-md px-3 py-2 text-base font-medium transition-colors duration-150',
              )}
              aria-current={item.current ? 'page' : undefined}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
