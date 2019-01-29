import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import Logo from './Logo';

const menu = [
  {
    name: 'Home',
    href: '/',
    slug: 'home_page',
  },
  {
    name: 'Contact',
    href: '/contact_page',
    slug: 'contact_page',
  },
];
const Root = styled.nav`
  label: Navbar;
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 1rem;
`;
const MenuList = styled.ul`
  label: MenuList;
  align-items: center;
  display: flex;
  list-style: none;
`;
const MenuItem = styled.li`
  label: MenuItem;
  margin: 0.5rem;
  padding: 0.5rem;
`;

const NavBar = ({ logo }) => {
  return (
    <Root>
      {logo && <Logo />}
      <MenuList>
        {menu.map(entry => (
          <MenuItem>
            <NavLink to={entry.href}>{entry.name}</NavLink>
          </MenuItem>
        ))}
      </MenuList>
    </Root>
  );
};

NavBar.propTypes = {};

export default NavBar;
