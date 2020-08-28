import React, { useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Marker, OverlayView } from 'react-google-maps';
import { InfoBox } from 'react-google-maps/lib/components/addons/InfoBox';
import { AiFillHome } from 'react-icons/ai';
import Button from '../Global/Button';
import HomePopup from './HomePopup';
import { Heart } from '../Global/Heart';

const getPixelPositionOffset = (width, height) => ({
  x: -(width / 2),
  y: -(height / 2),
});

const MapMarker = ({
  theme,
  marker,
  // markerRef,
  dateDiff,
  infoState,
  setInfoState,
}) => {
  const { location, price, isBookmarked } = marker;
  const markerRef = React.useRef();

  useEffect(() => {
    console.log(markerRef, infoState);
  }, [infoState]);

  console.log(markerRef);
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
            ref={markerRef}
            onClick={() => {
              setInfoState(true);
              console.log(markerRef);
            }}
            theme={theme}
            btnType="oval"
          >
            ₩ <Strong> {price.toLocaleString()} </Strong>
            {isBookmarked && (
              <Heart size="smaller" bgColor="main" theme={theme} />
            )}
          </PriceMarker>
        ) : (
          <HomeMarker
            ref={markerRef}
            theme={theme}
            btnType="circle"
            onClick={() => {
              setInfoState(!infoState);
              console.log(markerRef);
            }}
          >
            <AiFillHome />
            {isBookmarked && (
              <MiniHeart
                size="small"
                bgColor="main"
                stroke="white"
                theme={theme}
              />
            )}
          </HomeMarker>
        )}
      </OverlayView>
      {infoState && (
        <InfoBox options={{ closeBoxURL: '', enableEventPropagatioin: true }}>
          <HomePopup home={marker} dateDiff={dateDiff} theme={theme} />
        </InfoBox>
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
  overflow: visible;
  position: relative;
`;

const PriceMarker = styled(Button)`
  ${buttonStyle};
  font-size: 1.4rem;
  padding: 0.6rem 0.8rem;
`;

const Strong = styled.strong`
  padding: 0 3px;
`;

const MiniHeart = styled(Heart)`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
`;

export default MapMarker;
