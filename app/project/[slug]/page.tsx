import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Code2 } from "lucide-react";
import FadeIn from "@/components/fade-in";
import ParticlesBackground from "@/components/particles-bg";
import AnimationBg from "@/components/animation-bg";
import { Metadata } from "next";
import SEOPerformanceChart from "@/components/seo-performance-chart";
import { getSearchConsoleData } from "@/lib/google-search-console";

export const dynamic = "force-dynamic";
interface Project {
  slug: string;
  title: string;
  techStack: string[];
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  image: string;
  website: string;
  github: string;
  category: string;
  gscProperty?: string;
}

const projects: Project[] = [
  {
    slug: "muqrie-travel-agency",
    title: "Muqrie Travel Agency",
    techStack: ["Next.js", "Supabase", "Node.js", "Tailwind CSS"],
    description:
      "A complete digital transformation for a travel agency featuring dynamic tour management and a robust admin dashboard.",
    longDescription:
      "Muqrie Travel Agency needed a modern platform to manage their tour packages and bookings efficiently. The solution involved building a custom CMS that allows them to update itineraries, pricing, and availability in real-time.",
    problem:
      "The agency was struggling with manual booking processes and outdated tour listings, leading to missed opportunities and administrative overhead.",
    solution:
      "We developed a centralized dashboard using Next.js and Supabase that automated the tour listing process and provided a seamless booking experience for customers.",
    keyFeatures: [
      "Bulk CSV data processing",
      "Full CRUD Admin Dashboard",
      "Dynamic Itinerary Generation",
      "Real-time Booking Updates",
    ],
    image: "/travel-agent.jpg",
    website: "https://muqrie.com",
    github: "",
    category: "Content Management System",
    gscProperty: "sc-domain:muqrie.com",
  },
  {
    slug: "kem-bumi-jati",
    title: "Kem Bumi Jati – Training Centre Website",
    techStack: ["Next.js", "React", "TypeScript", "Supabase", "Cloudflare"],
    description:
      "Developed a responsive website for Kem Bumi Jati, a training centre in Shah Alam, Selangor.",
    longDescription:
      "Kem Bumi Jati required a strong online presence to showcase their facilities and training programs. The project focused on high performance and SEO to attract more corporate clients.",
    problem:
      "Their previous web presence was non-existent, making it difficult for potential clients to find information about their facilities and services online.",
    solution:
      "Created a lightning-fast website deployed on Cloudflare Workers, featuring optimized image galleries and detailed facility listings that rank well on search engines.",
    keyFeatures: [
      "Responsive website design",
      "Search engine optimization",
      "Google Analytics 4 integration",
      "Cloudflare Workers deployment",
      "Training facility listings and galleries",
    ],
    image:
      "https://images.kembumijati.com/kem_bumi_jati_header_background_img/1000144361.jpg",
    website: "https://kembumijati.com",
    github: "",
    category: "Content Management System",
    gscProperty: "sc-domain:kembumijati.com",
  },
  {
    slug: "hazim-bakar-portfolio",
    title: "Hazim Bakar Portfolio",
    techStack: ["Next.js", "Cloudflare", "Supabase", "Node.js"],
    description: "A personal portfolio showcasing my projects and skills.",
    longDescription:
      "This portfolio was designed to highlight my expertise in full-stack web development, featuring a clean UI and interactive elements that demonstrate my technical skills.",
    problem:
      "I needed a professional online presence to showcase my work and attract potential clients or employers.",
    solution:
      "Developed a modern, responsive portfolio using Next.js and deployed it on Cloudflare for optimal performance and security.",
    keyFeatures: [
      "Project showcase with detailed case studies",
      "Responsive design for all devices",
      "SEO optimized for better visibility",
      "Integration with Google Search Console for performance tracking",
    ],
    image: "/image.png",
    website: "https://hazim-bakar.com",
    github: "",
    category: "Landing Page",
    gscProperty: "sc-domain:hazim-bakar.com",
  },
  {
    slug: "self-hosted-ai-assistant",
    title: "Self-Hosted AI Assistant & LLM API",
    techStack: ["Next.js", "Cloudflare", "Supabase", "Node.js", "OpenAI API"],
    description:
      "A self-hosted AI assistant and LLM API for various applications.",
    longDescription:
      "This project was born out of the need for a private, customizable AI interface that could be integrated into various internal workflows without relying on third-party frontends.",
    problem:
      "Standard AI interfaces often lack the customization needed for specific business workflows and can pose data privacy concerns.",
    solution:
      "Built a secure, self-hosted platform that provides an intuitive UI for interacting with various LLMs, while also offering a robust API for internal tool integration.",
    keyFeatures: [
      "Customizable AI models",
      "Easy integration API",
      "Scalable architecture",
      "Private data handling",
    ],
    image:
      "https://starryai.com/cdn-cgi/image/format=auto,quality=90/https%3A%2F%2Fcdn.prod.website-files.com%2F61554cf1696635e97e823d26%2F69084785cf4c36700265113e_2185cc91-5112-4096-aee8-dbaaff52e050.webp",
    website: "",
    github: "",
    category: "Landing Page",
  },
];

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return {};

  return {
    title: `${project.title} | Case Study`,
    description: project.description,
    alternates: {
      canonical: `https://hazim-bakar.com/project/${slug}`,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <FadeIn>
      <ParticlesBackground />
      <div className="bg-background min-h-screen">
        <main className="container max-w-7xl mx-auto px-4 md:px-6 py-20 relative z-10">
          <Link
            href="/project"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>

          <header className="mb-12">
            <div className="relative inline-flex items-center justify-start mb-4">
              <h1 className="relative z-10 text-3xl md:text-5xl font-bold">
                {project.title}
              </h1>
              <AnimationBg />
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </header>

          <div className="relative aspect-video w-full overflow-hidden rounded-xl border mb-12 shadow-2xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-muted-foreground leading-relaxed italic">
                  &quot;{project.description}&quot;
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  {project.longDescription}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">The Problem</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.problem}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">The Solution</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.keyFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 shrink-0" />
                      <span className="text-muted-foreground text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <aside className="space-y-6">
              <div className="sticky top-24 p-6 rounded-xl border bg-card/50 backdrop-blur-sm">
                <h3 className="font-bold mb-4">Project Links</h3>
                <div className="space-y-3">
                  {project.website && (
                    <Button
                      asChild
                      className="w-full justify-start"
                      variant="default"
                    >
                      <Link href={project.website} target="_blank">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visit Website
                      </Link>
                    </Button>
                  )}
                  {project.github && (
                    <Button
                      asChild
                      className="w-full justify-start"
                      variant="outline"
                    >
                      <Link href={project.github} target="_blank">
                        <Code2 className="w-4 h-4 mr-2" />
                        Source Code
                      </Link>
                    </Button>
                  )}
                  {!project.website && !project.github && (
                    <p className="text-sm text-muted-foreground italic">
                      Private repository or confidential project.
                    </p>
                  )}
                </div>

                <div className="mt-8 pt-8 border-t">
                  <h4 className="text-sm font-semibold mb-2 uppercase tracking-wider text-muted-foreground">
                    Category
                  </h4>
                  <p className="text-sm font-medium">{project.category}</p>
                </div>
              </div>
              {project.gscProperty && (
                <SEOPerformanceChart
                  data={await getSearchConsoleData(project.gscProperty).catch(
                    (error) => {
                      console.error("Search Console error:", error);
                      return [];
                    }
                  )}
                />
              )}
            </aside>
          </div>
        </main>
      </div>
    </FadeIn>
  );
}
