import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { GrClose } from 'react-icons/gr';

// header, footer 보이게 하고 싶으면 "flex"를 전달하세요.
const Modal = ({
  children,
  width,
  height,
  header,
  footer,
  title,
  footerText,
  modalState,
  setModalState,
}) => {
  const onDelete = e => {
    if (typeof e.target.className !== 'string') return;
    if (!e.target.className.includes('dimmed')) return;
    setModalState('none');
  };

  return (
    <StModalDimmed
      modalState={modalState}
      onClick={onDelete}
      className="dimmed"
    >
      <StModalDiv width={width} height={height}>
        <StModalCloseBtn type="button" onClick={() => setModalState('none')}>
          <StCloseIcon />
        </StModalCloseBtn>
        <StModalHeader header={header}>
          <h2>{title}</h2>
        </StModalHeader>
        {children}
        <StModalFooter footer={footer}>
          <StFooterBtn type="button">{footerText}</StFooterBtn>
        </StModalFooter>
      </StModalDiv>
    </StModalDimmed>
  );
};

const StModalDimmed = styled.div`
  display: ${props => props.modalState};
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.53);
`;

const slideUp = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: none;
    opacity: 1;
  }
`;

const StModalDiv = styled.div`
  background-color: #fff;
  position: fixed;
  margin: auto;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: ${props => props.width || '70rem'};
  height: ${props => props.height || '40rem'};
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.28) 0px 8px 28px;
  overflow: hidden;
  animation-name: ${slideUp};
  animation-duration: 0.4s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`;

const StModalCloseBtn = styled.button`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  width: 32px;
  height: 32px;
  padding: 7.8px 7px;
  align-items: center;
  text-align: center;
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0);
  cursor: pointer;
  outline: 0;
  background: transparent;
  &:hover {
    background-color: #eee;
  }
  &:focus {
    border: 2px solid #181818;
  }
`;

const StCloseIcon = styled(GrClose)`
  & > path {
    /* stroke: red; */
    stroke-width: 2.5;
  }
`;

const area = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 24px;
  padding-right: 24px;
  width: 100%;
  min-height: 64px;
  font-size: 1.6rem;
  font-weight: 800;
`;

const StModalHeader = styled.header`
  ${area};
  display: ${props => props.header || 'none'};
  border-bottom: 1px solid #ebebeb;
`;

const StModalFooter = styled.footer`
  ${area};
  position: absolute;
  bottom: 0;
  display: ${props => props.footer || 'none'};
  border-top: 1px solid #ebebeb;
`;

const StFooterBtn = styled.button`
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 1.6rem;
  text-decoration: underline;
  outline: none;
  &:hover,
  &:focus {
    font-weight: 800;
    background-color: #eee;
  }
`;

export default Modal;
