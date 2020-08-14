import React, { useState } from 'react';
import styled from 'styled-components';
import CheckBox from '../Components/Global/CheckBox';

const CheckBoxGroup = styled.div`
  display: flex;
  align-items: center;
  /* flex-direction: column; */
  padding: 5rem;
  border: 1px solid black;
`;

const MessagePage = () => {
  const [check, setCheck] = useState(false);

  const onChangeCheckBox = e => {
    setCheck(e.target.checked);
  };

  const value = '지도에서 사용할 땐 props에 map을 추가하세요';

  return (
    <CheckBoxGroup>
      <CheckBox value={value} checked={check} onChange={onChangeCheckBox} />
      <CheckBox value={value} map checked={check} onChange={onChangeCheckBox} />
      <CheckBox checked={check} onChange={onChangeCheckBox} />
      <CheckBox checked={check} onChange={onChangeCheckBox} />
    </CheckBoxGroup>
  );
};

export default MessagePage;
