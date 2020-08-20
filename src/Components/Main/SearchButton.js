import React from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import Button from '../Global/Button';

const StSearchButton = styled(Button)`
  position: absolute;
  top: calc(50% - 21px);
  right: 12px;
  font-size: 20px;
  font-weight: 500;
  padding: 0 0;
  width: 40px;
  height: 40px;
  border: none;
  z-index: 10;
  &:hover {
    border: none;
    outline: none;
  }
  color: white;
  background: ${({ theme }) => theme.color.main};

  @media ${({ theme }) => theme.size.iPad} {
    padding: 16px;
  }
`;

const StSearchButtonText = styled.span`
  font-size: 16px;
  margin: 4px 0 0 6px;
  @media ${({ theme }) => theme.size.iPad} {
    display: none;
  }
`;

const SearchButton = () => {
  return (
    <StSearchButton btnType="circle">
      <FiSearch></FiSearch>
      {/* <StSearchButtonText></StSearchButtonText> */}
    </StSearchButton>
  );
};

export default SearchButton;
