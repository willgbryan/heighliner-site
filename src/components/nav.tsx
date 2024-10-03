"use client";
import React from "react";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { FloatingNav } from "./cult/floating-navbar";
export function Nav() {
  return (
    <div className="relative  w-full">
      <FloatingNav />
    </div>
  );
}