"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle/theme-toggle";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import useWindowSize from "@/hooks/useWindowSize";

export default function Header() {
  const [isShowMobileHeader, setIsShowMobileHeader] = useState(true);
  const [rotate, setRotate] = useState(0);
  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.width && windowSize.width > 760) {
      setIsShowMobileHeader(false);
      setRotate(0);
    } else {
      setIsShowMobileHeader(true);
    }
  }, [windowSize.width]);

  const handleHideMobileHeader = () => {
    setIsShowMobileHeader(!isShowMobileHeader);
    setRotate((currentRotate) => {
      return currentRotate > 0 && isShowMobileHeader ? 0 : 180;
    });
  };

  return (
    <div
      className={
        "md:flex md:justify-between px-4 py-2 md:text-center md:w-2/3 md:mx-auto"
      }
    >
      <div className="flex justify-between items-center mb-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <motion.div animate={{ rotate }} transition={{ type: "spring" }}>
          <ChevronDown
            className={"md:hidden"}
            onClick={handleHideMobileHeader}
          ></ChevronDown>
        </motion.div>
      </div>
      {(isShowMobileHeader ||
        (windowSize.width && windowSize.width >= 760)) && (
        <div className={"flex flex-col gap-6 md:flex-row md:items-center"}>
          <Link href={"/"} className={"font-bold"}>
            Home
          </Link>
          <Link href={"/blog"}>Blogs</Link>
          <Link href={"/project"}>Projects</Link>
          <Link href={"/about-me"}>About me</Link>
          <ThemeToggle></ThemeToggle>
          <Link href={"/subscribe"} className={""}>
            <Button variant={"default"} className={"w-full"}>
              Subscribe
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
