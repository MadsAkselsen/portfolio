import React from "react";
import styled from "styled-components";
import { Button } from "components/common/Button";
import Tilt from "react-tilt";

const StyledButton = styled(Button)`
  font-size: 1.1rem;
`;

const StyledTilt = styled(Tilt)`
  width: 100%;

  @media (min-width: 990px) {
    height: 342px;
    width: 610px;
  }

  @media (min-width: 1200px) {
    height: 368px;
    width: 656px;
  }
`;

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 160px;

  @media (min-width: 990px) {
    flex-direction: row;
    justify-content: center;
    margin-bottom: 160px;
  }
`;

const ProjectDescription = styled.div`
  width: 100%;
  margin-bottom: 40px;

  @media (min-width: 990px) {
    margin-right: 70px;
    width: 280px;
  }

  @media (min-width: 1200px) {
    width: 370px;
  }

  h3 {
    font-size: 1.5rem;
    text-align: left;
    margin: 0;
  }
  p {
    font-size: 1.1rem;
    font-weight: normal;

    text-align: left;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;

  .sourceCode {
    font-size: 1.1rem;
    align-self: center;
    color: #e31b6d;
    font-weight: bold;
    margin-left: 20px;
    text-decoration: none;
    transition: all 0.2s;

    &:hover {
      transform: translateX(4px);
    }
  }
`;

export default function Project({ title, image, children }) {
  return (
    <ProjectWrapper>
      <ProjectDescription>
        <h3>{title}</h3>
        <p>{children}</p>
        <ButtonsWrapper>
          <a href="https://www.google.com/">
            <StyledButton>See Live</StyledButton>
          </a>

          <a href="https://www.google.com/" className="sourceCode">
            Source Code
          </a>
        </ButtonsWrapper>
      </ProjectDescription>
      <StyledTilt className="Tilt" options={{ max: 15, scale: 1 }}>
        <div className="Tilt-inner">
          <img src={image} alt="Project" width="100%"></img>
        </div>
      </StyledTilt>
    </ProjectWrapper>
  );
}
