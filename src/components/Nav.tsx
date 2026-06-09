"use client";
import React from "react";
import MenuIcon from '@mui/icons-material/Menu';

interface Props {
    openNav: () => void;
}

const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#Aboutsection" },
    { label: "Projects", href: "#Projectsection" },
    { label: "Contact", href: "#Contactsection" },
];

const Nav = ({ openNav }: Props) => {
    return (
        <nav className="w-full Nav top-0 h-[70px] bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50">
            <div className="flex items-center justify-between w-[88%] max-w-6xl mx-auto h-full">
                <a href="#" className="flex items-center gap-1">
                    <span className="text-[22px] font-bold text-white tracking-tight">
                        jae
                    </span>
                    <span className="text-[22px] font-bold text-indigo-400 tracking-tight">
                        .dev
                    </span>
                </a>
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <div key={link.label} className="nav-link">
                            <a href={link.href}>{link.label}</a>
                        </div>
                    ))}
                </div>
                <button
                    onClick={openNav}
                    className="md:hidden text-zinc-400 hover:text-white transition-colors"
                    aria-label="Open navigation"
                >
                    <MenuIcon />
                </button>
            </div>
        </nav>
    );
};

export default Nav;
