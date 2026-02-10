 "use client";

import { useState } from "react";

export default function ProjectsSection() {
  const fall25Projects = [
    {
      image: "/hull_tactical.png",
      title: "Hull Tactical Kaggle Competition",
      description:
        "A Kaggle project focused on financial market prediction using cutting-edge ML techniques.",
      lead: "Ojas Nimase",
    },
    {
      image: "/viola.png",
      title: "VIOLA",
      description:
        "A streamlined software that helps users locate, listen, and license songs efficiently.",
      lead: "KT Kim",
    },
    {
      image: "/shade.jpeg",
      title: "Equity-Guided Urban Heat Mitigation",
      description:
        "A spatial-ML framework for prioritizing shade interventions in LA city.",
      lead: "Dominic Woetzel",
    },
    {
      image: "/spotify.png",
      title: "Spotify Song Recommender",
      description:
        "A Spotify-esque program that recommends music based on the user's interests.",
      lead: "Andrew Bae",
    },
  ];

  const spring26Projects: typeof fall25Projects = [
    {
      image: "/RNA.jpg",
      title: "Stanford RNA 3D Folding Part 2 Competition",
      description:
        "A Kaggle competition focused on predicting RNA 3D structures.",
      lead: "Dominic Woetzel",
    },
    {
      image: "/health.jpg",
      title: "Mapping LA Healthcare Access Gaps",
      description:
        "A spatial analytics project identifying gaps in LA healthcare access.",
      lead: "Olena Khetan",
    },
    {
      image: "/NBA.jpeg",
      title: "NBA Performance Prediction",
      description:
        "A sports analytics project forecasting NBA player performance.",
      lead: "Colin Quan Leung & Nolen Johnson",
    },
  ];
  const [semester, setSemester] = useState<"F25" | "S26">("S26");

  const currentProjects =
    semester === "S26" ? spring26Projects : fall25Projects;
  const semesterTitle = semester === "S26" ? "Spring 2026" : "Fall 2025";

  return (
    <section id="projects" className="min-h-screen px-6 pt-24 pb-28 flex flex-col">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-5xl font-semibold tracking-tight">Projects</h2>
        <p className="mt-4 text-sm uppercase tracking-[0.2em] text-white/70">
          What we've been up to
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {(["S26", "F25"] as const).map((label) => (
            <button
              key={label}
              type="button"
              onClick={() => setSemester(label)}
              className={`rounded-full border px-4 py-1 text-xs uppercase tracking-[0.2em] transition ${
                semester === label
                  ? "border-[#990000] text-[#FFC72C]"
                  : "border-white/20 text-white/60 hover:border-white/40"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="mt-8 h-px w-full bg-white/10" />

        <div className="mt-12">
          <h3 className="text-xl font-semibold tracking-wide text-white">
            {semesterTitle}
          </h3>
          <div className="mt-2 h-0.5 w-24 bg-gradient-to-r from-[#990000] to-[#FFC72C]" />
          <div className="mt-10 space-y-10">
            {currentProjects.map((project) => (
              <div
                key={project.title}
                className="grid gap-6 md:grid-cols-[180px_1fr]"
              >
              {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="h-44 w-44 rounded-2xl object-cover border border-white/10"
                />
              ) : (
                <div className="flex h-44 w-44 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xs uppercase tracking-[0.2em] text-white/50">
                  Image
                </div>
              )}
                <div>
                  <h4 className="text-xl font-semibold">{project.title}</h4>
                  <p className="mt-3 text-sm text-white/70 leading-relaxed">
                    {project.description}
                  </p>
                  <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/60">
                    Project Lead
                  </p>
                  <p className="text-sm text-white/80">{project.lead}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-auto pt-4 pb-2 flex justify-center">
        <a
          href="#eboard"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition hover:border-white/50 hover:text-white"
          aria-label="Scroll to Eboard section"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </a>
      </div>
    </section>
  );
}