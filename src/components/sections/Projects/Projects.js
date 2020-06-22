import React from "react";
import styled from "styled-components";
import Project from "components/common/Project";

const Wrapper = styled.div`
  height: 100%;
  background-color: #252934;
  padding: 0 3rem 0 3rem;
  font-size: 2rem;
  color: white;
  text-align: center;
  h2 {
    margin-bottom: 100px;
  }
`;

export default function Projects() {
  return (
    <Wrapper>
      <h2>PROJECTS</h2>
      <Project
        title={"Project Title 3"}
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
