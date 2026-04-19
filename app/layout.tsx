import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto_Mono } from "next/font/google";
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

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hazim Bakar | Full-Stack Developer & Designer",
  description:
    "Portfolio of Hazim, a full-stack developer with 3 years of experience building modern web applications using React, TypeScript, Supabase, Tailwind CSS, Node.js, and MongoDB.",
  keywords: [
    "Hazim Bakar",
    "Full-Stack Developer",
    "Web Developer",
    "Software Engineer",
    "React",
  ],
  applicationName: "Hazim Bakar",
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Hazim Bakar" }],
  openGraph: {
    title: "Hazim Bakar | Full-Stack Developer & Designer",
    description:
      "Portfolio of Hazim, a full-stack developer with 3 years of experience building modern web applications using React, TypeScript, Supabase, Tailwind CSS, Node.js, and MongoDB.",
    url: "https://hazim-bakar.com",
    siteName: "Hazim Bakar",
    images: [
      {
        url: "https://hazim-bakar.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hazim Bakar - Full-Stack Developer & Designer",
      },
    ],
    locale: "en_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hazim Bakar | Full-Stack Developer & Designer",
    description:
      "Portfolio of Hazim, a full-stack developer with 3 years of experience building modern web applications using React, TypeScript, Supabase, Tailwind CSS, Node.js, and MongoDB.",
    images: ["https://hazim-bakar.com/og-image.png"],
  },
  metadataBase: new URL("https://hazim-bakar.com"),
  alternates: {
    canonical: "https://hazim-bakar.com",
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
    name: "Hazim Bakar | Full-Stack Developer & Designer",
    description:
      "Portfolio of Hazim, a full-stack developer with 3 years of experience building modern web applications using React, TypeScript, Supabase, Tailwind CSS, Node.js, and MongoDB.",
    url: "https://hazim-bakar.com",
    telephone: "011-40432883",
    address: {
      "@type": "PostalAddress",
      streetAddress: "No. Lot 3A-3, Level 4, Wisma Q, Jalan Pahang, Titiwangsa",
      addressLocality: "Wilayah Persekutuan",
      addressRegion: "Kuala Lumpur",
      postalCode: "53000",
      addressCountry: "MY",
    },
    sameAs: [
      "https://www.facebook.com/hazimb4kar",
      "https://www.instagram.com/hazimba",
    ],
    logo: "https://hazim-bakar.com/favicon.ico",
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${robotoMono.variable} antialiased`}
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
