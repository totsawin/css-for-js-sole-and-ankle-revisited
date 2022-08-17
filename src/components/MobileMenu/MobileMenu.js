/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay>
      <Content>
        <DismissButton onClick={onDismiss}>
          <VisuallyHidden>
            Dismiss menu
          </VisuallyHidden>
          <Icon id="close"/>
        </DismissButton>
        <Filler>
        </Filler>
        <Nav>
          <Link href="/sale">Sale</Link>
          <Link href="/new">New&nbsp;Releases</Link>
          <Link href="/men">Men</Link>
          <Link href="/women">Women</Link>
          <Link href="/kids">Kids</Link>
          <Link href="/collections">Collections</Link>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>  
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(96, 100, 108, 0.8);
  display: flex;
  justify-content: flex-end;
`;

const Content = styled(DialogContent)`
  height: 100%;
  width: ${300/16}rem;
  display: flex;
  flex-direction: column;
  padding: 32px;
  background: var(--color-white);
`;

const Filler = styled.div`
  flex: 1;
`;

const DismissButton = styled.button`
  position: absolute;
  top: 10px;
  right: 0px;
  background: transparent;
  border: none;
  padding: 16px;
  cursor: pointer;
`;

const Nav = styled.nav`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Link = styled.a`
  font-size: ${18/16}rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-content: start;
`;

const FooterLink = styled.a`
  font-size: ${14/16}rem;
  text-decoration: none;
  color: var(--color-gray-700);
  font-weight: ${WEIGHTS.normal};
`;

export default MobileMenu;
