import { FadeIn } from "@/components/cult/fade-in"
import { GradientHeading } from "@/components/cult/gradient-heading"
import { RevealAnimation } from "@/components/cult/reveal"
import dynamic from 'next/dynamic'

const GameOfLife = dynamic(() => import('@/components/game-of-life'), { ssr: false })

export function Hero() {
  return (
    <div className="relative flex justify-center items-center h-[900px] w-full overflow-hidden">
      <GameOfLife />
      <div className="relative z-10">
        <FadeIn>
          <GradientHeading
            className="text-center"
            size="xxl"
            asChild
          >
            <h1 className="font-normal text-[5rem] max-w-[700px] text-left text-stone-900 md:px-0 px-2">
              Discover Tomorrow's Tech Stack
            </h1>
          </GradientHeading>
            <h2 className="mt-6 px-4 md:text-lg md:leading-8 text-black/90 max-w-lg font-normal text-left leading-5">
              Magi is revolutionizing the B2B software marketplace by connecting innovative startups with enterprise buyers, accelerating the path to product-market fit and streamlining the software procurement process.
            </h2>
        </FadeIn>
      </div>
    </div>
  )
}