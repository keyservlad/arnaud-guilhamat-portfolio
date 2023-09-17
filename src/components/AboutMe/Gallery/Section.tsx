"use client";
import React from "react";

interface SectionProps {
  index: number;
  title: string;
  manageModal: (active: boolean, index: number, x: number, y: number) => void;
}

export default function Section({ index, title, manageModal }: SectionProps) {
  return (
    <div
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      className="group flex w-full cursor-pointer items-center justify-between border-t border-[#C9C9C9] px-12 py-24 transition-all duration-200 last-of-type:border-b hover:opacity-50"
    >
      <h2 className="pointer-events-none m-0 text-6xl transition-all duration-[0.4s] group-hover:-translate-x-[10px]">
        {title}
      </h2>
      <p className="pointer-events-none m-0 font-light transition-all duration-[0.4s] group-hover:translate-x-[10px]">
        Design & Development
      </p>
    </div>
  );
}
