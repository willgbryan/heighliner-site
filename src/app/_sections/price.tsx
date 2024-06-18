import { GradientCard } from "@/components/cult/card"
import { GradientHeading } from "@/components/cult/gradient-heading"
import { OrganicButton } from "@/components/cult/organic-button"
import TextAnimate from "@/components/cult/text-animate"

const gradients = [
  "linear-gradient(to bottom, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)", // pink white
  "linear-gradient(135deg, #1C1C1C 0%, #242424 50%, #0A0A0A 100%)", // gray black
  "linear-gradient(135deg, #FFECB3 0%, #FFC8DD 50%, #EF629F 100%)", // pink yellow
  "linear-gradient(135deg, #D4FC79 0%, #96E6A1 50%, #42E695 100%)", // green
  "linear-gradient(135deg, #FFD479 0%, #FF5A00 50%, #C24914 100%)", // orange
  "linear-gradient(to bottom right, #FFFFFF 0%, #D3D3D3 100%)",
] // bg-gradient-to-br from-white to-gray
export function Pricing() {
  return (
    <>
          <div className="mx-auto justify-center items-center  flex gap-3">
            <GradientHeading
              className="flex items-end justify-end md:justify-start flex-col text-right md:text-right"
              size="lg"
              asChild
            >
              <h2 className="hidden  md:flex items-center font-semibold text-[5rem] pb-10">
                Choose the plan that's right for you
                {/* <span className="font-brand pt-9 sr-only">brand</span> */}
              </h2>
            </GradientHeading>
          </div>
      <div className="flex flex-col  md:flex-row items-center justify-center w-full gap-12 px-2">
      <GradientCard
          type=""
          price="Startup"
          textColor="text-black"
          gradient={gradients[5]}
          description="Explore potential buyers, investors, and identify your ICP."
        >
          <div className="bg-gradient-to-br from-violet-200 w-full absolute bottom-0 left-0 rounded-r-[28px] rounded-b-[28px] py-8 pl-6">
            <div className="">
              <OrganicButton label="explore" href="/explore"/>
            </div>
          </div>
        </GradientCard>
        <GradientCard
          type=""
          price="Scale"
          textColor="text-black"
          gradient={gradients[5]}
          description="Go after your existing ICP, expand your current user base, and lock in product market fit."
        >
          <div className="bg-gradient-to-br from-violet-200 w-full absolute bottom-0 left-0 rounded-r-[28px] rounded-b-[28px] py-8 pl-6">
            <div className="">
              <OrganicButton label="refine" href="/refine"/>
            </div>
          </div>
        </GradientCard>

        <GradientCard
          type=""
          price="Expand"
          textColor="text-black"
          gradient={gradients[5]}
          description="Test new product offerings, markets, or diversify into new user bases."
        >
          <div className="bg-gradient-to-br from-violet-200 w-full absolute bottom-0 left-0 rounded-r-[28px] rounded-b-[28px] py-8 pl-6">
            <div className="">
              <OrganicButton label="contact us" href="/lock"/>
            </div>
          </div>
        </GradientCard>
      </div>
    </>
  )
}
