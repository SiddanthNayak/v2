import * as React from "react";
// import {Component} from 'react';
import styled from "styled-components";
import { navLinks } from "../config";
import ButtonBase from "@mui/material/ButtonBase";
import { BorderRadius, FontSize, FontWeight } from "../styles/styles";
import { Colors } from "../styles/colors";
import Fade from "react-reveal/Fade";

export const Nav = () => {
  return (
    <S.StyledNav>
      <ul>
        {navLinks &&
          navLinks.map(({ url, name }, i) => (
            <Fade key={i} clear duration={1000 + i * 200} cascade>
              <li>
                <a href={url}>{name}</a>
              </li>
            </Fade>
          ))}
      </ul>
      <Fade clear duration={1000}>
        <a
          href="https://tinyurl.com/nayaksiddanth2"
          rel="noopener noreferrer"
          target="_blank"
        >
          <S.OutlinedButton>Resumé</S.OutlinedButton>
        </a>
      </Fade>
    </S.StyledNav>
  );
};

const S = {
  StyledNav: styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0px 50px;
    padding: 20px 0;
    color: ${Colors.blue.primary};
    @media (max-width: 1200px) {
      display: none;
    }
    overflow: hidden;
    position: relative;

    ul {
      display: flex;
      list-style: none;
    }

    li {
      padding: 0 30px;
      transition: var(--transition);
      a {
        color: ${Colors.blue.secondary};
      }
      &:hover,
      &:focus {
        color: ${Colors.blue.primary};
        transform: translateY(-3px);
      }
    }

    a {
      text-decoration: none;
      margin: 0;
      font-size: ${FontSize.u4};
      transition: var(--transition);
      &:hover,
      &:focus {
        color: ${Colors.blue.primary};
      }
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
      background-color: ${Colors.blue.primary};
      color: ${Colors.white.base};
    }
  `,
};
