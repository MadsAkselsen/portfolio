import styled from "styled-components";

const Button = styled.button`
  border: #e31b6d solid 2px;
  position: relative;
  background: none;
  color: #e31b6d;
  font-size: 1.3rem;
  font-weight: bold;
  width: auto;

  padding: 6px 15px 6px 15px;
  transition: top, left, right, bottom, 100ms ease-in-out;
  z-index: 1;

  //animation
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    background-color: #e31b6d;
    transition: transform 60ms ease-in-out;
    transform: scaleX(0);
    transform-origin: left;
  }

  :hover::before,
  :focus::before {
    transform: scaleX(1);
  }

  :hover,
  :focus {
    color: white;
    cursor: pointer;
  }
`;

export { Button };
