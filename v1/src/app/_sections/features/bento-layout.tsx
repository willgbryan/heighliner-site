// CREDIT - ACETERNITY AWESOME COMPONENTS https://ui.aceternity.com/components/bento-grid
"use client"

import React from "react"
import Image from "next/image"
import clay4Img from "@/images/projects/Clay-4.png"
import {
  IconBoxAlignRightFilled,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react"
import { motion } from "framer-motion"
import Balancer from "react-wrap-balancer"

import { cn } from "@/lib/utils"
import {
  BentoGrid,
  BentoGridItem,
  BentoGridItemCta,
  BentoImageCard,
} from "@/components/ace/bento"
import TextAnimate from "@/components/cult/text-animate"
import {
  NextjsIcon,
  OpenAIIcon,
  StripeIcon,
  SupabaseIcon,
} from "@/components/icons"

import { MyResponsiveSunburst } from "@/components/ui/sunburst-chart"
import { FadeIn } from "@/components/cult/fade-in"
import { GradientHeading } from "@/components/cult/gradient-heading"

export function BentoLayout() {
  return (
    <>
      <div className="pt-24  pb-6 flex flex-col items-center justify-center">
        <TextAnimate
          className="font-black pb-6 text-3xl"
          text="Find your ideal customer"
          type="shiftInUp"
        />
        <p className="max-w-3xl md:max-w-3xl text-center text-xl">
          <Balancer>
            <span className="bg-gradient-to-br from-violet-200 font-bold px-2 rounded-sm">
              Magi's intelligent lead generation engine
            </span>
            {" "}scours vast data repositories to pinpoint prospects exhibiting strong buyer intent and an ideal fit for your products or services.
          </Balancer>
        </p>
        <p className="max-w-3xl md:max-w-3xl text-center text-xl mt-4">
          <Balancer>
            <span className="bg-gradient-to-br from-violet-200 font-bold px-2 rounded-sm">
              Precise product-market fit analysis
            </span>
            {" "}leverages machine learning to deeply understand your offerings and target markets. This data-driven approach identifies untapped opportunities, optimizes positioning, and ensures your products resonate strongly with the right customer segments.
          </Balancer>
        </p>
        <p className="max-w-3xl md:max-w-3xl text-center text-xl mt-4">
          <Balancer>
            <span className="bg-gradient-to-br from-violet-200 font-bold px-2 rounded-sm">
              Magi accelerates pipeline development and revenue growth
            </span>
            {" "}by combining intelligent lead generation with granular product-market insights. Magi equips your sales and marketing teams with a continuous stream of meticulously vetted, sales-ready leads primed for conversion.
          </Balancer>
        </p>
      </div>
    </>
  )
}

const SkeletonTwo = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  }
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  }
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2 "
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <motion.div>
          <SupabaseIcon className=" h-24 w-24 grayscale" />
        </motion.div>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <motion.div>
          <NextjsIcon className=" h-24 w-16 " />
        </motion.div>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <motion.div>
          <StripeIcon className="grayscale" />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  }
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ffcba3, #ff6c0a, #ffcba3, #fff2eb)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  )
}

const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  }
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  }
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="https://i.pravatar.cc/300?img=50"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-[#1d1d1f] mt-4">
          Just code in Vanilla Javascript
        </p>
        <p className="border border-orange-500 bg-orange-100  text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Delusional
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <Image
          src="https://i.pravatar.cc/300?img=51"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-[#1d1d1f] mt-4">
          Tailwind CSS is cool, you know
        </p>
        <p className="border border-black bg-black  text-white text-xs rounded-full px-2 py-0.5 mt-4">
          Sensible
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="https://i.pravatar.cc/300?img=5"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-[#1d1d1f] mt-4">
          I love angular, RSC, and Redux.
        </p>
        <p className="border border-orange-800 bg-orange-200 dark:bg-orange-900/20 text-orange-800 text-xs rounded-full px-2 py-0.5 mt-4">
          Helpless
        </p>
      </motion.div>
    </motion.div>
  )
}
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  }
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem]  bg-black/[0.2]  flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-black/10  shadow-2xl p-2  items-start space-x-2 bg-white/10  backdrop-blur-lg"
      >
        <Image
          src="https://i.pravatar.cc/300?img=56"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-white">
          For MVP1 we want our product to analyze consumer data. AI should
          summarize, analyze and index unique insights...
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-2xl border border-orange-300/70 p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white/10 backdrop-blur-lg "
      >
        <p className="text-xs text-white">
          Prep your product hunt post 🚀 We can build your solution in 5
          weeks...
        </p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-orange-500 to-orange-300 flex-shrink-0" />
      </motion.div>
    </motion.div>
  )
}

const items = [
  {
    title: "Premium Architecture",
    description: (
      <span className="text-sm">
        Money can be tight, keep your cost low and scale to millions.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-[#1d1d1f]" />,
  },
  {
    title: "Clean Code",
    description: (
      <span className="text-sm">
        We obsess over clean code. This makes it easy to hire and onboard.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-[#1d1d1f]" />,
  },
  {
    title: "Advanced AI Solutions",
    description: (
      <span className="text-sm">
        Our bread and butter. Sentiment analysis, Vector embeddings, chat
        history, AI agents.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-[#1d1d1f]" />,
  },
]

const ctaCard = {
  title: "start Today",
  description: (
    <span className="text-sm">
      Get started today, launch your new SaaS mvp next month.
    </span>
  ),
  header: <SkeletonFive />,
  className: "md:col-span-1",
  icon: <IconBoxAlignRightFilled className="h-4 w-4 text-[#1d1d1f]" />,
}
