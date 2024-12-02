"use client";
import React from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
// import { HambergerMenu } from "iconsax-react";
import Link from "next/link";
import { Links } from "@/types";
import { MenuIcon } from "lucide-react";
// import { Links } from "./DesktopLinks";

const MobileNav = () => {
  const links: Links[] = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Trending",
      link: "/trending",
    },
    {
      label: "List",
      link: "/list",
    },
  ];
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={"icon"} variant={"ghost"}>
          <MenuIcon />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side={"right"}
        className="text-black w-[242px] md:w-[350px]"
      >
        <SheetTitle>
          <span className="sr-only">Toggle navigation menu</span>
        </SheetTitle>
        <div className="mt-5">
          <nav className="flex flex-col gap-4 py-6 border-b border-b-[#E0E0E0] text-[#5C5C5C] font-semibold text-base">
            {links.map((link) => (
              <Link key={link.label} href={link.link}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
