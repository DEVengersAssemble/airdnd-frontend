import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MapMarker from '../../Components/Search/MapMarker';
import { closeMarker, openMarker } from '../../Modules/search';
import { store } from '../../index';

const MapMarkerContainer = ({ marker, theme }) => {
  const { dateDiff } = useSelector(state => state.search.searchForm);
  const { markerState, hoveredHome } = useSelector(state => state.search);
  const isHovered = hoveredHome === marker.homeId;
  const isOpen = markerState === marker.homeId;
  const dispatch = useDispatch();
  const clickMarker = () => {
    isOpen ? dispatch(closeMarker()) : dispatch(openMarker(marker.homeId));
  };

  return (
    <MapMarker
      theme={theme}
      store={store}
      isOpen={isOpen}
      isHovered={isHovered}
      marker={marker}
      dateDiff={dateDiff}
      clickMarker={clickMarker}
    />
  );
};

export default React.memo(MapMarkerContainer);
