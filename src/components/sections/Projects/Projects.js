import React from "react";
import styled from "styled-components";
import Project from "components/common/Project";
import Fade from "react-reveal/Fade";

const Wrapper = styled.div`
  height: 100%;
  background-color: #252934;
  padding: 0 3rem 0 3rem;
  font-size: 1.5rem;
  color: white;
  text-align: center;
  padding-top: 20px;
  h2 {
    margin-bottom: 50px;
  }

  @media (min-width: 1000px) {
    font-size: 2rem;
  }
`;

export default function Projects() {
  return (
    <Wrapper>
      <Fade bottom duration={1000} delay={300} distance="0px">
        <h2>PROJECTS</h2>
      </Fade>
      <Project
        title={"Project Title"}
        image={require("../../../images/projectImage.jpg")}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
        neque, ipsa animi maiores repellendus distinctio aperiam earum dolor
        voluptatum consequatur blanditiis inventore debitis fuga numquam
        voluptate ex architecto itaque molestiae.
      </Project>
      <Project
        title={"Project Title"}
        image={require("../../../images/projectImage.jpg")}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
        neque, ipsa animi maiores repellendus distinctio aperiam earum dolor
        voluptatum consequatur blanditiis inventore debitis fuga numquam
        voluptate ex architecto itaque molestiae.
      </Project>
      <Project
        title={"Project Title"}
        image={require("../../../images/projectImage.jpg")}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
        neque, ipsa animi maiores repellendus distinctio aperiam earum dolor
        voluptatum consequatur blanditiis inventore debitis fuga numquam
        voluptate ex architecto itaque molestiae.
      </Project>
    </Wrapper>
  );
}
