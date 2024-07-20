import Banner from "@/components/banner/banner";
import Card from "@/components/card/card";

export default function Home() {
  return (
    <div className="px-4 py-2 text-center md:w-3/4 mx-auto space-y-8">
      <Banner />
      <div className={"space-y-16"}>
        <Card
          description={""}
          imageUrl={""}
          title={""}
          linkUrl={""}
          viewAllUrl={""}
        ></Card>
        <Card
          description={""}
          imageUrl={""}
          title={""}
          linkUrl={""}
          viewAllUrl={""}
        ></Card>
        <Card
          description={""}
          imageUrl={""}
          title={""}
          linkUrl={""}
          viewAllUrl={""}
        ></Card>
      </div>
    </div>
  );
}
