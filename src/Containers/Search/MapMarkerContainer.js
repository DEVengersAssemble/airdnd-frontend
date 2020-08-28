import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MapMarker from '../../Components/Search/MapMarker';
import { closeMarker, openMarker } from '../../Modules/search';

const MapMarkerContainer = ({ marker, theme }) => {
  const { dateDiff } = useSelector(state => state.searchForm);
  const { markerState } = useSelector(state => state.search);
  const dispatch = useDispatch();
  const markerRef = useRef();
  const isOpen = markerState === marker.homeId;
  const clickMarker = () => {
    isOpen ? dispatch(closeMarker()) : dispatch(openMarker(marker.homeId));
  };

  return (
    <MapMarker
      theme={theme}
      isOpen={isOpen}
      markerRef={markerRef}
      marker={marker}
      markerState={markerState}
      dateDiff={dateDiff}
      clickMarker={clickMarker}
    />
  );
};

export default MapMarkerContainer;
