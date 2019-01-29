import React from 'react';
import PropTypes from 'prop-types';
import golfBackground from 'assets/images/golf.jpg';
import styled from '@emotion/styled';
import HugeImage from './HugeImage';
import { Animate } from '../Animate';
import animations from '../Animate/animations';
import { Row } from '../Row';

const TextBox = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  backface-visibility: hidden;
  z-index: 1;
`;

const Btn = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  padding: 1.5rem 4rem;
  display: inline-block;
  border-radius: 10rem;
  transition: all 0.2s;
  position: relative;
  font-size: 1.6rem;
  border: none;
  cursor: pointer;
  background-color: #fff;
  color: #777;
  /* animation: ${animations.moveInBtn} 0.5s ease-out 0.75s;
  animation-fill-mode: backwards; */
  backface-visibility: hidden;
  &::after {
    content: '';
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 10rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
    background-color: #fff;
  }
  &::selection {
    background-color: #55c57a;
    color: #fff;
  }
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
    &::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
  }
  &:active {
    outline: none;
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }
`;

const BigTitle = styled.h1`
  font-size: 10rem;
  text-transform: uppercase;
  letter-spacing: 2.5rem;
`;

const HeadingsWrapper = styled.div`
  margin-bottom: 4rem;
`;

const Subtitle = styled.h2`
  text-transform: uppercase;
  letter-spacing: 0.7rem;
`;

const Margin = styled.div`
  margin-top: -20vh;
`;
const HomePage = () => {
  return (
    <div>
      <TextBox>
        <HeadingsWrapper>
          <Animate animate="moveInLeft" duration="1s" timing="ease-out">
            <BigTitle>Titre</BigTitle>
          </Animate>
          <Animate animate="moveInRight" duration="1s" timing="ease-out">
            <Subtitle>Je suis un subtitle</Subtitle>
          </Animate>
        </HeadingsWrapper>
        <Animate
          animate="moveInBtn"
          duration="0.5s"
          timing="ease-out"
          fill="backwards"
          delay="0.75s"
        >
          <Btn href="#next">Continuer</Btn>
        </Animate>
      </TextBox>
      <HugeImage img={golfBackground} />
      <Margin>
        <Row id="next">Next Slide</Row>
      </Margin>
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage;
