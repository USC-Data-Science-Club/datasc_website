import Hero from "@/components/home/Hero";
import Wednesdays from "@/components/home/Wednesdays";
import Curriculum from "@/components/home/Curriculum";
import Projects from "@/components/home/Projects";
import Events from "@/components/home/Events";
import Board from "@/components/home/Board";
import Faq from "@/components/home/Faq";

export default function Home() {
  return (
    <main>
      <Hero />
      <Wednesdays />
      <Curriculum />
      <Projects />
      <Events />
      <Board />
      <Faq />
    </main>
  );
}
