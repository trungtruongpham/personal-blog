import Card from "@/components/card/card";

function BlogPage() {
  return (
    <div
      className={"w-full flex flex-col gap-y-4 md:w-10/12 mx-auto px-4 py-4"}
    >
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  );
}

export default BlogPage;
