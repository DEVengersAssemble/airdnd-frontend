// action type
const SHOW_MAP = 'search/SHOW_MAP';
const HIDE_MAP = 'search/HIDE_MAP';

// action creator
export const showMap = () => ({ type: SHOW_MAP });
export const hideMap = () => ({ type: HIDE_MAP });

// initial state
const initialState = {
  homes: [
    {
      homeId: 1,
      isSuperhost: true,
      isBookmarked: true,
      image:
        'https://a0.muscache.com/im/pictures/45739202/a5c377f1_original.jpg?aki_policy=small', // 첫번째 이미지만
      imageCount: 3, // 이미지 개수
      subTitle: 'MongMong-Toto의 호텔 객실',
      title: 'Pia Resort Hotel Corner Studio Room',
      feature: '최대 인원 2명 ﹒ 침실 1개 ﹒ 침대 2개 ﹒ 단독 사용 욕실 1개',
      rating: 4.25,
      reviewCount: 89,
      price: 54324,
      location: { lat: 0, lng: 0 },
    },
    {
      homeId: 2,
      isSuperhost: false,
      isBookmarked: false,
      image:
        'https://a0.muscache.com/im/pictures/a3912086-e317-4913-ab09-fb38e2737ee5.jpg?aki_policy=large',
      imageCount: 3, // 이미지 개수
      subTitle: 'MongMong-Toto의 호텔 객실이지롱',
      title: 'Pia Resort Hotel Corner Studio Room~~~',
      feature: '최대 인원 2명 ﹒ 침실 1개 ﹒ 침대 2개 ﹒ 단독 사용 욕실 1개!!!',
      rating: 3.95,
      reviewCount: 111,
      price: 98839,
      location: { lat: 0, lng: 0 },
    },
    {
      homeId: 3,
      isSuperhost: false,
      isBookmarked: false,
      image:
        'https://a0.muscache.com/im/pictures/a3912086-e317-4913-ab09-fb38e2737ee5.jpg?aki_policy=large',
      imageCount: 3, // 이미지 개수
      subTitle: 'MongMong-Toto의 호텔 객실이지롱',
      title: 'Pia Resort Hotel Corner Studio Room~~~',
      feature: '최대 인원 2명 ﹒ 침실 1개 ﹒ 침대 2개 ﹒ 단독 사용 욕실 1개!!!',
      rating: 3.95,
      reviewCount: 111,
      price: 98839,
      location: { lat: 0, lng: 0 },
    },
    {
      homeId: 4,
      isSuperhost: true,
      isBookmarked: false,
      image:
        'https://a0.muscache.com/im/pictures/3276d8ad-d455-4c59-923c-3f6926301a93.jpg?aki_policy=large',
      imageCount: 3, // 이미지 개수
      subTitle: 'MongMong-Toto의 호텔 객실이답',
      title: 'Pia Resort Hotel Corner Studio Room 기기',
      feature: '최대 인원 2명 ﹒ 침실 1개 ﹒ 침대 2개 ﹒ 단독 사용 욕실 1개***',
      rating: 4.99,
      reviewCount: 11,
      price: 30330,
      location: { lat: 0, lng: 0 },
    },
    {
      homeId: 5,
      isSuperhost: true,
      isBookmarked: false,
      image:
        'https://a0.muscache.com/im/pictures/3276d8ad-d455-4c59-923c-3f6926301a93.jpg?aki_policy=large',
      imageCount: 3, // 이미지 개수
      subTitle: 'MongMong-Toto의 호텔 객실이답',
      title: 'Pia Resort Hotel Corner Studio Room 기기',
      feature: '최대 인원 2명 ﹒ 침실 1개 ﹒ 침대 2개 ﹒ 단독 사용 욕실 1개***',
      rating: 0,
      reviewCount: 11,
      price: 30330,
      location: { lat: 0, lng: 0 },
    },
    {
      homeId: 6,
      isSuperhost: true,
      isBookmarked: false,
      image:
        'https://a0.muscache.com/im/pictures/3276d8ad-d455-4c59-923c-3f6926301a93.jpg?aki_policy=large',
      imageCount: 3, // 이미지 개수
      subTitle: 'MongMong-Toto의 호텔 객실이답',
      title: 'Pia Resort Hotel Corner Studio Room 기기',
      feature: '최대 인원 2명 ﹒ 침실 1개 ﹒ 침대 2개 ﹒ 단독 사용 욕실 1개***',
      rating: 4.99,
      reviewCount: 11,
      price: 30330,
      location: { lat: 0, lng: 0 },
    },
    {
      homeId: 7,
      isSuperhost: true,
      isBookmarked: false,
      image:
        'https://a0.muscache.com/im/pictures/3276d8ad-d455-4c59-923c-3f6926301a93.jpg?aki_policy=large',
      imageCount: 3, // 이미지 개수
      subTitle: 'MongMong-Toto의 호텔 객실이답',
      title: 'Pia Resort Hotel Corner Studio Room 기기',
      feature: '최대 인원 2명 ﹒ 침실 1개 ﹒ 침대 2개 ﹒ 단독 사용 욕실 1개***',
      rating: 4.99,
      reviewCount: 11,
      price: 30330,
      location: { lat: 0, lng: 0 },
    },
    {
      homeId: 8,
      isSuperhost: true,
      isBookmarked: false,
      image:
        'https://a0.muscache.com/im/pictures/3276d8ad-d455-4c59-923c-3f6926301a93.jpg?aki_policy=large',
      imageCount: 3, // 이미지 개수
      subTitle: 'MongMong-Toto의 호텔 객실이답',
      title: 'Pia Resort Hotel Corner Studio Room 기기',
      feature: '최대 인원 2명 ﹒ 침실 1개 ﹒ 침대 2개 ﹒ 단독 사용 욕실 1개***',
      rating: 4.99,
      reviewCount: 11,
      price: 30330,
      location: { lat: 0, lng: 0 },
    },
    {
      homeId: 9,
      isSuperhost: true,
      isBookmarked: false,
      image:
        'https://a0.muscache.com/im/pictures/3276d8ad-d455-4c59-923c-3f6926301a93.jpg?aki_policy=large',
      imageCount: 3, // 이미지 개수
      subTitle: 'MongMong-Toto의 호텔 객실이답',
      title: 'Pia Resort Hotel Corner Studio Room 기기',
      feature: '최대 인원 2명 ﹒ 침실 1개 ﹒ 침대 2개 ﹒ 단독 사용 욕실 1개***',
      rating: 4.99,
      reviewCount: 11,
      price: 30330,
      location: { lat: 0, lng: 0 },
    },
    {
      homeId: 10,
      isSuperhost: true,
      isBookmarked: false,
      image:
        'https://a0.muscache.com/im/pictures/3276d8ad-d455-4c59-923c-3f6926301a93.jpg?aki_policy=large',
      imageCount: 3, // 이미지 개수
      subTitle: 'MongMong-Toto의 호텔 객실이답',
      title: 'Pia Resort Hotel Corner Studio Room 기기',
      feature: '최대 인원 2명 ﹒ 침실 1개 ﹒ 침대 2개 ﹒ 단독 사용 욕실 1개***',
      rating: 4.99,
      reviewCount: 11,
      price: 30330,
      location: { lat: 0, lng: 0 },
    },
  ],
  homeImage: '', // 캐러셀 버튼 클릭할 때 받아올 이미지
  recentHomes: [
    {
      homeId: 5,
      isSuperhost: true,
      isBookmarked: true,
      image:
        'https://a0.muscache.com/im/pictures/a3912086-e317-4913-ab09-fb38e2737ee5.jpg?aki_policy=large', // 첫번째 이미지만
      imageCount: 4, // 이미지 개수
      subTitle: 'MongMong-Toto의 호텔 객실이답',
      title: 'Pia Resort Hotel Corner Studio Room 기기',
      rating: 3.33,
      reviewCount: 312,
    },
  ],
  filter: [],
  dataTotal: 190,
  priceArray: [
    0,
    0,
    0,
    0,
    0,
    54,
    13,
    45,
    76,
    43,
    21,
    32,
    12,
    43,
    8,
    21,
    24,
    23,
    45,
    7,
    78,
    77,
    56,
    54,
    63,
    22,
    45,
    77,
    1,
    3,
    44,
    54,
    65,
    22,
    37,
    48,
    73,
    24,
    54,
    45,
    7,
    78,
    77,
    56,
    54,
    63,
    22,
    45,
    1,
    3,
  ], // 2만원 단위로 숙박 개수
  averagePrice: 82094,
  mapState: true,

  // map 범위 보낼때
  // mapSend: {
  //   from: { lat: 0, lng: 0 },
  //   to: { lat: 0, lng: 0 },
  // },
};

// reducer
const search = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MAP:
      return {
        ...state,
        mapState: true,
      };
    case HIDE_MAP:
      return {
        ...state,
        mapState: false,
      };
    default:
      return state;
  }
};

export default search;
