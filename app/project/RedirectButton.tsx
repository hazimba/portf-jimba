"use client";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

interface RedirectButtonProps {
  proj: {
    website: string;
    github: string;
  };
}

const RedirectButton = ({ proj }: RedirectButtonProps) => {
  return (
    <div className="mt-4 flex justify-end gap-2">
      {/* <Link href={proj.website} target="_blank" rel="noopener noreferrer"> */}
      <Badge
        variant="outline"
        className="cursor-pointer"
        onClick={() => toast.error("Feature not available yet!")}
      >
        Website <ArrowRight className="w-3 h-3 ml-1" />
      </Badge>
      {/* </Link> */}
      {/* <Link href={proj.github} target="_blank" rel="noopener noreferrer"> */}
      <Badge
        variant="outline"
        className="cursor-pointer"
        onClick={() => toast.error("Feature not available yet!")}
      >
        GitHub <ArrowRight className="w-3 h-3 ml-1" />
      </Badge>
      {/* </Link> */}
    </div>
  );
};
export default RedirectButton;
