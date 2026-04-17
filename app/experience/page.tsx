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
        "Developed and maintained the frontend of the company's logistics internal system",
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
      title: "Frontend Developer",
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
        "Contributed to the development of the company’s internal project management tool, enhancing its functionality and user interface.",
      responsibilities: [
        "Worked closely with the development team to implement new features and improve existing ones.",
        "Participated in code reviews and collaborated on debugging and troubleshooting issues.",
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
        <main className="container max-w-7xl mx-auto px-4 py-20">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 ">Experience</h1>
            <p className="text-muted-foreground max-w-5xl text-sm md:text-base mx-auto">
              A snapshot of my professional journey, showcasing my growth and
              impact in the tech industry. Each role has been a stepping stone,
              shaping my skills and passion for building innovative solutions.
            </p>
          </section>

          <div className="max-w-5xl mx-auto space-y-12">
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
                <h2 className="text-2xl md:text-3xl font-semibold">
                  {group.heading}
                </h2>
                <div className="space-y-6">
                  {group.items.map((exp, idx) => (
                    <Card
                      key={`${group.keyPrefix}-${idx}`}
                      className="overflow-hidden"
                    >
                      <CardHeader>
                        <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                          <div>
                            <CardTitle className="text-xl">
                              {exp.title}
                            </CardTitle>
                            <CardDescription className="text-lg text-primary">
                              {exp.company}
                            </CardDescription>
                          </div>
                          <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                            {exp.duration}
                          </span>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <p className="text-muted-foreground mb-4 text-medium md:text-lg font-mono font-medium">
                          {exp.description}
                        </p>

                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem
                            value={`item-${group.keyPrefix}-${idx}`}
                            className="border-none"
                          >
                            <AccordionTrigger className="py-2 hover:no-underline">
                              View Key Contributions
                            </AccordionTrigger>
                            <AccordionContent>
                              <ul className="list-disc text-base pl-5 space-y-2 text-muted-foreground">
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
