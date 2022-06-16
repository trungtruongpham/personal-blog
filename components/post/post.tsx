import imgSrc from "../../public/imgs/banner.jpg";
import Image from "next/image";

type PostProps = {
  imgSrc: string;
  title: string;
  date: string;
};

const Post = (props: PostProps) => {
  return (
    <div className="flex-auto text-white cursor-pointer w-1/3 pr-5">
      <Image
        className="rounded-[3rem] h-[400px] w-[400px]"
        src={props.imgSrc}
        alt="Picture of the author"
        height={100}
        width={100}
        layout="raw"
      />
      <p className="font-semibold text-xl">{props.title}</p>
      <div className="flex space-x-2 border-t border-t-shade-tint">
        <p>{props.date}</p>
        <span className="h-3 w-3 relative top-[5px] bg-deep-pink rounded-full inline-block pt-2"></span>
        <p>Blog</p>
      </div>
    </div>
  );
};

export default Post;
