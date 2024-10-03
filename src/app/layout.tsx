import "./globals.css"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from 'next'
import { Toaster } from "sonner"

import { cn } from "@/lib/utils"
import { Analytics } from "@/components/analytics"
import { OrganicButton } from "@/components/cult/organic-button"
import TextAnimate from "@/components/cult/text-animate"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['Heighliner', 'Legal', 'Research', 'Artifacts'],
  authors: [{ name: 'Will' }],
  creator: 'Will',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://heighliner.ai',
    title: 'Heighliner',
    description: 'Legal research modernized',
    siteName: 'Heighliner',
    images: [{
      url: 'https://s.yimg.com/ny/api/res/1.2/6YLkalF05.eeHi15u_0_.w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTMyMA--/https://o.aolcdn.com/hss/storage/midas/29cdfcf2bb2af26b103c432d02cbe5e2/205180329/TN-JPL1978-300dpi-ed2.jpg',
      width: 640,
      height: 320,
      alt: 'Heighliner preview image',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Heighliner',
    description: 'Legal research modernized',
    images: ['https://s.yimg.com/ny/api/res/1.2/6YLkalF05.eeHi15u_0_.w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTMyMA--/https://o.aolcdn.com/hss/storage/midas/29cdfcf2bb2af26b103c432d02cbe5e2/205180329/TN-JPL1978-300dpi-ed2.jpg'],
  },
  icons: {
    icon: '/icon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  metadataBase: new URL('https://heighliner.ai'),
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen  font-regular antialiased",
          )}
        >
          <SpeedInsights/>
          <div className="relative flex   mx-auto flex-col">
            {/* <div className="top-12 absolute right-12 md:right-24 ">
              <OrganicButton label="<go>" />
            </div> */}

            <div className="flex-1">{children}</div>
          </div>
          <TailwindIndicator />
          {/* CREDIT BG PATTERN -  https://bg.ibelick.com/ */}
          <div className="absolute inset-0 -z-10 h-full  w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#FF5A00_100%)]"></div>
          <Toaster />

          <Analytics />
        </body>
      </html>
    </>
  )
}
