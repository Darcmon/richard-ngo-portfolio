import React from 'react';
import { CpuChipIcon } from '@heroicons/react/24/outline';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const navigation = [
  { name: 'About Me', href: '#', current: true },
  { name: 'Skills', href: '#', current: false },
  { name: 'Resume', href: '#', current: false },
  { name: 'Contact Me', href: '#', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <nav className="p-4 md:p-6 lg:p-8 bg-transparent">
      <div className="flex items-center justify-between xl:max-w-7xl m-auto">
        <a href="#" className="flex items-center text-[color:var(--text)]">
          <CpuChipIcon className="w-8 h-8 md:w-10 md:h-10 mr-2" />
          <span className="text-lg md:text-xl font-bold">Richard Ngo</span>
        </a>
        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex space-x-4">
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
          </div>
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
      </div>
    </nav>
  );
};

export default Navbar;
