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
      <div className="flex  py-9 justify-center items-center flex-col">
        <TextAnimate
          text="Pricing"
          type="shiftInUp"
          className="text-[2.3rem] font-bold md:text-[6rem] md:font-semibold tracking-tighter text-neutral-300"
        />

        <GradientHeading size="sm" variant="lightSecondary">
          Choose a plan that's right for you.
        </GradientHeading>
      </div>
      <div className="flex flex-col  md:flex-row items-center justify-center w-full gap-2 px-2">
      <GradientCard
          type="explore"
          price="500/m"
          textColor="text-black"
          gradient={gradients[5]}
          description="Explore potential buyers with specially curated, pre-vetted leads. 10 leads per month."
        >
          <div className="bg-gradient-to-br from-violet-200 w-full absolute bottom-0 left-0 rounded-r-[28px] rounded-b-[28px] py-8 pl-6">
            <div className="">
              <OrganicButton label="explore" />
            </div>
          </div>
        </GradientCard>
        <GradientCard
          type="refine"
          price="1000/m"
          textColor="text-black"
          gradient={gradients[5]}
          description="Refine and target specific ideal customer profile requirements. 30 leads per month."
        >
          <div className="bg-gradient-to-br from-violet-200 w-full absolute bottom-0 left-0 rounded-r-[28px] rounded-b-[28px] py-8 pl-6">
            <div className="">
              <OrganicButton label="refine" />
            </div>
          </div>
        </GradientCard>

        <GradientCard
          type="lock"
          price="3000+/m"
          textColor="text-black"
          gradient={gradients[5]}
          description="Prioritize true product market fit. negotiable leads per month."
        >
          <div className="bg-gradient-to-br from-violet-200 w-full absolute bottom-0 left-0 rounded-r-[28px] rounded-b-[28px] py-8 pl-6">
            <div className="">
              <OrganicButton label="contact us" />
            </div>
          </div>
        </GradientCard>
      </div>
    </>
  )
}
