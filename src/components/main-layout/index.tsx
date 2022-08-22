import React from 'react';
import styled from 'styled-components';
import { Header } from '../header';
import { SidePanel } from '../side-panel';

const MainLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  padding: 0 10em;
  width: 100%;
`;

const ChildrenContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 60px);
  width: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
  border-left: 1px solid #414141;
  border-right: 1px solid #414141;
`;

interface MainLayoutProps {
  children: JSX.Element;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <MainLayoutContainer>
      <Header />
      <Container>
        <SidePanel />
        <ChildrenContainer>{children}</ChildrenContainer>
      </Container>
    </MainLayoutContainer>
  );
};
