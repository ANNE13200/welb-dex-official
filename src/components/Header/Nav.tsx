import React from 'react'
import styled from 'styled-components'
import TranslatedText from '../TranslatedText'

const Nav: React.FC = () => {
  return (
    <StyledNav>
     
     <StyledAbsoluteLink href="#" className="active">
        <TranslatedText translationId={8}>Exchange</TranslatedText>
      </StyledAbsoluteLink>
     <StyledAbsoluteLink href="https://earning.wellbe-coin.io/" >
        <TranslatedText translationId={8}>Earn-Welb</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://wellbe-coin.org/" >
        <TranslatedText translationId={8}>Farm</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://wellbe-coin.org/" >
        <TranslatedText translationId={8}>Pool</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://wellbe-coin.io/" >
        <TranslatedText translationId={8}>Pre-Sale</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://wellbe-coin.com/" >
        <TranslatedText translationId={8}>Offical-Web</TranslatedText>
      </StyledAbsoluteLink>
     
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  font-size: 20px;
  line-height: 45px;
  font-weight: 500;
  @media (max-width: 600px) {
    display: none;
  }
`

const StyledAbsoluteLink = styled.a`
  color: #93d5f4;
  padding-left: 10px;
  padding-right: 10px;
  text-decoration: none;
  &:hover {
    color: #93d5f4;
  }
  &.active {
    color: #93d5f4;
  }
  @media (max-width: 400px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`

export default Nav
