import type { NextPage } from "next";
import Layout from "../components/common/Layout";
import BannerPost from "../components/post/banner-post";
import Post from "../components/post/post";

const Home: NextPage = () => {


  return (
    <Layout>
      <div className="h-full px-2 sm:px-4 py-2.5">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <BannerPost></BannerPost>
          <div className="flex flex-wrap mt-10 px-16 w-full">
            <Post imgSrc="/imgs/post-1.jpg" title="I would like to die on Mars. Just not on impact" date="December 26, 2022"></Post>
            <Post imgSrc="/imgs/post-2.jpg" title="Life is too short for long-term grudges." date="December 26, 2022"></Post>
            <Post imgSrc="/imgs/post-3.jpg" title="Don't go through life, grow through life" date="December 26, 2022"></Post>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
