import React from 'react';
import styled from 'styled-components';

const SearchMap = ({ children }) => {
  return <StWrapper>{children}</StWrapper>;
};

const StWrapper = styled.div`
  background: seagreen;
  flex-grow: 100;
`;

export default SearchMap;
