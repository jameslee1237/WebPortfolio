"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { experiences, TAB_DATA } from "@/constants";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

const About = () => {
    const [tab, setTab] = useState<"skills" | "education">("skills");
    const router = useRouter();

    const handleClick = (expId: string) => {
        router.push(`/experience/${expId}`);
    };

    const skillsData = TAB_DATA.find((t) => t.id === "skills");
    const educationData = TAB_DATA.find((t) => t.id === "education");

    return (
        <div id="Aboutsection" className="bg-zinc-900 py-20 md:py-28">
            <div className="w-[88%] max-w-6xl mx-auto">
                {/* Section header */}
                <div className="mb-14">
                    <p className="section-label">Who I am</p>
                    <h2 className="section-heading">
                        About{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                            Me
                        </span>
                    </h2>
                </div>

                {/* Bio + Experience */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
                    {/* Bio card */}
                    <div className="card p-8 flex flex-col justify-between">
                        <div>
                            <p className="section-label mb-4">Background</p>
                            <p className="text-zinc-300 leading-relaxed text-[1.05rem]">
                                I&apos;m a Frontend Engineer and AI Automation Specialist with a BSc in
                                Computer Science from University College London. I specialize in building
                                enterprise-grade Transportation Management Systems, scalable component
                                libraries, and autonomous AI coding pipelines.
                            </p>
                            <p className="text-zinc-400 leading-relaxed text-[1rem] mt-4">
                                At WemeetMobility I&apos;ve grown from engineer to technical owner — driving
                                the architectural direction of the frontend, leading refactoring sprints,
                                and designing end-to-end AI automation tooling from the ground up.
                            </p>
                        </div>
                        <div className="mt-8 grid grid-cols-2 gap-4">
                            {[
                                { value: "Seoul, Korea", label: "Location" },
                                { value: "UCL 2:1", label: "Education" },
                                { value: "IELTS 8.0", label: "English" },
                                { value: "+82 10-6816-3046", label: "Phone" },
                            ].map((item) => (
                                <div key={item.label} className="bg-zinc-800/60 rounded-xl p-4 border border-zinc-700/50">
                                    <p className="text-white font-semibold text-sm">{item.value}</p>
                                    <p className="text-zinc-500 text-xs mt-0.5">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Experience timeline */}
                    <div className="card p-8">
                        <p className="section-label mb-4">Career</p>
                        <h3 className="text-white text-xl font-bold mb-6">Experience</h3>
                        <VerticalTimeline layout="1-column-left" className="!p-0">
                            {experiences.map((experience) => (
                                <VerticalTimelineElement
                                    key={experience.id}
                                    className="vertical-timeline-element--work !m-0 !mb-4 !pb-0"
                                    contentStyle={{
                                        background: '#18181b',
                                        border: '1px solid #27272a',
                                        borderRadius: '12px',
                                        boxShadow: 'none',
                                        color: '#fff',
                                        padding: '16px 20px',
                                    }}
                                    contentArrowStyle={{ borderRight: '7px solid #27272a' }}
                                    date={experience.date}
                                    dateClassName="text-zinc-500 text-xs !pl-4 !pr-2"
                                    iconStyle={{ background: '#4f46e5', color: '#fff', boxShadow: '0 0 0 3px #312e81' }}
                                    iconClassName="hover:scale-110 cursor-pointer !w-8 !h-8 !ml-0 !shadow-none"
                                    icon={<WorkIcon style={{ fontSize: 16 }} />}
                                    iconOnClick={() => handleClick(experience.id)}
                                    visible={true}
                                >
                                    <h3 className="text-white font-semibold text-sm leading-snug">
                                        {experience.title}
                                    </h3>
                                    <p className="text-indigo-400 text-xs mt-1">{experience.summary}</p>
                                </VerticalTimelineElement>
                            ))}
                        </VerticalTimeline>
                        <p className="text-zinc-600 text-xs mt-4">Click an entry to see full details →</p>
                    </div>
                </div>

                {/* Skills + Education tabs */}
                <div className="card p-8">
                    <div className="flex gap-6 border-b border-zinc-800 mb-8">
                        {TAB_DATA.map((tabItem) => (
                            <button
                                key={tabItem.id}
                                onClick={() => setTab(tabItem.id as "skills" | "education")}
                                className={`pb-3 text-sm font-semibold transition-colors border-b-2 -mb-[1px] ${
                                    tab === tabItem.id
                                        ? "text-white border-indigo-400"
                                        : "text-zinc-500 border-transparent hover:text-zinc-300"
                                }`}
                            >
                                {tabItem.title}
                            </button>
                        ))}
                    </div>

                    {tab === "skills" && (
                        <div className="flex flex-wrap gap-2">
                            {skillsData?.content.map((skill) => (
                                <span key={skill} className="skill-badge">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    )}

                    {tab === "education" && (
                        <div className="flex flex-col gap-4">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-indigo-600/20 border border-indigo-500/30 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <SchoolIcon className="text-indigo-400" style={{ fontSize: 20 }} />
                                </div>
                                <div>
                                    {educationData?.content.map((item) => (
                                        <p key={item} className={`${
                                            item.startsWith("University") ? "text-white font-semibold text-base" : "text-zinc-400 text-sm mt-1"
                                        }`}>
                                            {item}
                                        </p>
                                    ))}
                                    <p className="text-zinc-500 text-sm mt-2">
                                        Machine Learning · AI & Neural Computing · Software Engineering · IoT & Embedded Systems
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default About;
