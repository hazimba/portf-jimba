import { TechStackRender } from "@/components/animation-render-motion";
import FadeIn from "@/components/fade-in";
import ParticlesBackground from "@/components/particles-bg";
import HomeSlider, { SliderNext, SliderPrev } from "@/components/home-slider";
import { ArrowLeft, ArrowRight, Mail, ExternalLink, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
    <main className="relative h-full z-10 container max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-8 flex flex-col overflow-hidden">
      <FadeIn>
        <div className="flex flex-col gap-3 md:gap-4">
          <div className="flex items-center justify-between">
            <SliderPrev className="flex items-center gap-2 text-xs text-muted-foreground hover:text-[#4ADE80] transition-colors cursor-pointer">
              <ArrowLeft size={12} />
              Back
            </SliderPrev>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#4ADE80]/40 bg-[#4ADE80]/10 px-2.5 py-1 text-[10px] font-medium text-[#4ADE80]">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
              Open to opportunities
            </div>
          </div>

          <div className="grid grid-cols-[1fr_auto] gap-4 items-start">
            <div className="min-w-0">
              <h2 className="text-2xl md:text-5xl font-bold tracking-tight">
                M. Hazim <span className="text-[#4ADE80]">Abu Bakar</span>
              </h2>
              <p className="text-xs md:text-sm font-medium text-muted-foreground mt-1">
                Full-Stack Developer · React · Node.js · Tailwind · MongoDB
              </p>
              <p className="text-[11px] md:text-sm text-muted-foreground mt-2 md:mt-3 leading-relaxed max-w-2xl">
                Self-taught developer with 3+ years shipping production web
                apps across logistics, travel, and e-commerce. Prior 2 years
                as a Development Engineer (Honda Civic 2022 QAV lead)
                sharpened my delivery discipline and cross-team collaboration.
              </p>
            </div>
            <div className="relative w-24 h-28 md:w-44 md:h-52 shrink-0">
              <div className="absolute -inset-2 bg-[#4ADE80]/20 blur-2xl rounded-full" />
              <div className="relative w-full h-full overflow-hidden rounded-[62%_38%_46%_54%/48%_56%_44%_52%] border-2 border-[#4ADE80]/40 shadow-xl rotate-3">
                <Image
                  src="/image.png"
                  alt="M. Hazim Abu Bakar"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 96px, 176px"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
            {[
              { label: "Experience", value: "3+ yrs" },
              { label: "Companies", value: "4" },
              { label: "QA Cycle Cut", value: "80%" },
              { label: "Based in", value: "Klang, MY" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-lg border bg-card/50 backdrop-blur-sm px-3 py-2"
              >
                <p className="text-[9px] md:text-[10px] uppercase text-muted-foreground tracking-wider">
                  {s.label}
                </p>
                <p className="text-sm md:text-xl font-bold mt-0.5">
                  {s.value}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
            <div className="rounded-lg border bg-card/50 backdrop-blur-sm p-3">
              <p className="text-[9px] md:text-[10px] uppercase text-muted-foreground tracking-wider mb-2">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "React.js",
                  "Next.js",
                  "Vue.js",
                  "TypeScript",
                  "Node.js",
                  "MongoDB",
                  "Supabase",
                  "Tailwind",
                  "Ant Design",
                  "Playwright",
                  "Figma",
                ].map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-2 py-0.5 rounded-full border border-[#4ADE80]/30 bg-[#4ADE80]/5 text-foreground/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-lg border bg-card/50 backdrop-blur-sm p-3">
              <p className="text-[9px] md:text-[10px] uppercase text-muted-foreground tracking-wider mb-2">
                Highlights
              </p>
              <ul className="space-y-1 text-[11px] md:text-xs text-muted-foreground">
                <li className="flex gap-1.5">
                  <span className="text-[#4ADE80] shrink-0">▸</span>
                  Cut logistics QA cycles 80% via Playwright automation @ Swift
                  Haulage
                </li>
                <li className="flex gap-1.5">
                  <span className="text-[#4ADE80] shrink-0">▸</span>
                  Led Admin Homepage revamp → +20% client satisfaction @
                  ThunderQuote
                </li>
                <li className="flex gap-1.5">
                  <span className="text-[#4ADE80] shrink-0">▸</span>
                  Shipped Homa2U site → +15% customer engagement
                </li>
                <li className="flex gap-1.5">
                  <span className="text-[#4ADE80] shrink-0">▸</span>
                  Led Honda Civic 2022 QAV as Development Engineer
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-2 md:gap-3 items-center">
            <div className="rounded-lg border bg-card/50 backdrop-blur-sm px-3 py-2 text-[11px] md:text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">Education:</span>{" "}
              Sigma School — Web Dev (2022–23) · UiTM Penang — B.Eng Chemical
              (2017–20, CGPA 3.14)
            </div>
            <div className="flex gap-2 md:justify-end">
              <Link
                href="mailto:hazimbaa@gmail.com"
                className="inline-flex items-center gap-1.5 text-[11px] md:text-xs px-3 py-1.5 rounded-full border border-[#4ADE80]/50 hover:bg-[#4ADE80]/10 transition-colors"
              >
                <Mail size={12} />
                Email
              </Link>
              <Link
                href="https://www.linkedin.com/in/hazimba"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] md:text-xs px-3 py-1.5 rounded-full border border-[#4ADE80]/50 hover:bg-[#4ADE80]/10 transition-colors"
              >
                <ExternalLink size={12} />
                LinkedIn
              </Link>
              <span className="hidden md:inline-flex items-center gap-1.5 text-[11px] md:text-xs px-3 py-1.5 rounded-full border text-muted-foreground">
                <MapPin size={12} />
                Klang, Selangor
              </span>
            </div>
          </div>
        </div>
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
