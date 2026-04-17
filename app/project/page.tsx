import AnimationBg from "@/components/animation-bg";
import FadeIn from "@/components/fade-in";
import ParticlesBackground from "@/components/particles-bg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProjectsPage = async () => {
  const projects = [
    {
      title: "TM Tours Sdn Bhd",
      techStack: ["Next.js", "Cloudflare", "Supabase", "Node.js"],
      description:
        "A complete digital transformation for a travel agency featuring dynamic tour management and a robust admin dashboard.",
      keyFeatures: ["Bulk CSV data processing", "Full CRUD Admin Dashboard"],
      image: "/tm-official-logo.png",
      website: "https://tmtourtravel-frontoffice.vercel.app/",
      github: "https://github.com/hazimba/tmtourtravel-frontoffice",
    },
    // {
    //   title: "XYZ Sdn Bhd",
    //   techStack: ["Next.js", "Cloudflare", "Supabase", "Node.js"],
    //   description:
    //     "A complete digital transformation for a travel agency featuring dynamic tour management and a robust admin dashboard.",
    //   keyFeatures: [
    //     "New Website with modern design",
    //     "Mobile responsive and optimized for performance",
    //   ],
    //   image: "/swift-lorry.jpg",
    //   website: "https://tmtourtravel-frontoffice.vercel.app/",
    //   github: "https://github.com/hazimba/tmtourtravel-frontoffice",
    // },
  ];

  return (
    <FadeIn>
      <ParticlesBackground />
      <div className="bg-background">
        <main className="container max-w-5xl mx-auto px-4 md:px-6 py-20">
          <section className="text-center mb-12 md:mb-20">
            <div className="relative inline-flex items-center justify-center mb-6">
              <h1 className="relative z-10 text-4xl md:text-5xl font-bold">
                Projects
              </h1>
              <AnimationBg />
            </div>
            <p className="text-muted-foreground text-sm md:text-base max-w-5xl mx-auto">
              Innovative solutions built with a focus on performance,
              scalability, and user experience.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((proj, idx) => (
              <Card
                key={idx}
                className="group border-muted/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 shadow-lg"
              >
                <div className="flex md:block items-center p-4 md:p-0 bg-muted/20 md:bg-transparent">
                  <div className="relative md:w-16 w-32 h-16 md:w-full md:h-48 overflow-hidden rounded-md md:rounded-none md:rounded-b-none border md:border-none shrink-0">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      className="object-cover bg-white"
                    />
                  </div>
                  <div className="ml-4 md:hidden">
                    <CardTitle className="text-lg">{proj.title}</CardTitle>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {proj.techStack.slice(0, 2).map((t) => (
                        <span
                          key={t}
                          className="text-[9px] uppercase font-bold text-primary/70"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <CardHeader className="hidden md:block space-y-4">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-2xl font-bold tracking-tight">
                      {proj.title}
                    </CardTitle>
                  </div>
                  {/* <div className="flex flex-wrap gap-2">
                    {proj.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-bold uppercase tracking-widest text-primary/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div> */}
                </CardHeader>

                <CardContent className="pt-4 md:pt-0">
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 md:mb-6">
                    {proj.description}
                  </p>

                  <div className="md:hidden">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="features" className="border-b-0">
                        <AccordionTrigger className="text-xs font-semibold py-2 hover:no-underline">
                          See More
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2 pt-2">
                            {proj.keyFeatures.map((feature, i) => (
                              <li
                                key={i}
                                className="flex items-center text-base text-muted-foreground/80"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2 shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <div className="mt-4 flex justify-end gap-2">
                            <Link
                              href={proj.website}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Badge variant="outline">
                                Website <ArrowRight className="w-3 h-3 ml-1" />
                              </Badge>
                            </Link>
                            <Link
                              href={proj.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Badge variant="outline">
                                GitHub <ArrowRight className="w-3 h-3 ml-1" />
                              </Badge>
                            </Link>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  <div className="hidden md:block">
                    <ul className="space-y-2">
                      {proj.keyFeatures.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center text-sm text-muted-foreground/80"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 flex justify-end gap-4">
                      <Link
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Badge
                          variant="outline"
                          className="cursor-pointer py-3 px-3 text-xs hover:bg-gray-100/50"
                        >
                          Github <ArrowRight className="w-3 h-3 ml-1" />
                        </Badge>
                      </Link>
                      <Link
                        href={proj.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Badge
                          variant="outline"
                          className="cursor-pointer py-3 px-3 text-xs hover:bg-gray-100/50"
                        >
                          Website <ArrowRight className="w-3 h-3 ml-1" />
                        </Badge>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </FadeIn>
  );
};

export default ProjectsPage;
