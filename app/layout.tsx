import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto_Mono } from "next/font/google";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${robotoMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container max-w-7xl mx-auto flex h-16 items-center justify-between px-4">
              <span className="md:text-xl  font-bold tracking-tight">
                Hazim B.
              </span>
              <div className="hidden md:flex items-center gap-4">
                <div className="text-center h-full flex items-center">
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
        </ThemeProvider>
        <ContactInfo />
      </body>
    </html>
  );
}
