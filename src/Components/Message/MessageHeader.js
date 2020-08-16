import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../style/theme';
import Button from '../Global/Button';
import { FaBox } from 'react-icons/fa';

/**
 * title: 호스트닉네임
 * Button props: children,btnType,color,border,width,height,fontSize,hover,padding,
 * focus,transition,type,...rest
 * Button type: 세부사항 숨기기, 자세히 알아보기
 * Tooltip 만들기
 */
const MessageHeader = () => {
  const [clicked, setClicked] = useState(false);
  const onClick = () => {
    setClicked(!clicked);
  };
  return (
    <MessageHeaderDiv>
      <MessageHeaderTitle>호스트닉네임</MessageHeaderTitle>
      <MessageHeaderButtonWrapper>
        <Button
          btnType="circle"
          border="none"
          hover={{ backgroundColor: theme.lightGray }}
          style={{ width: '4rem', height: '4rem' }}
        >
          <MessageStorageIcon />
        </Button>
        {clicked ? (
          <Button
            btnType="oval"
            border={`1px solid ${theme.gray}`}
            hover={{ border: `1px solid ${theme.black}` }}
            fontSize="1.2rem"
            style={{ fontWeight: '400' }}
            onClick={onClick}
          >
            자세히 알아보기
          </Button>
        ) : (
          <Button
            btnType="oval"
            border={`2px solid ${theme.black}`}
            hover="none"
            fontSize="1.2rem"
            style={{ backgroundColor: theme.lightGray, fontWeight: '600' }}
            onClick={onClick}
          >
            세부사항 숨기기
          </Button>
        )}
      </MessageHeaderButtonWrapper>
    </MessageHeaderDiv>
  );
};

const MessageHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${theme.gray};
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  height: 7.5rem;
`;

const MessageHeaderTitle = styled.h2`
  color: ${theme.black};
  font-size: 1.8rem;
  font-weight: bold;
`;

const MessageHeaderButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  & > Button + Button {
    margin-left: 1rem;
  }
`;

const MessageStorageIcon = styled(FaBox)`
  font-size: 1.45rem;
`;

export default MessageHeader;
