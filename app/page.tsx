import Hero from "@/components/Hero";
import About from "@/components/About";
import Achievement from "@/components/Achievement";
import Involvement from "@/components/Involvement";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portofolio";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="bg-[#a8c8f0] min-h-screen py-0">
      <div className="max-w-full mx-auto space-y-8">
        <Sidebar />
        <Hero />
        <About />
        <Achievement />
        <Involvement />
        <Skills />
        <Portfolio />
      </div>
    </main>
  );
}