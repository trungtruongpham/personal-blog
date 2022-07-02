import { LoremIpsum } from "lorem-ipsum";
import Layout from "../../components/common/layout";
import { loadPosts } from "../../lib/load-posts";
import { useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import { loadPostBySlug } from "../../lib/post-by-slug";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 12,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

interface PostProps {
  title: string;
  datePublished: string;
  content: { html: string };
  type: string;
  coverPhoto: { url: string };
  slug: string;
}

const PostPage = ({
  postBySlug,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [post, setPost] = useState<PostProps>({
    title: "",
    datePublished: "",
    content: { html: "" },
    type: "",
    coverPhoto: { url: "" },
    slug: "",
  });

  useEffect(() => {
    if (post) {
      setPost(postBySlug);
    }
  }, []);

  return (
    <Layout>
      <div className="container flex-col text-white h-full px-[15rem] flex flex-wrap justify-between items-center mx-auto">
        <p className="text-white text-4xl">{post.title}</p>
        {post.coverPhoto.url && (
          <Image
            className="rounded-[3rem] h-[400px] w-[400px]"
            src={post.coverPhoto.url}
            alt="Image of post"
            height={100}
            width={100}
            layout="raw"
          />
        )}
        <div className="flex space-x-2 border-t border-t-shade-tint pt-2">
          <p id="abc">{post.datePublished}</p>
          <span className="h-3 w-3 relative top-[5px] bg-deep-pink rounded-full inline-block pt-2"></span>
          <p>{post.type}</p>
        </div>
        <p className="text-white leading-loose">
          {lorem.generateParagraphs(7)}
        </p>
        <div
          className="text-white leading-loose"
          dangerouslySetInnerHTML={{ __html: post.content.html }}
        ></div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug =
    context?.params?.slug !== undefined ? context.params.slug?.toString() : "";
  const postBySlug = await loadPostBySlug(slug);

  return {
    props: {
      postBySlug,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await loadPosts();
  const paths = posts.map((post: any) => {
    return {
      params: {
        slug: post.slug.toString(),
      },
    };
  });
  console.log(paths);

  return {
    paths,
    fallback: false, // false or 'blocking'
  };
};

export default dynamic(() => Promise.resolve(PostPage), { ssr: false });
