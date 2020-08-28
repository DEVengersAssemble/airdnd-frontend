import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MapMarker from '../../Components/Search/MapMarker';

const MapMarkerContainer = ({ marker }) => {
  const { dateDiff } = useSelector(state => state.searchForm);
  const [infoState, setInfoState] = useState(false);

  return (
    <MapMarker
      marker={marker}
      dateDiff={dateDiff}
      infoState={infoState}
      setInfoState={setInfoState}
    />
  );
};

export default MapMarkerContainer;
