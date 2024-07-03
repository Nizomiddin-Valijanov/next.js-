"use client"
import Link from "next/link";
import styled, { keyframes } from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #36ba98;
`;

const circleAnimation = keyframes`
  0% {
    width: 0px;
    height: 0px;
    top: 0;
    right: 0;
    margin: auto;
    z-index: -1;
    background: #eee;
    border-radius: 100% 0 0 100%;
  }
  100% {
    background: rgba(238, 238, 238,0.5);
    height: 100%;
    width: 100%;
    z-index: -1;
    /* bottom: 0;
    right: 0; */
    margin: auto;
    border-radius: 10px;
  }
`;

const NavLink = styled(Link)`
  position: relative;
  overflow: hidden;
  z-index: 1;
  margin: 0 1rem;
  text-decoration: none;
  padding: 10px;
  transition: 0.5s;
  color: white;

  &:after {
    display: block;
    position: absolute;
    margin: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: ".";
    color: transparent;
    width: 1px;
    height: 1px;
    border-radius: 50%;
    background: transparent;
  }

  &:hover:after {
    animation: ${circleAnimation} ease-in 0.1s forwards;
  }
`;

const NavLogo = styled(Link)`
  font-weight: bold;
  font-size: 1.5rem;
  color: #0070f3;
  text-decoration: none;
`;

function Navbar() {
  return (
    <Nav>
      <NavLogo href="/">LOGO</NavLogo>
      <div>
        <NavLink href="/">HOME</NavLink>
        <NavLink href="/products">PRODUCTS</NavLink>
        <NavLink href={"/timer"}>TIMER</NavLink>
        <NavLink href="/bank">BANK</NavLink>
      </div>
    </Nav>
  );
}

export default Navbar;
