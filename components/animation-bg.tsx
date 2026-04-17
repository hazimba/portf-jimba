"use client";
import anim from "@/public/animations/change-background-color.json";
import Lottie from "lottie-react";

const AnimationBg = () => {
  return (
    <div className="absolute -right-16 md:-right-23 -top-8 md:-top-12 pointer-events-none">
      <div className="w-20 h-20 md:w-28 md:h-28 opacity-40">
        <Lottie animationData={anim} />
      </div>
    </div>
  );
};
export default AnimationBg;
