"use client"
import { useEffect, useState, useRef } from 'react'
import LandingPageLayout from "./_layout"
import { BlackHoleHero } from "./_sections/hero"
import { Pricing } from "./_sections/price"
import { TimelineDemo } from './_sections/core'
import { BottomSection } from './_sections/bottom'
import { Nav } from '@/components/nav'

export default function LandingPage() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [showOtherSections, setShowOtherSections] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const timelineDemoRef = useRef<HTMLDivElement>(null)
  const bottomSectionRef = useRef<HTMLDivElement>(null)

  const SCROLL_THRESHOLD = 1900
  const TIMELINE_APPEAR_THRESHOLD = SCROLL_THRESHOLD - 10

  useEffect(() => {
    // Enforce dark mode
    document.documentElement.classList.add('dark')

    const handleScroll = () => {
      const container = containerRef.current
      if (!container) return

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const newScrollPosition = Math.min(scrollTop, SCROLL_THRESHOLD)
      setScrollPosition(newScrollPosition)

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
  }, [showOtherSections])

  useEffect(() => {
    const positionBottomSection = () => {
      const timelineDemo = timelineDemoRef.current
      const bottomSection = bottomSectionRef.current
      if (timelineDemo && bottomSection) {
        const timelineDemoRect = timelineDemo.getBoundingClientRect()
        const bottomSectionTop = TIMELINE_APPEAR_THRESHOLD + timelineDemoRect.height
        bottomSection.style.top = `${bottomSectionTop}px`
      }
    }

    positionBottomSection()
    window.addEventListener('resize', positionBottomSection)

    return () => {
      window.removeEventListener('resize', positionBottomSection)
    }
  }, [])

  return (
    <div className="bg-black text-white flex flex-col">
      <div ref={containerRef} style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 10
      }}>
        <BlackHoleHero scrollPosition={scrollPosition} />
      </div>
      <div style={{
        position: 'fixed',
        top: '1rem',
        right: '1rem',
        zIndex: 50
      }}>
        <Nav />
      </div>
      <div
        ref={timelineDemoRef}
        style={{
          position: 'absolute',
          top: `${TIMELINE_APPEAR_THRESHOLD}px`,
          left: 0,
          width: '100%',
          zIndex: 20
        }}
      >
        <TimelineDemo />
      </div>
      <div
        ref={bottomSectionRef}
        style={{
          position: 'absolute',
          left: 0,
          width: '100%',
          zIndex: 30
        }}
      >
        <BottomSection />
      </div>
    </div>
  )
}