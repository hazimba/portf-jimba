import FadeIn from "@/components/fade-in";
import { Badge } from "@/components/ui/badge";
import ParticlesBackground from "@/components/particles-bg";

const Home = async () => {
  const techStack = [
    {
      name: "React",
      className:
        "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-500/20",
    },
    {
      name: "TypeScript",
      className:
        "bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-500/10 dark:text-cyan-300 dark:border-cyan-500/20",
    },
    {
      name: "Next.js",
      className:
        "bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-500/10 dark:text-slate-300 dark:border-slate-500/20",
    },
    {
      name: "Tailwind",
      className:
        "bg-sky-100 text-sky-700 border-sky-200 dark:bg-sky-500/10 dark:text-sky-300 dark:border-sky-500/20",
    },
    {
      name: "Node.js",
      className:
        "bg-green-100 text-green-700 border-green-200 dark:bg-green-500/10 dark:text-green-300 dark:border-green-500/20",
    },
    {
      name: "Supabase",
      className:
        "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/20",
    },
    {
      name: "MongoDB",
      className:
        "bg-lime-100 text-lime-700 border-lime-200 dark:bg-lime-500/10 dark:text-lime-300 dark:border-lime-500/20",
    },
    // {
    //   name: "Cloudflare",
    //   className:
    //     "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-500/10 dark:text-orange-300 dark:border-orange-500/20",
    // },
    // {
    //   name: "Firebase",
    //   className:
    //     "bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-500/10 dark:text-yellow-300 dark:border-yellow-500/20",
    // },
    {
      name: "Customer Support",
      className:
        "bg-pink-100 text-pink-700 border-pink-200 dark:bg-pink-500/10 dark:text-pink-300 dark:border-pink-500/20",
    },
    {
      name: "etc..",
      className:
        "bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-500/10 dark:text-gray-300 dark:border-gray-500/20",
    },
  ];

  return (
    <div className="relative h-[90vh] w-full overflow-hidden overflow-y-hidden bg-background flex flex-col items-center justify-center">
      <ParticlesBackground />
      <main className="relative z-10 container max-w-7xl mx-auto px-6 flex flex-col items-center justify-center h-full">
        <FadeIn>
          <section className="text-center mb-12">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-medium mb-8 bg-background/50 backdrop-blur-sm border-primary/20 animate-pulse">
              🚀 3+ Years of Full-Stack Expertise
            </div>

            <h1 className="md:text-5xl text-2xl md:text-7xl font-bold tracking-tight mb-6">
              Full-Stack <span className="text-primary">Developer</span>
              <span className="block text-lg md:text-4xl font-medium text-muted-foreground mt-4 max-w-4xl mx-auto leading-snug">
                Crafting Modern, Scalable & User-Friendly Digital Products
              </span>
            </h1>

            <p
              className="text-xs md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 md:mt-20 mt-4 tracking-tight
leading-relaxed"
            >
              I create modern websites that help businesses build trust, attract
              more customers, and strengthen their brand. By focusing on speed,
              user experience, and visibility, I help businesses stand out and
              make a better impression.
            </p>

            <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto opacity-90">
              {techStack.map((tech) => (
                <Badge
                  key={tech.name}
                  variant="outline"
                  className={`px-3 py-3 text-[8px] md:text-base font-semibold uppercase tracking-wider rounded-md ${tech.className}`}
                >
                  {tech.name}
                </Badge>
              ))}
            </div>
          </section>
        </FadeIn>
      </main>
    </div>
  );
};

export default Home;
