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
  border-radius: 20px;
  padding: 10px 0;
  min-height: 0;
  min-width: 400px;
  color: ${({ theme }) => theme.color.black};
`;

const StSearchPlaceList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const StSearchPlaceIconWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  min-width: 40px;
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
  padding: 10px 20px;
  &:hover {
    background: ${({ theme }) => theme.color.lightGray};
  }
`;

const StItemText = styled.span`
  white-space: nowrap;
`;

const SearchPlacePopup = ({
  type,
  closePopup,
  locationResult,
  changeSearchData,
}) => {
  const popupRef = useRef();

  const handlePopup = ({ target }) => {
    if (type === 'location' && !popupRef.current.contains(target)) {
      closePopup();
    }
  };
  useEffect(() => {
    document.addEventListener('click', handlePopup);
    return () => {
      document.removeEventListener('click', handlePopup);
    };
  }, [locationResult, handlePopup, type]);
  return (
    <StSearchPlacePopupWrapper ref={popupRef}>
      <StSearchPlacePopup
        popupState={locationResult.length && type === 'location'}
      >
        <StSearchPlaceList>
          {locationResult.map((item, index) => {
            return (
              <StSearchPlaceItem
                key={index}
                onClick={() => {
                  changeSearchData('location', item);
                }}
              >
                <StSearchPlaceIconWrapper>
                  <FaMapMarkerAlt></FaMapMarkerAlt>
                </StSearchPlaceIconWrapper>
                <StItemText>{item}</StItemText>
              </StSearchPlaceItem>
            );
          })}
        </StSearchPlaceList>
      </StSearchPlacePopup>
    </StSearchPlacePopupWrapper>
  );
};

export default SearchPlacePopup;
