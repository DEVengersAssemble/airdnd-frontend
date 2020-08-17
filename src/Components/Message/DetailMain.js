import React from 'react';
import styled from 'styled-components';
import theme from '../../style/theme';
import { darken } from 'polished';

const DetailMain = () => {
  return (
    <DetailMainWrapper>
      <div>세부 내용</div>
      <div>세부 내용</div>
      <div>세부 내용</div>
      <div>세부 내용</div>
      <div>세부 내용</div>
      <div>세부 내용</div>
      <div>세부 내용</div>
      <div>세부 내용</div>
      <div>세부 내용</div>
      <div>세부 내용</div>
      <div>세부 내용</div>
      <div>세부 내용</div>
      <div>세부 내용</div>
      <div>세부 내용</div>
      <div>세부 내용</div>
      <div>세부 내용</div>
      <div>세부 내용</div>
      <div>세부 내용</div>
      <div>세부 내용</div>
      <div>세부 내용</div>
      <div>세부 내용</div>
      <div>세부 내용</div>
      <div>세부 내용</div>
      <div>세부 내용</div>
      <div>세부 내용</div>
      <div>세부 내용</div>
      <div>세부 내용</div>
      <div>세부 내용</div>
      <div>세부 내용</div>
      <div>세부 내용</div>
      <div>세부 내용</div>
      <div>세부 내용</div>
      <div>세부 내용</div>
      <div>세부 내용</div>
      <div>세부 내용</div>
      <div>세부 내용</div>
      <div>세부 내용</div>
      <div>세부 내용</div>
      <div>세부 내용</div>
      <div>세부 내용</div>
    </DetailMainWrapper>
  );
};

const DetailMainWrapper = styled.div`
  border-left: 1px solid ${darken(0.1, theme.lightGray)};
  min-width: 37.5rem;
  position: absolute;
  top: 15.5rem;
  left: calc(100vw - 37.5rem);
  max-height: calc(100vh - 15.5rem);
  overflow: scroll;
`;

export default DetailMain;
