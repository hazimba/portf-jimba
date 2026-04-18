"use client";
import { motion } from "motion/react";
import { Badge } from "./ui/badge";

export const TechStackRender = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const techStack = [
    {
      name: "ReactJs",
      className:
        "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-500/20",
    },
    {
      name: "TypeScript",
      className:
        "bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-500/10 dark:text-cyan-300 dark:border-cyan-500/20",
    },
    {
      name: "NextJs",
      className:
        "bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-500/10 dark:text-slate-300 dark:border-slate-500/20",
    },
    {
      name: "Tailwind",
      className:
        "bg-sky-100 text-sky-700 border-sky-200 dark:bg-sky-500/10 dark:text-sky-300 dark:border-sky-500/20",
    },
    {
      name: "NodeJs",
      className:
        "bg-green-100 text-green-700 border-green-200 dark:bg-green-500/10 dark:text-green-300 dark:border-green-500/20",
    },
    {
      name: "Supabase",
      className:
        "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/20",
    },
    // {
    //   name: "MongoDB",
    //   className:
    //     "bg-lime-100 text-lime-700 border-lime-200 dark:bg-lime-500/10 dark:text-lime-300 dark:border-lime-500/20",
    // },
    // {
    //   name: "QA",
    //   className:
    //     "bg-red-100 text-red-700 border-red-200 dark:bg-red-500/10 dark:text-red-300 dark:border-red-500/20",
    // },
    {
      name: "Playwright",
      className:
        "bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-500/10 dark:text-gray-300 dark:border-gray-500/20",
    },
    {
      name: "n8n Automation",
      className:
        "bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-500/10 dark:text-yellow-300 dark:border-yellow-500/20",
    },
  ];

  return (
    <motion.div
      className="flex flex-wrap justify-center gap-3 mt-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {techStack.map((tech) => (
        <motion.div key={tech.name} variants={item}>
          <Badge
            key={tech.name}
            variant="outline"
            className={`px-3 py-3 text-[8px] md:text-base font-semibold uppercase tracking-wider rounded-md ${tech.className}`}
          >
            {tech.name}
          </Badge>
        </motion.div>
      ))}
    </motion.div>
  );
};
