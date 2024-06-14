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
      <div className="h-full w-full relative">
        <div className="md:hidden absolute top-0 left-0 w-full h-64">
          <FadeIn>
            <Image
              src={clay1Img} // Use the smaller image for mobile
              layout="fill" // This will make the image cover the available space
              objectFit="cover" // Adjust the image's sizing within its container
              className="w-full h-full"
              alt="blob image of brain"
            />
          </FadeIn>
        </div>
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
        <div className="absolute top-[20vh] md:top-[calc(50vh-130px)] left-4 md:left-40 z-[9999] w-full md:w-auto pr-4">
          <FadeIn>
            <GradientHeading
              className="flex items-end justify-end md:justify-start flex-col text-right md:text-left"
              size="xl"
              asChild
            >
              <h1 className="text-5xl md:text-[12.5rem] font-semibold flex-col pb-4">
                &lt;/magi&gt; <br />
                {/* Optionally, you can uncomment this for a subtitle or additional text */}
                {/* <span className="font-brand pt-9 sr-only">brand</span> */}
              </h1>
            </GradientHeading>
          </FadeIn>
        </div>
        {/* Consider uncommenting and adjusting this for mobile if needed */}
        {/* <div className="md:hidden absolute top-[calc(100vh-530px)] right-7">
          <TextAnimate
            className="font-brand pt-9 text-5xl md:text-[12.5rem]"
            text="brand"
            type="rollIn"
          />
        </div> */}
      </div>
    </div>
  )
}