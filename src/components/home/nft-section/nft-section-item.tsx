import React from 'react';
import styled from 'styled-components';

const NftSectionItemContainer = styled.div`
  width: 200px;
  background-color: #000;
  border-radius: 16px;
  margin-top: 16px;

  .img-nft {
    width: 200px;
    height: 100px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }
`;

const InfoContainer = styled.div`
  padding: 8px;
`;

export const NftSectionItem = () => {
  return (
    <NftSectionItemContainer>
      <img
        className="img-nft"
        alt="nft"
        src="https://lh3.googleusercontent.com/IN8Dsx75_Jncc6lvQlozNs65PzwVn3eXkrLysVNt6b1iEsjh1BBuD8CQWS78p6FRR6mSsA8lqZm2NHkQl8p9oOVIyadWIgcXyZuynA=s2500"
      />
      <InfoContainer>
        <h4>Known Origin</h4>
        <div>Floor Price</div>
        <span>0.0250</span>
      </InfoContainer>
    </NftSectionItemContainer>
  );
};
