// action types
const SET_RESERVATION = 'user/SET_RESERVATION';

// action creators
export const setReservation = payload => ({ type: SET_RESERVATION });

// initialState
const initialState = {
  id: 0,
  email: '',
  pw: '',
  fistName: '',
  lastName: '',
  phone: '',
  birthDay: '',
  profileImg: '',
  description: '',
  signupDate: '',
  social: {},
  isHost: true,
  reservations: [
    {
      reservationId: '',
      homeId: 0,
      hostId: 0,
      checkin: '',
      checkout: '',
      isCanceled: true,
      homeTitle: '',
      homeDescription: '',
    },
  ],
};

const user = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default user;
