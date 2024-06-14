import Image from "next/image"
import clay1Img from "@/images/projects/Clay-1.png"
import heroClay from "@/images/projects/Clay-5.png"

import { BackgroundMedia } from "@/components/cult/background-media"
import { FadeIn } from "@/components/cult/fade-in"
import { GradientHeading } from "@/components/cult/gradient-heading"
import TextAnimate from "@/components/cult/text-animate"

export function Hero() {
  return (
    <div className="">
      <div className="h-full w-full relative md:z-0">
        <div className="hidden md:block absolute md:top-24 right-0">
          <FadeIn>
            <Image
              src={heroClay}
              width={3000}
              height={2000}
              className="animate-custom-pulse w-full h-full filter grayscale"
              alt="blob image of brain"
            />
          </FadeIn>
        </div>
        <div className="absolute top-[calc(50vh-130px)] left-40 z-[9999] w-full md:w-auto pr-4">
          <FadeIn>
            <GradientHeading
              className="flex items-end justify-start flex-col text-left"
              size="xl"
              asChild
            >
              <h1 className="flex items-center font-semibold flex-col text-[6rem] sm:text-[2rem] md:text-[12.5rem] pb-4">
                &lt;/magi&gt; <br />
              </h1>
            </GradientHeading>
          </FadeIn>
        </div>
      </div>
    </div>
  )
}
