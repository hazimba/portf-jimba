import { TechStackRender } from "@/components/animation-render-motion";
import FadeIn from "@/components/fade-in";
import ParticlesBackground from "@/components/particles-bg";
import HomeSlider, { SliderNext, SliderPrev } from "@/components/home-slider";
import {
  ArrowLeft,
  ArrowRight,
  Mail,
  ExternalLink,
  MapPin,
} from "lucide-react";
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
    <main className="relative h-full z-10 container max-w-screen mx-auto px-4 md:px-6 py-6 md:py-12 flex flex-col overflow-y-auto">
      <FadeIn>
        <div className="flex flex-col gap-8 md:gap-12 max-w-5xl mx-auto w-full">
          <div className="flex items-center justify-between">
            <SliderPrev className="flex items-center gap-2 text-xs text-muted-foreground hover:text-[#4ADE80] transition-colors cursor-pointer">
              <ArrowLeft size={12} />
              Back
            </SliderPrev>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#4ADE80]/40 bg-[#4ADE80]/10 px-3 py-1 text-[10px] font-medium text-[#4ADE80]">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
              Open to opportunities
            </div>
          </div>

          <div className="flex justify-between gap-6 md:gap-10 items-start">
            <div className="min-w-0 space-y-3 md:space-y-5">
              <div>
                <h2 className="text-2xl md:text-5xl font-bold tracking-tight">
                  M. Hazim <span className="text-[#4ADE80]">Abu Bakar</span>
                </h2>
                <p className="text-xs md:text-sm text-muted-foreground mt-1.5">
                  Full-Stack Developer · Klang, Malaysia
                </p>
              </div>
              <p className="text-xs md:text-base text-muted-foreground leading-relaxed max-w-2xl">
                Hi — I took the long way here. Two years in engineering, then
                three (and counting) building web products. I enjoy shaping
                ideas into clean, reliable interfaces, and I care about the
                small details that make software feel nice to use.
              </p>
            </div>
            <div className="relative w-24 h-28 md:w-44 md:h-52 shrink-0">
              <div className="absolute -inset-2 bg-[#4ADE80]/20 blur-2xl rounded-full" />
              <div className="relative w-full h-full overflow-hidden rounded-[62%_38%_46%_54%/48%_56%_44%_52%] border-2 border-[#4ADE80]/40 shadow-xs rotate-3">
                <Image
                  src="/hazim.png"
                  alt="M. Hazim Abu Bakar"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 96px, 176px"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4 md:space-y-5">
            <div>
              <p className="text-sm md:text-base font-semibold">
                Four hats, one hire.
              </p>
              <p className="text-[11px] md:text-sm text-muted-foreground mt-1">
                The roles I slip into comfortably on a small product team.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {[
                { role: "Designer", tag: "A good sense for design" },
                { role: "Client Relations", tag: "Comfortable with people" },
                { role: "Quality-first", tag: "Focused on quality" },
                { role: "Engineer", tag: "Passionate about coding." },
              ].map((s) => (
                <div
                  key={s.role}
                  className="rounded-xl border border-border/60 bg-card/40 backdrop-blur-sm px-4 py-4 md:px-5 md:py-5"
                >
                  <p className="text-sm md:text-lg font-semibold">{s.role}</p>
                  <p className="text-[10px] md:text-xs text-muted-foreground mt-1.5 leading-relaxed">
                    {s.tag}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            <div className="rounded-xl border border-border/60 md:col-span-1 bg-card/40 backdrop-blur-sm p-4 md:p-5">
              <p className="text-[10px] md:text-xs uppercase text-muted-foreground tracking-wider mb-3">
                Also comfortable with
              </p>
              <div className="flex flex-wrap gap-2">
                {["Vercel", "Cloudflare", "Ant Design", "SEO", "Figma"].map(
                  (s) => (
                    <span
                      key={s}
                      className="text-[10px] md:text-xs px-2.5 py-1 rounded-full border border-[#4ADE80]/30 bg-[#4ADE80]/5 text-foreground/80"
                    >
                      {s}
                    </span>
                  )
                )}
              </div>
            </div>
            <div className="rounded-xl border border-border/60 bg-card/40 md:col-span-2 backdrop-blur-sm p-4 md:p-5">
              <p className="text-[10px] md:text-xs uppercase text-muted-foreground tracking-wider mb-3">
                A recent win
              </p>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Led{" "}
                <span className="text-foreground font-medium">
                  a travel agency content management system project
                </span>{" "}
                end-to-end — planning, design, development, QA, and launch — all
                on my own. Delivered a site that the client was genuinely happy
                with.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 md:gap-6 items-center pt-4 md:pt-6 border-t border-border/40">
            <p className="text-xs md:text-sm text-muted-foreground">
              <span className="text-foreground font-medium">
                Off the clock:
              </span>{" "}
              gaming, travelling, and the occasional run.
            </p>
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
