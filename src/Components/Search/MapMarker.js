import React from 'react';
import styled, { css } from 'styled-components';
import { Marker, OverlayView } from 'react-google-maps';
import { InfoBox } from 'react-google-maps/lib/components/addons/InfoBox';
import { AiFillHome } from 'react-icons/ai';
import Button from '../Global/Button';
import HomePopup from './HomePopup';
import { Heart } from '../Global/Heart';

const getPixelPositionOffset = (width, height) => ({
  x: width + width / 2,
  y: -(height * 2),
});

const MapMarker = ({
  theme,
  isOpen,
  marker,
  markerState,
  dateDiff,
  clickMarker,
}) => {
  const { homeId, location, price, isBookmarked } = marker;
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
            btnType="oval"
            isOpen={isOpen}
            theme={theme}
            onClick={clickMarker}
          >
            <span>
              ₩<Strong> {price.toLocaleString()} </Strong>
            </span>
            {isBookmarked && (
              <Heart
                size="smaller"
                bgColor={markerState === homeId ? 'white' : 'main'}
                stroke={markerState === homeId ? 'black' : 'white'}
                theme={theme}
              />
            )}
          </PriceMarker>
        ) : (
          <HomeMarker
            btnType="circle"
            isOpen={isOpen}
            theme={theme}
            onClick={clickMarker}
          >
            <AiFillHome />
            {isBookmarked && (
              <MiniHeart
                size="smaller"
                bgColor={markerState === homeId ? 'white' : 'main'}
                stroke={markerState === homeId ? 'black' : 'white'}
                theme={theme}
              />
            )}
          </HomeMarker>
        )}
      </OverlayView>
      {isOpen && (
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
    z-index: 20;
  }
`;

const focusStyle = css`
  ${({ isOpen, theme }) =>
    isOpen
      ? css`
          background: ${theme.color.black};
          color: ${theme.color.white};
        `
      : css`
          background: ${theme.color.white};
          color: ${theme.color.black};
        `}
`;

const HomeMarker = styled(Button)`
  ${buttonStyle};
  ${focusStyle};
  overflow: visible;
  position: relative;
`;

const PriceMarker = styled(Button)`
  ${buttonStyle};
  ${focusStyle};
  font-size: 1.4rem;
  padding: 0.6rem 0.8rem;
`;

const Strong = styled.strong`
  padding: 0 3px;
`;

const MiniHeart = styled(Heart)`
  position: absolute;
  top: -0.3rem;
  right: -0.3rem;
`;

export default MapMarker;
