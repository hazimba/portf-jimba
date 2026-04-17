"use client";
import dynamic from "next/dynamic";

const AnimationBgInner = dynamic(() => import("./animation-bg-inner"), {
  ssr: false,
});

const AnimationBg = () => {
  return (
    <div className="absolute -right-16 md:-right-23 -top-8 md:-top-12 pointer-events-none">
      <div className="w-20 h-20 md:w-28 md:h-28 opacity-40">
        <AnimationBgInner />
      </div>
    </div>
  );
};
export default AnimationBg;
