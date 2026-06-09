"use client";
import React from 'react';
import { experienceDetails } from '@/constants';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import BusinessIcon from '@mui/icons-material/Business';

export default function ExperienceDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const detail = experienceDetails.find((t) => t.id === params.id);

  if (!detail) {
    return (
      <div className="text-zinc-400 text-2xl text-center font-semibold mt-20">
        Experience not found
      </div>
    );
  }

  const { title, description, Date, Hire } = detail;

  return (
    <div className="w-[88%] max-w-3xl mx-auto py-16">
      <div className="mb-10">
        <p className="section-label mb-3">Experience Detail</p>
        <h1 className="text-white text-[2rem] md:text-[2.6rem] font-bold leading-tight mb-2">
          {title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 mt-4">
          <span className="flex items-center gap-2 text-indigo-400 text-sm font-medium">
            <BusinessIcon style={{ fontSize: 16 }} />
            {Hire}
          </span>
          <span className="flex items-center gap-2 text-zinc-500 text-sm">
            <CalendarTodayIcon style={{ fontSize: 14 }} />
            {Date}
          </span>
        </div>
      </div>

      <div className="card p-8">
        <h2 className="text-zinc-400 text-xs font-mono uppercase tracking-widest mb-6">
          Responsibilities
        </h2>
        <ul className="flex flex-col gap-4">
          {description.map((item, index) => (
            <li key={index} className="flex items-start gap-4">
              <CheckCircleOutlineIcon
                className="text-emerald-400 flex-shrink-0 mt-0.5"
                style={{ fontSize: 18 }}
              />
              <p className="text-zinc-300 leading-relaxed text-[0.95rem]">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
