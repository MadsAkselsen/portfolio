import React from "react";
import styled from "styled-components";

import SocialFollow from "../../common/SocialFollow";

const SectionWrapper = styled.div`
  height: 100%;
  background-color: #252934;
  padding-bottom: 15px;
  padding-top: 30px;
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

const IconWrapper = styled.div`
  padding-bottom: 10px;
  margin-top: 10px;
  width: 200px;
`;

export default function Footer() {
  return (
    <SectionWrapper>
      <IconWrapper>
        <SocialFollow />
      </IconWrapper>
      <hr />
      <p>© 2020 - Template developed by Mads Akselsen</p>
    </SectionWrapper>
  );
}
