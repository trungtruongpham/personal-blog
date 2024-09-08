import Banner from "@/components/banner/banner";
import Card from "@/components/card/card";

export default function Home() {
  return (
    <div className="px-4 py-2 md:w-10/12 md:mx-auto">
      <Banner />
      <div className={"space-y-16"}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
}
