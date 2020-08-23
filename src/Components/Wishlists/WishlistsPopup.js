import React from 'react';
import styled from 'styled-components';
import Popup from '../Global/Popup';
import Button from '../Global/Button';
import { NewInput } from '../Global/Input';
import DropDownWithFocus from '../Global/DropDownWithFocus';
import { GrClose } from 'react-icons/gr';

const WishlistsPopup = ({ openPopup, onClickPopup }) => {
  return (
    <StPopup
      popupState={openPopup}
      top="3.5rem"
      right="0rem"
      padding="1rem 0rem"
      style={{
        border: 'none',
      }}
    >
      <PopupHeader>
        <PopupTitle>목록 만들기</PopupTitle>
        <StDeleteButton btnType="circle" border="none" onClick={onClickPopup}>
          <GrClose />
        </StDeleteButton>
      </PopupHeader>
      <PopupMain>
        <NewInput
          title="이름3"
          placeholder="예: 여름 휴가"
          // value={value}
          // onChange={onChangeInput}
        />
        <StDropDown
          width="100%"
          name="개인정보 설정"
          title="개인정보 설정"
          options={['전체공개', '비공개']}
        />
      </PopupMain>
      <PopupFooter>
        <Button btnType="underlined" padding="1rem" onClick={onClickPopup}>
          취소
        </Button>
        <Button color="black" hover="background: black">
          저장
        </Button>
      </PopupFooter>
    </StPopup>
  );
};

const StPopup = styled(Popup)`
  width: 40rem;
  padding: 0;
  top: 5.5rem;
`;

const PopupHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6rem;
  padding: 2rem 0rem;
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.color.line};
`;

const StDeleteButton = styled(Button)`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  &:hover {
    background: ${({ theme }) => theme.color.lightGray};
  }
`;

const PopupTitle = styled.h2`
  font-weight: 600;
`;

const PopupMain = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 4rem 2rem;
  height: 100%;
  & > :first-child {
    margin-bottom: 2.5rem;
  }
`;

const StDropDown = styled(DropDownWithFocus)`
  background: black;
`;

const PopupFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.color.line};
  padding: 2rem;
  height: 6rem;
`;

export default WishlistsPopup;
