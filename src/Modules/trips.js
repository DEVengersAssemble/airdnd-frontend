// action type
const SHOW_RESERVATION = 'trips/SHOW_RESERVATION';

// action creator
export const showReservation = () => ({
  type: SHOW_RESERVATION,
});

// initial state
const initialState = {
  id: 0,
  firstName: '태진',
  lastName: '김',
  profileImg:
    'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg',
  isHost: false,
  reservations: [
    {
      reservationId: 1,
      homeId: 1,
      hostname: 'Paul',
      homeImage: [
        'https://a0.muscache.com/im/pictures/2db2f15d-df90-4208-a004-78423c0f1452.jpg?aki_policy=xx_large',
        'https://a0.muscache.com/im/pictures/a3912086-e317-4913-ab09-fb38e2737ee5.jpg?aki_policy=large',
      ],
      hostId: 1,
      checkin: '2020/09/25/15:00',
      checkout: '2020/09/26/10:00',
      address: 'Seoul',
      location: { lat: 37.12344, lng: 127.12345 },
      price: 54324,
      rules: [
        {
          name: '체크인 시간: 오후 3:00 - 오후 11:00',
        },
        {
          name: '체크아웃 시간: 오전 10:00',
        },
        {
          name: '키패드(으)로 셀프 체크인',
        },
        {
          name: '유아(만 2세 미만)에게 적합하지 않음',
        },
        {
          name: '흡연 금지',
        },
        {
          name: '반려동물 동반 불가',
        },
      ],
      businessInfo: '',
      isCanceled: false,
      title: 'Pia Resort Hotel Corner Studio Room~~~',
      withGuest: false,
      guest: [],
    },
    {
      reservationId: 2,
      homeId: 2,
      hostname: 'Bhel',
      homeImage: [
        'https://a0.muscache.com/im/pictures/a3912086-e317-4913-ab09-fb38e2737ee5.jpg?aki_policy=large',
      ],
      hostId: 2,
      checkin: '2020/09/10/13:00',
      checkout: '2020/09/12/11:00',
      address: 'Guam',
      location: { lat: 37.12344, lng: 127.12345 },
      price: 77722,
      rules: [],
      businessInfo: '',
      isCanceled: false,
      title: 'Comfortable Bedroom for 2',
      withGuest: true,
      guest: [
        {
          id: 1,
          firstName: '지미',
          lastName: '주',
          profileImg:
            'https://media.short-biography.com/wp-content/uploads/mark-zuckerberg/Mark-Zuckerberg.jpg',
        },
      ],
    },
    {
      reservationId: 3,
      homeId: 3,
      hostname: 'James',
      homeImage: [
        'https://a0.muscache.com/im/pictures/0aa122b4-d1a3-4c44-879d-ff705eff8f83.jpg?aki_policy=xx_large',
      ],
      hostId: 3,
      checkin: '2020/08/15/14:00',
      checkout: '2020/08/16/11:00',
      address: 'Jeju 및 Jeju-si',
      location: { lat: 37.12344, lng: 127.12345 },
      price: 123333,
      rules: [],
      businessInfo: '',
      isCanceled: true,
      title: 'Sky Gardens Apartment 307(Central Guam)',
      withGuest: false,
      guest: [],
    },
    {
      reservationId: 4,
      homeId: 4,
      hostname: 'Maple',
      homeImage: [
        'https://a0.muscache.com/im/pictures/d565cc5a-1a77-40a4-95b0-4f8bb5e60f06.jpg?aki_policy=xx_large',
      ],
      hostId: 4,
      checkin: '2020/06/01/15:00',
      checkout: '2020/06/03/10:00',
      address: 'Jeju 및 Seoquipo-si',
      location: { lat: 37.12344, lng: 127.12345 },
      price: 66409,
      rules: [],
      businessInfo: '',
      isCanceled: true,
      title: '최고 부유층 동네 "바리가다 하이츠"에 위치, 선셋House Room102',
      withGuest: false,
      guest: [],
    },
    {
      reservationId: 5,
      homeId: 5,
      hostname: 'Linda',
      homeImage: [
        'https://a0.muscache.com/im/pictures/d1028511-88b6-4ded-8ecf-afc0594bd0ae.jpg?aki_policy=xx_large',
      ],
      hostId: 5,
      checkin: '2020/07/30/11:00',
      checkout: '2020/08/01/10:00',
      address: 'Jeju-Jeju',
      location: { lat: 37.12344, lng: 127.12345 },
      price: 102394,
      rules: [],
      businessInfo: '',
      isCanceled: false,
      title:
        '#튤립# "영원한 사랑의 고백"의꽃말을 가진 포근한숙소~바다와 함께 아침에 눈뜨는 오션뷰~',
      withGuest: true,
      guest: [
        {
          id: 1,
          firstName: '지미',
          lastName: '주',
          profileImg:
            'https://media.short-biography.com/wp-content/uploads/mark-zuckerberg/Mark-Zuckerberg.jpg',
        },
      ],
    },
    {
      reservationId: 6,
      homeId: 6,
      hostname: 'June',
      homeImage: [
        'https://a0.muscache.com/im/pictures/5c8d25eb-55de-4ea0-b148-0e610bf1f04f.jpg?aki_policy=xx_large',
      ],
      hostId: 6,
      checkin: '2020/08/08/14:00',
      checkout: '2020/08/09/13:00',
      address: 'Guam, Dededo',
      location: { lat: 37.12344, lng: 127.12345 },
      price: 71001,
      rules: [],
      businessInfo: '',
      isCanceled: false,
      title: 'Vibrant mini house.',
      withGuest: false,
      guest: [],
    },
    {
      reservationId: 7,
      homeId: 7,
      hostname: 'Jason',
      homeImage: [
        'https://a0.muscache.com/im/pictures/1070a96d-491d-4f0b-9898-98caf5481782.jpg?aki_policy=xx_large',
      ],
      hostId: 7,
      checkin: '2020/9/28/14:00',
      checkout: '2020/9/30/13:00',
      address: '여기 Jeju임',
      location: { lat: 37.12344, lng: 127.12345 },
      price: 112012,
      rules: [],
      businessInfo: '',
      isCanceled: false,
      title: '포근한 정원이 있는 엄마의 정원 "낭안트레" 2인실',
      withGuest: false,
      guest: [],
    },
    {
      reservationId: 8,
      homeId: 8,
      hostname: 'Ronald',
      homeImage: [
        'https://a0.muscache.com/im/pictures/d0c556fc-8c7d-4d49-98bd-f28530e21bdc.jpg?aki_policy=xx_large',
      ],
      hostId: 8,
      checkin: '2020/11/20/13:00',
      checkout: '2020/11/21/12:00',
      address: 'Tamuning, Guam',
      location: { lat: 37.12344, lng: 127.12345 },
      price: 98230,
      rules: [],
      businessInfo: '',
      isCanceled: true,
      title: 'Amazing Private Ocean Apartment',
      withGuest: false,
      guest: [],
    },
    {
      reservationId: 9,
      homeId: 9,
      hostname: 'Krystyn',
      homeImage: [
        'https://a0.muscache.com/im/pictures/71741c28-ffd9-4fbb-ae2e-60da61692296.jpg?aki_policy=xx_large',
      ],
      hostId: 9,
      checkin: '2020/12/15/15:00',
      checkout: '2020/12/16/14:00',
      address: 'Guam',
      location: { lat: 37.12344, lng: 127.12345 },
      price: 88330,
      rules: [],
      businessInfo: '',
      isCanceled: false,
      title: '~Beach Front~ Ocean Villa - Studio - Unit 106',
      withGuest: false,
      guest: [],
    },
    {
      reservationId: 10,
      homeId: 10,
      hostname: 'John',
      homeImage: [
        'https://a0.muscache.com/im/pictures/da4ee720-8c0e-4349-8747-cdd353e73b34.jpg?aki_policy=xx_large',
      ],
      hostId: 10,
      checkin: '2020/10/15/12:00',
      checkout: '2020/10/16/11:00',
      address: 'Seoul-si',
      location: { lat: 37.12344, lng: 127.12345 },
      price: 65001,
      rules: [],
      businessInfo: '',
      isCanceled: false,
      title: '메리조 씨사이드 게스트 하우스 - 유닛 1',
      withGuest: false,
      guest: [],
    },
  ],
};

// reducer
const trips = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_RESERVATION:
      return state;
    default:
      return state;
  }
};

export default trips;
