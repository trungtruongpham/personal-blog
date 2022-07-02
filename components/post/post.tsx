import imgSrc from "../../public/imgs/banner.jpg";
import Image from "next/image";
import Link from "next/link";

type PostProps = {
  imgSrc: string;
  title: string;
  date: string;
  id: string;
  slug: string;
};

const Post = (props: PostProps) => {
  console.log(props);
  
  return (
    <Link href={`/post/${props.slug}`}>
      <a className="max-w-[400px] w-full text-white cursor-pointer space-y-4">
        <Image
          className="rounded-[3rem] h-[400px] w-[400px]"
          src={props.imgSrc}
          alt="Picture of the author"
          height={100}
          width={100}
          layout="raw"
        />
        <p className="font-semibold text-2xl">{props.title}</p>
        <div className="flex space-x-2 border-t border-t-shade-tint pt-2">
          <p>{props.date}</p>
          <span className="h-3 w-3 relative top-[5px] bg-deep-pink rounded-full inline-block pt-2"></span>
          <p>Blog</p>
        </div>
      </a>
    </Link>
  );
};

export default Post;
