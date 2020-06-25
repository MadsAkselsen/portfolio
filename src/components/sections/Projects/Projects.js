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
        title={"My portfolio"}
        image={require("../../../images/projectImages/portfolioProject.jpg")}
        sourceLink="https://github.com/MadsAkselsen/portfolio"
        liveLink="https://vigorous-ardinghelli-913472.netlify.app/"
      >
        Made this portfolio in React with Styled Components
      </Project>
      <Project
        title={"CRUD Todo list"}
        image={require("../../../images/projectImages/todoProject.jpg")}
        sourceLink="https://github.com/MadsAkselsen/todo-frontend"
        liveLink="https://brave-borg-e2eca8.netlify.app/"
      >
        A todo list made with Restful API, and having all CRUD features. Made in
        React.
      </Project>
      <Project
        title={"RobotFriends"}
        image={require("../../../images/projectImages/robotfriendsProject.jpg")}
        sourceLink="https://github.com/MadsAkselsen/robotfriends"
        liveLink="https://madsakselsen.github.io/robotfriends/"
      >
        An app made in react with a public API. The user can search for robots
        by typing names.
      </Project>
    </Wrapper>
  );
}
