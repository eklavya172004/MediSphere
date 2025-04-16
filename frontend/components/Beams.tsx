"use client";
import React from "react";
import { BackgroundBeams } from "./ui/Backgroundbeams";

export function BackgroundBeamsDemo() {
  return (
    <div className="relative min-h-screen flex items-center justify-center  overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 py-20 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-black to-neutral-400">
          Welcome to MediSphere
        </h1>
        <p className="mt-6 text-lg md:text-xl text-neutral-300 leading-relaxed">
          A modern healthcare management system built to connect patients, doctors, and services seamlessly.
          From emergency response to patient records, MediSphere empowers institutions to deliver better care with efficiency and precision.
        </p>
        <p className="mt-4 text-sm text-neutral-500">
          Explore a platform built for scalability, security, and simplicity.
        </p>
      </div>
      <BackgroundBeams className="absolute inset-0 z-0" />
    </div>
  );
}
