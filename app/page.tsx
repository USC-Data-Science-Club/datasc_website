import AboutSection from "@/components/AboutSection";
import CurriculumSection from "@/components/CurriculumSection";
import ProjectsSection from "@/components/ProjectsSection";
import FaqSection from "@/components/FaqSection";
import EventsSection from "@/components/EventsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <AboutSection />
      <CurriculumSection />
      <EventsSection />
      <ProjectsSection />
      <FaqSection />
    </main>
  );
}
