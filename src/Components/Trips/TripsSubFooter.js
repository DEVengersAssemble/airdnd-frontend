import React from 'react';
import styled from 'styled-components';

const TripsSubFooter = ({ children }) => {
  return <TripsSubFooterWrapper>{children}</TripsSubFooterWrapper>;
};

const TripsSubFooterWrapper = styled.div`
  padding-top: 2rem;
  color: ${({ theme }) => theme.color.darkGray};
  font-size: 1.5rem;
`;

export default TripsSubFooter;
