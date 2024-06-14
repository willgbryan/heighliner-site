import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import TextAnimate from "./cult/text-animate"

export function FAQ() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-20 bg-transparent rounded-t-[48px]">
      <div className="py-12">
        <TextAnimate
          text="FAQ"
          type="shiftInUp"
          className="md:text-[6rem] text-[2rem] font-bold md:leading-10 md:pb-14 tracking-tight text-black md:py-8"
        />
      </div>

      {/* CREDIT BG PATTERN -  https://bg.ibelick.com/ */}
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_50%,#FF7C33_100%)]"></div>

      <div className="md:mx-auto">
        <Accordion
          type="multiple"
          className="w-full md:space-y-9 rounded-xl border border-violet-50/20 text-black  backdrop-blur "
        >
          <AccordionItem
            value="item-1"
            className="border-x border-b-2 border-violet/10 rounded-md md:px-4"
          >
            <AccordionTrigger className=" text-xl md:text-3xl text-left pl-2  font-medium">
              <span className="px-6 md:px-2">
                When can I expect my new leads?
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-lg font-semibold text-black px-4">
              Within one week of signing up! While quality is guaranteed from the jump,
              Magi needs to learn. By turning leads around quickly, we give you time to adequately
              explore their potential so we can refine leads for the next month.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="border-x border-b-2 border-violet/10 rounded-md md:px-4"
          >
            <AccordionTrigger className=" text-xl md:text-3xl text-left pl-2  font-medium">
              What does the refinement process look like?
            </AccordionTrigger>
            <AccordionContent className="text-lg font-semibold text-black pl-2">
              For a given set of leads, Magi will ask which leads converted, are in process,
              or did not convert. This information is all Magi needs to refine future leads.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="border-x border-b-2 border-violet/10 rounded-md md:px-4"
          >
            <AccordionTrigger className=" text-xl md:text-3xl text-left pl-2  font-medium">
              Can Magi integrate with my existing CRM?
            </AccordionTrigger>
            <AccordionContent className="text-lg font-semibold text-black pl-2">
              Absolutely, and this is a great to have as it can accelerate Magi's understanding
              of your current market positioning. Currently Magi can integrate with Salesforce, Hubspot,
              Attio, and Zoho.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="border-x border-b-2 border-violet/10 rounded-md md:px-4"
          >
            <AccordionTrigger className=" text-xl md:text-3xl text-left pl-2  font-medium">
              How can I be sure Magi can deliver results?
            </AccordionTrigger>
            <AccordionContent className="text-lg font-semibold text-black pl-2">
              The founding team here at Magi has a non-traditional background when it comes to 
              lead generation. Our goal is to turn this process on its head and deliver an intelligent
              measurable system for growing any business. Magi will always charge monthly unless 
              explicitly requested otherwise, users are free to terminate at any point if Magi 
              does not deliver on its promise.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-5"
            className="border-x border-b-2 border-violet/10 rounded-md md:px-4"
          >
            <AccordionTrigger className=" text-xl md:text-3xl text-left pl-2  font-medium">
              How does it work?
            </AccordionTrigger>
            <AccordionContent className="text-lg font-semibold text-black pl-2">
              More on this coming soon, if you've read this far and you're interested...
              lead generation is just the tip of the iceberg. Please reach out if you 
              have an idea for another use case.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
