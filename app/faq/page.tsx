import FadeIn from "@/components/fade-in";

export default function FAQPage() {
  return (
    <main className="container max-w-4xl mx-auto px-6 py-12">
      <div className="mt-12">
        <FadeIn>
          <section className="mb-16">
            <div className="mb-8 text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl text-left leading-relaxed">
                Learn more about my website development services, pricing,
                service areas, and custom development process.
              </p>
            </div>

            <div className="space-y-6">
              <article>
                <h3 className="text-lg font-semibold">
                  How much does website development cost in Malaysia?
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  My website development services start from RM2,000 for simpler
                  business websites. Final pricing depends on the project's
                  complexity, design requirements, number of pages, custom
                  features, integrations, and overall scope. Contact me for a
                  quotation tailored to your business needs.
                </p>
              </article>

              <article>
                <h3 className="text-lg font-semibold">
                  Which areas do you provide web development services in?
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  I'm a freelance web developer based in Shah Alam, Selangor,
                  serving businesses across Selangor, Kuala Lumpur, Negeri
                  Sembilan, Perak, and nearby areas. I also work remotely with
                  clients throughout Malaysia.
                </p>
              </article>

              <article>
                <h3 className="text-lg font-semibold">
                  Do you build websites from scratch or use templates?
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  I specialize in custom website development from scratch,
                  tailored to each client's requirements. With professional
                  experience as a full-stack software developer, I understand
                  the underlying code, application architecture, database
                  design, and deployment process. My work goes beyond assembling
                  templates or relying entirely on AI-generated code.
                </p>
              </article>

              <article>
                <h3 className="text-lg font-semibold">
                  Can you develop custom features or complex web applications?
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Yes. I develop custom solutions based on your business
                  requirements, including admin dashboards, content management
                  systems (CMS), database integrations, API development, booking
                  systems, and full-stack web applications. Each requirement is
                  assessed for technical feasibility, timeline, and budget
                  before development begins.
                </p>
              </article>

              <article>
                <h3 className="text-lg font-semibold">
                  Can I update website content myself?
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Yes. I can build a custom CMS dashboard that allows you to
                  manage content, images, and other website information without
                  editing code.
                </p>
              </article>

              <article>
                <h3 className="text-lg font-semibold">
                  Will my website be optimized for Google Search?
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  I implement technical and on-page SEO best practices,
                  including optimized metadata, semantic HTML, canonical URLs,
                  XML sitemaps, mobile responsiveness, and website performance
                  improvements. I can also integrate Google Search Console and
                  Google Analytics 4 to monitor search visibility, organic
                  traffic, and visitor engagement. Search rankings depend on
                  multiple factors and cannot be guaranteed.
                </p>
              </article>
            </div>
          </section>
        </FadeIn>
      </div>
    </main>
  );
}
