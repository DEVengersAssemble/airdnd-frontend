import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MapMarker from '../../Components/Search/MapMarker';
import { closeMarker, openMarker } from '../../Modules/search';

const MapMarkerContainer = ({ marker, theme }) => {
  const { dateDiff } = useSelector(state => state.searchForm);
  const { markerState } = useSelector(state => state.search);
  const isOpen = markerState === marker.homeId;
  const dispatch = useDispatch();
  const clickMarker = () => {
    isOpen ? dispatch(closeMarker()) : dispatch(openMarker(marker.homeId));
  };

  return (
    <MapMarker
      theme={theme}
      isOpen={isOpen}
      marker={marker}
      markerState={markerState}
      dateDiff={dateDiff}
      clickMarker={clickMarker}
    />
  );
};

export default MapMarkerContainer;
