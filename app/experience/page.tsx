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
    },
  ];

  return (
    <FadeIn>
      <div className="max-h-screen bg-background">
        <main className="container max-w-7xl mx-auto px-4 py-20">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 ">Experience</h1>
            <p className="text-muted-foreground max-w-5xl mx-auto">
              A snapshot of my professional journey, showcasing my growth and
              impact in the tech industry. Each role has been a stepping stone,
              shaping my skills and passion for building innovative solutions.
            </p>
          </section>

          <div className="space-y-6 max-w-5xl mx-auto">
            {experiences.map((exp, idx) => (
              <Card key={idx} className="overflow-hidden">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
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
                      value={`item-${idx}`}
                      className="border-none"
                    >
                      <AccordionTrigger className="py-2 hover:no-underline">
                        View Key Contributions
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc text-base pl-5 space-y-2 text-muted-foreground">
                          {exp.responsibilities.map((item, i) => (
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
        </main>
      </div>
    </FadeIn>
  );
};

export default ExperiencePage;
