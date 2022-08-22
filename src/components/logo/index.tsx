import { Typography } from 'antd';
import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const { Title } = Typography;

export const Logo = () => {
  return (
    <LogoContainer>
      <svg
        width="40"
        height="40"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="logo_exterior"
          d="M500 250C500 111.929 388.071 0 250 0C111.929 0 0 111.929 0 250C0 388.071 111.929 500 250 500C388.071 500 500 388.071 500 250Z"
          fill="#108ee9"
        ></path>
        <path
          id="logo_interior"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M154.338 187.869L330.605 187L288.404 250.6L388 250.118L345.792 312.652L168.382 313.787L211.25 250.633L112 250.595L154.338 187.869Z"
          fill="white"
        ></path>
      </svg>
      <Title level={3} style={{ paddingLeft: '0.5em', marginTop: '0.5em' }}>
        Zapper
      </Title>
    </LogoContainer>
  );
};
