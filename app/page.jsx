import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrackShipment from "@/components/TrackShipment";
import Fleet from "@/components/Fleet";
import CoverageMap from "@/components/CoverageMap";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-ink-900 text-white overflow-x-hidden">
      <Header />
      <Hero />
      <TrackShipment />
      <Fleet />
      <CoverageMap />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
