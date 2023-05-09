import React from "react";
import styled from "styled-components";
import { socialMedia } from "../config";
import { Side } from "./sidebar";
import { Colors } from "../styles/colors";
import Icon from "./icons/icon";

export const Social = () => (
  <Side orientation="left">
    <StyledSocialList>
      {socialMedia &&
        socialMedia.map(({ url, name }, i) => (
          <li key={i}>
            <a href={url} aria-label={name} target="_blank" rel="noreferrer">
              <Icon name={name} />
            </a>
          </li>
        ))}
    </StyledSocialList>
  </Side>
);

const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 200px;
    margin: 0 auto;
    background-color: ${Colors.blue.secondary};
  }

  li {
    margin-bottom: 10px;
    transition: var(--transition);
    &:hover,
    &:focus {
      transform: translateY(-3px);
      color: ${Colors.blue.primary};
    }
    a {
      padding: 10px;
      color: ${Colors.blue.secondary};
      &:hover,
      &:focus {
        transform: translateY(-3px);
        color: ${Colors.blue.primary};
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;
