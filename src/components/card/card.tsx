import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
  viewAllUrl: string;
}

const Card = () => {
  return (
    <div className={"flex md:flex-row flex-col items-center gap-y-8 w-full"}>
      <div
        id={"title-section"}
        className={"flex flex-col items-start text-start gap-y-4 w-1/2"}
      >
        <p className={"text-3xl font-bold "}>Recent Projects That Inspire</p>
        <p className={"text-md"}>
          Explore a showcase of our recent projects, each with a unique story
          and innovative solutions. Click on the project to learn more.
        </p>
        <div className={"flex-row space-x-2"}>
          <Link href={""}>
            <Button variant={"outline"}>View all</Button>
          </Link>
          <Link href={""}>
            <Button variant={"ghost"} className={"gap-x-2"}>
              Read more
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Button>
          </Link>
        </div>
      </div>
      <Image
        src={
          "https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/1bbd4fa7143e2418eefcfdca2dda0bd7?_a=AQAEuiZ"
        }
        alt={"Card Image"}
        width={500}
        height={700}
      ></Image>
    </div>
  );
};
export default Card;
