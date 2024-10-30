import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/context/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Heighliner | The Legal Search Engine",
  description:
    "Heighliner is legal search engine purpose built for compiling quality resources to help legal professionals kickstart their legal research processes.",
  keywords: ['Heighliner', 'Legal search engine', 'document analysis', 'word document exports'],
  authors: [{ name: 'Heighliner' }],
  creator: 'Heighliner',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://heighliner.ai',
    title: 'Heighliner',
    description: 'Legal research starts here',
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
    description: 'Legal research starts here',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("antialiased dark:bg-black bg-white", inter.className)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
