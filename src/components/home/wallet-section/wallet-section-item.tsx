import { RightOutlined } from '@ant-design/icons';
import React from 'react';
import styled from 'styled-components';
import { BalancesDataItem } from '~/types';

const WalletSectionItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  margin-top: 16px;

  :hover {
    background-color: #444444;
    border-radius: 8px;
  }
`;

const SymbolContainer = styled.div`
  display: flex;
  flex-direction: row;

  .symbol-logo {
    width: 32px;
    height: 32px;
    object-fit: contain;
  }

  .symbol-quote-rate {
    display: flex;
    flex-direction: column;
    padding: 0px 16px;
  }
`;

const BigText = styled.div`
  font-size: 16px;
  font-weight: 500;
  text-align: right;
`;

const SmallText = styled.div`
  color: #c7d2da;
  font-size: 14px;
  font-weight: 400;
  text-align: right;
`;

const QuoteContainer = styled.div`
  display: flex;
  align-items: center;

  .quote-balance {
    display: flex;
    flex-direction: column;
    padding: 0px 16px;
  }
`;

interface WalletSectionItemProps {
  item: BalancesDataItem;
}

export const WalletSectionItem = ({ item }: WalletSectionItemProps) => {
  const {
    logo_url,
    contract_ticker_symbol,
    quote_rate,
    quote,
    balance,
    contract_decimals,
  } = item;

  return (
    <WalletSectionItemContainer>
      <SymbolContainer>
        <img className="symbol-logo" src={logo_url} alt="symbol" />
        <div className="symbol-quote-rate">
          <BigText>{contract_ticker_symbol}</BigText>
          <SmallText>{`$${quote_rate?.toFixed(3)}`}</SmallText>
        </div>
      </SymbolContainer>
      <QuoteContainer>
        <div className="quote-balance">
          <BigText>{`$${quote.toFixed(2)}`}</BigText>
          <SmallText>
            {balance?.slice(0, balance.length - contract_decimals)}
          </SmallText>
        </div>
        <RightOutlined />
      </QuoteContainer>
    </WalletSectionItemContainer>
  );
};
