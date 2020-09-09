import React from "react"
import styled from "styled-components"
import { rem } from "./themes"
import { AniLink } from "./layout"

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: ${({ theme }) => rem(theme.maxWidth)};
  width: 100%;
  padding: 5rem 2rem;
  position: relative;

  @media only screen and (min-width: ${({ theme }) => theme.breakpointLarge}) {
    padding: 10rem 10rem 5rem 10rem;
    position: fixed;
    top: 0;
  }
`

const StyledSvg = styled.svg`
  fill: ${({ theme }) => theme.text};
  width: 2rem;
`

const Logo = () => (
  <StyledSvg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 2000 2000"
    xmlSpace="preserve"
  >
    <g>
      <polygon
        points="1958.24,1436.35 1287.06,1281.39 1576.4,28.14 1136.38,28.14 869.31,1184.95 869.31,1184.95 
772.87,1602.7 1190.62,1699.15 1190.62,1699.15 1958.24,1876.36"
      />
      <polygon
        points="1229.74,1500.7 558.57,1345.74 847.91,92.49 407.89,92.49 140.82,1249.3 140.82,1249.3 
44.37,1667.05 462.13,1763.5 462.13,1763.5 1229.74,1940.71"
      />
    </g>
  </StyledSvg>
)

const Header = ({ location, toggleTheme }) =>
  location.pathname === "/ksk" ? null : (
    <StyledHeader>
      <AniLink to="/">
        <Logo />
      </AniLink>
      <button onClick={toggleTheme}>toggle</button>
    </StyledHeader>
  )

export default Header
