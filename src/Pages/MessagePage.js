import React, { useState } from 'react';
import styled from 'styled-components';
import { Heart, CkHeart } from '../Components/Global/Heart';
// import HeartBackup from '../Components/Global/HeartBackup';

const HeartBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 756px;
  margin: 10rem auto;
  padding: 5rem;
  border: 1px solid black;
  background: url('https://a0.muscache.com/im/pictures/f8e414db-bbde-4b19-9450-81f0d6479b0c.jpg?im_w=1200');
  /* background-color: lightgoldenrodyellow; */
`;

const HeartGroup = styled.div`
  display: flex;
  & + & {
    margin-top: 5rem;
  }
`;

const MessagePage = () => {
  const [check, setCheck] = useState(false);

  const onChangeHeart = e => {
    setCheck(e.target.checked);
  };

  return (
    <HeartBlock>
      <HeartGroup>
        <Heart size="small" bgColor="main" />
        <Heart size="medium" bgColor="main" />
        <Heart size="large" bgColor="main" />
      </HeartGroup>
      <HeartGroup>
        <Heart size="small" bgColor="white" stroke="black" />
        <Heart size="medium" bgColor="white" stroke="black" />
        <Heart size="large" bgColor="white" stroke="black" />
      </HeartGroup>
      <HeartGroup>
        <Heart size="small" bgColor="main" stroke="white" />
        <Heart size="medium" bgColor="main" stroke="white" />
        <Heart size="large" bgColor="main" stroke="white" />
      </HeartGroup>
      <HeartGroup>
        <CkHeart hover={true} checked={check} onChange={onChangeHeart} />
      </HeartGroup>
      <HeartGroup>
        <CkHeart
          size="large"
          ckType={true}
          hover={false}
          checked={check}
          onChange={onChangeHeart}
        />
      </HeartGroup>
    </HeartBlock>
  );
};

export default MessagePage;
