import React from "react";
import styled from "styled-components";
import { Colors } from "../styles/colors";
import {
  Breakpoints,
  BorderRadius,
  FontSize,
  FontWeight,
} from "../styles/styles";
import ButtonBase from "@mui/material/ButtonBase";
import Fade from "react-reveal/Fade";
import { useEffect } from "react";
import { useState } from "react";
import { navDelay } from "../utils/constants";

export const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  const one = <p className="intro">Hi, my name is</p>;
  const two = <h1 className="hero">Siddanth Nayak.</h1>;
  const three = <h2>I'm a Front-end Developer.</h2>;
  const four = (
    <p>
      My expertise lie in developing frontend designs in ReactJS and NextJS.
      Currently I'm focused on developing my skills as a frontend developer. I'm{" "}
      <span>open to working</span> and any available opportunities.
    </p>
  );
  const five = (
    <S.ButtonGroup>
      <a href="#contact">
        <S.Button>Contact Me</S.Button>
      </a>
      <a href="#projects">
        <S.OutlinedButton>My projects</S.OutlinedButton>
      </a>
    </S.ButtonGroup>
  );

  const items = [one, two, three, four, five];
  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <S.HeroSection>
      <div>
        {isMounted &&
          items.map((item, i) => {
            return (
              <Fade key={i} top duration={1000 + i * 200}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </Fade>
            );
          })}
      </div>
    </S.HeroSection>
  );
};

const S = {
  HeroSection: styled.div`
    display: flex;
    align-items: center;
    height: 100vh;
    margin: 0px auto;
    max-width: 320px;
    @media only screen and (min-width: ${Breakpoints.lg}px) {
      max-width: 850px;
      flex-direction: row;
    }
    p {
      color: ${Colors.blue.secondary};
      margin: 20px 0px 0px 0px;
      font-weight: ${FontWeight.normal};
      max-width: 600px;
      font-size: ${FontSize.u3};
    }
    h1 {
      color: ${Colors.blue.primary};
      margin: 0;
      font-size: clamp(30px, 8vw, 80px);
    }
    h2 {
      color: ${Colors.blue.secondary};
      margin: 0;
      font-size: clamp(20px, 4vw, 40px);
    }
    span {
      color: ${Colors.blue.primary};
      font-weight: ${FontWeight.strong};
    }
  `,
  ButtonGroup: styled.div`
    display: flex;
    margin: 40px 0;
    a {
      text-decoration: none;
      margin: 0;
      font-weight: ${FontWeight.strong};
      font-size: ${FontSize.u3};
      transition: var(--transition);
    }
  `,
  Button: styled(ButtonBase)`
    && {
      background-color: ${Colors.blue.primary};
      color: ${Colors.white.base};
      padding: 12px 24px;
      font-weight: ${FontWeight.strong};
      font-size: ${FontSize.u3};
      transition: var(--transition);
      border-radius: ${BorderRadius.default};
      margin-right: 20px;
    }
    &&:hover {
      transform: translate(-5px, -5px);
      box-shadow: 4px 4px 0 0 ${Colors.blue.secondary};
    }
  `,
  OutlinedButton: styled(ButtonBase)`
    && {
      background-color: transparent;
      border: 1px solid ${Colors.blue.primary};
      color: ${Colors.blue.primary};
      padding: 12px 24px;
      font-weight: ${FontWeight.strong};
      font-size: ${FontSize.u3};
      transition: var(--transition);
      border-radius: ${BorderRadius.default};
    }
    &&:hover {
      transform: translate(-5px, -5px);
      box-shadow: 4px 4px 0 0 ${Colors.blue.secondary};
    }
  `,
};
