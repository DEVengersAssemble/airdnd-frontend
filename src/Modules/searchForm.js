// action types
const SET_LOCATION = 'searchForm/SET_LOCATION';
const SET_CHECKIN = 'searchForm/SET_CHECKIN';
const SET_CHECKOUT = 'searchForm/SET_CHECKOUT';
const SET_FLEXIBLE_DATE = 'searchForm/SET_FLEXIBLE_DATE';
const SET_GUESTS = 'searchForm/SET_GUESTS';

// action creators
export const setSearchData = data => {
  console.log('searchForm..data: ', data);
  const payload = data.value;
  console.log('data.name: ', data.name);
  console.log('payload: ', payload);
  switch (data.name) {
    case 'location':
      console.log('location!!!!');
      return { type: SET_LOCATION, payload };
    case 'checkIn':
      return { type: SET_CHECKIN, payload };
    case 'checkOut':
      return { type: SET_CHECKOUT, payload };
    case 'flexibleDate':
      return { type: SET_FLEXIBLE_DATE, payload };
    case 'guests':
      return { type: SET_GUESTS, payload };
    default:
      break;
  }
};

// export const setLocation = payload => ({ type: SET_LOCATION, payload });
// export const setCheckIn = payload => ({ type: SET_CHECKIN, payload });
// export const setCheckOut = payload => ({ type: SET_CHECKOUT, payload });
// export const setFlexibleDate = payload => ({
//   type: SET_FLEXIBLE_DATE,
//   payload,
// });
// export const setGuests = payload => ({ type: SET_GUESTS, payload });

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
const searchForm = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATION:
      return {
        ...state,
        location: action.payload,
      };
    case SET_CHECKIN: {
      return {
        ...state,
        checkIn: action.payload,
      };
    }
    case SET_CHECKOUT: {
      return {
        ...state,
        checkOut: action.payload,
      };
    }
    case SET_FLEXIBLE_DATE: {
      return {
        ...state,
        flexibleDate: action.payload,
      };
    }
    case SET_GUESTS: {
      return {
        ...state,
        guests: action.payload,
      };
    }
    default:
      return state;
  }
};

export default searchForm;
