import { CpuChipIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'About Me', href: '#', current: true },
  { name: 'Skills', href: '#', current: false },
  { name: 'Resume', href: '#', current: false },
  { name: 'Contact Me', href: '#', current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  return (
    <nav className="p-10 bg-slate-500">
      <div className="flex items-center justify-between xl:max-w-7xl m-auto">
        <a href="#">
          <CpuChipIcon className="w-12" />
        </a>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? 'bg-sky-400 text-black'
                    : 'text-gray-300 hover:bg-sky-200 hover:text-white',
                  'rounded-md px-3 py-2 text-sm font-medium',
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
