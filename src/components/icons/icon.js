import React from "react";
import IconExternal from "./external";
import IconGitHub from "./github";
import IconInstagram from "./instagram";
import IconLinkedin from "./linkedin";
import IconTwitter from "./twitter";

const Icon = ({ name }) => {
  switch (name) {
    case "GitHub":
      return <IconGitHub />;
    case "Instagram":
      return <IconInstagram />;
    case "Linkedin":
      return <IconLinkedin />;
    case "Twitter":
      return <IconTwitter />;
    default:
      return <IconExternal />;
  }
};

export default Icon;
