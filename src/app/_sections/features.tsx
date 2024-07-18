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
import { StartupGrid } from "@/components/cult/startup-grid"
import { BuyerGrid } from "@/components/cult/buyer-grid"


export function Projects() {
  const [value, setValue] = useState(0);
  const spring = useSpring(0, {
    stiffness: 50,
    damping: 50,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prevValue) => {
        let newValue = prevValue + Math.floor(Math.random() * 3) + 1;
        if (newValue > 855) {
          newValue = 855;
        }
        spring.set(newValue);
        return newValue;
      });
    }, 1552);

    return () => clearInterval(interval);
  }, [spring]);

  return (
    <div className="mt-4 z-10">
      <div className="flex flex-col items-center justify-center">
        <div className="mx-auto max-w-lg md:max-w-4xl sm:text-center">
          <div className="mx-auto justify-center items-center flex gap-3">
            <GradientHeading
              className="flex justify-center flex-col md:text-center"
              size="xxl"
              asChild
              variant="secondary"
            >
              <h2 className="md:flex text-left font-normal text-[4rem] pl-4">
                Innovative Companies Need Innovative Solutions
              </h2>
            </GradientHeading>
          </div>

          <RevealAnimation>
            <p className="mt-6 px-6 md:text-lg md:leading-8 text-black/90 text-left leading-5">
              Our curated marketplace makes navigating the noisy tech landscape simple.
            </p>
          </RevealAnimation>
        </div>
      </div>
      
      <div className="pt-20">
       
      </div>
      <StartupGrid />
      <BuyerGrid />
    </div>
  )
}