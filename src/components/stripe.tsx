import React, { Component } from 'react';
import styled from 'react-emotion';
import  { css } from 'react-emotion';
import { size } from 'polished';

import Button from './button';
import space from '../assets/images/space.jpg';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as Curve } from '../assets/curve.svg';
import { ReactComponent as Rocket } from '../assets/rocket.svg';
import { colors, unit } from '../styles';

export default function StripeForm() { 

  return (
      <Container>
        <Header>
          <StyledCurve />
          <StyledLogo />
        </Header>
      
        <form id="payment-form">
  <div id="card-element"></div>
  <button id="card-button">Submit Payment</button>
  <p id="payment-result">!-- we'll pass the response from the server here --</p>
</form>
      </Container>
    );
  }


/**
 * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
 */

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flexGrow: 1,
  paddingBottom: unit * 6,
  color: 'white',
  backgroundColor: colors.primary,
  backgroundImage: `url(${space})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

const svgClassName = css({
  display: 'block',
  fill: 'currentColor',
});

const Header = styled('header')(svgClassName, {
  width: '100%',
  marginBottom: unit * 5,
  padding: unit * 2.5,
  position: 'relative',
});

const StyledLogo = styled(Logo)(size(56), {
  display: 'block',
  margin: '0 auto',
  position: 'relative',
});

const StyledCurve = styled(Curve)(size('100%'), {
  fill: colors.primary,
  position: 'absolute',
  top: 0,
  left: 0,
});

const Heading = styled('h1')({
  margin: `${unit * 3}px 0 ${unit * 6}px`,
});

const StyledRocket = styled(Rocket)(svgClassName, {
  width: 250,
});

const StyledForm = styled('form')({
  width: '100%',
  maxWidth: 406,
  padding: unit * 3.5,
  borderRadius: 3,
  boxShadow: '6px 6px 1px rgba(0, 0, 0, 0.25)',
  color: colors.text,
  backgroundColor: 'white',
});

const StyledInput = styled('input')({
  width: '100%',
  marginBottom: unit * 2,
  padding: `${unit * 1.25}px ${unit * 2.5}px`,
  border: `1px solid ${colors.grey}`,
  fontSize: 16,
  outline: 'none',
  ':focus': {
    borderColor: colors.primary,
  },
});
