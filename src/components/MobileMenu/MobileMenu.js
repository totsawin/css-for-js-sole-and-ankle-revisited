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
        <DismissWrapper>
          <DismissButton onClick={onDismiss}>
            <VisuallyHidden>
              Dismiss menu
            </VisuallyHidden>
            <Icon id="close"/>
          </DismissButton>
        </DismissWrapper>
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

const DismissWrapper = styled.div`
  flex: 1;
  position: relative:
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
  justify-content: center;
  align-content: start;
`;

const Link = styled.a`
  font-size: ${18/16}rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  line-height: 2;

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
