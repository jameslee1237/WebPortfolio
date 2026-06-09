"use client";
import React, { useEffect, useState } from "react";
import { projectDetails } from "@/constants";
import Inline from "yet-another-react-lightbox/plugins/inline";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Link from "next/link";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const projectDetail = projectDetails.find((t) => t.id === params.id);

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [navLink, setNavLink] = useState<string | null>(null);

  useEffect(() => {
    if (projectDetail?.link && projectDetail.link !== "") {
      setNavLink(projectDetail.link);
    }
  }, [projectDetail]);

  if (!projectDetail) {
    return (
      <div className="text-zinc-400 text-2xl text-center font-semibold mt-20">
        Project not found
      </div>
    );
  }

  const { title, description, slides, FI } = projectDetail;
  const hasSlides = slides && slides.length > 0;

  const toggleOpen = (state: boolean) => () => setOpen(state);
  const updateIndex = ({ index: current }: { index: number }) => setIndex(current);

  return (
    <div className="w-[88%] max-w-4xl mx-auto py-16">
      {/* Header */}
      <div className="mb-10">
        <p className="section-label mb-3">Project Detail</p>
        {navLink ? (
          <Link href={navLink} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2">
            <h1 className="text-white text-[2rem] md:text-[2.6rem] font-bold leading-tight group-hover:text-indigo-400 transition-colors">
              {title}
            </h1>
            <ArrowOutwardIcon className="text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform mt-2" />
          </Link>
        ) : (
          <h1 className="text-white text-[2rem] md:text-[2.6rem] font-bold leading-tight">
            {title}
          </h1>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Screenshots */}
        <div className="card p-6">
          <h2 className="section-label mb-4">Screenshots</h2>
          {hasSlides ? (
            <>
              <Lightbox
                index={index}
                slides={slides}
                plugins={[Inline]}
                on={{ view: updateIndex, click: toggleOpen(true) }}
                carousel={{ padding: 0, spacing: 0, imageFit: "contain" }}
                inline={{
                  style: {
                    width: "100%",
                    maxHeight: "320px",
                    aspectRatio: "3/2",
                    borderRadius: "8px",
                    overflow: "hidden",
                  },
                }}
              />
              <Lightbox
                open={open}
                close={toggleOpen(false)}
                index={index}
                slides={slides}
                on={{ view: updateIndex }}
                animation={{ fade: 0 }}
                controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
              />
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-48 text-zinc-600 gap-3 bg-zinc-800/40 rounded-xl border border-zinc-700/30">
              <ImageNotSupportedIcon style={{ fontSize: 40 }} />
              <p className="text-sm">No screenshots available</p>
            </div>
          )}
        </div>

        {/* Details */}
        <div className="flex flex-col gap-6">
          <div className="card p-6">
            <h2 className="section-label mb-3">Overview</h2>
            <p className="text-zinc-300 leading-relaxed text-[0.95rem]">{description}</p>
          </div>
          <div className="card p-6">
            <h2 className="section-label mb-3">Future Improvements</h2>
            <p className="text-zinc-400 leading-relaxed text-[0.95rem]">{FI}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
