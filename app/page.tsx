import { TechStackRender } from "@/components/animation-render-motion";
import FadeIn from "@/components/fade-in";
import ParticlesBackground from "@/components/particles-bg";
import HomeSlider, { SliderNext, SliderPrev } from "@/components/home-slider";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Home = async () => {
  const heroPanel = (
    <main className="relative h-full z-10 container max-w-7xl mx-auto px-6 flex flex-col items-center justify-center overflow-hidden">
      <FadeIn>
        <section className="text-center mb-16">
          <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-[8px] font-medium mb-8 bg-background/50 backdrop-blur-sm border-primary/20 animate-pulse">
            🚀 3+ Years of Stressing with Programming
          </div>
          <h1 className="md:text-5xl text-2xl md:text-7xl font-bold tracking-tight md:mb-6 mb-4">
            Full-Stack <span className="text-[#4ADE80]">Developer</span>
            <span className="block text-lg md:text-4xl font-medium text-muted-foreground mt-4 max-w-4xl mx-auto leading-snug">
              Crafting Modern, Scalable & User-Friendly Digital Products
            </span>
          </h1>
          <p className="text-xs md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4 md:mb-10 md:mt-20 mt-4 tracking-tight leading-relaxed">
            I create modern websites that help businesses build trust, attract
            more customers, and strengthen their brand. By focusing on speed,
            user experience, and visibility, I help businesses stand out and
            make a better impression.
          </p>
          <TechStackRender />
          <SliderNext className="w-full flex items-center justify-end gap-2 mt-12 md:mt-20 text-xs hover:text-[#4ADE80] transition-colors cursor-pointer">
            About Hazim
            <ArrowRight className="text-muted-foreground" size={12} />
          </SliderNext>
        </section>
      </FadeIn>
    </main>
  );

  const aboutPanel = (
    <main className="relative h-full z-10 container max-w-7xl mx-auto px-6 flex flex-col items-center justify-center overflow-hidden">
      <FadeIn>
        <section className="text-center mb-12">
          <h2 className="md:text-5xl text-2xl md:text-7xl font-bold tracking-tight md:mb-6 mb-4">
            About <span className="text-[#4ADE80]">Me</span>
          </h2>
          <p className="text-xs md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4 md:mb-10 md:mt-20 mt-4 tracking-tight leading-relaxed">
            Placeholder — add your bio, background, story, or a photo here.
          </p>
          <SliderPrev className="w-full flex items-center justify-start gap-2 mb-8 text-xs hover:text-[#4ADE80] transition-colors cursor-pointer">
            <ArrowLeft className="text-muted-foreground" size={12} />
            Back
          </SliderPrev>
        </section>
      </FadeIn>
    </main>
  );

  return (
    <div className="relative w-full h-[calc(100dvh-4rem)] overflow-hidden bg-background flex flex-col">
      <ParticlesBackground />
      <HomeSlider first={heroPanel} second={aboutPanel} />
    </div>
  );
};

export default Home;
