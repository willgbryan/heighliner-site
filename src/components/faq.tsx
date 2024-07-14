import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import TextAnimate from "./cult/text-animate"

export function FAQ() {
  return (
    <div className="mx-auto max-w-7xl mt-24 px-6 sm:py-32 lg:px-8 lg:py-20 bg-transparent rounded-t-[48px]">
      <div className="">
        <TextAnimate
          text="FAQ"
          type="shiftInUp"
          className="md:text-[6rem] text-[2rem] font-normal md:leading-10 md:pb-14 tracking-tight text-black md:py-8"
        />
      </div>

      {/* CREDIT BG PATTERN -  https://bg.ibelick.com/ */}
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_50%,#FF7C33_100%)]"></div>

      <div className="md:mx-auto">
        <Accordion
          type="multiple"
          className="w-full md:space-y-9 rounded-xl text-black  backdrop-blur "
        >
          <AccordionItem
            value="item-1"
            className="border-b-2 border-stone-900 rounded-sm md:px-4"
          >
            <AccordionTrigger className=" text-xl md:text-3xl text-left pl-2  font-normal">
                Are the reviews credible?
            </AccordionTrigger>
            <AccordionContent className="text-lg font-normal text-black pl-2">
              Absolutely, we manually vet every review and do not allow unauthenticated users 
              to leave reviews or even view existing reviews.
              Organizations that have done business are encouraged to review eachother.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="border-b-2 border-stone-900 rounded-md md:px-4"
          >
            <AccordionTrigger className=" text-xl md:text-3xl text-left pl-2  font-medium">
              What does it cost to use Magi?
            </AccordionTrigger>
            <AccordionContent className="text-lg font-normal text-black pl-2">
              It is entirely free to post a new RFP or search Magi's database of startups. We are
              slowly rolling out paid features via the dashboard where any organization can gain insights into
              their view count, viewer profiles, and other intent metrics. If you're interested in a demo, send us an email 
              at Will@themagi.tech.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="border-b-2 border-stone-900 rounded-md md:px-4"
          >
            <AccordionTrigger className=" text-xl md:text-3xl text-left pl-2  font-medium">
              What if I don't want my information on an RFP?
            </AccordionTrigger>
            <AccordionContent className="text-lg font-normal text-black pl-2">
              RFP listings are completely anonymous. If you create an RFP, your name, contact information,
              and company name are all hidden from viewers. You will be notified of submissions by inquiring
              companies, and sharing of your contact information is entirely at your own discrection.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
