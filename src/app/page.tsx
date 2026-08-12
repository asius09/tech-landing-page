import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Marquee } from "@/components/Marquee";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { VideoStudio } from "@/components/VideoStudio";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1 overflow-hidden">
        <Hero />
        <Benefits />
        <BeforeAfter />
        <Marquee />
        <HowItWorks />
        <Testimonials />
        <VideoStudio />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
