import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import SocialFollow from "../../common/SocialFollow";

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
        <a href="https://www.instagram.com/madsakselsen/">
          <FontAwesomeIcon icon={faChevronUp} size="2x" />
        </a>
      </StyledChevron>
      <IconWrapper>
        <SocialFollow />
      </IconWrapper>
      <hr />
      <p>© 2020 - Template developed by Mads Akselsen</p>
    </SectionWrapper>
  );
}
