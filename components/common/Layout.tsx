import { Head } from "next/document";
import Header from "../header/Header";

type LayoutProps = {
  children: React.ReactElement;
};

export default function Layout(props: LayoutProps) {
  return (
    <div className="bg-megenta">
      <Header></Header>
      <div className="body">{props.children}</div>
    </div>
  );
}
