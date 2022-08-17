import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS, QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from '../UnstyledButton';
import VisuallyHidden from '../VisuallyHidden';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <DesktopWrapper>
          <Logo />
        </DesktopWrapper>
        <DesktopNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </DesktopNav>
        <Side />
        <MobileNav>
          <UnstyledButton>
            <Icon id='shopping-bag'/>
            <VisuallyHidden>
              open shopping cart
            </VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton>
            <Icon id='search'/>
            <VisuallyHidden>
              search products
            </VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id='menu'/>
            <VisuallyHidden>
              open Menu
            </VisuallyHidden>
          </UnstyledButton>
        </MobileNav>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: ${18/16}rem ${32/16}rem;
  border-bottom: 1px solid var(--color-gray-300);
  overflow-x: auto;

  @media ${QUERIES.tabletAndBelow} {
    border-top: 4px solid var(--color-gray-900);
    align-items: center;
  }

  @media ${QUERIES.phoneAndBelow} {
    padding-right: ${16/16}rem;
    padding-left: ${16/16}rem;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(
    1rem,
    9.2vw - 4.5rem,
    3.5rem
  );
  margin: 0px ${48/16}rem;
  @media ${QUERIES.tabletAndBelow} {
    display: none;
  }
`;

const MobileNav = styled.div`
  display: none;

  @media ${QUERIES.tabletAndBelow} {
    display: flex;
    gap: ${40/16}rem;
  }

  @media ${QUERIES.phoneAndBelow} {
    gap: ${24/16}rem;
  }
`;

const DesktopWrapper = styled.div`
  flex: 1;
  @media ${QUERIES.tabletAndBelow} {
    flex: revert;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
