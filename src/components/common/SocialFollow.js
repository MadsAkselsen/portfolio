import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import { AnimationWrapper } from "react-hover-animation";

const StyledSocial = styled.div`
  display: flex;
  justify-content: space-around;

  .social {
    color: white;
    display: inline-block;
  }

  .social:hover {
    color: #e31b6d;
  }
`;

export default function SocialFollow() {
  return (
    <StyledSocial>
      <AnimationWrapper>
        <a href="https://www.instagram.com/madsakselsen/">
          <FontAwesomeIcon icon={faInstagram} size="3x" className="social" />
        </a>
      </AnimationWrapper>
      <AnimationWrapper>
        <a href="https://www.linkedin.com/in/mads-akselsen-62463389/">
          <FontAwesomeIcon icon={faLinkedin} size="3x" className="social" />
        </a>
      </AnimationWrapper>
      <AnimationWrapper>
        <a href="https://github.com/MadsAkselsen">
          <FontAwesomeIcon icon={faGithub} size="3x" className="social" />
        </a>
      </AnimationWrapper>
    </StyledSocial>
  );
}
