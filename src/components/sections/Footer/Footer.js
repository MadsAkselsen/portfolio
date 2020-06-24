import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import SocialFollow from "../../common/SocialFollow";

import { Link } from "react-scroll";

const SectionWrapper = styled.div`
  height: 100%;
  background-color: #252934;
  padding-bottom: 15px;
  padding-top: 50px;
  font-size: 0.8rem;
  color: #8f94a0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  hr {
    width: 400px;
    height: 1px;
    background-color: #8f94a0;
    border: none;
  }
`;

const StyledChevron = styled.div`
  a {
    color: white;
    display: inline-block;
    transition: all 0.2s;

    :hover {
      transform: translateY(-2px);
      cursor: pointer;
    }
  }
`;

const IconWrapper = styled.div`
  padding-bottom: 10px;
  margin-top: 60px;
  width: 200px;
`;

export default function Footer() {
  return (
    <SectionWrapper>
      <StyledChevron>
        <Link
          activeClass="active"
          to="header"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={0}
          duration={1000}
          delay={0}
          isDynamic={true}
          ignoreCancelEvents={false}
        >
          <FontAwesomeIcon icon={faChevronUp} size="2x" />
        </Link>
      </StyledChevron>
      <IconWrapper>
        <SocialFollow />
      </IconWrapper>
      <hr />
      <p>© 2020 - Template developed by Mads Akselsen</p>
    </SectionWrapper>
  );
}
