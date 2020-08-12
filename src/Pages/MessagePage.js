import React, { useState } from 'react';
import styled from 'styled-components';
// import { SearchHeart, RecentSearchHeart } from '../Components/Global/Heart';
import {
  SearchHeart,
  RecentSearchHeart,
} from '../Components/Global/HeartBackup';

const HeartBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const MessagePage = () => {
  const [check, setCheck] = useState(false);
  const [rsCheck, setRsCheck] = useState(false);

  const onClickSearchHeart = e => {
    setCheck(e.target.checked);
  };

  const onClickRsHeart = e => {
    setRsCheck(e.target.checked);
  };

  return (
    <HeartBlock>
      <SearchHeart check={check} onClickSearchHeart={onClickSearchHeart} />
      <RecentSearchHeart check={rsCheck} onClickRsHeart={onClickRsHeart} />
    </HeartBlock>
  );
};

export default MessagePage;
