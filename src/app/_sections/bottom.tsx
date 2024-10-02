import React from "react";
import { TextHoverEffect } from "@/components/cult/text-hover-effect";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

export function BottomSection() {
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white dark:bg-black">
      <div className="h-[40rem] flex items-center justify-center">
        <TextHoverEffect text="TRY HEIGHLINER" />
      </div>
      <Button 
        variant="ghost" 
        onClick={() => router.push('https://heighliner.tech')}
        className="mt-8 text-xl py-6 px-8"
      >
        Launch
      </Button>
    </div>
  );
}