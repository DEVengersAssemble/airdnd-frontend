import React from 'react';
import styled from 'styled-components';

const StWrapper = styled.div`
  width: 37%;
  margin-left: 5%;
  border: 1px solid ${({ theme }) => theme.color.line};
  padding: 24px;
`;

const Aside = () => {
  return <StWrapper></StWrapper>;
};

export default Aside;
