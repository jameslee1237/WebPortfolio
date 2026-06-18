"use client";
import React, { useState, useRef, useEffect } from "react";
import Texteffect from "./Texteffect";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from "next/image";

const downloadCV = (lang: 'EN' | 'KR') => {
    const link = document.createElement('a');
    link.href = lang === 'EN' ? '/CV_EN.pdf' : '/CV_KR.pdf';
    link.download = `Jae_Yong_Lee_CV_${lang}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

const Hero = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="bg-zinc-950 min-h-[calc(100vh-70px)] flex items-center relative overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-indigo-600/6 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-600/4 rounded-full blur-3xl pointer-events-none" />

            <div className="w-[88%] max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 relative z-10">
                <div className="animate-fade-up">
                    <p className="section-label mb-4">Available for opportunities</p>
                    <h1 className="text-[3.2rem] md:text-[4.5rem] lg:text-[5rem] font-extrabold text-white leading-[1.05] tracking-tight mb-4">
                        JAE YONG
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                            LEE
                        </span>
                    </h1>

                    <Texteffect />

                    <p className="mt-6 text-zinc-400 text-[1.05rem] leading-relaxed max-w-lg">
                        Frontend Engineer & AI Automation Specialist with a BSc in Computer Science from
                        UCL. I build enterprise-grade TMS systems and autonomous AI coding pipelines —
                        accounting for{" "}
                        <span className="text-white font-medium">63.6% of primary repo commits</span>{" "}
                        and{" "}
                        <span className="text-white font-medium">78.1% of all AI automation commits</span>{" "}
                        at WemeetMobility.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                        <div className="relative" ref={dropdownRef}>
                            <div className="flex rounded-lg overflow-hidden shadow-lg shadow-indigo-600/20">
                                <button
                                    onClick={() => downloadCV('EN')}
                                    className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all duration-200"
                                >
                                    <span>Download CV</span>
                                    <DownloadForOfflineIcon fontSize="small" />
                                </button>
                                <button
                                    onClick={() => setDropdownOpen(o => !o)}
                                    className="px-2 py-3 bg-indigo-700 hover:bg-indigo-600 text-white border-l border-indigo-500 transition-all duration-200"
                                    aria-label="Choose language"
                                >
                                    <KeyboardArrowDownIcon fontSize="small" />
                                </button>
                            </div>
                            {dropdownOpen && (
                                <div className="absolute left-0 mt-1 w-full min-w-[160px] bg-zinc-900 border border-zinc-700 rounded-lg shadow-xl z-50 overflow-hidden">
                                    <button
                                        onClick={() => { downloadCV('EN'); setDropdownOpen(false); }}
                                        className="w-full text-left px-4 py-2.5 text-sm text-zinc-200 hover:bg-zinc-800 transition-colors"
                                    >
                                        English
                                    </button>
                                    <button
                                        onClick={() => { downloadCV('KR'); setDropdownOpen(false); }}
                                        className="w-full text-left px-4 py-2.5 text-sm text-zinc-200 hover:bg-zinc-800 transition-colors"
                                    >
                                        Korean
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className="flex items-center gap-3">
                            <a
                                href="https://www.linkedin.com/in/jaeyong-james/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-500 hover:text-indigo-400 transition-colors duration-200"
                                aria-label="LinkedIn"
                            >
                                <LinkedInIcon fontSize="large" />
                            </a>
                            <a
                                href="https://github.com/jameslee1237"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-500 hover:text-indigo-400 transition-colors duration-200"
                                aria-label="GitHub"
                            >
                                <GitHubIcon fontSize="large" />
                            </a>
                        </div>
                    </div>

                    {/* Stats row */}
                    <div className="mt-10 flex flex-wrap gap-6">
                        {[
                            { value: "3,322+", label: "Commits" },
                            { value: "10,500+", label: "File touches" },
                            { value: "78.1%", label: "AI automation" },
                        ].map((stat) => (
                            <div key={stat.label} className="flex flex-col">
                                <span className="text-2xl font-bold text-white">{stat.value}</span>
                                <span className="text-xs text-zinc-500 uppercase tracking-widest mt-0.5">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="hidden lg:flex justify-center items-center relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-violet-600/10 rounded-3xl blur-2xl" />
                    <Image
                        src="/HeroImage.png"
                        alt="Jae Yong Lee"
                        width={480}
                        height={480}
                        style={{ objectFit: "contain" }}
                        className="relative z-10 drop-shadow-2xl"
                        priority
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
