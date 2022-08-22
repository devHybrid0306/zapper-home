import { Col, Row, Spin } from 'antd';
import React, { useEffect } from 'react';
import {
  MainLayout,
  NftSection,
  PortfolioBreakdown,
  WalletSection,
} from '~/components';
import { thunkOnGetBalances } from '~/store/actions';
import {
  ApplicationState,
  useAppDispatch,
  useAppSelector,
} from '~/store/store';

const INITIAL_ADDRESS = '0x38a4e52645A9eA10103485F4B6233C08dAA542F1';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(
    (state: ApplicationState) => state.feed.isLoading
  );

  useEffect(() => {
    dispatch(thunkOnGetBalances(INITIAL_ADDRESS));
  }, []);

  return (
    <MainLayout>
      {isLoading ? (
        <Spin size="large" style={{ marginTop: 250 }} />
      ) : (
        <Row gutter={[16, 16]} style={{ padding: 12 }}>
          <Col span={16}>
            <WalletSection />
            <NftSection />
          </Col>
          <Col span={8}>
            <PortfolioBreakdown />
          </Col>
        </Row>
      )}
    </MainLayout>
  );
};

export default HomePage;
