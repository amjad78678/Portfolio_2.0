import React from "react";
import Image from "next/image";
import { Meteors } from "@/components/ui/meteors";
import { WavyBackground } from "@/components/ui/wavy-background";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const skills = [
  { name: "JavaScript", icon: "/icons/javascript.png" },
  { name: "TypeScript", icon: "/icons/typescript.png" },
  { name: "React", icon: "/icons/react.png" },
  { name: "Next.js", icon: "/icons/nextjs.png" },
  { name: "Node.js", icon: "/icons/nodejs.png" },
  { name: "MongoDB", icon: "/icons/mongodb.png" },
  { name: "PostgreSQL", icon: "/icons/postgresql.png" },
  { name: "Tailwind CSS", icon: "/icons/tailwindcss.png" },
  { name: "Bootstrap", icon: "/icons/bootstrap.png" },
  { name: "AWS", icon: "/icons/aws.webp" },
  { name: "Git", icon: "/icons/git.png" },
  { name: "Figma", icon: "/icons/figma.png" },
];
const Skills = () => {
  return (
    <WavyBackground>
      <div className=" text-white my-12 z-30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center">Skills</h2>
          <HoverEffect items={skills} />
        </div>
      </div>
    </WavyBackground>
  );
};

export default Skills;
