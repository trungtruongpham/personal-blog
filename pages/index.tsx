import type { NextPage } from "next";
import Image from "next/image";
import Layout from "../components/common/Layout";
import imgSrc from "../public/imgs/banner.jpg";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="h-screen px-2 sm:px-4 py-2.5">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <div className="banner px-16 flex justify-between items-center space-x-16">
            <Image
              className="rounded-[3rem]"
              src={imgSrc}
              alt="Picture of the author"
              width={800}
              height={500}
              layout="raw"
            />
            <div className="text-gray-50 font-small space-y-4">
              <div className="time flex space-x-2">
                <p>December 26, 2021</p>
                <span className="h-3 w-3 relative top-[5px] bg-deep-pink rounded-full inline-block pt-2"></span>
                <p>Blog</p>
              </div>
              <p className="font-bold text-3xl text-white">
                It takes a planet to expore the universe.
              </p>
              <p>
                80 days around the world, we'll find a pot of gold just sitting
                where the rainbow's ending. Time - we'll fight againt the time.
              </p>
              <button className="rounded-full px-8 py-3 space-x-2 bg-gradient-to-r from-deep-pink to-light-pink flex">
                <p className="">Continue Reading</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 relative top-[3px]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
