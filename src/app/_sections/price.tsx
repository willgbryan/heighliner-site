import { GradientCard } from "@/components/cult/card"
import { GradientHeading } from "@/components/cult/gradient-heading"
import { InfiniteMovingCards } from "@/components/cult/infinite-moving-cards"
import { OrganicButton } from "@/components/cult/organic-button"
import TextAnimate from "@/components/cult/text-animate"
import { LinkPreview } from "@/components/system-link"
import { cn } from "@/lib/utils"

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
              variant="secondary"
            >
              <h2 className="hidden  md:flex items-center font-normal text-[5rem] pb-10">
                Browse 3000+ Startups Already On Magi
                {/* <span className="font-brand pt-9 sr-only">brand</span> */}
              </h2>
            </GradientHeading>
          </div>
      <div className="flex flex-col  md:flex-row items-center justify-center w-full gap-12 px-2">
          <div className="mt-12 rounded-md flex flex-col antialiased bg-[#e4e4e4] dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={startups}
            direction="right"
            speed="slow"
          />
      </div>
    </div>
    <div className="flex justify-center items-center flex-col px-4">
      <p className="text-neutral-500 dark:text-neutral-400 text-5xl md:text-5xl max-w-3xl mx-auto mt-24">
        <LinkPreview url="https://themagi.systems" className="font-normal">
         [ Try Magi ]
        </LinkPreview>{" "}
      </p>
    </div>
    </>
  )
}

const startups = [
  {
    quote:
      "Superb AI is a leading computer vision platform and professional services provider that provides enterprise-grade, end-to-end MLOps and training data management solutions. The platform automates data preparation at scale and makes building datasets quick, systematic, and repeatable.",
    name: "Superb AI",
    title: "Founding Team: Hyun Kim, Moonsu Cha, Jonghyuk Lee, Jungkwon Lee",
  },
  {
    quote:
    "Afero's IoT platform empowers manufacturers to bring secure, user-friendly products to market, faster. Afero delivers highly intuitive user experiences, setting the bar for any IoT PaaS company. The company's software accelerates time-to-market, eases ongoing operations, and simplifies how business applications control and interact with far-edge and cloud development.",
    name: "Afero",
    title: "Founding Team: Joe Britt",
  },
  {
    quote:
      "Sanity is a modern headless CMS (Content Management System) that uses structured content to endlessly re-use content across any channel and a composable content cloud that empowers teams at industry-leading companies like PUMA, AT&T, Burger King, Tata, and Figma to build digital experiences.",
    name: "Sanity",
    title: "Founding Team: Even Westvang, Henri Gaskjenn, Magnus Kongsli Hillestad, Oyvind Rostad, Simen Svale Skogsrud",
  },
  {
    quote:
    "AllVoices is an employee feedback management platform that enables employees to report issues and share feedback directly with their company's leadership. It helps companies resolve and prevent workplace issues, creating a culture of transparency and accountability.",
    name: "AllVoices",
    title: "Founding Team: Claire Schmidt",
  },
  {
    quote:
      "Picus Security is the pioneer of Breach and Attack Simulation (BAS). The Picus Complete Security Control Validation Platform is trusted by leading organizations to continuously assess their security controls with automated attacks, mitigate gaps, and enhance their security posture against real-world threats.",
    name: "Picus Security",
    title: "Founding Team: H. Alper Memis, Volkan Erturk, Dr. Suleyman Ozarslan",
  },
  {
    quote:
    "Lark is a digital health startup that provides virtual care through AI coaching, smart devices, and tele-monitoring.",
    name: "Lark",
    title: "Founding Team: Julia Hu, Jeff Zira",
  },
  {
    quote:
    "SupportLogic helps companies improve their customer support experience using generative and predictive AI to maximize revenue retention. It delivers the world's first support experience (SX) management platform that enables companies to proactively understand and act on customer insights trapped within their ticketing systems.",
    name: "SupportLogic",
    title: "Founding Team: Krishna Raj Raja",
  },
  {
    quote:
    "Digits is a financial management platform providing the next generation of tools that give operators a full understanding of their business in real-time.",
    name: "Digits",
    title: "Founding Team: Jeff Seibert",
  },
];
