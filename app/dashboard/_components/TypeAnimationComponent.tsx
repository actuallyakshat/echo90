"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function TypeAnimationComponent() {
  return (
    <TypeAnimation
      sequence={[
        "clarity.",
        1400,
        "inspiration.",
        1400,
        "peace.",
        1400,
        "growth.",
        1400,
      ]}
      wrapper="span"
      cursor={false}
      className="ml-1 font-bold text-primary"
      preRenderFirstString
      speed={10}
      repeat={Infinity}
    />
  );
}
