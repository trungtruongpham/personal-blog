import type {
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import dynamic from "next/dynamic";
import Layout from "../components/common/layout";
import BannerPost from "../components/post/banner-post";
import Post from "../components/post/post";
import { loadPosts } from "../lib/load-posts";

const Home: NextPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <div className="h-full px-2 sm:px-4 py-2.5">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <BannerPost></BannerPost>
          <div className="grid grid-cols-3 grid-flow-col flex-wrap mt-10 px-16 w-full">
            {posts.map((p: any) => {
              return (
                <Post
                  id={p.id}
                  imgSrc={p.coverPhoto.url}
                  title={p.title}
                  date={p.datePublished}
                  slug={p.slug}
                ></Post>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = await loadPosts();

  return {
    props: {
      posts,
    },
  };
};

export default dynamic(() => Promise.resolve(Home), { ssr: false });
