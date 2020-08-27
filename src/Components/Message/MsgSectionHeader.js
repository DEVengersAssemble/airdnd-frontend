import React, { useState } from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import theme from '../../style/theme';
import Button from '../Global/Button';
import { FaBox } from 'react-icons/fa';

const MsgSectionHeader = ({
  msgListSectionState,
  msgDetailSectionState,
  onToggleDetail,
}) => {
  console.log(msgDetailSectionState);
  return (
    <MsgSectionHeaderWrapper>
      <MsgSectionHeaderTitle>호스트닉네임</MsgSectionHeaderTitle>
      <MsgSectionHeaderButtonWrapper>
        <Button
          btnType="circle"
          border="none"
          hover={{ backgroundColor: theme.color.lightGray }}
          style={{ width: '4rem', height: '4rem' }}
        >
          <StMsgSectionHeaderStorageIcon />
        </Button>
        {msgDetailSectionState ? (
          <Button
            btnType="oval"
            border={`2px solid ${theme.color.black}`}
            hover="none"
            fontSize="1.2rem"
            style={{
              backgroundColor: `${theme.color.lightGray}`,
              fontWeight: '600',
            }}
            onClick={onToggleDetail}
          >
            세부사항 숨기기
          </Button>
        ) : (
          <Button
            btnType="oval"
            border={`1px solid ${theme.color.gray}`}
            hover={{ border: `1px solid ${theme.color.black}` }}
            fontSize="1.2rem"
            style={{ fontWeight: '400' }}
            onClick={onToggleDetail}
          >
            자세히 알아보기
          </Button>
        )}
      </MsgSectionHeaderButtonWrapper>
    </MsgSectionHeaderWrapper>
  );
};

const MsgSectionHeaderWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => darken(0.1, theme.color.lightGray)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-width: 37.5rem;
  height: 7.5rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
`;

const MsgSectionHeaderTitle = styled.h2`
  color: ${({ theme }) => theme.color.black};
  font-size: 1.8rem;
  font-weight: bold;
`;

const MsgSectionHeaderButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  & > Button + Button {
    margin-left: 1rem;
  }
`;

const StMsgSectionHeaderStorageIcon = styled(FaBox)`
  font-size: 1.45rem;
`;

export default MsgSectionHeader;
