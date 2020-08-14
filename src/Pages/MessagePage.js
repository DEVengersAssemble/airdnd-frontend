import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
// import Heart from '../Components/Global/Heart';
// import HeartBackup from '../Components/Global/HeartBackup';
const HeartBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 756px;
  margin: 10rem auto;
  padding: 5rem;
  border: 1px solid black;
  /* background-color: lightgoldenrodyellow; */
`;
const HeartGroup = styled.div`
  display: flex;
  & + & {
    margin-top: 5rem;
  }
  & > label {
    margin: 0 5rem 0 5rem;
  }
`;

const MessagePage = () => {
  return <div></div>;
};
export default MessagePage;
