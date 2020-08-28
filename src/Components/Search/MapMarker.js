import React from 'react';
import styled, { css } from 'styled-components';
import { Marker, OverlayView, InfoWindow } from 'react-google-maps';
import { AiFillHome } from 'react-icons/ai';
import Button from '../Global/Button';

const getPixelPositionOffset = (width, height) => ({
  x: -(width / 2),
  y: -(height / 2),
});

const MapMarker = ({ theme, marker, dateDiff, infoState, setInfoState }) => {
  const { id, location, price } = marker;
  return (
    <Marker
      position={location}
      icon={{
        scale: 0,
        path: '',
      }}
    >
      <OverlayView
        position={location}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        getPixelPositionOffset={getPixelPositionOffset}
      >
        {dateDiff ? (
          <PriceMarker
            onClick={() => setInfoState(true)}
            theme={theme}
            btnType="oval"
          >
            ₩ <strong>{price.toLocaleString()}</strong>
          </PriceMarker>
        ) : (
          <HomeMarker theme={theme} btnType="circle">
            <AiFillHome />
          </HomeMarker>
        )}
      </OverlayView>
      {infoState && (
        <InfoWindow>
          <AiFillHome />
        </InfoWindow>
      )}
    </Marker>
  );
};

const buttonStyle = css`
  box-shadow: 0 0 2px ${({ theme }) => theme.color.gray};
  border: none;
  transition: 0.3s;
  &:hover {
    border: none;
    transform: scale(1.1);
    transition: 0.3s;
  }
  &:focus {
    background: black;
    color: white;
  }
`;

const HomeMarker = styled(Button)`
  ${buttonStyle};
`;

const PriceMarker = styled(Button)`
  ${buttonStyle};
  font-size: 1.4rem;
  padding: 0.6rem 0.8rem;
`;

export default MapMarker;
