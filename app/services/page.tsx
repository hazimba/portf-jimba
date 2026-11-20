import FadeIn from "@/components/fade-in";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Metadata } from "next";
import { Code2, Search, Layout, Rocket, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Freelance Web Developer & SEO Services in Malaysia",
  description:
    "Hire a freelance web developer in Malaysia for custom website development, Next.js applications, technical SEO, and CMS solutions. Explore my services and projects.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Web Development & SEO Services | Hazim Bakar",
    description:
      "Custom website development, Next.js applications, technical SEO, and CMS solutions for businesses in Malaysia.",
    url: "https://hazim-bakar.com/services",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Freelance Web Development and SEO Services",
  description:
    "Custom website development, technical SEO, and CMS development services.",
  provider: {
    "@type": "Person",
    name: "Hazim Bakar",
    url: "https://hazim-bakar.com",
  },
  areaServed: {
    "@type": "Country",
    name: "Malaysia",
  },
  serviceType: ["Website Development", "Technical SEO", "CMS Development"],
};

const services = [
  {
    title: "Website Development Services",
    description:
      "Custom website development for businesses in Malaysia. I build fast, responsive, SEO-friendly websites using Next.js, React, TypeScript, and Tailwind CSS, from business landing pages to full-stack web applications.",
    icon: <Code2 className="w-10 h-10 text-[#4ADE80]" />,
    features: [
      "Custom Business Website Development",
      "Responsive & Mobile-Friendly Design",
      "Next.js & React Web Applications",
      "Website Speed & Performance Optimization",
    ],
  },
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "Technical and on-page SEO services to improve your website's search visibility. I implement SEO best practices and use Google Search Console and Google Analytics to monitor organic traffic and website performance.",
    icon: <Search className="w-10 h-10 text-[#4ADE80]" />,
    features: [
      "On-Page & Technical SEO",
      "Google Search Console & GA4 Integration",
      "Core Web Vitals & Website Performance",
      "Sitemap, Canonical URLs & Metadata",
    ],
  },
  {
    title: "Custom CMS Development",
    description:
      "Custom content management systems that allow businesses to manage website content, images, blog posts, and services through an easy-to-use admin dashboard without modifying source code.",
    icon: <Layout className="w-10 h-10 text-[#4ADE80]" />,
    features: [
      "Custom Admin Dashboard Development",
      "Supabase & PostgreSQL Integration",
      "Content & Image Management",
      "Secure & Scalable CMS Architecture",
    ],
  },
];

const ServicesPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c"),
        }}
      />
      <FadeIn>
        <div className="min-h-screen bg-background">
          <main className="container max-w-5xl mx-auto px-4 md:px-6 py-20">
            <section className="text-center mb-12 md:mb-20">
              <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-[10px] font-medium mb-6 bg-background/50 backdrop-blur-sm border-primary/20">
                <Rocket className="w-3 h-3 mr-2 text-[#4ADE80]" />
                Web Development & SEO Services
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Freelance Web Developer{" "}
                <span className="text-[#4ADE80]">in Malaysia</span>
              </h1>

              <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
                I provide professional website development, search engine
                optimization (SEO), and custom content management system (CMS)
                solutions for businesses in Malaysia. From responsive business
                websites to scalable Next.js applications, I help businesses
                build a stronger online presence.
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {services.map((service, idx) => (
                <Card
                  key={idx}
                  className="relative overflow-hidden border-border/60 bg-card/40 backdrop-blur-sm flex flex-col"
                >
                  <CardHeader>
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle className="text-xl md:text-2xl font-bold tracking-tight">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-sm md:text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-3">
                      {service.features.map((feature, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-center text-xs md:text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="w-4 h-4 mr-2 text-[#4ADE80] shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Web Development Projects & Case Studies
              </h2>

              <p className="text-muted-foreground mb-6">
                Explore real-world websites I&apos;ve developed using Next.js,
                React, Supabase, and Cloudflare, with a focus on performance,
                usability, and search engine optimization.
              </p>

              <div className="space-y-5">
                <article>
                  <h3 className="text-lg font-semibold">
                    <Link
                      href="/project/kem-bumi-jati"
                      className="hover:underline"
                    >
                      Kem Bumi Jati – Training Centre Website
                    </Link>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    A training centre website in Shah Alam featuring facility
                    pages, SEO implementation, Google Search Console monitoring,
                    and analytics integration.
                  </p>
                </article>

                <article>
                  <h3 className="text-lg font-semibold">
                    <Link
                      href="/project/muqrie-travel-agency"
                      className="hover:underline"
                    >
                      Muqrie – Travel Agency Website & CMS
                    </Link>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    A multilingual travel platform with a custom content
                    management system for managing travel packages, itineraries,
                    images, and website content.
                  </p>
                </article>
              </div>
            </section>

            <section className="rounded-2xl border border-[#4ADE80]/20 bg-[#4ADE80]/5 p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to start your project?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Whether you need a simple landing page or a complex web
                application, I&apos;m here to help you bring your vision to
                life.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <a
                  href="mailto:hazimbaa@gmail.com"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#4ADE80] text-black font-semibold hover:bg-[#4ADE80]/90 transition-colors"
                >
                  Get in Touch
                </a>
                <Link
                  href="/project"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-border bg-background hover:bg-secondary transition-colors"
                >
                  View My Work
                </Link>
              </div>
            </section>
          </main>
        </div>
      </FadeIn>
    </>
  );
};

export default ServicesPage;
