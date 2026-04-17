import { ModeToggle } from "@/components/mode-toggle";
import { PortfolioTabs } from "./PortfTabs";
import FadeIn from "@/components/fade-in";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container max-w-7xl mx-auto flex h-16 items-center justify-between px-4">
          <span className="text-xl font-bold tracking-tight">Hazim Bakar</span>
          <ModeToggle />
        </div>
      </header>

      <main className="container max-w-7xl mx-auto px-4 py-20">
        <section className="text-center mb-20">
          <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium mb-6 bg-muted/40">
            3+ Years of Full-Stack Development Experience
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl mb-6 leading-tight">
            Full-Stack Developer
            <span className="block text-muted-foreground font-semibold">
              Crafting Modern, Scalable & User-Friendly Digital Products
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-8 mb-10">
            I build fast, responsive web applications with a strong focus on
            clean UI, performance, and business-driven solutions. With 3 years
            of experience in full-stack development, I work across frontend,
            backend, databases, and reporting systems to deliver products that
            are both functional and visually polished.
          </p>

          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            <div className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium border border-blue-200">
              React
            </div>
            <div className="px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium border border-cyan-200">
              TypeScript
            </div>
            <div className="px-4 py-2 rounded-full bg-sky-100 text-sky-700 text-sm font-medium border border-sky-200">
              Tailwind CSS
            </div>
            <div className="px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-medium border border-red-200">
              Firebase
            </div>
            <div className="px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium border border-emerald-200">
              Supabase
            </div>
            <div className="px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium border border-green-200">
              Node.js
            </div>
            <div className="px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium border border-purple-200">
              MongoDB
            </div>
            <div className="px-4 py-2 rounded-full bg-pink-100 text-pink-700 text-sm font-medium border border-pink-200">
              Ant Design
            </div>
            <div className="px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium border border-yellow-200">
              UI / UX Design
            </div>
            <div className="px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium border border-orange-200">
              Customer Relations
            </div>
            <div className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium border border-indigo-200">
              Metabase Reports
            </div>
            <div className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium border border-slate-200">
              REST APIs
            </div>
          </div>
        </section>

        <FadeIn>
          <div className="flex flex-col items-center">
            <div className="w-full max-w-4xl">
              <PortfolioTabs />
            </div>
          </div>
        </FadeIn>
      </main>
    </div>
  );
}
