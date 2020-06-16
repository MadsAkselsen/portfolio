import React from "react";
import styled from "styled-components";
import { Button } from "components/common/Button";

const Wrapper = styled.div`
  height: 100%;
  background-color: #252934;
  padding-bottom: 10%;
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
  margin-bottom: 80px;
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

  a {
    font-size: 1.3rem;
    align-self: center;
    color: #e31b6d;
    font-weight: bold;
    margin-left: 20px;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
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
            <Button>See Live</Button>
            <a>Source Code</a>
          </ButtonsWrapper>
        </ProjectDescription>
        <img
          src={require("../../../../src/images/projectImage.jpg")}
          alt="Mads Akselsen"
          width="600px"
        ></img>
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
            <Button>See Live</Button>
            <a>Source Code</a>
          </ButtonsWrapper>
        </ProjectDescription>
        <img
          src={require("../../../../src/images/projectImage.jpg")}
          alt="Mads Akselsen"
          width="600px"
        ></img>
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
            <Button>See Live</Button>
            <a>Source Code</a>
          </ButtonsWrapper>
        </ProjectDescription>
        <img
          src={require("../../../../src/images/projectImage.jpg")}
          alt="Mads Akselsen"
          width="600px"
        ></img>
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
            <Button>See Live</Button>
            <a>Source Code</a>
          </ButtonsWrapper>
        </ProjectDescription>
        <img
          src={require("../../../../src/images/projectImage.jpg")}
          alt="Mads Akselsen"
          width="600px"
        ></img>
      </ProjectWrapper>
      {/* Project end */}
    </Wrapper>
  );
}
