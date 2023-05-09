import React, { useContext } from "react";
import styled from "styled-components";
import { Colors } from "../styles/colors";
import {
  Breakpoints,
  Spacing,
  BorderRadius,
  FontSize,
  FontWeight,
} from "../styles/styles";
import PortfolioContext from "../context/context";
import Fade from "react-reveal/Fade";
import IconExternal from "../components/icons/external";
import ButtonBase from "@mui/material/ButtonBase";

export const Project = () => {
  const { projects } = useContext(PortfolioContext);
  return (
    <S.Section id="projects">
      <Fade top duration={1000}>
        <S.Title>My Projects</S.Title>
      </Fade>
      {projects &&
        projects.map((project, i) => {
          return (
            <S.Project
              key={project.id}
              style={{ transitionDelay: `${i + 2}00ms` }}
            >
              <Fade clear duration={1000}>
                <div className="project-content">
                  <h4 className="project-title">{project.title}</h4>
                  <div className="project-details">
                    <p>{project.description}</p>
                    <ul>
                      {project &&
                        project.tech_stack.map((item) => {
                          return <li key={item.id}>{item.tech}</li>;
                        })}
                    </ul>
                  </div>
                </div>

                <div className="project-image">
                  <img src={project.img_url} alt="" />
                </div>
                <a href={project.url} rel="noopener noreferrer" target="_blank">
                  <S.OutlinedButton>
                    View Project
                    <IconExternal />
                  </S.OutlinedButton>
                </a>
              </Fade>
            </S.Project>
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
  Project: styled.div`
    margin: 50px 0;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(6, 1fr);
    align-items: center;

    @media screen and (max-width: 768px) {
      /* align-items: flex-start; */
      display: block;
    }
    &:nth-of-type(odd) {
      .project-content {
        grid-column: 7 / -1;
        text-align: right;

        @media (max-width: 1080px) {
          grid-column: 5 / -1;
        }
        @media (max-width: 768px) {
          grid-column: 1 / -1;
          text-align: left;
        }
      }

      .project-image {
        grid-column: 1 / 8;

        @media (max-width: 768px) {
          grid-column: 1 / -1;
          left: 0;
        }
      }
      ul {
        @media (min-width: 1200px) {
          justify-content: flex-end;
        }
      }
      a {
        grid-column: 1/4;
      }
    }

    .project-image {
      width: 100%;
      position: relative;
      z-index: -1;
      border-radius: 2px;
      grid-column: 6 / -1;
      grid-row: 1 / -1;
      @media screen and (max-width: 768px) {
        height: 100%;
        left: 0;
      }

      img {
        width: 100%;
        border-radius: 2px;
        position: relative;

        @media screen and (max-width: 768px) {
          object-fit: cover;
          height: 100%;
        }
      }
    }

    .project-content {
      position: relative;
      grid-column: 1 / 7;
      grid-row: 1 / -1;

      @media (max-width: 600px) {
        grid-column: 1 / -1;
      }

      .project-title {
        font-size: 2rem;
        margin: 10px 0 30px;
        color: ${Colors.blue.primary};
      }
      .project-details {
        font-size: 15px;
        line-height: 1.5;
        color: ${Colors.grey.base};

        p {
          background-color: #252525;
          padding: 20px 25px;
          @media (max-width: 600px) {
            background-color: transparent;
            padding: 20px 0;
          }
        }

        ul {
          display: flex;
          margin-top: 20px;
          flex-wrap: wrap;
          list-style: none;
          gap: 10px;
          padding: 0;
          li {
            padding: 10px;
            border-radius: ${BorderRadius.default};
            background-color: ${Colors.blue.primary};
            color: ${Colors.white.base};
            font-family: monospace;
          }
        }
      }
    }
    a {
      text-decoration: none;
      margin: 0;
      font-weight: ${FontWeight.strong};
      font-size: ${FontSize.u3};
      color: ${Colors.blue.primary};
      transition: var(--transition);
      grid-area: 6 / -4 / 7 / -1;
    }
    svg {
      height: 25px;
      width: 25px;
      margin-left: 20px;
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
