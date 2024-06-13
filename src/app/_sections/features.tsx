"use client"

import React from "react"
import Balancer from "react-wrap-balancer"

import { RevealAnimation } from "@/components/cult/reveal"

import { BentoLayout } from "./features/bento-layout"
import { OurWorkBanner } from "./features/our-work"
import { GradientHeading } from "@/components/cult/gradient-heading"

export function Projects() {
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
                Magi offers lead generation and product market fitting as a serivce. With the latest machine learning
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

      <BentoLayout />
    </div>
  )
}
