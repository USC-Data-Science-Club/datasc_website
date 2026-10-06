"use client";

import { useState } from "react";
import GridBackdrop from "./ui/GridBackdrop";
import ScrollArrow from "./ui/ScrollArrow";

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
  const fall26Projects: typeof fall25Projects = [
    {
      image: "/projects/f26-aaron.jpg",
      title: "Sentiment Analysis on COVID-19 Over the Years",
      description:
        "Tracks how social-media sentiment, topics, and skepticism around COVID-19 shifted across lockdowns, vaccines, variants, and reopenings.",
      lead: "Aaron Lo",
    },
    {
      image: "/projects/f26-abhishek.jpg",
      title: "GridShift NYC",
      description:
        "Forecasts taxi and rideshare demand across NYC taxi zones, with interactive dashboards and an AI-driven web platform.",
      lead: "Abhishek Sarepaka",
    },
    {
      image: "/projects/f26-allegra.jpg",
      title: "Predicting Deterioration in Bilateral Relations",
      description:
        "Looks for early warning signals in diplomatic, economic, and security interactions before relations between countries break down.",
      lead: "Allegra Chen",
    },
    {
      image: "/projects/f26-ananya.jpg",
      title: "Influence of News Headlines on the Stock Market",
      description:
        "Scores the sentiment of news headlines about public companies and measures how it relates to subsequent stock price changes.",
      lead: "Ananya Hari",
    },
    {
      image: "/projects/f26-dominic.jpg",
      title: "UMUD Challenge: Muscle Architecture in Ultrasound",
      description:
        "A Kaggle competition to automatically measure muscle thickness, pennation angle, and fascicle length from ultrasound video.",
      lead: "Dominic Woetzel",
    },
    {
      image: "/projects/f26-edison.jpg",
      title: "Business Marketing Strategy for USC Viterbi",
      description: "A data-driven marketing strategy project for USC Viterbi.",
      lead: "Edison Zhong",
    },
    {
      image: "/projects/f26-ian.jpg",
      title: "SafeShift: Workplace Injury Early Warning",
      description:
        "Forecasts workplace injury burden from U.S. occupational safety data and classifies incident narratives to support prevention.",
      lead: "Ian Xie",
    },
    {
      image: "/projects/f26-kyle.jpg",
      title: "Diabetes Risk Prediction",
      description:
        "Builds interpretable models on 253,000+ CDC survey responses to predict diabetes risk and identify its strongest predictors.",
      lead: "Kyle Matsui",
    },
    {
      image: "/projects/f26-trisha.jpg",
      title: "Group-Based Restaurant Recommender",
      description:
        "Recommends restaurants that fit a whole group's combined taste, using Yelp review embeddings and an interactive dashboard.",
      lead: "Trisha Tjokrosapoetro",
    },
  ];
  const [semester, setSemester] = useState<"F25" | "S26" | "F26">("F26");

  const currentProjects =
    semester === "F26" ? fall26Projects : semester === "S26" ? spring26Projects : fall25Projects;
  const semesterTitle =
    semester === "S26" ? "Spring 2026" : semester === "F25" ? "Fall 2025" : "Fall 2026";
  const isComingSoon = currentProjects.length === 0;

  return (
    <section id="projects" className="relative flex min-h-screen flex-col px-6 pt-24 pb-28">
      <GridBackdrop />
      <div className="relative mx-auto w-full max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-gold">
          {"// what we've been up to"}
        </p>
        <h2 className="mt-2 text-4xl font-semibold">Projects</h2>
        <div className="mt-6 inline-flex gap-1 rounded-lg border border-ink/10 bg-ink/3 p-1">
          {(["F26", "S26", "F25"] as const).map((label) => (
            <button
              key={label}
              type="button"
              onClick={() => setSemester(label)}
              className={`rounded-md px-4 py-1.5 font-mono text-xs tracking-[0.1em] transition ${
                semester === label
                  ? "bg-gradient-to-br from-maroon to-maroon-dark text-gold-raw shadow-[0_0_16px_rgba(153,0,0,0.5)]"
                  : "text-ink/50 hover:text-ink/80"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold tracking-wide">{semesterTitle}</h3>
          <div className="mt-2 h-0.5 w-24 bg-gradient-to-r from-maroon to-gold-raw" />
          {isComingSoon ? (
            <div className="mt-10 flex flex-col items-center justify-center rounded-xl border border-dashed border-ink/15 bg-ink/[0.02] py-20 text-center">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink/50">
                Coming Soon
              </p>
              <p className="mt-3 max-w-sm text-sm text-ink/60">
                Projects for {semesterTitle} haven&apos;t been announced yet. Check back later!
              </p>
            </div>
          ) : (
          <div className="mt-10 space-y-5">
            {currentProjects.map((project) => (
              <div
                key={project.title}
                className="grid gap-6 rounded-xl border border-ink/8 bg-ink/[0.02] p-5 md:grid-cols-[180px_1fr]"
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-44 w-44 rounded-lg border border-gold-raw/25 object-cover"
                  />
                ) : (
                  <div className="flex h-44 w-44 items-center justify-center rounded-lg border border-gold-raw/25 bg-ink/5">
                    <img src="/logo.png" alt="" className="h-20 w-20 object-contain opacity-60" />
                  </div>
                )}
                <div>
                  <h4 className="text-xl font-semibold">{project.title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">
                    {project.description}
                  </p>
                  <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.1em] text-ink/45">
                    LEAD ›
                  </p>
                  <p className="text-sm text-ink/85">{project.lead}</p>
                </div>
              </div>
            ))}
          </div>
          )}
        </div>
      </div>
      <div className="relative mt-auto flex justify-center pb-2 pt-4">
        <ScrollArrow href="#eboard" label="Scroll to Eboard section" />
      </div>
    </section>
  );
}
