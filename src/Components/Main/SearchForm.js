import React from 'react';
import styled from 'styled-components';

const StSearchForm = styled.form`
  background: ${({ theme }) => theme.white};
  width: 100%;
  height: 66px;
  border-radius: 32px;
`;

const SearchForm = () => {
  return <StSearchForm></StSearchForm>;
};

export default SearchForm;
