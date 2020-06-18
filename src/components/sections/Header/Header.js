import React from "react";
import styled from "styled-components";
import ParticleField from "react-particles-webgl";
import { Button } from "components/common/Button";

const config = {
  showCube: false,
  dimension: "3D",
  velocity: 1.5,
  boundaryType: "bounce",
  antialias: false,
  direction: {
    xMin: -1,
    xMax: 1,
    yMin: -1,
    yMax: 1,
    zMin: -1,
    zMax: 1,
  },
  lines: {
    colorMode: "solid",
    color: "#353346",
    transparency: 0.9,
    limitConnections: true,
    maxConnections: 20,
    minDistance: 300,
    visible: true,
  },
  particles: {
    colorMode: "solid",
    color: "#353346",
    transparency: 0.5,
    shape: "circle",
    boundingBox: "canvas",
    count: 1000,
    minSize: 10,
    maxSize: 60,
    visible: true,
  },
  cameraControls: {
    enabled: false,
    enableDamping: true,
    dampingFactor: 0.2,
    enableZoom: true,
    autoRotate: true,
    autoRotateSpeed: 0.3,
    resetCameraFlag: false,
  },
};

const ParticlesBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background: #252934;
`;

const HeaderStyled = styled.div`
  height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Raleway;
  font-style: normal;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 3rem;
  text-align: center;
  margin: 0 6rem 0 6rem 0;

  h1 {
    margin-bottom: 15px;
  }

  @media (min-width: 1000px) {
    font-size: 1.4rem;
    line-height: 4rem;
    justify-content: center;
    align-items: flex-start;
    text-align: start;
  }

  @media (min-width: 1000px) {
    font-size: 1.6rem;
    margin-left: 6rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.6rem;
    margin-left: 15%;
  }

  @media (min-width: 1800px) {
    font-size: 1.5vw;
    line-height: 4vw;
    margin-left: 15%;
  }

  .highlight {
    color: #e31b6d;
    white-space: pre-line;
  }
`;

export default function Header() {
  return (
    <>
      <ParticlesBackground>
        <ParticleField className="particles" config={config} />
      </ParticlesBackground>
      <HeaderStyled>
        <h1>
          Hi, I'm <span className="highlight">Mads Akselsen</span>. <br />
          I'm a Frontend Web Developer.
        </h1>
        <Button>Know more</Button>
      </HeaderStyled>
    </>
  );
}
