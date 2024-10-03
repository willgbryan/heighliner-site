"use client"
import { Suspense, useEffect, useRef, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { ThemeProvider } from 'next-themes'

export default function LandingPageLayout({
  hero,
  feature,
  price,
}: {
  hero?: React.ReactNode;
  feature: React.ReactNode;
  price: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLElement>(null)
  const featureRef = useRef<HTMLElement>(null)
  const priceRef = useRef<HTMLElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [showOtherSections, setShowOtherSections] = useState(false)
  const controls = useAnimation()

  const SCROLL_THRESHOLD = 1900
  const TIMELINE_APPEAR_THRESHOLD = SCROLL_THRESHOLD - 100

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current
      if (!container) return

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const newScrollPosition = Math.min(scrollTop, SCROLL_THRESHOLD)
      setScrollPosition(newScrollPosition)

      if (scrollTop > TIMELINE_APPEAR_THRESHOLD) {
        const progress = (scrollTop - TIMELINE_APPEAR_THRESHOLD) / (SCROLL_THRESHOLD - TIMELINE_APPEAR_THRESHOLD)
        controls.start({ opacity: progress, y: 50 * (1 - progress) })
      } else {
        controls.start({ opacity: 0, y: 50 })
      }

      if (scrollTop > SCROLL_THRESHOLD && !showOtherSections) {
        setShowOtherSections(true)
        container.style.position = 'relative'
      } else if (scrollTop <= SCROLL_THRESHOLD && showOtherSections) {
        setShowOtherSections(false)
        container.style.position = 'fixed'
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [showOtherSections, controls])

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
      <div style={{ height: '300vh' }}>

        <div ref={containerRef} style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          zIndex: 10
        }}>
          {hero && (
            <section id="hero" ref={heroRef}>
              <div className="h-[900px]">{hero}</div>
            </section>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.5 }}
          style={{
            position: 'absolute',
            top: `${TIMELINE_APPEAR_THRESHOLD}px`,
            left: 0,
            width: '100%',
            zIndex: 20
          }}
        >
        </motion.div>

        <div style={{
          position: 'absolute',
          top: `${SCROLL_THRESHOLD}px`,
          left: 0,
          width: '100%'
        }}>
        </div>
      </div>
    </ThemeProvider>
  )
}