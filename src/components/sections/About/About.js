import React from "react";
import styled from "styled-components";
import { Button } from "components/common/Button";

const Container = styled.div`
  height: 100%;
  text-align: center;
  background: linear-gradient(89.82deg, #2e3445 50.78%, #e31b6d 574.67%),
    #8f94a0;
  background-color: #252934;
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  padding-top: 1%;
  padding-bottom: 10%;
  color: white;
  font-size: 2rem;
  h2 {
    margin-bottom: 100px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled.div`
  margin-right: 7vw;
  margin-left: 12vw;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
`;

const TextWrapper = styled.div`
  font-size: 1.3rem;
  font-weight: normal;
  width: 30vw;
  text-align: left;
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
            width="400px"
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
          <Button>View Resume</Button>
        </TextWrapper>
      </Wrapper>
    </Container>
  );
}
