"use client";
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
          <h2 className="text-xl md:text-8xl mb-4 text-white max-w-4xl">
            A NEW TAKE ON OLD PRACTICES
          </h2>
          <p className="text-neutral-300 md:text-3xl text-xl max-w-3xl">
            No compromise semantic search, iterative in-document analysis, and
            source coverage like you've never seen.
          </p>
        </div>
        <div className="relative max-w-7xl mx-auto pb-20">
          {data.map((item, index) => (
            <div
              key={index}
              className={`flex justify-start pt-10 md:pt-40 md:gap-10 ${
                item.align === "right" ? "md:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full ${
                  item.align === "right" ? "md:justify-end" : ""
                }`}
              >
                <div
                  className={`h-10 absolute ${
                    item.align === "right" ? "md:right-3" : "md:left-3"
                  } w-10 rounded-full bg-transparent flex items-center justify-center`}
                >
                  <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                </div>
                <h3
                  className={`hidden md:block text-xl md:text-5xl font-thin text-neutral-200 ${
                    item.align === "right" ? "md:pr-20 text-right" : "md:pl-20"
                  }`}
                >
                  {item.title}
                </h3>
              </div>
              <div
                className={`relative ${
                  item.align === "right"
                    ? "md:pr-20 pl-4"
                    : "pl-20 pr-4 md:pl-4"
                } w-full`}
              >
                <h3 className="md:hidden block text-2xl mb-4 text-left text-neutral-200">
                  {item.title}
                </h3>
                {item.content}{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
