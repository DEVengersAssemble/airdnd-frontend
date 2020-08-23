// action types
const SET_RESERVATION = 'user/SET_RESERVATION';
const ADD_BOOKMARKLIST = 'user/ADD_BOOKMARKLIST';
const ADD_BOOKMARK = 'user/ADD_BOOKMARK';
const REMOVE_BOOKMARK = 'user/REMOVE_BOOKMARK';

// action creators
export const setReservation = payload => ({ type: SET_RESERVATION });
export const addBookmarkList = title => ({ type: ADD_BOOKMARKLIST, title });
export const addBookmark = (homeId, bookmarkListId) => ({
  type: ADD_BOOKMARK,
  homeId,
  bookmarkListId,
});
export const removeBookmark = homeId => ({ type: REMOVE_BOOKMARK, homeId });

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
    case ADD_BOOKMARKLIST:
      return {
        ...state,
        bookmarkLists: state.bookmarkLists.concat({
          bookmarkListId:
            state.bookmarkLists[state.bookmarkLists.length - 1].bookmarkListId +
            1,
          bookmarkListTitle: action.title,
          bookmarks: [],
        }),
      };
    case ADD_BOOKMARK:
      return {
        ...state,
        bookmarkLists: state.bookmarkLists.map(list =>
          list.bookmarkListId === action.bookmarkListId
            ? list.bookmarks.concat({ homeId: action.homeId })
            : list,
        ),
      };
    case REMOVE_BOOKMARK:
      return {
        ...state,
        bookmarkLists: state.bookmarkLists.map(list =>
          list.bookmarks.filter(({ homeId }) => homeId !== action.homeId),
        ),
      };
    default:
      return state;
  }
};

export default user;
