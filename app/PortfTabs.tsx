"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function PortfolioTabs() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(pathname);

  useEffect(() => {
    setActiveTab(pathname);
  }, [pathname]);

  // Helper to check if the active path is hidden inside the "More" menu
  const isMoreActive = ["/experience", "/education", "/contact"].includes(
    pathname
  );

  return (
    <Tabs value={activeTab} className="w-full">
      <div className="flex justify-center items-center">
        <TabsList>
          {/* Always Visible */}
          <TabsTrigger value="/">
            <Link href="/">Home</Link>
          </TabsTrigger>

          <TabsTrigger value="/project">
            <Link href="/project">Projects</Link>
          </TabsTrigger>

          {/* Desktop Only: Individual Tabs */}
          <div className="hidden md:flex">
            <TabsTrigger value="/experience">
              <Link href="/experience">Experience</Link>
            </TabsTrigger>
            <TabsTrigger value="/education">
              <Link href="/education">Education</Link>
            </TabsTrigger>
            <TabsTrigger value="/contact">
              <Link href="/contact">Contact</Link>
            </TabsTrigger>
          </div>

          {/* Mobile Only: "More" Dropdown */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <TabsTrigger value="more" className="flex items-center gap-1">
                  More <ChevronDown className="h-4 w-4" />
                </TabsTrigger>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="space-y-2">
                <DropdownMenuItem asChild>
                  <Link href="/experience">Experience</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/education">Education</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/contact">Contact</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </TabsList>
      </div>
    </Tabs>
  );
}
