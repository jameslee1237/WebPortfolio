"use client";
import React from "react";
import CloseIcon from '@mui/icons-material/Close';

interface Props {
    nav: boolean;
    closeNav: () => void;
}

const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#Aboutsection" },
    { label: "Projects", href: "#Projectsection" },
    { label: "Contact", href: "#Contactsection" },
];

const MobileNav = ({ nav, closeNav }: Props) => {
    const navAnimation = nav ? "translate-x-100" : "translate-x-[100%]";

    return (
        <div className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[10000] bg-zinc-950`}>
            <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                {navLinks.map((link) => (
                    <div key={link.label} className="nav-link-mobile">
                        <a href={link.href} onClick={closeNav}>{link.label}</a>
                    </div>
                ))}
            </div>
            <button
                onClick={closeNav}
                className="absolute top-8 right-8 text-zinc-400 hover:text-white transition-colors"
                aria-label="Close navigation"
            >
                <CloseIcon fontSize="large" />
            </button>
        </div>
    );
};

export default MobileNav;
