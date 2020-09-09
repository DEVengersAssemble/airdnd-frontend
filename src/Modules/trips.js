import * as api from '../Api/tripsApi';
import {
  fetchDataThunk,
  reducerUtils,
  handleAsyncActions,
} from '../lib/asyncUtils';

// action type
const FETCH_TRIPS = 'trips/FETCH_TRIPS';
const FETCH_TRIPS_SUCCESS = 'trips/FETCH_TRIPS_SUCCESS';
const FETCH_TRIPS_ERROR = 'trips/FETCH_TRIPS_ERROR';

// action creator
export const fetchTrips = fetchDataThunk(FETCH_TRIPS, api.fetchTripsData);

// initial state
const initialState = reducerUtils.initial();

// reducer
const trips = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRIPS:
    case FETCH_TRIPS_SUCCESS:
    case FETCH_TRIPS_ERROR:
      return handleAsyncActions(FETCH_TRIPS)(state, action);
    default:
      return state;
  }
};

export default trips;
