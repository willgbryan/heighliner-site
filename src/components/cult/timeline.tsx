import React from "react";
import { ShootingStars } from "@/components/cult/shooting-stars";
import { StarsBackground } from "@/components/cult/stars-background";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  align: "left" | "right";
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  return (
    <div className="w-full relative font-sans md:px-10">
      {/* Background Components */}
      <ShootingStars />
      <StarsBackground />
      {/* Content Wrapper */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
          <h2 className="text-4xl md:text-8xl mb-4 text-white max-w-4xl text-left">
            A NEW TAKE ON OLD PRACTICES
          </h2>
          <p className="text-neutral-300 md:text-3xl text-xl max-w-3xl text-left">
            No compromise semantic search, iterative in-document analysis, and
            source coverage like you've never seen.
          </p>
        </div>
        <div className="relative max-w-7xl mx-auto pb-20">
          {data.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center md:items-stretch justify-start pt-10 md:pt-40 md:gap-10 ${
                item.align === "right" ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <div
                className={`flex flex-col md:flex-row z-40 items-center md:sticky md:top-40 self-start max-w-xs lg:max-w-sm w-full ${
                  item.align === "right" ? "md:justify-end" : ""
                }`}
              >
                <div
                  className={`hidden md:flex h-10 relative md:absolute ${
                    item.align === "right" ? "md:right-3" : "md:left-3"
                  } w-10 rounded-full bg-transparent items-center justify-center mb-4 md:mb-0`}
                >
                  <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                </div>
                <h3
                  className={`text-xl md:text-5xl font-thin text-neutral-200 text-center md:text-left ${
                    item.align === "right" ? "md:pr-20 md:text-right" : "md:pl-20"
                  }`}
                >
                  {item.title}
                </h3>
              </div>
              <div
                className={`relative mt-4 md:mt-0 ${
                  item.align === "right"
                    ? "md:pr-20 px-4 md:pl-0"
                    : "md:pl-20 px-4 md:pr-0"
                } w-full`}
              >
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};