import React from 'react';
import styled from 'styled-components';

const ModalFooter = ({ children, align }) => {
  return <StModalFooter align={align}>{children}</StModalFooter>;
};

const StModalFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: ${props => props.align || 'center'};
  padding-left: 24px;
  padding-right: 24px;
  width: 100%;
  min-height: 64px;
  font-size: 1.6rem;
  position: absolute;
  bottom: 0;
  border-top: 1px solid #ebebeb;
  font-weight: 600;
`;

export default ModalFooter;
