import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  background: linear-gradient(89.82deg, #2e3445 50.78%, #e31b6d 574.67%),
    #8f94a0;
  background-color: #252934;

  padding-top: 30px;
  padding-bottom: 20px;
  color: white;
  font-size: 1.5rem;
  h2 {
    margin-bottom: 20px;
  }

  @media (min-width: 1000px) {
    font-size: 2rem;
    padding-top: 60px;
  }

  @media (min-width: 1600px) {
    clip-path: polygon(0 20%, 100% 0, 100% 100%, 0 100%);
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 3rem 1rem 3rem;
`;

const TextWrapper = styled.div`
  p {
    font-size: 1.3rem;
    font-weight: normal;
  }
`;

const ContactInfoWrapper = styled.div`
  text-align: left;
  margin-top: 30px;
  p {
    font-size: 1.2rem;
    font-weight: normal;
  }
`;

export default function About() {
  return (
    <Container>
      <h2>CONTACT</h2>
      <Wrapper>
        <TextWrapper>
          <p>Would you like to work with me? Awesome!</p>
          <ContactInfoWrapper>
            <p>Email: akselsenmads@gmail.com</p>
            <p>Linkedin: @MadsAkselsen</p>
          </ContactInfoWrapper>
        </TextWrapper>
      </Wrapper>
    </Container>
  );
}
