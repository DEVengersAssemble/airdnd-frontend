import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Heart from '../Components/Global/Heart';
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
  const [check, setCheck] = useState(false);
  const onChangeHeart = e => {
    setCheck(e.target.checked);
  };
  return (
    <ThemeProvider
      theme={{
        palette: {
          main: '#FF385C',
          gray: '#717171',
          black: '#222222',
          lightGray: '#F7F7F7',
          white: '#FFFFFF',
          deepgreen: '#01797e',
          green: '#008489',
          darkred: '#C03515',
        },
      }}
    >
      <HeartBlock>
        <HeartGroup>
          <Heart size="small" type="checkbox" checked />
        </HeartGroup>
        <HeartGroup>
          <Heart
            size="small"
            type="checkbox"
            checked={check}
            onChange={onChangeHeart}
          />
        </HeartGroup>
        <HeartGroup>
          <Heart
            size="medium"
            hover={true}
            position={true}
            type="checkbox"
            checked={check}
            onChange={onChangeHeart}
          />
        </HeartGroup>
        <HeartGroup>
          <Heart
            size="small"
            border={true}
            type="checkbox"
            checked={check}
            onChange={onChangeHeart}
          />
          <Heart
            size="medium"
            border={true}
            type="checkbox"
            checked={check}
            onChange={onChangeHeart}
          />
        </HeartGroup>
      </HeartBlock>
    </ThemeProvider>
  );
};
export default MessagePage;
