import styled from '@emotion/styled';

const Header = styled.header`
  background-color: ${({ theme }) => `rgba(${theme.colors.lightGray.rgb}, 0)`};
  & a {
    color: ${({ theme }) => theme.colors.darkGray.hex};
  }
  display: flex;
  height: 5rem;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 10;
`;

Header.propTypes = {};

export default Header;
