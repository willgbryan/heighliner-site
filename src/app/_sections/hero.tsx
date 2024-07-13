import { FadeIn } from "@/components/cult/fade-in"
import { GradientHeading } from "@/components/cult/gradient-heading"
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
            <h1 className="font-normal text-[4rem] md:text-[12.5rem] text-black bg-[#e4e4e4]">
              Magi
            </h1>
          </GradientHeading>
        </FadeIn>
      </div>
    </div>
  )
}