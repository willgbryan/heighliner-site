"use client"
import { Suspense, useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { GradientHeading } from "@/components/cult/gradient-heading"
import TextAnimate from "@/components/cult/text-animate"
import { FAQ } from "@/components/faq"
import { Navbar } from "@/components/navbar"
import { LinkPreview } from "@/components/system-link"

let tabs = [
  { id: "hero", label: "Hero" },
  { id: "feature", label: "Feature" },
  { id: "price", label: "Price" },
]

export default function LandingPageLayout({
  hero,
  feature,
  price,
}) {
  const [activeSection, setActiveSection] = useState(tabs[0].id)
  const heroRef = useRef(null)
  const featureRef = useRef(null)
  const priceRef = useRef(null)
  const sectionRefs = {
    hero: heroRef,
    feature: featureRef,
    price: priceRef,
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.1 }
    )
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current)
      }
    })
    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current)
        }
      })
    }
  }, [])

  const handleCtaClick = (id: string) => {
    const section = document.querySelector(`#price`)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setActiveSection("3")
    }
  }

  return (
    <>
      <div className="relative z-[9999] w-screen">
        <div className="flex items-center justify-between px-10">
          <div className="fixed top-10 left-10 z-[9999]">
            <motion.div
              initial={{ opacity: 0, y: -120 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 120 }}
              transition={{ duration: 1.6, delay: 0.9, type: "spring" }}
            >
              <div className="flex justify-center items-center flex-col px-4 mt-1">
                  <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10 bg-[#e4e4e4] p-1 rounded-lg">
                    <LinkPreview url="https://themagi.systems" className="font-normal">
                      Magi
                    </LinkPreview>{" "}
                  </p>
                </div>
            </motion.div>
          </div>
          <div className="fixed top-10 right-10 z-[9999] bg-[#e4e4e4] rounded-lg">
            <motion.div
              initial={{ opacity: 0, y: -120 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 120 }}
              transition={{ duration: 1.6, delay: 0.9, type: "spring" }}
              className="max-w-4xl"
            >
              <Navbar activeSection={activeSection} />
            </motion.div>
          </div>
        </div>
      </div>
      <main className="bg-[#e4e4e4] overflow-hidden">
        <section id="hero" ref={heroRef}>
          <div className="h-[900px]">{hero}</div>
        </section>
        <section id="feature" ref={featureRef} className="z-10">
          <div className="py-9">
            <div className="">{feature}</div>
          </div>
        </section>
        <div className=""></div>
        <div className="relative h-full rounded-t-[4rem]">
          <section id="price" ref={priceRef}>
            <div className="w-full h-full md:h-[700px]">{price}</div>
          </section>
        </div>
        <section className="relative">
          <div className="w-full h-full">
            <FAQ />
          </div>
        </section>
      </main>
    </>
  )
}