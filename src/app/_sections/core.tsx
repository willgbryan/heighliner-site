import React from "react";
import { Timeline } from "@/components/cult/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Open Research",
      content: (
        <div>
          <video
            src="/videos/research_demo.mp4"
            className="rounded-lg object-cover w-full h-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            controls
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      ),
      align: "left" as const,
    },
    {
      title: "In-Document Research",
      content: (
        <div>
          <video
            src="/videos/doc_analysis_demo.mp4"
            className="rounded-lg object-cover w-full h-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            controls
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      ),
      align: "right" as const,
    },
    {
      title: "Transferable Artifacts",
      content: (
        <div>
          <video
            src="/videos/export_demo.mp4"
            className="rounded-lg object-cover w-full h-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            controls
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      ),
      align: "left" as const,
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}