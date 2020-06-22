import React from "react";
import styled from "styled-components";
import { Button } from "components/common/Button";

const StyledButton = styled(Button)`
  font-size: 1.1rem;
`;

const Container = styled.div`
  height: 100%;
  text-align: center;
  background: linear-gradient(89.82deg, #2e3445 50.78%, #e31b6d 574.67%),
    #8f94a0;
  background-color: #252934;
  clip-path: none;
  padding: 2rem 3rem 5rem 3rem;
  color: white;
  font-size: 1.5rem;

  @media (min-width: 1000px) {
    h2 {
      margin-bottom: 70px;
    }
    font-size: 2rem;
    padding: 2rem 3rem 5rem 3rem;
  }

  @media (min-width: 1600px) {
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
    padding-bottom: 10rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

const ImageWrapper = styled.div`
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  width: 250px;
  margin-bottom: 30px;

  @media (min-width: 767px) {
    width: 300px;
    margin-right: 2rem;
    margin-bottom: 0;
  }

  @media (min-width: 1600px) {
    width: 300px;
  }
`;

const TextWrapper = styled.div`
  font-size: 1.1rem;
  font-weight: normal;
  width: 70vw;
  text-align: center;

  @media (min-width: 767px) {
    font-size: 1rem;
    width: 40rem;
    text-align: left;
  }

  @media (min-width: 1000px) {
    font-size: 1.1rem;
  }
  @media (min-width: 1300px) {
    padding-left: 3rem;
  }
`;

export default function About() {
  return (
    <Container>
      <h2>ABOUT ME</h2>
      <Wrapper>
        <ImageWrapper>
          <img
            src={require("../../../../src/images/MadsAkselsen.jpg")}
            alt="Mads Akselsen"
            width="100%"
          ></img>
        </ImageWrapper>
        <TextWrapper>
          <p>
            I am a Web Developer with enthusiasm and focus on Frontend
            Development and Scripting.
          </p>
          <p>
            I am passionate about building scalable software, creating effective
            solutions, and learning every day to grow professionally in the IT
            field.
          </p>
          <p>Feel free to contact me via email at any time</p>
          <StyledButton>View Resume</StyledButton>
        </TextWrapper>
      </Wrapper>
    </Container>
  );
}
