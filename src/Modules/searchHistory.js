// action types
const SET_LOCATION = 'searchHistory/SET_LOCATION';
const SET_CHECKIN = 'searchHisotry/SET_CHECKIN';
const SET_CHECKOUT = 'searchHisotry/SET_CHECKOUT';
const SET_FLEXIBLE_DATE = 'searchHisotry/SET_FLEXIBLE_DATE';
const SET_GUESTS = 'searchHisotry/SET_GUESTS';

// action creators
export const setLocation = payload => ({ type: SET_LOCATION, payload });
export const setCheckIn = payload => ({ type: SET_CHECKIN, payload });
export const setCheckOut = payload => ({ type: SET_CHECKOUT, payload });
export const setFlexibleDate = payload => ({
  type: SET_FLEXIBLE_DATE,
  payload,
});
export const setGuests = payload => ({ type: SET_GUESTS, payload });

// initialState
const initialState = {
  location: '',
  checkIn: '',
  checkOut: '',
  flexibleDate: 0,
  guests: {
    adult: 0,
    child: 0,
    infant: 0,
  },
};

// reducer
const searchHistory = (state = initialState, action) => {
  const { location, checkIn, checkOut, flexibleDate, guests } = action.payload;
  switch (action.type) {
    case SET_LOCATION:
      return {
        ...state,
        location,
      };
    case SET_CHECKIN: {
      return {
        ...state,
        checkIn,
      };
    }
    case SET_CHECKOUT: {
      return {
        ...state,
        checkOut,
      };
    }
    case SET_FLEXIBLE_DATE: {
      return {
        ...state,
        flexibleDate,
      };
    }
    case SET_GUESTS: {
      return {
        ...state,
        guests,
      };
    }
    default:
      return state;
  }
};

export default searchHistory;
