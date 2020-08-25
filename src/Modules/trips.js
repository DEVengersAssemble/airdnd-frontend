// action type
const SHOW_RESERVATION = 'trips/SHOW_RESERVATION';

// action creator
export const showReservation = () => ({
  type: SHOW_RESERVATION,
});

// initial state
const initialState = {
  user: {
    id: 0,
    email: 'keemgreat@gmail.com',
    pw: '1234',
    firstName: '태진',
    lastName: '김',
    profileImg:
      'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg',
    isHost: false,
    reservations: [
      {
        reservationId: 1,
        homeId: 1,
        image: [
          'https://a0.muscache.com/im/pictures/a3912086-e317-4913-ab09-fb38e2737ee5.jpg?aki_policy=large',
        ],
        hostId: 1,
        checkin: '2020/09/25',
        checkout: '2020/09/26',
        location: 'Seoul',
        isCanceled: false,
        title: 'Pia Resort Hotel Corner Studio Room~~~',
        withGuest: false,
        guest: {},
      },
      {
        reservationId: 2,
        homeId: 2,
        image: [
          'https://a0.muscache.com/im/pictures/a3912086-e317-4913-ab09-fb38e2737ee5.jpg?aki_policy=large',
        ],
        hostId: 2,
        checkin: '2020/09/10',
        checkout: '2020/09/12',
        location: 'Jeju',
        isCanceled: false,
        title:
          '애월고내리 해안절경2~ *신규오픈* 멀리바다뷰,그림같은 풍경, 새소리, 힐링 공간♡',
        withGuest: true,
        guest: {
          id: 1,
          firstName: '지미',
          lastName: '주',
          profileImg:
            'https://media.short-biography.com/wp-content/uploads/mark-zuckerberg/Mark-Zuckerberg.jpg',
        },
      },
      {
        reservationId: 3,
        homeId: 3,
        image: [
          'https://a0.muscache.com/im/pictures/a3912086-e317-4913-ab09-fb38e2737ee5.jpg?aki_policy=large',
        ],
        hostId: 3,
        checkin: '2020/08/15',
        checkout: '2020/08/16',
        location: 'Jeju',
        isCanceled: true,
        title: '포근한 정원이 있는 엄마의 정원 "낭안트레" 2인실',
        withGuest: false,
        guest: {},
      },
      {
        reservationId: 4,
        homeId: 4,
        image: [
          'https://a0.muscache.com/im/pictures/a3912086-e317-4913-ab09-fb38e2737ee5.jpg?aki_policy=large',
        ],
        hostId: 4,
        checkin: '2020/06/01',
        checkout: '2020/06/03',
        location: 'Jeju',
        isCanceled: true,
        title: '[플레이스캠프제주] Standard',
        withGuest: false,
        guest: {},
      },
      {
        reservationId: 5,
        homeId: 4,
        image: [
          'https://a0.muscache.com/im/pictures/a3912086-e317-4913-ab09-fb38e2737ee5.jpg?aki_policy=large',
        ],
        hostId: 5,
        checkin: '2020/07/30',
        checkout: '2020/08/01',
        location: 'Jeju',
        isCanceled: false,
        title:
          '#튤립# "영원한 사랑의 고백"의꽃말을 가진 포근한숙소~바다와 함께 아침에 눈뜨는 오션뷰~',
        withGuest: true,
        guest: {
          id: 1,
          firstName: '지미',
          lastName: '주',
          profileImg:
            'https://media.short-biography.com/wp-content/uploads/mark-zuckerberg/Mark-Zuckerberg.jpg',
        },
      },
      {
        reservationId: 6,
        homeId: 4,
        image: [
          'https://a0.muscache.com/im/pictures/a3912086-e317-4913-ab09-fb38e2737ee5.jpg?aki_policy=large',
        ],
        hostId: 5,
        checkin: '2020/08/08',
        checkout: '2020/08/09',
        location: 'Jeju',
        isCanceled: false,
        title:
          '#튤립# "영원한 사랑의 고백"의꽃말을 가진 포근한숙소~바다와 함께 아침에 눈뜨는 오션뷰~',
        withGuest: false,
        guest: {},
      },
      {
        reservationId: 7,
        homeId: 4,
        image: [
          'https://a0.muscache.com/im/pictures/a3912086-e317-4913-ab09-fb38e2737ee5.jpg?aki_policy=large',
        ],
        hostId: 3,
        checkin: '2020/07/15',
        checkout: '2020/07/16',
        location: 'Jeju',
        isCanceled: false,
        title: '포근한 정원이 있는 엄마의 정원 "낭안트레" 2인실',
        withGuest: false,
        guest: {},
      },
    ],
  },
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
