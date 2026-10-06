"use client";

import { useState } from "react";
import { projects, semesters, type Semester } from "@/lib/content";

const showcasePhotos = [
  { src: "/Events/team-mayo-strip-ai.jpg", alt: "A project team presenting Mayo Clinic STRIP AI" },
  { src: "/Events/team-healthcare-access.jpg", alt: "A project team presenting Healthcare Access in Los Angeles" },
  { src: "/Events/team-presentation.jpg", alt: "A project team after their presentation" },
];

export default function Projects() {
  const [semester, setSemester] = useState<Semester>("F26");
  const current = semesters.find((s) => s.id === semester)!;

  return (
    <section id="projects" className="mt-[104px] scroll-mt-6">
      <div className="mx-auto max-w-[1180px] px-7">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="font-display text-3xl font-bold tracking-[-0.015em]">Project teams</h2>
          <div className="flex flex-wrap items-center gap-2 text-sm" aria-label="Semester">
            {semesters.map((s, i) => (
              <span key={s.id} className="flex items-center gap-2">
                {i > 0 && <span className="text-mist" aria-hidden="true">/</span>}
                <button
                  type="button"
                  onClick={() => setSemester(s.id)}
                  aria-pressed={semester === s.id}
                  className={
                    semester === s.id
                      ? "border-b-2 border-teal font-medium text-slate"
                      : "text-gray hover:text-slate"
                  }
                >
                  {s.label}
                </button>
              </span>
            ))}
          </div>
        </div>
        <p className="mt-2.5 max-w-[640px] text-gray">{current.blurb}</p>

        <div className="mt-8 border-t-2 border-slate">
          {projects[semester].map((p) => (
            <div key={p.title} className="flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-mist py-[18px]">
              {p.image ? (
                <img src={p.image} alt="" className="h-[76px] w-[76px] flex-[0_0_76px] object-cover" />
              ) : (
                <div className="h-[76px] w-[76px] flex-[0_0_76px] bg-teal-light" aria-hidden="true" />
              )}
              <div className="min-w-0 flex-[999_1_380px]">
                <p className="font-display text-[19px] font-semibold">{p.title}</p>
                <p className="mt-0.5 text-sm text-gray">{p.description}</p>
              </div>
              <span className="flex-[1_1_200px] text-sm">{p.lead}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
          {showcasePhotos.map((photo) => (
            <img key={photo.src} src={photo.src} alt={photo.alt} className="block h-[220px] w-full rounded-sm object-cover" />
          ))}
        </div>
        <p className="mt-2.5 text-xs text-gray">Spring 2026 teams after their final presentations.</p>
      </div>
    </section>
  );
}
