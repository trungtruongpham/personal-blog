"use client";

import { usePathname } from "next/navigation";

function Page() {
  const pathName = usePathname();

  console.log(pathName);

  return <div>BlogPage with slug: {pathName}</div>;
}

export default Page;
