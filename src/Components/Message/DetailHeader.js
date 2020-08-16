import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import theme from '../../style/theme';
import Button from '../Global/Button';
import { MdClear } from 'react-icons/md';

/**
 * title: 호스트닉네임
 * Button props: children,btnType,color,border,width,height,fontSize,hover,padding,
 * focus,transition,type,...rest
 */

const DetailHeader = () => {
  return (
    <DetailHeaderDiv>
      <DetailHeaderTitle>세부 내용</DetailHeaderTitle>
      <Button
        btnType="circle"
        border="none"
        hover={{ backgroundColor: theme.lightGray }}
        style={{ width: '3.5rem', height: '3.5rem' }}
      >
        <DetailClearIcon />
      </Button>
    </DetailHeaderDiv>
  );
};

const DetailHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${darken(0.1, theme.lightGray)};
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  height: 7.5rem;
`;

const DetailHeaderTitle = styled.h2`
  color: ${theme.black};
  font-size: 1.8rem;
  font-weight: bold;
`;

const DetailClearIcon = styled(MdClear)`
  font-size: 2.5rem;
`;

export default DetailHeader;
