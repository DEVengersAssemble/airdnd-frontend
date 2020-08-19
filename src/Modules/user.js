// action types
const SET_RESERVATION = 'user/SET_RESERVATION';
const SET_BOOKMARKLIST = 'user/SET_BOOKMARKLIST';
const SET_BOOKMARK = 'user/SET_BOOKMARK';

// action creators
export const setReservation = payload => ({ type: SET_RESERVATION });
export const setBookmarkList = payload => ({ type: SET_BOOKMARKLIST });
export const setBookmark = payload => ({ type: SET_BOOKMARK, payload });

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
  bookmarkLists: [
    {
      bookmarkListId: 1,
      bookmarkListTitle: '나도 제주도 가고싶당',
      bookmarks: [
        {
          homeId: 0,
          subTitle: '',
          title: '',
          feature: '',
          rating: 0,
          reviewCount: 0,
          price: 0,
          images: [
            'https://a0.muscache.com/im/pictures/3276d8ad-d455-4c59-923c-3f6926301a93.jpg?aki_policy=large',
          ],
        },
        {
          homeId: 0,
          subTitle: '',
          title: '',
          feature: '',
          rating: 0,
          reviewCount: 0,
          price: 0,
          images: [''],
        },
        {
          homeId: 0,
          subTitle: '',
          title: '',
          feature: '',
          rating: 0,
          reviewCount: 0,
          price: 0,
          images: [''],
        },
      ],
    },
    {
      bookmarkListId: 2,
      bookmarkListTitle: '유럽도 다시 가고싶당',
      bookmarks: [
        {
          homeId: 0,
          subTitle: '',
          title: '',
          feature: '',
          rating: 0,
          reviewCount: 0,
          price: 0,
          images: [
            'https://a0.muscache.com/im/pictures/a3912086-e317-4913-ab09-fb38e2737ee5.jpg?aki_policy=large',
          ],
        },
      ],
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
