import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Popup from '../Global/Popup';
import { FaMapMarkerAlt } from 'react-icons/fa';
const StSearchPlacePopupWrapper = styled.div`
  position: relative;
`;

const StSearchPlacePopup = styled(Popup)`
  top: 14px;
  left: 0;
  width: 300px;
  padding: 10px 0;
  color: ${({ theme }) => theme.color.black};
`;

const StSearchPlaceList = styled.ul``;

const StSearchPlaceIconWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  font-size: 14px;
  margin-right: 10px;
  background: ${({ theme }) => theme.color.line};
  border: 1px solid ${({ theme }) => theme.color.gray};
  border-radius: 8px;
`;

const StSearchPlaceItem = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 10px 0 10px 20px;
  &:hover {
    background: ${({ theme }) => theme.color.lightGray};
  }
`;

const SearchPlacePopup = ({ type }) => {
  console.log('type: ', type);
  const popupRef = useRef();
  const handlePopup = ({ target }) => {
    if (type === 'place' && !popupRef.current.contains(target)) {
      // closePopup();
      console.log('!!!!!!');
    }
  };
  useEffect(() => {
    document.addEventListener('click', handlePopup);
    return () => {
      document.removeEventListener('click', handlePopup);
    };
  }, [handlePopup, type]);
  return (
    <StSearchPlacePopupWrapper ref={popupRef}>
      <StSearchPlacePopup popupState={type === 'place'}>
        <StSearchPlaceList>
          <StSearchPlaceItem>
            <StSearchPlaceIconWrapper>
              <FaMapMarkerAlt></FaMapMarkerAlt>
            </StSearchPlaceIconWrapper>
            서울시
          </StSearchPlaceItem>
          <StSearchPlaceItem>
            <StSearchPlaceIconWrapper>
              <FaMapMarkerAlt></FaMapMarkerAlt>
            </StSearchPlaceIconWrapper>
            서울시
          </StSearchPlaceItem>
          <StSearchPlaceItem>
            <StSearchPlaceIconWrapper>
              <FaMapMarkerAlt></FaMapMarkerAlt>
            </StSearchPlaceIconWrapper>
            서울시
          </StSearchPlaceItem>
          <StSearchPlaceItem>
            <StSearchPlaceIconWrapper>
              <FaMapMarkerAlt></FaMapMarkerAlt>
            </StSearchPlaceIconWrapper>
            서울시
          </StSearchPlaceItem>
          <StSearchPlaceItem>
            <StSearchPlaceIconWrapper>
              <FaMapMarkerAlt></FaMapMarkerAlt>
            </StSearchPlaceIconWrapper>
            서울시
          </StSearchPlaceItem>
        </StSearchPlaceList>
      </StSearchPlacePopup>
    </StSearchPlacePopupWrapper>
  );
};

export default SearchPlacePopup;
