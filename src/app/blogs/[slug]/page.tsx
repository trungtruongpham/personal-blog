import Image from "next/image";
import Blog from "@/types/Blog";
import { Badge } from "@/components/ui/badge";
import React from "react";
import SocialIcons from "@/components/social-icons/social-icons";
import GetInTouch from "@/components/forms/get-in-touch/get-in-touch";
import StyledMarkdown from "@/components/markdown-content/StyledMarkdown";
import markdownContent from "../../../../public/markdownContent";

const blog: Blog = {
  imageUrl:
    "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  timeToRead: "5 minutes read",
  title: "The future of technology",
  description: "Description",
  content: markdownContent,
  author: {
    name: "Trung Truong",
  },
  publishedAt: new Date(),
  slug: "hello-world",
};

const dateTimeOptions: Intl.DateTimeFormatOptions = {
  timeZone: "UTC",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
};

async function DetailPage({ params }: { params: { slug: string } }) {
  const blog = await getBlog(params.slug);

  return (
    <div className={"md:flex md:flex-col px-4 py-2 mt-8 gap-y-16"}>
      <div
        className={
          "flex flex-col w-full md:w-10/12 gap-y-8 justify-center mx-auto"
        }
      >
        <div>
          <div className={"flex gap-x-4"}>
            <Badge variant={"outline"} className={"font-bold"}>
              Technology
            </Badge>
            <p className={"text-sm"}>{blog.timeToRead}</p>
          </div>
          <h1 className={"font-bold text-3xl"}>{blog.title}</h1>
        </div>
        <div className={"relative min-w-auto min-h-[200px] md:min-h-[600px]"}>
          <Image src={blog.imageUrl} alt={"Blog image"} fill={true}></Image>
        </div>
        <div className={"flex gap-x-4"}>
          <div className={"text-sm"}>
            <p>Written by</p>
            <p>{blog.author.name}</p>
          </div>
          <div className={"flex-grow text-sm"}>
            <p>Published at</p>
            <p>
              {new Intl.DateTimeFormat("en", dateTimeOptions).format(
                blog.publishedAt,
              )}
            </p>
          </div>
          <div className={"justify-end"}>
            <SocialIcons />
          </div>
        </div>
        <div className={"markdown-content w-full md:w-2/3 md:mx-auto"}>
          <StyledMarkdown content={blog.content}></StyledMarkdown>
        </div>
      </div>
      <div className={"md:w-10/12 gap-y-8 justify-center mx-auto"}>
        <GetInTouch />
      </div>
      <div className="flex flex-col items-start space-y-4 md:flex-row md:items-center justify-between my-4 mx-auto py-4 w-full md:w-10/12">
        <div className="flex flex-col items-center gap-y-4">
          <span className="font-bold mr-2">Share this post</span>
          <SocialIcons></SocialIcons>
        </div>
        <div className="flex items-center space-x-4">
          <Badge variant={"secondary"} className="text-gray-500">
            Technology
          </Badge>
          <Badge variant={"secondary"} className="text-gray-500">
            Development
          </Badge>
          <Badge variant={"secondary"} className="text-gray-500">
            Programming
          </Badge>
          <Badge variant={"secondary"} className="text-gray-500">
            Blogging
          </Badge>
        </div>
      </div>
    </div>
  );
}

export const generateStaticParams = async () => {
  const blogData = await getBlogData();

  return blogData.map((blog) => ({
    params: {
      slug: blog.slug,
    },
  }));
};

const getBlogData = async () => {
  return [blog, blog, blog, blog];
};

const getBlog = async (slug: string) => {
  console.log(slug);
  return blog;
};

export default DetailPage;
