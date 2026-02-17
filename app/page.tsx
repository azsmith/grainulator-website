import ParticleBackground from "@/components/ParticleBackground";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Screenshots from "@/components/Screenshots";
import HardwareAI from "@/components/HardwareAI";
import Specs from "@/components/Specs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Features />
        <Screenshots />
        <HardwareAI />
        <Specs />
      </main>
      <Footer />
    </>
  );
}
