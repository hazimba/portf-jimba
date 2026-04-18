import FadeIn from "@/components/fade-in";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ExperiencePage = async () => {
  const experiences = [
    {
      title: "Fullstack Developer",
      company: "Swift Haulage Berhad",
      duration: "2024 April - Present",
      description:
        "Developed and maintained the company's logistics internal system",
      responsibilities: [
        "Implemented new features and optimized existing ones to enhance user experience and system performance.",
        "Collaborated with cross-functional teams to ensure seamless integration of frontend components with backend services.",
      ],
      outcome: [
        "Improved the user interface and overall experience of the logistics internal system, resulting in increased efficiency and user satisfaction.",
        "Implement new features that streamlined logistics operations, contributing to a 20% reduction in processing time for key tasks.",
      ],
      related: true,
    },
    {
      title: "Software Developer",
      company: "Homa2u Sdn Bhd",
      duration: "2023 November - 2024 April",
      description:
        "Built and maintained the frontend of the company's e-commerce platform, ensuring a seamless user experience and responsive design.",
      responsibilities: [
        "Collaborated with designers and backend developers to implement new features and optimize existing ones.",
        "Ensured cross-browser compatibility and optimized performance for a wide range of devices.",
      ],
      outcome: [
        "Digitilized the company’s e-commerce platform, resulting in a 30% increase in online sales within the first six months.",
        "Received positive feedback from users for the improved user interface and overall experience.",
      ],
      related: true,
    },
    {
      title: "Development Engineer",
      company: "Erect Engineering Sdn Bhd",
      duration: "2022 June - 2023 November",
      description:
        "Team leader for the development of automotive parts for the client, track and manage projects, tasks, and team collaboration.",
      responsibilities: [
        "Led a team of engineers in the design and development of automotive components, ensuring adherence to project timelines and quality standards.",
        "Coordinated with cross-functional teams to gather requirements and define project scope.",
      ],
      outcome: [
        "Successfully launched the project management tool, which improved team collaboration and project tracking.",
        "Received positive feedback from users for the improved functionality and user interface.",
      ],
      related: false,
    },
  ];

  return (
    <FadeIn>
      <div className="max-h-screen bg-background">
        <main className="container max-w-5xl mx-auto px-4 md:px-6 py-20">
          <section className="text-center mb-12 md:mb-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Experience</h1>
            <p className="text-muted-foreground text-sm md:text-base max-w-5xl mx-auto">
              A snapshot of my professional journey, showcasing my growth and
              impact in the tech industry. Each role has been a stepping stone,
              shaping my skills and passion for building innovative solutions.
            </p>
          </section>

          <div className="space-y-12">
            {[
              {
                heading: "Related Experience",
                items: experiences.filter((exp) => exp.related),
                keyPrefix: "related",
              },
              {
                heading: "Other Experience",
                items: experiences.filter((exp) => !exp.related),
                keyPrefix: "other",
              },
            ].map((group) => (
              <section key={group.keyPrefix} className="space-y-6">
                <h2 className="text-xl md:text-2xl font-bold tracking-tight">
                  {group.heading}
                </h2>
                <div className="space-y-6">
                  {group.items.map((exp, idx) => (
                    <Card
                      key={`${group.keyPrefix}-${idx}`}
                      className="overflow-hidden"
                    >
                      <CardHeader>
                        <div className="flex flex-col md:flex-row justify-between items-start gap-2">
                          <div>
                            <CardTitle className="text-lg md:text-2xl font-bold tracking-tight">
                              {exp.title}
                            </CardTitle>
                            <CardDescription className="text-sm md:text-base text-primary font-medium">
                              {exp.company}
                            </CardDescription>
                          </div>
                          <span className="text-xs md:text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                            {exp.duration}
                          </span>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                          {exp.description}
                        </p>

                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem
                            value={`item-${group.keyPrefix}-${idx}`}
                            className="border-none"
                          >
                            <AccordionTrigger className="text-xs font-semibold py-2 hover:no-underline">
                              View Key Contributions
                            </AccordionTrigger>
                            <AccordionContent>
                              <ul className="list-disc text-xs md:text-sm pl-5 space-y-2 text-muted-foreground/80">
                                {exp.outcome.map((item, i) => (
                                  <li key={i} className="leading-relaxed">
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </main>
      </div>
    </FadeIn>
  );
};

export default ExperiencePage;
