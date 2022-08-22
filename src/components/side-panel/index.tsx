import React from 'react';
import styled from 'styled-components';
import {
  HomeFilled,
  FireOutlined,
  AreaChartOutlined,
  LineChartOutlined,
  PartitionOutlined,
} from '@ant-design/icons';
import { SidePanelItem } from './side-panel-item';

const SidePanelContainer = styled.div`
  width: 220px;
  height: calc(100vh - 70px);
  padding-top: 4px;
`;

export const SidePanel = () => {
  return (
    <SidePanelContainer>
      <SidePanelItem
        icon={<HomeFilled style={{ fontSize: 20 }} />}
        name="Home"
      />
      <SidePanelItem
        icon={<FireOutlined style={{ fontSize: 20 }} />}
        name="Feed"
      />
      <SidePanelItem
        icon={<AreaChartOutlined style={{ fontSize: 20 }} />}
        name="NFTs"
      />
      <SidePanelItem
        icon={<LineChartOutlined style={{ fontSize: 20 }} />}
        name="DeFi"
      />
      <SidePanelItem
        icon={<PartitionOutlined style={{ fontSize: 20 }} />}
        name="DAOs"
      />
    </SidePanelContainer>
  );
};
