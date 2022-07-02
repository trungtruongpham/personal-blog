import Header from "../header/header";

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
