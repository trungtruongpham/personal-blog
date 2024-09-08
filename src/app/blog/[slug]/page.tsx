import Image from "next/image";
import Blog from "@/types/Blog";
import { Badge } from "@/components/ui/badge";
import React from "react";
import SocialIcons from "@/components/social-icons/social-icons";
import GetInTouch from "@/components/forms/get-in-touch/get-in-touch";

const blog: Blog = {
  imageUrl:
    "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  timeToRead: "5 minutes read",
  title: "The future of technology",
  description: "Description",
  content:
    "Lorem ipsum odor amet, consectetuer adipiscing elit. Turpis pellentesque quisque amet proin nulla velit varius pharetra iaculis. Mattis a tristique tellus condimentum amet ipsum torquent urna. In dictum placerat consectetur a aptent pharetra rutrum mollis. Malesuada posuere nisi dui viverra ligula urna himenaeos. Sociosqu lorem maecenas tortor mus parturient taciti quis. Mus rhoncus est dapibus adipiscing hac suspendisse enim?\n" +
    "\n" +
    "Ultrices malesuada condimentum eleifend imperdiet consequat posuere mollis metus. Auctor nam blandit cras sollicitudin eros non cubilia. Consectetur aptent maximus conubia nostra interdum tellus convallis ad. Convallis eleifend magna; nulla porta aliquet nibh finibus curae. Ornare tellus fusce non aliquet cras viverra venenatis mollis. Platea mollis vel libero tempus non. Turpis arcu tristique leo class imperdiet parturient mollis torquent fermentum. Et sapien eros volutpat integer magna taciti diam. Imperdiet euismod pretium finibus cubilia sit consequat dignissim lacus quis.\n" +
    "\n" +
    "Mus erat orci et ut sociosqu natoque. Nisi finibus fames fusce non curae mattis dui nisl. At netus consectetur purus phasellus egestas. Imperdiet cubilia consequat lectus dapibus quisque tellus odio. Convallis dignissim montes facilisis; massa adipiscing est. Aenean habitant commodo ultricies convallis molestie rhoncus.\n" +
    "\n" +
    "Eget eleifend montes magnis at sit eget porttitor ridiculus. Iaculis lacinia magnis lacinia; sagittis cursus cursus phasellus. Habitasse dapibus dolor facilisi dapibus himenaeos, tempor malesuada nascetur. Nibh conubia cras molestie conubia gravida. Malesuada id dictum sapien nibh semper dui interdum orci. Mauris sociosqu vulputate et posuere adipiscing lacinia nisl nascetur ex. Eleifend tristique sapien habitasse nunc elit dapibus. Cubilia dui nostra class amet dignissim parturient dis.\n" +
    "\n" +
    "Ultricies maximus curae semper primis eros netus tempor auctor interdum. Tempus hendrerit luctus porta libero venenatis velit. Quam litora urna hendrerit euismod dolor dui proin per. Cubilia sagittis nisl vestibulum pharetra erat hendrerit. Netus enim feugiat viverra a quis blandit urna. Hendrerit mattis a tempor phasellus parturient.\n" +
    "\n" +
    "Maecenas massa aliquet gravida arcu ipsum neque curae sociosqu nibh. Lacus laoreet congue leo est varius eleifend habitasse inceptos. Hac interdum facilisis praesent luctus risus. Rhoncus lacinia libero torquent maecenas arcu sociosqu. Scelerisque mattis mollis quam tincidunt, odio habitasse vestibulum. Accumsan tellus facilisi ullamcorper sit in, morbi morbi. Ultrices porta adipiscing fames pharetra tristique orci interdum ultrices. Consequat habitasse dolor luctus tincidunt eget pharetra inceptos?\n" +
    "\n" +
    "Nulla dictum vestibulum elementum nascetur, nunc laoreet et. Lectus dapibus habitasse enim lectus euismod neque; lobortis suspendisse quam. Sociosqu auctor inceptos ligula praesent rhoncus libero urna? Ad himenaeos parturient dictum tincidunt volutpat. Aliquam eu ad sapien accumsan ut sapien? Interdum habitant eleifend lobortis bibendum sit morbi rutrum sodales. Senectus ut cursus malesuada et feugiat donec mi. Placerat pharetra at suspendisse nostra felis ridiculus euismod nisi. Nam sagittis nam justo rhoncus libero viverra dictum. Ipsum per volutpat elementum sociosqu, nibh mollis tempus condimentum.\n" +
    "\n" +
    "Phasellus lacus felis fringilla enim orci ultrices massa. Himenaeos dolor imperdiet ornare scelerisque sodales. Nulla porta mi justo vel tellus nunc tincidunt. Porttitor adipiscing praesent primis class facilisis. Fames ad blandit aenean maecenas posuere urna platea ipsum. Sit in adipiscing parturient consequat ornare venenatis pharetra. Posuere sollicitudin dictum vitae tincidunt phasellus fringilla. Nec mollis ultricies tincidunt; montes fusce sollicitudin at. Venenatis pulvinar ridiculus dignissim ligula; fermentum parturient.\n" +
    "\n" +
    "Nunc arcu molestie magna ornare, orci consequat congue. Accumsan et primis sollicitudin condimentum inceptos vestibulum dignissim rutrum vitae. Duis congue lobortis semper, ultricies taciti suscipit varius neque. Ex consequat penatibus euismod iaculis dignissim viverra posuere? At morbi vulputate mi litora ridiculus. Vel duis iaculis cubilia cubilia lobortis lacus finibus nullam.\n" +
    "\n" +
    "Dictumst libero bibendum orci lorem ante turpis nisi. Eleifend semper sociosqu ac auctor venenatis congue mi erat porta. Ac primis eget sed dapibus elementum facilisis volutpat. Sociosqu a interdum et velit etiam natoque. Mauris placerat leo convallis in montes vivamus mus diam scelerisque. Montes lobortis vehicula massa finibus auctor dictumst accumsan semper. Sapien efficitur euismod nec in dolor sem nisl cursus. Phasellus primis nisl consectetur proin tempus sapien sagittis a.\n" +
    "\n" +
    "Bibendum ultrices felis odio est lacinia. Vitae sagittis a; nascetur nam augue tortor. Sem viverra lacinia laoreet bibendum ligula libero torquent mus. Feugiat maecenas diam platea sit elementum dapibus donec. Justo enim nunc quam molestie inceptos dis eget convallis. Nisi ultricies netus nisl cursus nascetur lobortis et a. Volutpat blandit condimentum tempor taciti enim dictumst orci. Luctus ante fringilla habitant congue nunc arcu ridiculus.\n" +
    "\n" +
    "Libero laoreet ut aliquam mollis nascetur, vivamus luctus metus. Montes ex viverra justo praesent justo habitant nam. Habitant leo sit; sagittis tristique ad ex ante? Consequat dignissim nec eros efficitur volutpat maecenas interdum eget nostra. Mattis metus orci et ultrices molestie eget. Nullam varius commodo iaculis etiam sed.\n" +
    "\n" +
    "Egestas habitasse dolor sapien per sit a turpis ante sed. Nascetur mauris elit himenaeos nam ligula suspendisse litora accumsan. Eget eget mauris tempor suspendisse at odio. Finibus luctus nostra ultrices curae volutpat; platea suspendisse. Dictumst vehicula proin libero taciti gravida mi erat hac risus. Sodales netus ac consectetur velit at nam ullamcorper tempor.\n" +
    "\n" +
    "Feugiat maximus vulputate euismod euismod, aliquam integer tellus. Commodo mauris congue fames nam ridiculus elit hac? Ullamcorper porttitor dapibus imperdiet aliquam torquent purus. Facilisis venenatis id mi mattis habitasse auctor ac. Hac tincidunt faucibus; varius massa turpis ornare. Himenaeos litora nibh natoque ex elementum quisque eu. Proin tristique faucibus risus et; ridiculus ultrices donec. Lacus lacus ut suspendisse interdum natoque dapibus. Arcu leo et nisl adipiscing risus aptent!\n" +
    "\n" +
    "Potenti potenti quam congue euismod aenean. Magnis scelerisque nam, viverra mollis nisi cubilia eu ad. Vel placerat auctor ut tellus egestas et efficitur. Condimentum et aptent per diam phasellus quam. Tempor ad fames viverra ornare venenatis consectetur. Iaculis duis elementum tellus etiam suspendisse taciti ipsum. Lectus ultricies dui eleifend nisl lacus hac suscipit sagittis. Vitae mattis adipiscing morbi urna ligula. Suspendisse fames nisi vestibulum parturient hendrerit a.\n" +
    "\n" +
    "Dictum gravida sagittis curabitur quis vehicula tortor. Class lacus dignissim metus diam fames dapibus ullamcorper class. Sem lectus convallis platea ut per phasellus montes. Pulvinar lacinia ut vivamus quam neque. Curabitur aliquet orci ut magna litora nisi. Libero odio adipiscing sed aenean feugiat nascetur. In maximus ornare vel vehicula senectus himenaeos felis mattis class. Felis vel ac class dolor vestibulum laoreet pulvinar interdum. Vel metus parturient placerat nascetur magnis.\n" +
    "\n" +
    "Porttitor pulvinar lacus; a arcu risus pellentesque ipsum. Ad congue vehicula pulvinar risus gravida. Consequat mi potenti elit sit aliquet tristique massa? Interdum congue odio quis pulvinar lacus blandit. Vestibulum sagittis pharetra curabitur mus posuere condimentum cubilia praesent. Ligula sem consectetur urna eu vehicula tellus ut condimentum. Diam cras aenean senectus porttitor pharetra mollis. Nullam consequat vivamus pulvinar convallis fermentum porta auctor massa.\n" +
    "\n" +
    "Erat mollis facilisis montes mattis rhoncus. Erat nisi est leo, sem lectus amet. Quisque ex gravida amet montes diam donec consequat fringilla. Habitant congue suscipit aptent parturient class. Enim luctus torquent ultricies et vehicula eros. Amet hac cubilia elit lacinia nibh porta nunc elementum. Justo quisque sed euismod nisi, habitasse sem. Dictum fusce habitant inceptos congue leo.\n" +
    "\n" +
    "Placerat augue sapien ut nec himenaeos venenatis integer placerat enim. Eget nam vehicula penatibus montes, torquent sed nisi? Commodo mauris enim suspendisse rutrum non at. Dignissim placerat magnis pharetra sagittis blandit luctus varius lacus commodo. Dignissim urna parturient malesuada at est mattis lobortis tellus. Pretium habitasse sapien cubilia praesent himenaeos suspendisse tempor orci dapibus.\n" +
    "\n" +
    "Senectus nisl nunc fusce aenean lacus. Ac primis tristique imperdiet habitasse venenatis hendrerit. Convallis iaculis etiam consequat nascetur lobortis fusce. Tempor dolor condimentum libero eros phasellus? Ablandit accumsan aliquet felis sociosqu enim est. Tempor felis pellentesque cursus molestie commodo finibus. Natoque urna pretium; ridiculus fusce primis turpis. Sagittis in facilisi litora; ac turpis hac curabitur.",
  author: {
    name: "Trung Truong",
  },
  publishedAt: new Date(),
  slug: "hello-world",
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
          <div>
            <p>Written by</p>
            <p>{blog.author.name}</p>
          </div>
          <div className={"flex-grow"}>
            <p>Published at</p>
            <p>{blog.publishedAt.toString()}</p>
          </div>
          <div className={"justify-end"}>
            <SocialIcons />
          </div>
        </div>
        <div>
          <p>{blog.content}</p>
        </div>
      </div>
      <GetInTouch />
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
