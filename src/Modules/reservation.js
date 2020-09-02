const SET_CHECKIN = 'reservation/SET_CHECKIN';
const SET_CHECKOUT = 'reservation/SET_CHECKOUT';
const SET_GUESTS = 'reservation/SET_GUESTS';

export const setCheckin = checkin => ({ type: SET_CHECKIN, checkin });
export const setCheckout = checkout => ({ type: SET_CHECKOUT, checkout });
export const setGuests = guests => ({ type: SET_CHECKIN, guests });

const getDateDiff = (date1, date2) => {
  const checkIn = new Date(date1);
  const checkOut = new Date(date2);
  const timeDiff = checkOut.getTime() - checkIn.getTime();
  return Math.ceil(timeDiff / (1000 * 3600 * 24));
};

const initialState = {
  checkin: '2020.09.01',
  checkout: '',
  dateDiff: getDateDiff('2020.09.01', '2020.09.05'),
  reservedDates: ['2020.08.15', '2020.08.16', '2020.08.20', '2020.09.25'],
  guests: { adult: 0, child: 0, infant: 0 },
  totalGuest: 0,
};

const reservation = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHECKIN: {
      return {
        ...state,
        checkin: action.checkin,
      };
    }
    case SET_CHECKOUT: {
      return {
        ...state,
        checkout: action.checkout,
      };
    }
    case SET_GUESTS: {
      return {
        ...state,
        guests: action.guests,
      };
    }
    default:
      return state;
  }
};

export default reservation;
