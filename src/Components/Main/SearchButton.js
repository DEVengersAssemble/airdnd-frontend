import React from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import Button from '../Global/Button';

const StSearchButton = styled(Button)`
  position: absolute;
  top: calc(50% - 26px);
  right: 10px;
  font-size: 20px;
  font-weight: 500;
  padding: 14px 18px;
  border: none;
  &:hover {
    border: none;
    outline: none;
  }
  color: white;
  background: ${({ theme }) => theme.color.main};
`;

const StSearchButtonText = styled.span`
  font-size: 16px;
  margin: 4px 0 0 6px;
`;

const SearchButton = () => {
  return (
    <StSearchButton btnType="oval">
      <FiSearch></FiSearch>
      <StSearchButtonText>검색</StSearchButtonText>
    </StSearchButton>
  );
};

export default SearchButton;
