import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import BannerImage from "../../../public/banner-image.jpg";

function Banner() {
  return (
    <div className={"space-y-8 text-center"}>
      <div id="banner-description">
        <h1 className={"text-2xl font-extrabold md:text-3xl pb-4"}>
          Welcome to my Developer Blog!
        </h1>
        <p>
          Explore the world of .NET, Reactjs, Azure, NextJS, and Tailwindcss
          with me.
        </p>
      </div>
      <div id={"banner-buttons"} className={"flex gap-x-4 justify-center"}>
        <Button>Learn More</Button>
        <Button variant={"outline"}>Sign Up</Button>
      </div>
      <Image
        src={BannerImage}
        alt={"Banner image"}
        className={"max-h-96"}
      ></Image>
    </div>
  );
}

export default Banner;
