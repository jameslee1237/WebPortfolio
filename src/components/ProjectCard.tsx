"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const ProjectCard = ({
    project,
}: {
    project: {
        id: string;
        title: string;
        start_date: string;
        brief: string;
        skill: string[];
    }
}) => {
    const router = useRouter();

    return (
        <div
            onClick={() => router.push(`/project/${project.id}`)}
            className="group card p-6 cursor-pointer hover:-translate-y-1 hover:border-zinc-700 transition-all duration-300 w-full max-w-[400px]"
        >
            <div className="flex items-start justify-between mb-4">
                <h3 className="text-white font-bold text-lg group-hover:text-indigo-400 transition-colors duration-200">
                    {project.title}
                </h3>
                <ArrowOutwardIcon
                    className="text-zinc-600 group-hover:text-indigo-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0"
                    style={{ fontSize: 18 }}
                />
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                {project.brief}
            </p>

            <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                    {project.skill.map((skill) => (
                        <span
                            key={skill}
                            className="px-2.5 py-1 bg-zinc-800 rounded-md text-emerald-400 text-xs font-medium border border-zinc-700/50"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
                <span className="text-zinc-600 text-xs ml-4 flex-shrink-0">{project.start_date}</span>
            </div>
        </div>
    );
};

export default ProjectCard;
