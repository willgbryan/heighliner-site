"use client"
import { useEffect, useState, useRef } from 'react'
import { TweetGrid } from "@/components/cult/tweet-grid"
import LandingPageLayout from "./_layout"
import { Projects } from "./_sections/features"
import { BlackHoleHero } from "./_sections/hero"
import { Pricing } from "./_sections/price"
import { TimelineDemo } from './_sections/core'

export default function LandingPage() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [showOtherSections, setShowOtherSections] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const SCROLL_THRESHOLD = 1700

  useEffect(() => {
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

  return (
    <div style={{ height: '300vh' }}> {/* Adjust total height as needed */}
      <div ref={containerRef} style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100vh',
        zIndex: 10
      }}>
        <BlackHoleHero scrollPosition={scrollPosition} />
      </div>
      <div style={{ 
        position: 'absolute', 
        top: `${SCROLL_THRESHOLD}px`, 
        left: 0, 
        width: '100%'
      }}>
        <LandingPageLayout
          feature={<TimelineDemo />}
          price={<Pricing />}
        />
      </div>
    </div>
  )
}