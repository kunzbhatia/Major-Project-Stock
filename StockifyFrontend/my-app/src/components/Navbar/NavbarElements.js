import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
export const NavLinkss = styled(LinkR)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&amp;.active {
border-bottom: 3px solid #01bf71;
}`;
export const NavLogo = styled(LinkR)`
background: -webkit-linear-gradient(
  rgba(29, 205, 254, 1),
  rgba(33, 208, 179, 1),
  rgba(52, 245, 198, 1)
);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
  justify-self: flex-start;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px
  text-decoration: none;
  
`;
export const NavLinks = styled(LinkS)`
color: white;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&amp;.active {
border-bottom: 3px solid #01bf71;
}`;

export const NavBtnLink = styled(LinkR)`
  &:hover {
    transition: all 0.2s ease-in-out;
    background: burlywood;
    color: #010606;
  }
`;
