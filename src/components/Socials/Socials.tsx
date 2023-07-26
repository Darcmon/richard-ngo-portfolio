import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";

type Props = {};

const socials = [
  { name: "Instagram", href: "#", alt: "instagram" },
  { name: "LinkedIn", href: "#", alt: "linkedin" },
  { name: "GitHub", href: "#", alt: "github" },
];

const Socials = (props: Props) => {
  return (
    <div className="flex center">
      <AiFillInstagram />
      <AiFillLinkedin />
      <AiFillGithub />
    </div>
  );
};

export default Socials;
