import React from "react";
import styled from "styled-components";
import { Colors } from "../styles/colors";
import {
  Breakpoints,
  FontSize,
  FontWeight,
  Spacing,
  BorderRadius,
} from "../styles/styles";
import Fade from "react-reveal/Fade";

const About = () => {
  const skills = [
    "JavaScript (ES6)",
    "ReactJS",
    "NextJS",
    "TypeScript",
    "Redux Toolkit",
  ];

  return (
    <S.Section id="about">
      <Fade top duration={1000}>
        <S.Title>About Me</S.Title>
      </Fade>
      <Fade clear duration={2000}>
        <div className="container">
          <S.Description>
            <p>
              Hello! My name is <span>Siddanth Nayak</span>. I am a Front-End
              Developer with a little over 1 year experience in{" "}
              <span>ReactJS</span> and <span>Next JS</span>. My interest in
              web-development started in 2021 when I was working as a Marketing
              Associate for a start-up with just 6 people.
            </p>
            <p>
              Since then, I've worked on multiple projects while I was working
              at DevAppSys and have built several side-projects aswell.
            </p>
            <p>
              I'm constantly <span>looking for opportunities</span> and open to
              new challenges.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            <S.List>
              {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
            </S.List>
          </S.Description>
          <S.Image>
            <div className="wrapper">
              <img src="profile-image.jpg" alt="Profile" />
            </div>
          </S.Image>
        </div>
      </Fade>
    </S.Section>
  );
};
export default About;
const S = {
  Section: styled.div`
    margin: 50px auto;
    max-width: 320px;
    @media only screen and (min-width: ${Breakpoints.lg}px) {
      max-width: 850px;
    }
    .container {
      padding: 40px 0;
      margin: 50px 0;
      display: flex;
      align-items: center;
      @media (max-width: 780px) {
        display: block;
      }
    }
  `,
  Title: styled.div`
    display: flex;
    align-items: center;
    color: ${Colors.blue.secondary};
    font-size: clamp(26px, 5vw, 32px);
    &:after {
      content: "";
      margin-left: ${Spacing.u2};
      flex: 1;
      height: 1px;
      background-color: ${Colors.blue.primary};
    }
  `,
  Description: styled.div`
    color: ${Colors.blue.secondary};
    font-size: ${FontSize.u3};
    font-weight: ${FontWeight.normal};
    margin-right: 20px;
    span {
      color: ${Colors.blue.primary};
      font-weight: ${FontWeight.strong};
    }
  `,
  List: styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0 20px;
    list-style: none;
    padding: 0;
    color: ${Colors.blue.secondary};
    li {
      margin-top: 10px;
      &:before {
        content: "▹";
        margin-right: 5px;
        color: ${Colors.blue.primary};
        font-size: ${FontSize.u3};
        font-weight: ${FontWeight.strong};
      }
    }
  `,
  Image: styled.div`
    position: relative;
    max-width: 300px;

    @media (max-width: ${Breakpoints.lg}px) {
      margin: 50px auto 0;
      width: 70%;
    }

    .wrapper {
      display: block;
      position: relative;
      width: 100%;
      border-radius: ${BorderRadius.default};
      transition: var(--transition);
      &:hover,
      &:focus {
        outline: 0;
        transform: translate(-4px, -4px);
        &:after {
          transform: translate(8px, 8px);
        }
      }

      img {
        position: relative;
        border-radius: ${BorderRadius.default};
        width: 230px;
        height: 230px;
      }

      &:before,
      &:after {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: ${BorderRadius.default};
        transition: var(--transition);
      }
      &:after {
        background-color: ${Colors.blue.secondary};
        top: 6px;
        left: 16px;
        z-index: -1;
      }
    }
  `,
};
