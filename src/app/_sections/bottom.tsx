"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import { Github, Twitter, Linkedin } from "lucide-react";
import { ShootingStars } from "@/components/cult/shooting-stars";
import { StarsBackground } from "@/components/cult/stars-background";

export function BottomSection() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <div className="flex-grow flex flex-col items-center justify-center relative">
        <div className="h-[40rem] flex flex-col items-center justify-center w-full relative">
          <h2 className="relative z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white mb-8">
            Try Heighliner
          </h2>
          <Button
            variant="outline"
            onClick={() => router.push('https://heighliner.tech')}
            className="text-xl px-8 text-white hover:text-gray-300 relative z-10"
          >
            Launch
          </Button>
          <ShootingStars />
          <StarsBackground />
        </div>
      </div>
      
      <footer className="w-full py-8 px-4 border-t border-stone-800 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Heighliner</h3>
            <p className="text-sm text-gray-400">Legal Research Modernized</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm">
              <li><a href="#" className="hover:text-gray-300">About Us</a></li>
              <li><a href="#" className="hover:text-gray-300">Products</a></li>
              <li><a href="#" className="hover:text-gray-300">Pricing</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <a href="#" className="mx-2 hover:text-gray-300">
              <Github size={24} />
            </a>
            <a href="#" className="mx-2 hover:text-gray-300">
              <Twitter size={24} />
            </a>
            <a href="#" className="mx-2 hover:text-gray-300">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
        <div className="text-center mt-8 text-sm text-gray-500">
          © {new Date().getFullYear()} Reach AI, Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
}