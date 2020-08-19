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
        bookmarkListId: 0,
        bookmarkListTitle: '',
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
  homeDetailPage: {
    id: 0,
    host: {
      hostId: 0,
      userId: 0,
      isSupperhost: true,
    },
    title: '',
    subTitle: '',
    feature: '',
    location: {
      lat: '',
      lng: '',
    },
    address: '',
    addressDescription: '',
    homeType: '',
    capacity: 0,
    dates: [''], // ...?
    images: [''],
    description: '',
    price: '',
    isBookmarked: true,
    amenities: {
      name: '',
      icon: '',
    },
    notice: {
      rules: {
        checkin: '',
        checkout: '',
      },
      safety: {
        name: '',
        icon: '',
      },
    }, // ...?
    bedrooms: [
      {
        icon: [''],
        room: '',
        size: '',
      }, // ...?
    ],
    reviews: {
      cleanliness: 0,
      accuracy: 0,
      communication: 0,
      location: 0,
      checkin: 0,
      value: 0,
      count: 0,
      rating: 0,
      comments: [
        {
          userDd: 0,
          userProfileImg: '',
          userFirstname: '',
          date: '',
          contents: '',
        },
      ],
    },
  },
  searchPage: {
    homes: [
      {
        homeId: 0,
        isSuperhost: true,
        isBookmarked: true,
        image: '', // 첫번째 이미지만
        imageCount: 0, // 이미지 개수
        subTitle: '',
        title: '',
        feature: '',
        rating: 0,
        reviewCount: 0,
        location: { lat: 0, lng: 0 },
      },
    ],
    homeImage: '', // 캐러셀 버튼 클릭할 때 받아올 이미지
    recentHomes: [
      {
        homeId: 0,
        isSuperhost: true,
        isBookmarked: true,
        image: '', // 첫번째 이미지만
        imageCount: 0, // 이미지 개수
        subTitle: '',
        title: '',
        rating: 0,
        reviewCount: 0,
      },
    ],
    filter: [],
    dataTotal: 0,
    price: [0], // 만원 단위로 숙박 개수
  },
  // map 범위 보낼때
  // mapSend: {
  //   from: { lat: 0, lng: 0 },
  //   to: { lat: 0, lng: 0 },
  // },
  homeMyPage: {},
};
