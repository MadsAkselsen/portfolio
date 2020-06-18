import React from "react";
import styled from "styled-components";
import { Button } from "components/common/Button";
import Tilt from "react-tilt";

const StyledButton = styled(Button)`
  font-size: 1.3rem;
`;

const Wrapper = styled.div`
  height: 100%;
  background-color: #252934;
  padding-bottom: 0%;
  font-size: 2rem;
  color: white;
  text-align: center;
  h2 {
    margin-bottom: 100px;
  }
`;

const ProjectWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 160px;
`;

const ProjectDescription = styled.div`
  margin-right: 30px;

  h3 {
    font-size: 1.8rem;
    text-align: left;
    margin: 0;
  }
  p {
    font-size: 1.3rem;
    font-weight: normal;
    width: 20vw;
    text-align: left;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;

  .sourceCode {
    font-size: 1.3rem;
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

export default function Projects() {
  return (
    <Wrapper>
      <h2>PROJECTS</h2>
      {/* Project start */}
      <ProjectWrapper>
        <ProjectDescription>
          <h3>Project Title</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            neque, ipsa animi maiores repellendus distinctio aperiam earum dolor
            voluptatum consequatur blanditiis inventore debitis fuga numquam
            voluptate ex architecto itaque molestiae.
          </p>
          <ButtonsWrapper>
            <a href="#">
              <StyledButton>See Live</StyledButton>
            </a>

            <a href="#" className="sourceCode">
              Source Code
            </a>
          </ButtonsWrapper>
        </ProjectDescription>
        <Tilt
          className="Tilt"
          options={{ max: 15, scale: 1 }}
          style={{ height: 250, width: 600 }}
        >
          <div className="Tilt-inner">
            {" "}
            <img
              src={require("../../../../src/images/projectImage.jpg")}
              alt="Mads Akselsen"
              width="600px"
            ></img>{" "}
          </div>
        </Tilt>
      </ProjectWrapper>
      {/* Project end */}
      {/* Project start */}
      <ProjectWrapper>
        <ProjectDescription>
          <h3>Project Title</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            neque, ipsa animi maiores repellendus distinctio aperiam earum dolor
            voluptatum consequatur blanditiis inventore debitis fuga numquam
            voluptate ex architecto itaque molestiae.
          </p>
          <ButtonsWrapper>
            <a>
              <StyledButton>See Live</StyledButton>
            </a>

            <a href="#" className="sourceCode">
              Source Code
            </a>
          </ButtonsWrapper>
        </ProjectDescription>
        <Tilt
          className="Tilt"
          options={{ max: 15, scale: 1 }}
          style={{ height: 250, width: 600 }}
        >
          <div className="Tilt-inner">
            {" "}
            <img
              src={require("../../../../src/images/projectImage.jpg")}
              alt="Mads Akselsen"
              width="600px"
            ></img>{" "}
          </div>
        </Tilt>
      </ProjectWrapper>
      {/* Project end */}
      {/* Project start */}
      <ProjectWrapper>
        <ProjectDescription>
          <h3>Project Title</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            neque, ipsa animi maiores repellendus distinctio aperiam earum dolor
            voluptatum consequatur blanditiis inventore debitis fuga numquam
            voluptate ex architecto itaque molestiae.
          </p>
          <ButtonsWrapper>
            <a>
              <StyledButton>See Live</StyledButton>
            </a>

            <a href="#" className="sourceCode">
              Source Code
            </a>
          </ButtonsWrapper>
        </ProjectDescription>
        <Tilt
          className="Tilt"
          options={{ max: 15, scale: 1 }}
          style={{ height: 250, width: 600 }}
        >
          <div className="Tilt-inner">
            {" "}
            <img
              src={require("../../../../src/images/projectImage.jpg")}
              alt="Mads Akselsen"
              width="600px"
            ></img>{" "}
          </div>
        </Tilt>
      </ProjectWrapper>
      {/* Project end */}
      {/* Project start */}
      <ProjectWrapper>
        <ProjectDescription>
          <h3>Project Title</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            neque, ipsa animi maiores repellendus distinctio aperiam earum dolor
            voluptatum consequatur blanditiis inventore debitis fuga numquam
            voluptate ex architecto itaque molestiae.
          </p>
          <ButtonsWrapper>
            <a>
              <StyledButton>See Live</StyledButton>
            </a>

            <a href="#" className="sourceCode">
              Source Code
            </a>
          </ButtonsWrapper>
        </ProjectDescription>
        <Tilt
          className="Tilt"
          options={{ max: 15, scale: 1 }}
          style={{ height: 250, width: 600 }}
        >
          <div className="Tilt-inner">
            <img
              src={require("../../../../src/images/projectImage.jpg")}
              alt="Mads Akselsen"
              width="600px"
            ></img>
          </div>
        </Tilt>
      </ProjectWrapper>
      {/* Project end */}
    </Wrapper>
  );
}
