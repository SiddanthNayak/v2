import React from "react";
import styled from "styled-components";
import { Colors } from "../styles/colors";
import {
  Breakpoints,
  BorderRadius,
  FontSize,
  FontWeight,
  Spacing,
} from "../styles/styles";
import ButtonBase from "@mui/material/ButtonBase";
import Fade from "react-reveal/Fade";
import { email } from "../config";

export const Contact = () => {
  return (
    <S.Section id="contact">
      <Fade top duration={1000}>
        <h2>Get in Touch</h2>
      </Fade>
      <Fade clear duration={1000}>
        <p>
          I'm always looking for new opportunities in Frontend Development
          field. My inbox is always open. Whether you have a question or just
          want to say hi, I’ll try my best to get back to you!{" "}
        </p>
        <S.ButtonGroup>
          <a href={`mailto:${email}`}>
            <S.Button>Let's Talk</S.Button>
          </a>
        </S.ButtonGroup>
      </Fade>
    </S.Section>
  );
};

const S = {
  Section: styled.div`
    margin: 150px auto;
    max-width: 320px;
    @media only screen and (min-width: ${Breakpoints.lg}px) {
      max-width: 850px;
    }
    p {
      max-width: 540px;
      margin: 20px auto;
      font-size: ${FontSize.u3};
      color: ${Colors.blue.secondary};
      font-weight: ${FontWeight.normal};
    }
    h2 {
      font-size: clamp(40px, 5vw, 60px);
      text-align: center;
      color: ${Colors.blue.primary};
      margin-bottom: 0;
    }
  `,
  Title: styled.div`
    display: flex;
    align-items: center;
    color: ${Colors.blue.secondary};
    font-size: ${FontSize.u2};
    &:after {
      content: "";
      margin-left: ${Spacing.u2};
      flex: 1;
      height: 1px;
      background-color: ${Colors.blue.primary};
    }
  `,
  Button: styled(ButtonBase)`
    && {
      margin: 0 auto;
      background-color: ${Colors.blue.primary};
      color: ${Colors.white.base};
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
  ButtonGroup: styled.div`
    display: flex;
    justify-content: center;
  `,
};
