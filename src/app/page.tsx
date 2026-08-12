import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { VideoStudio } from "@/components/VideoStudio";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center">
        <Hero />
        <Features />
        <Testimonials />
        <VideoStudio />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
