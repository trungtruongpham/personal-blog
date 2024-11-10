// SocialIcons.tsx
import React from "react";
import { ExternalLink, Facebook, Linkedin } from "lucide-react";

const SocialIcons = () => {
  return (
    <div className={"flex gap-x-4"}>
      <ExternalLink size={16} />
      <Facebook size={16} />
      <Linkedin size={16} />
    </div>
  );
};

export default SocialIcons;
