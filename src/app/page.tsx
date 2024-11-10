import Banner from "@/components/banner/banner";
import SkillSections from "@/components/skills/skill-sections";

export default function Home() {
  return (
    <div className="px-4 py-2 md:w-10/12 md:mx-auto space-y-8">
      <Banner />
      <div className={"space-y-16 w-full"}>
        <SkillSections />
      </div>
    </div>
  );
}
