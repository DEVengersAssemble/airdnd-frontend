import React from 'react';
import styled, { css } from 'styled-components';
import { Marker, OverlayView, InfoWindow } from 'react-google-maps';
import { AiFillHome } from 'react-icons/ai';

const getPixelPositionOffset = (width, height) => ({
  x: -(width / 2),
  y: -(height / 2),
});

const MapMarker = ({ marker, dateDiff, infoState, setInfoState }) => {
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
          <PriceMarker onClick={() => setInfoState(true)}>
            ₩ <strong>{price.toLocaleString()}</strong>
          </PriceMarker>
        ) : (
          <HomeMarker>
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
  cursor: pointer;
  justify-content: center;
  align-items: center;
  outline: none;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
    transition: 0.3s;
  }
  &:focus {
    background: black;
    color: white;
  }
`;

const HomeMarker = styled.button`
  ${buttonStyle};
  border: 1px solid lightgray;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: 1.6rem;
  padding: 2px 0 0;
`;

const PriceMarker = styled.button`
  ${buttonStyle};
  border: 1px solid lightgray;
  border-radius: 30px;
  font-size: 1.4rem;
  padding: 0.6rem 0.8rem;
`;

export default MapMarker;
