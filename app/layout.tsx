import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto_Mono, Montserrat } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { PortfolioTabs } from "./PortfTabs";
import ContactInfo from "@/components/contact-info";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const montserrate = Montserrat({
  variable: "--font-montserrate",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hazim-bakar.com"),

  title: {
    default: "Full-Stack Web Developer in Malaysia | Hazim Bakar",
    template: "%s | Hazim Bakar",
  },

  description:
    "Hazim Bakar is a full-stack web developer in Malaysia with 3+ years of experience building SEO-friendly websites and scalable web applications using Next.js, React, Node.js, and PostgreSQL.",

  applicationName: "Hazim Bakar",

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: "iH8q8IMNFrzE8d_ql4ZyWSjXvrtpvByO0YQn3jMUpIU",
  },

  authors: [{ name: "Hazim Bakar" }],

  openGraph: {
    title: "Full-Stack Web Developer in Malaysia | Hazim Bakar",
    description:
      "Explore web development projects by Hazim Bakar, a Malaysian full-stack developer specializing in Next.js, React, Node.js, and PostgreSQL.",
    url: "https://hazim-bakar.com",
    siteName: "Hazim Bakar",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hazim Bakar - Full-Stack Web Developer",
      },
    ],
    locale: "en_MY",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Full-Stack Web Developer in Malaysia | Hazim Bakar",
    description:
      "Explore the portfolio and web development projects of Hazim Bakar.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://hazim-bakar.com/#person",
    name: "Hazim Bakar",
    alternateName: "M. Hazim Abu Bakar",
    jobTitle: "Full-Stack Web Developer",
    description:
      "Full-stack web developer based in Malaysia with 3+ years of experience building modern websites and web applications using Next.js, React, Node.js, and PostgreSQL.",
    url: "https://hazim-bakar.com/",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Klang",
      addressRegion: "Selangor",
      addressCountry: "MY",
    },
    knowsAbout: [
      "Full-Stack Web Development",
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Search Engine Optimization",
    ],
    sameAs: [
      "https://www.facebook.com/hazimb4kar",
      "https://www.instagram.com/hazimba",
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${robotoMono.variable} ${montserrate.variable} antialiased`}
    >
      <body className="flex flex-col min-h-dvh">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structuredData),
            }}
          />
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container max-w-7xl mx-auto flex h-16 items-center justify-between px-4">
              <span className="md:text-xl  font-bold tracking-tight">
                Hazim B.
              </span>
              <div className="hidden md:flex items-center gap-4">
                <div className="text-center flex items-center">
                  <PortfolioTabs />
                </div>
              </div>

              <div className="hidden md:block">
                <ModeToggle />
              </div>

              <div className="flex md:hidden items-center gap-4">
                <div className="text-center h-full flex items-center">
                  <PortfolioTabs />
                </div>
                <ModeToggle />
              </div>
            </div>
          </header>
          {children}
          <Toaster position="top-center" />
        </ThemeProvider>
        <ContactInfo />
      </body>
    </html>
  );
}
