import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import Link from "next/link";
import SocialIcons from "@/components/social-icons/social-icons";

export const Footer = () => (
  <footer className="w-full px-3 mb-16">
    <div className="flex flex-col md:w-10/12 md:mx-auto items-center gap-y-4 md:flex-row md:justify-between md:items-center my-8">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>PTT</AvatarFallback>
      </Avatar>
      <div className="flex flex-col items-center gap-y-4 md:flex-row md:gap-x-4">
        <Link href={"/"} className="font-semibold">
          Home
        </Link>
        <Link href={"/blogs"} className="font-semibold">
          Blog
        </Link>
        <Link href={"/contact"} className="font-semibold">
          Contact
        </Link>
        <Link href={"/about-me"} className="font-semibold">
          About me
        </Link>
      </div>
      <SocialIcons></SocialIcons>
    </div>
    <div className="flex flex-col-reverse md:flex-row items-center gap-y-2 pt-8 md:flex-row md:gap-x-4 md:justify-center md:w-10/12 w-full mx-auto border-t-2 border-black dark:border-white">
      <p>2024 © PTT. All rights reserved.</p>
      <Link href={"/"} className="underline underline-offset-4">
        Privacy Policy
      </Link>
      <Link href={"/"} className="underline underline-offset-4">
        Term of service
      </Link>
      <Link href={"/"} className="underline underline-offset-4">
        Cookies Settings
      </Link>
    </div>
  </footer>
);
