import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Heart from '../Components/Global/Heart';

const HeartBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
  background-color: lightcoral;
`;
const HeartGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

const MessagePage = () => {
  const [check, setCheck] = useState(false);

  const onHeart = e => {
    setCheck(e.target.checked);
  };

  return (
    <ThemeProvider
      theme={{
        palette: {
          main: '#ff385c',
          white: '#aaaaaa',
          dark: '#181818',
        },
      }}
    >
      <HeartBlock>
        <HeartGroup>
          <Heart check={check} onHeart={onHeart} />
          <Heart hover borderColor="white" check={check} onHeart={onHeart} />
          <Heart check={check} onHeart={onHeart} />
        </HeartGroup>
      </HeartBlock>
    </ThemeProvider>
  );
};

export default MessagePage;
