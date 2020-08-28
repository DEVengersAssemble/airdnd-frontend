import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import MapMarker from '../../Components/Search/MapMarker';

const MapMarkerContainer = ({ marker, theme }) => {
  const { dateDiff } = useSelector(state => state.searchForm);
  const [infoState, setInfoState] = useState(false);
  const markerRef = useRef();

  const clickMarker = () => setInfoState(!infoState);

  return (
    <MapMarker
      theme={theme}
      markerRef={markerRef}
      marker={marker}
      dateDiff={dateDiff}
      infoState={infoState}
      clickMarker={clickMarker}
    />
  );
};

export default MapMarkerContainer;
