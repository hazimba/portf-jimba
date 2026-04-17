"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Phone,
  Mail,
  //   Github,
  FileText,
  MessageCircle,
  ExternalLink,
} from "lucide-react";
import { useRef, useState } from "react";
import Link from "next/link";

const ContactInfo = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const contactDetails = {
    phone: "+601140432883",
    email: "hazimbaa@gmail.com",
    github: "https://github.com/hazimbakar",
    resumeUrl: "/my-resume.pdf",
  };

  return (
    <div
      className="fixed w-4/5 md:left-8/7 left-7/9 -translate-x-1/2 bottom-5 md:bottom-5 z-50 transition-all duration-300"
      onMouseEnter={() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsPopoverOpen(true);
      }}
      onMouseLeave={() => {
        timeoutRef.current = setTimeout(() => {
          setIsPopoverOpen(false);
        }, 150);
      }}
    >
      <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
        <PopoverTrigger asChild>
          <button className="group gap-4 text-xs font-medium tracking-wide cursor-pointer bg-secondary/90 text-primary flex items-center px-6 py-3 rounded-full transition-all duration-300 border border-primary shadow-lg hover:scale-105 active:scale-95">
            <span>Contact Me!</span>
            <MessageCircle className="shrink-0 size-3" />
          </button>
        </PopoverTrigger>

        <PopoverContent
          side="top"
          align="end"
          sideOffset={10}
          className="w-70 p-0 shadow-2xl border-primary/20 overflow-hidden"
        >
          <div className="bg-primary p-4 text-primary-foreground">
            <h3 className="font-bold text-lg">Let&apos;s Connect</h3>
            <p className="text-xs opacity-80">
              Usually responds within 24 hours
            </p>
          </div>

          <div className="flex flex-col p-2">
            <a
              href={`https://wa.me/${contactDetails.phone.replace(/\D/g, "")}`}
              target="_blank"
              className="flex items-center justify-between p-3 hover:bg-secondary rounded-lg transition-colors group"
            >
              <div className="flex items-center gap-3">
                <Phone className="size-4 text-primary" />
                <span className="text-sm font-medium">
                  {contactDetails.phone}
                </span>
              </div>
              <ExternalLink className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href={`mailto:${contactDetails.email}`}
              className="flex items-center justify-between p-3 hover:bg-secondary rounded-lg transition-colors group"
            >
              <div className="flex items-center gap-3">
                <Mail className="size-4 text-primary" />
                <span className="text-sm font-medium">
                  {contactDetails.email}
                </span>
              </div>
              <ExternalLink className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href={contactDetails.github}
              target="_blank"
              className="flex items-center justify-between p-3 hover:bg-secondary rounded-lg transition-colors group"
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium">GitHub Profile</span>
              </div>
              <ExternalLink className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <div className="my-2 border-t border-gray-100" />

            <a
              href={contactDetails.resumeUrl}
              download
              className="flex items-center gap-3 p-3 bg-primary/5 hover:bg-primary/10 text-primary rounded-lg transition-colors mb-1"
            >
              <FileText className="size-4" />
              <span className="text-sm font-bold">Download CV (PDF)</span>
            </a>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ContactInfo;
