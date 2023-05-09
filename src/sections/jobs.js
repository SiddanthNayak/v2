import React, { useContext } from "react";
import styled from "styled-components";
import { Colors } from "../styles/colors";
import { Breakpoints, FontSize, FontWeight, Spacing } from "../styles/styles";
import PortfolioContext from "../context/context";
import Fade from "react-reveal/Fade";

export const Jobs = () => {
  const { experience } = useContext(PortfolioContext);
  return (
    <S.Section id="jobs">
      <Fade top duration={1000}>
        <S.Title>Where I've Worked</S.Title>
      </Fade>
      {experience &&
        experience.map((item, i) => {
          return (
            <Fade key={item.id} clear duration={1000}>
              <S.ExpSection style={{ transitionDelay: `${i + 2}00ms` }}>
                <S.Col>
                  <h2>{item.company_name}</h2>
                  <p className="designation">{item.designation}</p>
                  <p className="duration">{item.duration}</p>
                </S.Col>
                <S.VDiv></S.VDiv>
                <ul>
                  {item.description?.split("\n").map((text, index) => {
                    return <li key={index}>{text}</li>;
                  })}
                </ul>
              </S.ExpSection>
            </Fade>
          );
        })}
    </S.Section>
  );
};

const S = {
  Section: styled.div`
    margin: 50px auto;

    max-width: 320px;
    @media only screen and (min-width: ${Breakpoints.lg}px) {
      max-width: 850px;
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
  ExpSection: styled.div`
    font-size: ${FontSize.u3};
    padding: 40px 0;
    @media (min-width: 768px) {
      display: flex;
      align-items: stretch;
    }
    ul,
    li {
      list-style: none;
      padding-left: 0;
      font-weight: ${FontWeight.normal};
      flex: 0.7;
    }
    li {
      &:before {
        content: "▹";
        margin-right: 5px;
        color: ${Colors.blue.primary};
        font-size: ${FontSize.u3};
        font-weight: ${FontWeight.strong};
      }
    }
  `,
  VDiv: styled.div`
    width: 5px;
    background-color: ${Colors.blue.primary};
    margin-right: 20px;
    @media (max-width: 768px) {
      display: none;
    }
  `,
  Col: styled.div`
    color: ${Colors.blue.secondary};
    text-align: center;
    flex: 0.3;
    h2 {
      margin-bottom: 0;
      color: ${Colors.blue.primary};
    }
    .designation {
      font-weight: ${FontWeight.normal};
      margin: 0;
    }
    .duration {
      font-weight: ${FontWeight.light};
      margin: 0;
    }
  `,
};
