import React from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

type Props = {}

const navigation = [
    { name: 'About Me', href: '#', current: true },
    { name: 'Skills', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Contact Me', href: '#', current: false },
]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = (props: Props) => {
    return (
        
        <div>Navbar</div>
    )
}

export default Navbar