import Author from "@/types/Author";

export default interface Blog {
  title: string;
  description: string;
  imageUrl: string;
  timeToRead: string;
  author: Author;
  publishedAt: Date;
  content: string;
}
