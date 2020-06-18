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
  padding: 3rem 3rem 7rem 3rem;
  color: white;
  font-size: 2rem;
  h2 {
    margin-bottom: 60px;
  }

  @media (min-width: 767px) {
    h2 {
      margin-bottom: 100px;
    }
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
    width: 350px;
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            neque, ipsa animi maiores repellendu distinctioaperiam earum dolor
            voluptatum consequatur blanditiis inventore debitis fuga numquam
            voluptate architecto itaque molestiae.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            neque, ipsa animi maiores repellendu distinctioaperiam earum dolor
            voluptatum consequatur blanditiis inventore debitis fuga numquam
            voluptate architecto itaque molestiae.
          </p>
          <StyledButton>View Resume</StyledButton>
        </TextWrapper>
      </Wrapper>
    </Container>
  );
}
