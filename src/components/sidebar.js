import React from "react";
import styled from "styled-components";
import { Colors } from "../styles/colors";
import { Fade } from "react-reveal";
import { loaderDelay } from "../utils/constants";
import { useEffect } from "react";
import { useState } from "react";

export const Side = ({ children, orientation }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), loaderDelay);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isMounted && (
        <StyledSideElement orientation={orientation}>
          <Fade clear duration={loaderDelay}>
            {children}
          </Fade>
        </StyledSideElement>
      )}
    </>
  );
};

const StyledSideElement = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: ${(props) => (props.orientation === "left" ? "40px" : "auto")};
  right: ${(props) => (props.orientation === "left" ? "auto" : "40px")};
  z-index: 10;
  color: ${Colors.blue.secondary};

  @media (max-width: 1080px) {
    left: ${(props) => (props.orientation === "left" ? "20px" : "auto")};
    right: ${(props) => (props.orientation === "left" ? "auto" : "20px")};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
