"use client";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

interface RedirectButtonProps {
  proj: {
    slug: string;
    website: string;
    github: string;
  };
}

const RedirectButton = ({ proj }: RedirectButtonProps) => {
  return (
    <div className="mt-4 flex flex-wrap justify-between items-center gap-2">
      <Link href={`/project/${proj.slug}`}>
        <Badge variant="default" className="cursor-pointer">
          Read Case Study <ArrowRight className="w-3 h-3 ml-1" />
        </Badge>
      </Link>
      <div className="flex gap-2">
        {proj.website && (
          <Link href={proj.website} target="_blank" rel="noopener noreferrer">
            <Badge variant="outline" className="cursor-pointer">
              Website <ArrowRight className="w-3 h-3 ml-1" />
            </Badge>
          </Link>
        )}
        <Badge
          variant="outline"
          className="cursor-pointer"
          onClick={() => toast.error("Feature not available yet!")}
        >
          GitHub <ArrowRight className="w-3 h-3 ml-1" />
        </Badge>
      </div>
    </div>
  );
};
export default RedirectButton;
