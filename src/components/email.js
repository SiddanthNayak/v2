import React from "react";
import styled from "styled-components";
import { email } from "../config";
import { Side } from "./sidebar";
import { Colors } from "../styles/colors";
import { FontSize } from "../styles/styles";

export const Email = ({ isHome }) => (
  <Side isHome={isHome} orientation="right">
    <StyledLinkWrapper>
      <a href={`mailto:${email}`}>{email}</a>
    </StyledLinkWrapper>
  </Side>
);

const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 200px;
    margin: 0 auto;
    background-color: ${Colors.blue.secondary};
  }

  a {
    margin: 20px auto;
    padding: 10px;
    font-size: ${FontSize.u3};
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;
    text-decoration: none;
    color: ${Colors.blue.secondary};
    transition: var(--transition);

    &:hover,
    &:focus {
      transform: translateY(-3px);
      color: ${Colors.blue.primary};
    }
  }
`;
