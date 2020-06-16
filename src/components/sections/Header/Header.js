import React from "react";
import styled from "styled-components";
import Particles from "react-particles-js";
import { Button } from "components/common/Button";

const particlesOptions = {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#525765",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#525765",
      },
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: false,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 250,
      color: "#525765",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 4,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "repulse",
      },
      onclick: {
        enable: false,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 1.038961038961039,
        opacity: 0.43156843156843155,
        speed: 3,
      },

      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
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
  margin-left: 15%;
  font-family: Raleway;
  font-style: normal;
  font-weight: 500;
  font-size: 1.5vw;
  line-height: 4vw;
  h1 {
    margin-bottom: 15px;
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
        <Particles className="particles" params={particlesOptions} />
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
