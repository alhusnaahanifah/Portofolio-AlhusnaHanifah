import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExp from "@/components/workexp";
import Achievement from "@/components/Achievement";
import Involvement from "@/components/Involvement";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portofolio";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="bg-[#081124] min-h-screen py-0">
      <div className="max-w-full mx-auto space-y-8">
        <Sidebar />
        <Hero />
        <About />
        <Portfolio />
        <WorkExp />
        <Achievement />
        <Involvement />
        <Skills />
        <Contact />
      </div>
    </main>
  );
}