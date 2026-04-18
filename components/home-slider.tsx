"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type SliderCtx = {
  index: 0 | 1;
  next: () => void;
  prev: () => void;
};

const HomeSliderContext = createContext<SliderCtx | null>(null);

function useHomeSlider() {
  const ctx = useContext(HomeSliderContext);
  if (!ctx) throw new Error("useHomeSlider must be used inside <HomeSlider>");
  return ctx;
}

type TriggerProps = {
  children: ReactNode;
  className?: string;
};

export function SliderNext({ children, className }: TriggerProps) {
  const { next } = useHomeSlider();
  return (
    <button type="button" onClick={next} className={className}>
      {children}
    </button>
  );
}

export function SliderPrev({ children, className }: TriggerProps) {
  const { prev } = useHomeSlider();
  return (
    <button type="button" onClick={prev} className={className}>
      {children}
    </button>
  );
}

type HomeSliderProps = {
  first: ReactNode;
  second: ReactNode;
};

export default function HomeSlider({ first, second }: HomeSliderProps) {
  const [index, setIndex] = useState<0 | 1>(0);

  return (
    <HomeSliderContext.Provider
      value={{ index, next: () => setIndex(1), prev: () => setIndex(0) }}
    >
      <div className="relative w-full h-full overflow-hidden">
        <div
          className="flex h-full w-[200%] transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${index === 0 ? "0%" : "-50%"})` }}
        >
          <div className="w-1/2 h-full shrink-0">{first}</div>
          <div className="w-1/2 h-full shrink-0">{second}</div>
        </div>
      </div>
    </HomeSliderContext.Provider>
  );
}
