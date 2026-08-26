import AboutSection from "@/components/AboutSection";
import CurriculumSection from "@/components/CurriculumSection";
import ProjectsSection from "@/components/ProjectsSection";
import EboardMembers from "@/components/EboardMembers";
import SocialsSection from "@/components/SocialsSection";
import FaqSection from "@/components/FaqSection";
import TimelineSection from "@/components/TimelineSection";
import GetInvolvedSection from "@/components/GetInvolvedSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <AboutSection />
      <CurriculumSection />
      <ProjectsSection />
      <EboardMembers />
      <SocialsSection />
      <FaqSection />
      <TimelineSection />
      <GetInvolvedSection />
    </main>
  );
}
