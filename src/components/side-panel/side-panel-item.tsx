import React from 'react';
import styled from 'styled-components';

const SidePanelItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  margin: 4px;
  cursor: pointer;

  :hover {
    background-color: #444444;
    border-radius: 8px;
  }

  .side-icon {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
  }
`;

const Label = styled.div`
  font-size: 18px;
  padding-left: 8px;
  padding-top: 2px;
`;

interface SidePanelItemProps {
  icon: JSX.Element;
  name: string;
}

export const SidePanelItem = ({ icon, name }: SidePanelItemProps) => {
  return (
    <SidePanelItemContainer>
      <div className="side-icon">{icon}</div>
      <Label>{name}</Label>
    </SidePanelItemContainer>
  );
};
