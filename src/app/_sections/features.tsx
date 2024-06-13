"use client"

import React, { useState, useEffect } from "react"
import Balancer from "react-wrap-balancer"

import { RevealAnimation } from "@/components/cult/reveal"

import { BentoLayout } from "./features/bento-layout"
import { OurWorkBanner } from "./features/our-work"
import { GradientHeading } from "@/components/cult/gradient-heading"
import { FadeIn } from "@/components/cult/fade-in"
import { AnimatedNumber } from "@/components/ui/animated-number"
import { useSpring } from "framer-motion"

export function Projects() {
  const [value, setValue] = useState(0);
  const spring = useSpring(0, {
    stiffness: 100,
    damping: 10,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prevValue) => {
        const newValue = prevValue + Math.floor(Math.random() * 7) + 1;
        spring.set(newValue);
        return newValue;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [spring]);

  return (
    <div className=" mt-4 z-10">
      <div className="  flex flex-col items-center justify-center">
        <div className="mx-auto max-w-lg md:max-w-4xl sm:text-center ">
          <div className="mx-auto justify-center items-center  flex gap-3">
            <GradientHeading
              className="flex items-end justify-end md:justify-start flex-col text-right md:text-left"
              size="lg"
              asChild
            >
              <h2 className="hidden  md:flex items-center font-semibold text-[8rem] pb-4">
                A lead gen paradigm shift
                {/* <span className="font-brand pt-9 sr-only">brand</span> */}
              </h2>
            </GradientHeading>
          </div>

          <RevealAnimation>
            <p className="mt-6 px-6 md:text-lg md:leading-8 text-black/90 text-center leading-5">
              <Balancer>
                Magi offers lead generation and product market fitting as a service. With the latest machine learning
                techniques embedded throughout our process, Magi can quickly generate, vet, and refine leads that are 
                perfect for your business.
              </Balancer>
            </p>
          </RevealAnimation>
        </div>
      </div>
      
      <div className="pt-12">
        <OurWorkBanner />
      </div>
      <div className="py-6 rounded-xl px-2 transform translate-x-20 translate-y-[-25rem]">
          <div className="absolute top-[calc(50vh-130px)] right-20 z-[9999] w-full md:w-auto pr-4">
            <FadeIn>
              <GradientHeading
                className="flex items-end  justify-end md:justify-start  flex-col text-right md:text-left"
                size="lg"
                asChild
              >
                <h2 className="hidden md:flex items-center font-semibold text-[8rem] pb-4">
                  &lt;/ potential leads; <AnimatedNumber value={value} precision={0} format={(value) => `${value}`} onAnimationComplete={() => {}} />&gt;
                </h2>
              </GradientHeading>
            </FadeIn>
          </div>
        </div>
      <BentoLayout />
    </div>
  )
}
