import React from 'react';
import styled from 'styled-components';
import { NftSectionItem } from './nft-section-item';

const NftSelectionContainer = styled.div`
  border: 1px solid #2c3a43;
  padding: 12px;
  border-radius: 16px;
  overflow-x: scroll;
  margin-top: 32px;

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

const NftCards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const NftSection = () => {
  return (
    <NftSelectionContainer>
      <Title>NFTs</Title>
      <NftCards>
        <NftSectionItem />
        <NftSectionItem />
        <NftSectionItem />
      </NftCards>
    </NftSelectionContainer>
  );
};
