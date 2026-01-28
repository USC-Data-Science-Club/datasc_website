import AboutSection from "@/components/AboutSection";
import CurriculumSection from "@/components/CurriculumSection";
import ProjectsSection from "@/components/ProjectsSection";
import FaqSection from "@/components/FaqSection";
import EboardMembers from "@/components/EboardMembers";
import GetInvolvedSection from "@/components/GetInvolvedSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <AboutSection />
      <CurriculumSection />
      <ProjectsSection />
      <EboardMembers />
      <FaqSection />
      <GetInvolvedSection />
    </main>
  );
}