import React, { useState } from 'react';
import styled from 'styled-components';
import CheckBox from '../Components/Global/Checkbox';
import { Heart, CkHeart } from '../Components/Global/Heart';
import { Input, NewInput } from '../Components/Global/Input';

const CheckBoxGroup = styled.div`
  display: flex;
  align-items: center;
  /* flex-direction: column; */
  padding: 5rem;
  border: 1px solid black;
`;

const HeartGroup = styled.div`
  display: flex;
  align-items: center;
  /* flex-direction: column; */
  padding: 5rem;
  border: 1px solid black;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5rem;
  border: 1px solid black;
`;

const MessagePage = () => {
  const [check, setCheck] = useState(false);

  const onChangeCheckBox = e => {
    setCheck(e.target.checked);
  };

  const onChangeHeart = e => {
    setCheck(e.target.checked);
  };

  const value = '지도에서 사용할 땐 props에 map을 추가하세요';

  return (
    <>
      <CheckBoxGroup>
        <CheckBox value={value} checked={check} onChange={onChangeCheckBox} />
        <CheckBox
          value={value}
          map
          checked={check}
          onChange={onChangeCheckBox}
        />
        <CheckBox checked={check} onChange={onChangeCheckBox} />
        <CheckBox checked={check} onChange={onChangeCheckBox} />
      </CheckBoxGroup>
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
      <InputGroup>
        <Input type placeholder="이메일 주소">
          <div>이메일 주소</div>
        </Input>
        <Input type focusBorderColor placeholder="이메일 주소">
          <div>이메일 주소</div>
        </Input>
        <Input focusBorderColor type placeholder="이름" />
        <Input type="password" placeholder="패스워드" />
        <Input borderNone placeholder="보더 논" />
      </InputGroup>
      <InputGroup>
        <Input message placeholder="메시지를 입력하세요." />
      </InputGroup>
      <InputGroup>
        <NewInput text="이름" type placeholder="이름" />
      </InputGroup>
    </>
  );
};

export default MessagePage;
