"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import projectData from "../data/project_data.json";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>

        <Link href="/projects">
          <MenuItem setActive={setActive} active={active} item="Projects">
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
              {projectData.projects.map((project, index) =>
                index <= 3 ? (
                  <ProductItem
                    key={project.id}
                    title={project.title}
                    href={project.live}
                    src={project.image}
                    description={project.description.substring(0, 60) + "..."}
                  />
                ) : null
              )}
            </div>
          </MenuItem>
        </Link>

        <Link href="/skills">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Skills"
          ></MenuItem>
        </Link>

        <Link href="/resume">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Resume"
          ></MenuItem>
        </Link>

        <Link href="/contact">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
