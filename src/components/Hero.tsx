"use client";
import React from "react";
import Texteffect from "./Texteffect";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from "next/image";

const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = "/CV.pdf";
    link.download = 'CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

const Hero = () => {
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
                        <button
                            onClick={handleDownloadCV}
                            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-indigo-600/20"
                        >
                            <span>Download CV</span>
                            <DownloadForOfflineIcon fontSize="small" />
                        </button>

                        <div className="flex items-center gap-3">
                            <a
                                href="https://linkedin.com/in/jaeyong-lee"
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
