import React from 'react';
import styled from 'styled-components';
import { rgba, lighten } from 'polished';
import theme from '../../style/theme';
import Modal from '../Global/Modal';
import ModalFooter from '../Global/ModalFooter';
import Button from '../Global/Button';

const DetailPdfModal = () => {
  const [modal, setModal] = React.useState(false);
  const [next, setNext] = React.useState(false);
  const [save, setSave] = React.useState(false);

  const onClickDelete = () => {
    next && setSave(!save);
    setModal(!modal);
  };

  const onClickNext = () => {
    setNext(!next);
  };

  return (
    <StPdfModal
      width="55rem"
      height="fit-content"
      // modalState="true"
      modalState={modal}
      setModalState={onClickDelete}
      header
    >
      <StPdfModalWrapper>
        <StPdfModalTitle>일행 정보</StPdfModalTitle>
        <StPdfModalSub>
          저장하기 전에 모든 게스트의 성명을 입력했는지 확인해주세요. 각 성명
          뒤에 쉼표를 찍어주세요.
        </StPdfModalSub>
        {next ? (
          <StPdfModalRadioWrapper>
            <StPdfModalLabel>
              <StPdfModalText>선호하는 언어</StPdfModalText>
              <StPdfModalInput type="radio" name="lang" checked />
            </StPdfModalLabel>
            <StPdfModalLabel>
              <StPdfModalText>중국어</StPdfModalText>
              <StPdfModalInput type="radio" name="lang" />
            </StPdfModalLabel>
            <StPdfModalLabel>
              <StPdfModalText>영어</StPdfModalText>
              <StPdfModalInput type="radio" name="lang" />
            </StPdfModalLabel>
            <StPdfModalLabel>
              <StPdfModalText>프랑스어</StPdfModalText>
              <StPdfModalInput type="radio" name="lang" />
            </StPdfModalLabel>
            <StPdfModalLabel>
              <StPdfModalText>독일어</StPdfModalText>
              <StPdfModalInput type="radio" name="lang" />
            </StPdfModalLabel>
            <StPdfModalLabel>
              <StPdfModalText>이탈리아어</StPdfModalText>
              <StPdfModalInput type="radio" name="lang" />
            </StPdfModalLabel>
            <StPdfModalLabel>
              <StPdfModalText>일본어</StPdfModalText>
              <StPdfModalInput type="radio" name="lang" />
            </StPdfModalLabel>
            <StPdfModalLabel>
              <StPdfModalText>한국어</StPdfModalText>
              <StPdfModalInput type="radio" name="lang" />
            </StPdfModalLabel>
            <StPdfModalLabel>
              <StPdfModalText>포르투갈어</StPdfModalText>
              <StPdfModalInput type="radio" name="lang" />
            </StPdfModalLabel>
            <StPdfModalLabel>
              <StPdfModalText>러시아어</StPdfModalText>
              <StPdfModalInput type="radio" name="lang" />
            </StPdfModalLabel>
            <StPdfModalLabel>
              <StPdfModalText>스페인어</StPdfModalText>
              <StPdfModalInput type="radio" name="lang" />
            </StPdfModalLabel>
          </StPdfModalRadioWrapper>
        ) : (
          <StPdfModalTextarea placeholder="예: Gil Dong Hong, Yuna Kim" />
        )}
      </StPdfModalWrapper>
      <StModalFooter>
        {next ? null : (
          <Button
            btnType="underlined"
            hover="none"
            padding="none"
            onClick={onClickNext}
          >
            건너뛰기
          </Button>
        )}
        <Button
          color="black"
          width={next ? '100%' : '8rem'}
          height="4.5rem"
          hover={`background: ${rgba(theme.color.black, 0.9)}`}
          onClick={onClickNext}
        >
          {next ? '저장' : '다음'}
        </Button>
      </StModalFooter>
    </StPdfModal>
  );
};

const StPdfModal = styled(Modal)`
  padding-bottom: 7rem;
  max-height: 85rem;
`;

const StPdfModalWrapper = styled.div`
  padding: 2.5rem 2.5rem;
`;

const StPdfModalTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
`;

const StPdfModalSub = styled.div`
  margin-top: 3rem;
  padding-top: 1rem;
  font-size: 1.5rem;
  font-weight: light;
  word-break: keep-all;
  line-height: 2rem;
`;

const StPdfModalTextarea = styled.textarea`
  margin-top: 3rem;
  width: 100%;
  height: 6rem;
  border: 1px solid ${({ theme }) => theme.color.gray};
  border-radius: 8px;
  padding: 1rem;
  font-size: 1.6rem;
  outline: none;
  &::placeholder {
    color: ${({ theme }) => theme.color.gray};
    font-size: 1.6rem;
  }
`;

const StPdfModalRadioWrapper = styled.div`
  padding: 2rem 0rem 3rem;
  height: 50rem;
  overflow: scroll;
`;

const StPdfModalLabel = styled.label`
  display: flex;
  justify-content: space-between;
  padding: 3rem 0rem;
  border-bottom: 1px solid ${({ theme }) => lighten(0.1, theme.color.gray)};
  & + label {
    border-bottom: 1px solid ${({ theme }) => lighten(0.1, theme.color.gray)};
  }
  cursor: pointer;
`;

const StPdfModalInput = styled.input`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;

const StPdfModalText = styled.div`
  font-weight: light;
`;

const StModalFooter = styled(ModalFooter)`
  display: flex;
  justify-content: space-between;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

export default DetailPdfModal;
