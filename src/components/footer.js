import React from "react";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Colors } from "../styles/colors";

export const Footer = () => {
  return (
    <StyledFooter>
      <a
        href="https://github.com/SiddanthNayak"
        target="_blank"
        rel="noreferrer"
      >
        <GitHubIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/siddanthnayak/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedInIcon />
      </a>
      <a
        href="https://twitter.com/siddanth_nayak"
        target="_blank"
        rel="noreferrer"
      >
        <TwitterIcon />
      </a>
      <a
        href="https://www.instagram.com/nayak__sid/?hl=en"
        target="_blank"
        rel="noreferrer"
      >
        <InstagramIcon />
      </a>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: ${Colors.blue.secondary};
    padding: 50px 0;
    a {
      color: ${Colors.white.base};
    }
    a:hover {
      color: ${Colors.blue.primary};
    }
    svg {
      margin: 0 10px;
      width: 35px;
      height: 35px;
    }
  }
`;
