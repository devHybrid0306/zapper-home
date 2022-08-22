import React from 'react';
import styled from 'styled-components';
import { PortfolioPercent } from './portoflio-percent';

const PortfolioBreakdownContainer = styled.div`
  border-radius: 16px;
  background-color: #202a30;
  padding: 12px;
  width: 100%;
`;

const Title = styled.div`
  font-size: 16px;
  color: #c7d2da;
  border-bottom: 1px solid #2c3a43;
`;

export const PortfolioBreakdown = () => {
  return (
    <PortfolioBreakdownContainer>
      <Title>Portfolio Breakdown</Title>
      <PortfolioPercent label="Uniswap" percent={51.1} color="#00d897" />
      <PortfolioPercent label="Wallet" percent={32.05} color="#ffbe0b" />
      <PortfolioPercent label="NFTs" percent={51.1} color="#f1356e" />
      <PortfolioPercent label="Looks..." percent={4.92} color="#364258" />
    </PortfolioBreakdownContainer>
  );
};
