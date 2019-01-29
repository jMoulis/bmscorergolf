import React from 'react';
import styled from '@emotion/styled';
import logo from 'assets/images/logo.png';

const ImageWrapper = styled.img`
  display: block;
  height: 5rem;
  width: 5rem;
`;

const Logo = () => {
  return <ImageWrapper src={logo} alt="Logo golfeur" />;
};
export default Logo;
