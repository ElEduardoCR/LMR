import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Fleet from "@/components/Fleet";
import CoverageMap from "@/components/CoverageMap";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white text-ink-900 overflow-x-hidden">
      <Header />
      <Hero />
      <Mission />
      <Fleet />
      <CoverageMap />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
