import React from 'react';
import { Button, Input } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { Logo } from '../logo';

const HeaderContainer = styled.div`
  border-bottom: 1px solid #414141;
  padding: 6px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 10em;

  .logo-search {
    display: flex;
    align-items: center;
  }

  .wallet-settings {
    display: flex;
    align-items: center;
    column-gap: 8px;
    padding-right: 16px;
  }
`;

const { Search } = Input;

export const Header = () => {
  return (
    <HeaderContainer>
      <div className="logo-search">
        <Logo />
        <Search
          placeholder="Search web3..."
          enterButton
          style={{ width: 300, marginLeft: 32 }}
        />
      </div>
      <div className="wallet-settings">
        <Button type="primary">Connect Wallet</Button>
        <Button type="primary" shape="circle" icon={<EllipsisOutlined />} />
      </div>
    </HeaderContainer>
  );
};
