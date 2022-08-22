import { Progress } from 'antd';
import React from 'react';
import styled from 'styled-components';

const PortfolioPercentContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0px;

  .label {
    padding-right: 8px;
    color: #fff;
    width: 100px;
  }
`;

interface PortfolioPercentProps {
  label: string;
  percent: number;
  color: string;
}

export const PortfolioPercent = ({
  label,
  percent,
  color,
}: PortfolioPercentProps) => {
  return (
    <PortfolioPercentContainer>
      <span className="label">{label}</span>
      <div style={{ width: 320 }}>
        <Progress percent={percent} strokeColor={color} />
      </div>
    </PortfolioPercentContainer>
  );
};
