import Contact from "@/components/contact/contact";
import GetInTouch from "@/components/forms/get-in-touch/get-in-touch";

function AboutMePage() {
  return (
    <div className={"w-full md:w-10/12 mx-auto px-4"}>
      <Contact></Contact>
      <GetInTouch></GetInTouch>
    </div>
  );
}

export default AboutMePage;
