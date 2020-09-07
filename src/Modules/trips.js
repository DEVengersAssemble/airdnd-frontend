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

const SHOW_RESERVATION = 'trips/SHOW_RESERVATION';

// action creator
export const fetchTrips = fetchDataThunk(FETCH_TRIPS, api.fetchTripsData);

export const showReservation = () => ({
  type: SHOW_RESERVATION,
});

// initial state
const initialState = {
  trips: reducerUtils.initial(),
  // trips: {
  //   data: {
  //     upcoming: {
  //       id: 0,
  //       firstName: '태진',
  //       lastName: '김',
  //       profileImg:
  //         'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg',
  //       isHost: false,
  //       reservations: [
  //         {
  //           reservationId: 2,
  //           homeId: 2,
  //           hostname: 'Bhel',
  //           homeImage: [
  //             'https://a0.muscache.com/im/pictures/a3912086-e317-4913-ab09-fb38e2737ee5.jpg?aki_policy=large',
  //           ],
  //           hostId: 2,
  //           checkin: '2020/09/10/13:00',
  //           checkout: '2020/09/12/11:00',
  //           address: 'Guam',
  //           location: { lat: 37.12344, lng: 127.12345 },
  //           price: 77722,
  //           rules: [],
  //           businessInfo: '',
  //           isCanceled: false,
  //           title: 'Comfortable Bedroom for 2',
  //           withGuest: true,
  //           guest: [
  //             {
  //               id: 1,
  //               firstName: '지미',
  //               lastName: '주',
  //               profileImg:
  //                 'https://media.short-biography.com/wp-content/uploads/mark-zuckerberg/Mark-Zuckerberg.jpg',
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     past: {
  //       id: 0,
  //       firstName: '태진',
  //       lastName: '김',
  //       profileImg:
  //         'https://media.short-biography.com/wp-content/uploads/mark-zuckerberg/Mark-Zuckerberg.jpg',
  //       isHost: false,
  //       reservations: [
  //         {
  //           reservationId: 2,
  //           homeId: 2,
  //           hostname: 'Bhel',
  //           homeImage: [
  //             'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg',
  //           ],
  //           hostId: 2,
  //           checkin: '2020/09/10/13:00',
  //           checkout: '2020/09/12/11:00',
  //           address: 'Guam',
  //           location: { lat: 37.12344, lng: 127.12345 },
  //           price: 77722,
  //           rules: [],
  //           businessInfo: '',
  //           isCanceled: false,
  //           title: 'Comfortable Bedroom for 2',
  //           withGuest: true,
  //           guest: [
  //             {
  //               id: 1,
  //               firstName: '지미',
  //               lastName: '주',
  //               profileImg:
  //                 'https://a0.muscache.com/im/pictures/a3912086-e317-4913-ab09-fb38e2737ee5.jpg?aki_policy=large',
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     canceled: {
  //       id: 0,
  //       firstName: '태진',
  //       lastName: '김',
  //       profileImg:
  //         'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg',
  //       isHost: false,
  //       reservations: [
  //         {
  //           reservationId: 2,
  //           homeId: 2,
  //           hostname: 'Bhel',
  //           homeImage: [
  //             'https://a0.muscache.com/im/pictures/a3912086-e317-4913-ab09-fb38e2737ee5.jpg?aki_policy=large',
  //           ],
  //           hostId: 2,
  //           checkin: '2020/09/10/13:00',
  //           checkout: '2020/09/12/11:00',
  //           address: 'Guam',
  //           location: { lat: 37.12344, lng: 127.12345 },
  //           price: 77722,
  //           rules: [],
  //           businessInfo: '',
  //           isCanceled: false,
  //           title: 'Comfortable Bedroom for 2',
  //           withGuest: true,
  //           guest: [
  //             {
  //               id: 1,
  //               firstName: '지미',
  //               lastName: '주',
  //               profileImg:
  //                 'https://media.short-biography.com/wp-content/uploads/mark-zuckerberg/Mark-Zuckerberg.jpg',
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   },
  // },
};

// reducer
const trips = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRIPS:
    case FETCH_TRIPS_SUCCESS:
    case FETCH_TRIPS_ERROR:
      return handleAsyncActions(FETCH_TRIPS, 'trips')(state, action);
    case SHOW_RESERVATION:
      return state;
    default:
      return state;
  }
};

export default trips;
