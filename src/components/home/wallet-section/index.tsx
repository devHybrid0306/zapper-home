import React from 'react';
import styled from 'styled-components';
import { ApplicationState, useAppSelector } from '~/store/store';
import { BalancesDataItem } from '~/types';
import { WalletSectionItem } from './wallet-section-item';

const WalletSelectionContainer = styled.div`
  border: 1px solid #2c3a43;
  padding: 12px;
  border-radius: 16px;
  height: 500px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Title = styled.div`
  font-size: 18px;
  color: #fff;
  border-bottom: 1px solid #2c3a43;
  padding: 12px 0px;
`;

export const WalletSection = () => {
  const balances = useAppSelector(
    (state: ApplicationState) => state.feed.balances
  );

  return (
    <WalletSelectionContainer>
      <Title>Wallet</Title>
      {balances?.data.items
        .slice(5, 11)
        .map((item: BalancesDataItem, index: number) => (
          <WalletSectionItem key={index} item={item} />
        ))}
    </WalletSelectionContainer>
  );
};
