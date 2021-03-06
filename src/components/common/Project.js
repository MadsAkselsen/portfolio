import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "components/common/Button";
import Tilt from "react-tilt";
import Fade from "react-reveal/Fade";

const StyledButton = styled(Button)`
  font-size: 1.1rem;
`;

const StyledTilt = styled(Tilt)`
  width: 100%;

  @media (min-width: 990px) {
    img {
      height: 342px;
    }
    width: 610px;
  }

  @media (min-width: 1200px) {
    img {
      height: 368px;
    }
    width: 656px;
  }
`;

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 100px;
  font-size: 1.5rem;

  @media (min-width: 990px) {
    flex-direction: row;
    justify-content: center;
    margin-bottom: 100px;
  }
`;

const ProjectDescription = styled.div`
  align-self: flex-start;
  width: 100%;
  margin-bottom: 40px;

  @media (min-width: 990px) {
    margin-right: 50px;
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

export default function Project({
  title,
  image,
  children,
  sourceLink,
  liveLink,
}) {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);
  return (
    <ProjectWrapper>
      <Fade
        left={isDesktop}
        bottom={isMobile}
        duration={1000}
        delay={500}
        distance="30px"
      >
        <ProjectDescription>
          <h3>{title}</h3>

          <p>{children}</p>
          <ButtonsWrapper>
            <a href={liveLink}>
              <StyledButton>See Live</StyledButton>
            </a>

            <a href={sourceLink} className="sourceCode">
              Source Code
            </a>
          </ButtonsWrapper>
        </ProjectDescription>
      </Fade>
      <Fade
        right={isDesktop}
        bottom={isMobile}
        duration={1000}
        delay={1000}
        distance="30px"
      >
        <StyledTilt className="Tilt" options={{ max: 15, scale: 1 }}>
          <div className="Tilt-inner">
            <img src={image} alt="Project" width="100%"></img>
          </div>
        </StyledTilt>
      </Fade>
    </ProjectWrapper>
  );
}
