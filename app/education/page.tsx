import FadeIn from "@/components/fade-in";
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Accordion,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const EducationPage = () => {
  const education = [
    {
      institution: "Programming School",
      degree: "Foundation in Software Engineering",
      duration: "2022 - 2023",
      logo: "/sigma-school.webp",
      description:
        "Programming school focused on practical software engineering skills, covering fundamental of programming, web development, and mobile app development.",
      highlights: [
        "Self Paced Learning: Completed the curriculum at an accelerated pace, demonstrating strong self-motivation and discipline.",
        "Collaborative Learning: Actively participated in peer code reviews and group projects, fostering a collaborative learning environment.",
      ],
    },
    {
      institution: "UiTM Permatang Pauh",
      degree: "Degree in Chemical Engineering",
      duration: "2017 - 2020",
      logo: "/uitm-logo.png",
      description:
        "Bachelor's degree in Chemical Engineering, providing a strong foundation in engineering principles and problem-solving skills.",
    },
  ];

  return (
    <FadeIn>
      <div className="bg-background">
        <main className="container max-w-5xl mx-auto px-4 md:px-6 py-20">
          <section className="text-center mb-12 md:mb-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Education</h1>
            <p className="text-muted-foreground text-sm md:text-base max-w-5xl mx-auto">
              A strong foundation in computer science and software engineering
              principles, complemented by hands-on experience with modern
              technologies and frameworks.
            </p>
          </section>

          <div className="space-y-6 max-w-5xl mx-auto">
            {education.map((edu, idx) => (
              <Card key={idx} className="overflow-hidden">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-2">
                    <div className="relative !w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={edu.logo}
                        alt={edu.institution}
                        fill
                        className="object-cover bg-white"
                      />
                    </div>
                    <div className="">
                      <CardTitle className="text-lg md:text-2xl font-bold tracking-tight">
                        {edu.degree}
                      </CardTitle>
                      <CardDescription className="text-sm md:text-base text-primary font-medium">
                        {edu.institution}
                      </CardDescription>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                    {edu.duration}
                  </span>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-4 text-medium md:text-lg font-mono font-medium">
                    {edu.description}
                  </p>

                  {edu.highlights && edu.highlights.length > 0 ? (
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem
                        value={`item-${idx}`}
                        className="border-none"
                      >
                        <AccordionTrigger className="py-2 hover:no-underline">
                          View Key Courses & Projects
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc text-xs md:text-sm pl-5 space-y-2 text-muted-foreground/80">
                            {edu.highlights.map((item, i) => (
                              <li key={i} className="leading-relaxed">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ) : null}
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </FadeIn>
  );
};
export default EducationPage;
