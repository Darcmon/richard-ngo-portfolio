import React from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { CpuChipIcon } from "@heroicons/react/24/outline";

type Props = {};

const navigation = [
  { name: "About Me", href: "#", current: true },
  { name: "Skills", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Contact Me", href: "#", current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = (props: Props) => {
  return (
    <nav className="p-10 bg-slate-500 flex items-center justify-between">
      <CpuChipIcon className="w-12" />
      <div className="hidden sm:ml-6 sm:block">
        <div className="flex space-x-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-sky-400 text-black"
                  : "text-gray-300 hover:bg-sky-200 hover:text-white",
                "rounded-md px-3 py-2 text-sm font-medium",
              )}
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
