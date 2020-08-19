const initialState = {
  currentUser: {
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
            images: [''],
          },
        ],
      },
    ],
  },
};

const main = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default main;
