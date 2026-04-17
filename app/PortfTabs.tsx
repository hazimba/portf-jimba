import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function PortfolioTabs() {
  const experiences = [
    {
      title: "Fullstack Developer",
      company: "Swift Haulage Berhad",
      duration: "2024 April - Present",
      description:
        "Developed and maintained the frontend of the company's logistics internal system",
    },
    {
      title: "Frontend Developer",
      company: "Homa2u Sdn Bhd",
      duration: "2023 November - 2024 April",
      description:
        "Built and maintained the frontend of the company's e-commerce platform, ensuring a seamless user experience and responsive design.",
    },
  ];

  const projects = [
    {
      title: "TM Tours Sdn Bhd",
      techStack: "Next.js, Cloudflare, Tailwind, Supabase, Node.js, React",
      description:
        "Build a whole new website for the company with a modern design and better performance. The website features a dynamic tour listing, and an admin dashboard for managing tours.",
    },
  ];

  return (
    <Tabs defaultValue="experience" className="w-full">
      <div className="flex justify-center mb-8">
        <TabsList>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="experience" className="space-y-4">
        {experiences.map((exp, idx) => (
          <Card key={idx}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{exp.title}</CardTitle>
                  <CardDescription>{exp.company}</CardDescription>
                </div>
                <span className="text-sm text-muted-foreground">
                  {exp.duration}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <p>{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </TabsContent>

      <TabsContent value="projects" className="grid gap-6 md:grid-cols-2">
        {projects.map((proj, idx) => (
          <Card key={idx} className="overflow-hidden">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <span className="text-muted-foreground italic">
                Project Preview
              </span>
            </div>
            <CardHeader>
              <CardTitle>{proj.title}</CardTitle>
              <CardDescription>{proj.techStack}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="">{proj.description}</p>
            </CardContent>
          </Card>
        ))}
      </TabsContent>
    </Tabs>
  );
}
