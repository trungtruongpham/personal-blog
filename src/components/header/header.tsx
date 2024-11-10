"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle/theme-toggle";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import useWindowSize from "@/hooks/useWindowSize";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isShowMobileHeader, setIsShowMobileHeader] = useState(true);
  const [rotate, setRotate] = useState(0);
  const windowSize = useWindowSize();
  const pathName = usePathname();

  useEffect(() => {
    if (windowSize.width && windowSize.width > 760) {
      setIsShowMobileHeader(true);
      setRotate(0);
    } else {
      setIsShowMobileHeader(false);
    }
  }, [windowSize.width]);

  const handleHideMobileHeader = () => {
    setIsShowMobileHeader(!isShowMobileHeader);
    setRotate((currentRotate) => {
      return currentRotate > 0 && isShowMobileHeader ? 0 : 180;
    });
  };

  const isActivePath = (path: string): boolean => {
    if (path === "/") {
      return pathName === path;
    }
    return pathName.startsWith(path);
  };

  const getLinkClassName = (path: string): string => {
    return `transition-all duration-200 hover:text-gray-600 dark:hover:text-gray-300 ${
      isActivePath(path) ? "font-bold" : ""
    }`;
  };

  return (
    <div
      className={
        "md:flex px-4 sticky top-0 py-2 dark:bg-black/75 bg-white/30 backdrop-blur-3xl border-b-0 z-10"
      }
    >
      <div className={"md:flex md:w-10/12 justify-between w-full mx-auto px-1"}>
        <div className="flex justify-between items-center">
          <Link href={"/"} className={" relative border-black py-2"}>
            <p>invert dev</p>
          </Link>
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
            <Link href={"/"} className={getLinkClassName("/")}>
              Home
            </Link>
            <Link href={"/blogs"} className={getLinkClassName("/blogs")}>
              Blogs
            </Link>
            <Link href={"/projects"} className={getLinkClassName("/projects")}>
              Projects
            </Link>
            <Link href={"/about-me"} className={getLinkClassName("/about-me")}>
              About me
            </Link>
            <ThemeToggle></ThemeToggle>
            <Link href={"/subscribe"} className={""}>
              <Button variant={"default"} className={"w-full"}>
                Subscribe
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
