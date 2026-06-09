"use client";
import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/constants';

const Project = () => {
    return (
        <div className="bg-zinc-950 py-20 md:py-28">
            <div className="w-[88%] max-w-6xl mx-auto">
                <div className="mb-14">
                    <p className="section-label">What I&apos;ve built</p>
                    <h2 className="section-heading">
                        Selected{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                            Projects
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Project;
