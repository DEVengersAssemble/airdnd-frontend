import axios from 'axios';

export const getHome = async id => {
  const response = await axios.get(`/back/home?home_idx=${id}`);
  // const response = await axios.get(`/back/home?home_idx=22638651`);
  console.log('======================== get home =======================');
  console.log(response);
  return response.data;
};

export const postReservation = async payload => {
  console.log('payload', payload);
  const response = await axios.post(`/back/book`, payload);
  // const response = await axios.get(`/back/home?home_idx=22638651`);
  console.log('===================== post reservation ====================');
  console.log(response);
  return response.data;
};

// http://3.131.42.14:8080/back/home?home_idx=761408
// /back/home?home_idx=761408

// const sleep = n => new Promise(resolve => setTimeout(resolve, n));

// const home = {
//   id: 5,
//   host: {
//     hostId: 0,
//     hostFirstName: 'Emma',
//     profileImg:
//       'https://a0.muscache.com/im/pictures/user/8eb07743-000f-47ee-9012-2086ac20d9f3.jpg?im_w=720',
//     signupDate: '2019년 1월',
//     reviewCount: 82,
//     identityVerified: true,
//     isSupperhost: true,
//     responseRate: '100%',
//     responseTime: '몇 시간 이내',
//     selfExplanation:
//       '안녕하세요? 제주를 사랑하는 제주토박이입니다. 제주에 오신 분들이 좋은 추억을 갖고 가길 바라고, 제가 작은 도움이라도 드릴수 있다면 그것이 저의 기쁨입니다^^',
//     communication:
//       '집과 회사를 쳇바퀴 돌듯 다니며 아침에는 오늘 하루를 어떻게 버틸까 라는 걱정과 낮에는 오늘은 또 뭘 먹어야하나 밤에는 내일 아침을 위해 어서 자야해 같은 강박이 있었어요. 지금은 파도의 무늬를 한참 관찰하기도 하고 새벽까지 홀로 바닷가에 앉아 시간을 흘려보내기도 합니다. 삶의 피로로 지치신 분들이 이곳에서 잠시나마 마음의 짐을 내려놓고 저와 같은 경험을 하시길 바랍니다.',
//   },
//   title: 'S9[공항 1.7km, 5분] 퀸베드 1개 프리미엄 레지던스,제주의 중심',
//   subTitle: '제주도님이 호스팅하는 공동주택의 개인실',
//   feature: '최대 인원 1명 · 원룸 · 침대 1개 · 단독 사용 욕실 1개',
//   location: {
//     lat: '37.62197524055062',
//     lng: '127.16017523675508',
//   },
//   address: 'Cheju, 제주도, 한국',
//   addressDescription: `김포공항과 인천공항으로 가는 지하철역 바로 앞에 위치하고 있습니다.
//     고속터미널이 있어 시외 여행이 수월합니다.
//     한강 시민 공원과 이태원이 가깝습니다.
//     근처 모든곳에 쇼핑몰, 레스토랑, 커피숍, 편의점, 병원이 있습니다.
//     시내 어디든 갈수 있는 시내버스와 지하철역이 매우 가까이에 있습니다.`,
//   homeType: '개인실',
//   capacity: 7,
//   dates: [''], // ...?
//   checkin: '오후 3:00 - 오전 2:00',
//   checkout: '오전 11:00',
//   price: '23,000',
//   isBookmarked: true,
//   images: [
//     'https://a0.muscache.com/im/pictures/1fde1215-a81e-45d3-a36f-6018ca3f627e.jpg?im_w=960',
//     'https://a0.muscache.com/im/pictures/1337d918-2bc5-4319-ad8d-b0ccd78b2dc2.jpg?im_w=720',
//     'https://a0.muscache.com/im/pictures/0a5ea20c-9904-4153-b6be-a82c98249973.jpg?im_w=720',
//     'https://a0.muscache.com/im/pictures/479306c6-ef56-409e-a2e5-79457fb43188.jpg?im_w=720',
//     'https://a0.muscache.com/im/pictures/d4e1e39c-91c2-48cf-a00a-b64a150558c0.jpg?im_w=1200',
//   ],
//   explains: [
//     {
//       text: '집 전체',
//       subText: '아파트 전체를 단독으로 사용하시게 됩니다.',
//       icon:
//         'M17.954 2.781l.175.164 13.072 12.842-1.402 1.426-1.8-1.768L28 29a2 2 0 0 1-1.85 1.994L26 31H6a2 2 0 0 1-1.995-1.85L4 29V15.446l-1.8 1.767-1.4-1.426L13.856 2.958a3 3 0 0 1 4.097-.177zm-2.586 1.503l-.096.088L6 13.48 6 29l5-.001V19a2 2 0 0 1 1.85-1.995L13 17h6a2 2 0 0 1 1.995 1.85L21 19v9.999h5V13.48l-9.3-9.135a1.001 1.001 0 0 0-1.332-.06zM19 19h-6v9.999h6z',
//     },
//     {
//       text: '셀프 체크인',
//       subText: '키패드를 이용해 체크인하세요.',
//       icon:
//         'M25 1a2 2 0 0 1 1.995 1.85L27 3l-.001 26H29v2H3v-2h1.999L5 3a2 2 0 0 1 1.85-1.995L7 1zm-4 2H7l-.001 26H21zm4 0h-2v26h1.999zm-7 12a1 1 0 1 1 0 2 1 1 0 0 1 0-2z',
//     },
//     {
//       text: '깨끗하고 깔끔한 숙소',
//       subText:
//         '최근 게스트 13명이 이 숙소가 티 없이 깨끗하다고 후기를 남겼습니다.',
//       icon:
//         'M24 0v6l-3.929.001a6.958 6.958 0 0 0 1.488 3.403l.193.228-1.5 1.324a8.963 8.963 0 0 1-2.18-4.81 3 3 0 0 0-2.066 2.665L16 8.97v3.606l4.484 4.356a5 5 0 0 1 1.49 3.083l.02.25.006.253v8.631a3 3 0 0 1-2.824 2.995L19 32.15l-12.032-.129a3 3 0 0 1-2.963-2.825L4 29.021v-8.364a5 5 0 0 1 1.282-3.344l.182-.192L10 12.584V9.415L5.99 5.404l.016-.653A5 5 0 0 1 10.78.005L11 0zM7.659 21c-.563 0-1.12.066-1.659.197v7.824a1 1 0 0 0 .874.992l.115.008 12 .129.128-.007a1 1 0 0 0 .876-.876L20 29.15v-3.523a8.976 8.976 0 0 1-7.158-2.35l-.236-.227A6.967 6.967 0 0 0 7.659 21zM14 10h-2v3.414l-5.121 5.122a3 3 0 0 0-.432.545A9.046 9.046 0 0 1 7.66 19c2.262 0 4.444.844 6.124 2.407l.237.229A6.979 6.979 0 0 0 20 23.61v-3.092a3 3 0 0 0-.77-2.006l-.14-.145L14 13.423zm4-8h-7c-1.42 0-2.618.99-2.923 2.308l-.035.174-.018.127 3.389 3.39H14.1l.012-.058A5.006 5.006 0 0 1 18 4.1zm12 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-3-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-5 0h-2v2h2zm8-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2z',
//     },
//     {
//       text: '체크인 5일 전까지 수수료 없이 취소 가능',
//       subText: '',
//       icon:
//         'M12 0v2h8V0h2v2h6a2 2 0 0 1 1.995 1.85L30 4v15.586a2 2 0 0 1-.467 1.284l-.119.13L21 29.414a2 2 0 0 1-1.238.578l-.176.008H7a5 5 0 0 1-4.995-4.783L2 25V4a2 2 0 0 1 1.85-1.995L4 2h6V0zM4 12v13a3 3 0 0 0 2.824 2.995L7 28h11v-5a5 5 0 0 1 4.783-4.995L23 18h5v-6zm23.585 8H23a3 3 0 0 0-2.995 2.824L20 23v4.585zM4 10h24V4h-6v2h-2V4h-8v2h-2V4H4z',
//     },
//   ],
//   description:
//     '제주시 아라동에 위치해 있으며 공항을 자가용 및 택시로 이용할 시 30분이면 충분히 오가는 거리로 주변이 조용하며 관광지를 용이하게 이용할 수 있는 거리에 있습이다 종합병원과 10분여거리에 있으며 제주대학교, 생태숲, 5.16도로와 서귀포를 이어주는 에조로 거리에 근접해 갈 수 있습니다. 공간이 작은원룸형이지만 청결을 우선으로 게스트이용후에 모든 침구류등을 세탁하여 제공합니다. 즐거운 여행보내시기바랍니다 숙소 제주시 아라동에 위치해 있으며 공항을 자가용 및 택시로 이용할 시 30분이면 충분히 오가는 거리로 주변이 조용하며 관광지를 용이하게 이용할 수 있는 거리에 있습이다 종합병원과 10분여거리에 있으며 제주대학교, 생태숲, 5.16도로와 서귀포를 이어주는 에조로 거리에 근접해 갈 수 있습니다. 공간이 작은원룸형이지만 청결을 우선으로 게스트이용후에 모든 침구류등을 세탁하여 제공합니다. 즐거운 여행보내시기 바랍니다. 공간이 작은원룸형이지만 청결을 우선으로 게스트이용후에 모든 침구류등을 세탁하여 제공합니다. 즐거운 여행보내시기 바랍니다. 즐거운 여행보내시기 바랍니다. 공간이 작은원룸형이지만 청결을 우선으로 게스트이용후에 모든 침구류등을 세탁하여 제공합니다. 즐거운 여행보내시기 바랍니다. 공간이 작은원룸형이지만 청결을 우선으로 게스트이용후에 모든 침구류등을 세탁하여 제공합니다. 즐거운 여행보내시기바랍니다 숙소 제주시 아라동에 위치해 있으며 공항을 자가용 및 택시로 이용할 시 30분이면 충분히 오가는 거리로 주변이 조용하며 관광지를 용이하게 이용할 수 있는 거리에 있습이다 종합병원과 10분여거리에 있으며 제주대학교, 생태숲, 5.16도로와 서귀포를 이어주는 에조로 거리에 근접해 갈 수 있습니다. 공간이 작은원룸형이지만 청결을 우선으로 게스트이용후에 모든 침구류등을 세탁하여 제공합니다. 즐거운 여행보내시기 바랍니다. 공간이 작은원룸형이지만 청결을 우선으로 게스트이용후에 모든 침구류등을 세탁하여 제공합니다. 즐거운 여행보내시기 바랍니다. 즐거운 여행보내시기 바랍니다. 공간이 작은원룸형이지만 청결을 우선으로 게스트이용후에 모든 침구류등을 세탁하여 제공합니다. 즐거운 여행보내시기 바랍니다',

//   bedrooms: [
//     {
//       icons: [
//         'm23.96 14.81-2.96-7.41v-5.02a1.39 1.39 0 0 0 -1.39-1.38h-15.22c-.77 0-1.39.62-1.39 1.38v5.02l-2.96 7.41-.04.19v5.61c0 .64.43 1.17 1.01 1.33 0 .02-.01.04-.01.06v1.5a.5.5 0 0 0 1 0v-1.5h20v1.5a.5.5 0 0 0 1 0v-1.5c0-.02-.01-.04-.01-.06a1.39 1.39 0 0 0 1.01-1.33v-5.61zm-19.96-12.43c0-.21.17-.38.39-.38h15.22a.39.39 0 0 1 .39.39v4.61h-1v-1.61c0-.77-.62-1.39-1.39-1.39h-3.21c-.78 0-1.4.62-1.4 1.39v1.61h-2v-1.61c0-.77-.62-1.39-1.39-1.39h-3.22c-.77 0-1.39.62-1.39 1.39v1.61h-1zm14 3.01v3.21a.39.39 0 0 1 -.39.39h-3.21a.39.39 0 0 1 -.4-.38v-3.22a.39.39 0 0 1 .39-.39h3.21a.39.39 0 0 1 .39.39zm-8 0v3.21a.39.39 0 0 1 -.39.4h-3.22a.39.39 0 0 1 -.39-.39v-3.22a.39.39 0 0 1 .39-.39h3.21a.39.39 0 0 1 .39.39zm-6.16 2.61h1.16v.61c0 .77.62 1.39 1.39 1.39h3.21c.78 0 1.4-.62 1.4-1.39v-.61h2v .61c0 .78.62 1.39 1.39 1.39h3.21c.78 0 1.4-.62 1.4-1.39v-.61h1.16l2.8 7h-21.92zm19.16 12.61c0 .21-.18.39-.39.39h-21.22a.39.39 0 0 1 -.39-.39v-4.61h22z" fill-rule="evenodd',
//         'm21.5 8c-.17 0-.34.02-.5.04v-2.54a2.5 2.5 0 0 0 -2.5-2.5h-13a2.5 2.5 0 0 0 -2.5 2.5v2.54a3.32 3.32 0 0 0 -.5-.04c-1.47 0-2.49.84-2.5 2.5-.01.81.22 1.37.65 1.79.09.09.29.26.35.32-.01.17-.02.65-.02 1.37a184.39 184.39 0 0 0 .01 1.54c.01.83.68 1.49 1.51 1.49h1.5v1.49c0 .89.68 1.5 1.5 1.5.86 0 1.5-.6 1.5-1.5v-1.5h10v1.5c0 .9.68 1.5 1.5 1.5s1.5-.6 1.5-1.5v-1.5h1.51c.83 0 1.5-.67 1.5-1.5v-2.89c.08-.06.26-.2.34-.28.43-.4.65-.98.65-1.84 0-1.54-1.09-2.49-2.5-2.49zm-17.5-2.5c0-.83.67-1.5 1.5-1.5h13c .83 0 1.5.67 1.5 1.5v2.94c-.61.42-1 1.12-1 2.06v1.49c0 .01-14 .01-14 .01v-1.5c0-.98-.38-1.68-1-2.09zm2 13c0 .33-.18.5-.5.5-.29 0-.5-.19-.5-.5v-1.5h1zm13 0c0 .32-.21.5-.5.5-.3 0-.5-.18-.5-.5v-1.5h1zm3.66-6.89c-.06.06-.32.25-.35.27-.19.16-.31.35-.31.61v3.01a.5.5 0 0 1 -.5.5h-19a .5.5 0 0 1 -.51-.5 198.01 198.01 0 0 1 -.01-1.53c0-.75 0-1.28.02-1.43-.02-.3-.11-.46-.26-.62-.06-.06-.32-.28-.38-.34-.24-.24-.36-.54-.36-1.08.01-1.06.54-1.5 1.5-1.5.94 0 1.5.47 1.5 1.5v1.5c0 .56.45 1 1 1h14c .56 0 1-.45 1-1.01v-1.49c0-.98.6-1.5 1.5-1.5.89 0 1.5.53 1.5 1.5 0 .6-.12.91-.34 1.11z" fill-rule="evenodd',
//       ],
//       room: '1번 침실',
//       size: '더블 침대 1개, 소파 1개',
//     },
//     {
//       icons: [
//         'm23.96 14.81-2.96-7.41v-5.02a1.39 1.39 0 0 0 -1.39-1.38h-15.22c-.77 0-1.39.62-1.39 1.38v5.02l-2.96 7.41-.04.19v5.61c0 .64.43 1.17 1.01 1.33 0 .02-.01.04-.01.06v1.5a.5.5 0 0 0 1 0v-1.5h20v1.5a.5.5 0 0 0 1 0v-1.5c0-.02-.01-.04-.01-.06a1.39 1.39 0 0 0 1.01-1.33v-5.61zm-19.96-12.43c0-.21.17-.38.39-.38h15.22a.39.39 0 0 1 .39.39v4.61h-1v-1.61c0-.77-.62-1.39-1.39-1.39h-3.21c-.78 0-1.4.62-1.4 1.39v1.61h-2v-1.61c0-.77-.62-1.39-1.39-1.39h-3.22c-.77 0-1.39.62-1.39 1.39v1.61h-1zm14 3.01v3.21a.39.39 0 0 1 -.39.39h-3.21a.39.39 0 0 1 -.4-.38v-3.22a.39.39 0 0 1 .39-.39h3.21a.39.39 0 0 1 .39.39zm-8 0v3.21a.39.39 0 0 1 -.39.4h-3.22a.39.39 0 0 1 -.39-.39v-3.22a.39.39 0 0 1 .39-.39h3.21a.39.39 0 0 1 .39.39zm-6.16 2.61h1.16v.61c0 .77.62 1.39 1.39 1.39h3.21c.78 0 1.4-.62 1.4-1.39v-.61h2v .61c0 .78.62 1.39 1.39 1.39h3.21c.78 0 1.4-.62 1.4-1.39v-.61h1.16l2.8 7h-21.92zm19.16 12.61c0 .21-.18.39-.39.39h-21.22a.39.39 0 0 1 -.39-.39v-4.61h22z" fill-rule="evenodd',
//       ],
//       room: '2번 침실',
//       size: '퀸사이즈 1개',
//     },
//   ],
//   amenities: [
//     {
//       name: '엘리베이터',
//       icon:
//         'M30 1a1 1 0 0 1 .993.883L31 2v28a1 1 0 0 1-.883.993L30 31H2a1 1 0 0 1-.993-.883L1 30V2a1 1 0 0 1 .883-.993L2 1zM3 3v26h12V3zm7 9v6.585l1.793-1.792 1.414 1.414-3.5 3.5a1 1 0 0 1-1.32.083l-.094-.083-3.5-3.5 1.414-1.414L8 18.585V12zm12.387-1.497a1 1 0 0 1 1.226 0l.094.083 3.5 3.5-1.414 1.414L24 13.707V20h-2v-6.293L20.207 15.5l-1.414-1.414 3.5-3.5zM17 29h12V3H17z',
//     },
//     {
//       name: '주방',
//       icon:
//         'M26 1a5 5 0 0 1 5 5c0 6.389-1.592 13.187-4 14.693V31h-2V20.694c-2.364-1.478-3.942-8.062-3.998-14.349L21 6l.005-.217A5 5 0 0 1 26 1zm-9 0v18.118c2.317.557 4 3.01 4 5.882 0 3.27-2.183 6-5 6s-5-2.73-5-6c0-2.872 1.683-5.326 4-5.882V1zM2 1h1c4.47 0 6.934 6.365 6.999 18.505L10 21H3.999L4 31H2zm14 20c-1.602 0-3 1.748-3 4s1.398 4 3 4 3-1.748 3-4-1.398-4-3-4zM4 3.239V19h3.995l-.017-.964-.027-.949C7.673 9.157 6.235 4.623 4.224 3.364l-.12-.07zm19.005 2.585L23 6l.002.31c.045 4.321 1.031 9.133 1.999 11.39V3.17a3.002 3.002 0 0 0-1.996 2.654zm3.996-2.653v14.526C27.99 15.387 29 10.4 29 6a3.001 3.001 0 0 0-2-2.829z',
//     },
//     {
//       name: '무선 인터넷',
//       icon:
//         'M16 20a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0-7a9 9 0 0 1 8.043 4.958L22.53 21.47a7.003 7.003 0 0 0-13.058 0l-1.514-1.514A9 9 0 0 1 16 15zm0-5c4.89 0 9.193 2.506 11.697 6.304l-1.45 1.45A11.993 11.993 0 0 0 16 12c-4.339 0-8.14 2.302-10.247 5.752l-1.45-1.449A13.987 13.987 0 0 1 16 10zm0-5c6.267 0 11.826 3.034 15.286 7.714l-1.432 1.432C26.773 9.821 21.716 7 16 7 10.285 7 5.228 9.82 2.146 14.145L.714 12.714C4.174 8.034 9.733 5 16 5z',
//     },
//     {
//       name: '다리미',
//       icon:
//         'M12 28a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-6-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM16.027 3l.308.004a12.493 12.493 0 0 1 11.817 9.48l.07.3 1.73 7.782.027.144a2 2 0 0 1-1.83 2.285L28 23H2.247l-.15-.005a2 2 0 0 1-1.844-1.838L.247 21v-7l.004-.217a5 5 0 0 1 4.773-4.778L5.247 9h9V5h-14V3zm11.528 16H2.245l.002 2H28zM16.247 5.002V11h-11l-.177.005a3 3 0 0 0-2.818 2.819L2.247 14l-.001 3H27.11l-.84-3.783-.067-.28a10.494 10.494 0 0 0-9.596-7.921l-.292-.012z',
//     },
//     {
//       name: '헤어드라이어',
//       icon:
//         'M14 27l-.005.2a4 4 0 0 1-3.789 3.795L10 31H4v-2h6l.15-.005a2 2 0 0 0 1.844-1.838L12 27zM10 1c.536 0 1.067.047 1.58.138l.38.077 17.448 3.64a2 2 0 0 1 1.585 1.792l.007.166v6.374a2 2 0 0 1-1.431 1.917l-.16.04-13.554 2.826 1.767 6.506a2 2 0 0 1-1.753 2.516l-.177.008H11.76a2 2 0 0 1-1.879-1.315l-.048-.15-1.88-6.769A9 9 0 0 1 10 1zm5.692 24l-1.799-6.621-1.806.378a8.998 8.998 0 0 1-1.663.233l-.331.008L11.76 25zM10 3a7 7 0 1 0 1.32 13.875l.331-.07L29 13.187V6.813L11.538 3.169A7.027 7.027 0 0 0 10 3zm0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z',
//     },
//     {
//       name: '케이블 TV',
//       icon:
//         'M24 1a5 5 0 0 1 4.995 4.783L29 6v20a5 5 0 0 1-4.783 4.995L24 31h-5v-2h5a3 3 0 0 0 2.995-2.824L27 26V6a3 3 0 0 0-2.824-2.995L24 3H8a3 3 0 0 0-2.995 2.824L5 6v20a3 3 0 0 0 2.824 2.995L8 29h7v-8h-2a2 2 0 0 1-1.995-1.85L11 19v-6a2 2 0 0 1 1.85-1.995L13 11h6a2 2 0 0 1 1.995 1.85L21 13v6a2 2 0 0 1-1.85 1.995L19 21h-2v8a2 2 0 0 1-1.85 1.995L15 31H8a5 5 0 0 1-4.995-4.783L3 26V6a5 5 0 0 1 4.783-4.995L8 1zm-5 12h-6v6h2v-4h2v4h2z',
//     },
//     {
//       name: '옷걸이',
//       icon:
//         'M16 2a5 5 0 0 1 1.661 9.717 1.002 1.002 0 0 0-.653.816l-.008.126v.813l13.23 9.052a3 3 0 0 1 1.299 2.279l.006.197a3 3 0 0 1-3 3H3.465a3 3 0 0 1-1.694-5.476L15 13.472v-.813c0-1.211.724-2.285 1.816-2.757l.176-.07a3 3 0 1 0-3.987-3.008L13 7h-2a5 5 0 0 1 5-5zm0 13.211L2.9 24.175A1 1 0 0 0 3.465 26h25.07a1 1 0 0 0 .565-1.825z',
//     },
//     {
//       name: '필수품목',
//       icon:
//         'M11 1v7l1.898 20.819.007.174c-.025 1.069-.804 1.907-1.818 1.999a2 2 0 0 1-.181.008h-7.81l-.174-.008C1.86 30.87 1.096 30.018 1.096 29l.002-.09 1.907-21L3.001 1zm6 0l.15.005a2 2 0 0 1 1.844 1.838L19 3v7.123l-2 8V31h-2V18.123l.007-.163.02-.162.033-.16L16.719 11H13V1zm11 0a2 2 0 0 1 1.995 1.85L30 3v26a2 2 0 0 1-1.85 1.995L28 31h-7v-2h7v-2h-7v-2h7v-2h-7v-2h7v-2h-7v-2h7v-2h-7v-2h7v-2h-7V9h7V7h-7V5h7V3h-7V1zM9.088 9h-4.18L3.096 29l.058.002L10.906 29l-.004-.058zM17 3h-2v6h2zM9.002 3H5L5 7h4.004z',
//     },
//     {
//       name: '노트북 작업 공간',
//       icon:
//         'M27 3a2 2 0 0 1 1.995 1.85L29 5l-.001 14.816 2.43 6.482a2 2 0 0 1-.881 2.44l-.145.074-.144.06a2 2 0 0 1-.523.12l-.179.008H2.443a2 2 0 0 1-1.928-2.532l.055-.17L3 19.819 3 5a2 2 0 0 1 1.697-1.977l.154-.018L5 3zm.306 18H4.692l-2.249 6h27.114zM19 23v2h-6v-2zm8-18H5l-.001 14h22zM16 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2z',
//     },
//     {
//       name: '난방',
//       icon:
//         'M16 0a5 5 0 0 1 4.995 4.783L21 5l.001 12.756.26.217a7.984 7.984 0 0 1 2.717 5.43l.017.304L24 24a8 8 0 1 1-13.251-6.036l.25-.209L11 5A5 5 0 0 1 15.563.019l.22-.014zm0 2a3 3 0 0 0-2.995 2.824L13 5v13.777l-.428.298a6 6 0 1 0 7.062.15l-.205-.15-.428-.298L19 11h-4V9h4V7h-4V5h4a3 3 0 0 0-3-3zm1 11v7.126A4.002 4.002 0 0 1 16 28a4 4 0 0 1-1-7.874V13zm-1 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4z',
//     },
//   ],
//   notice: {
//     rules: [
//       {
//         name: '체크인 시간: 오후 3:00 - 오후 11:00',
//         icon: '',
//       },
//       {
//         name: '체크아웃 시간: 오전 11:00',
//         icon: '',
//       },
//       {
//         name: '키패드(으)로 셀프 체크인',
//         icon: '',
//       },
//       {
//         name: '유아(만 2세 미만)에게 적합하지 않음',
//         icon: '',
//       },
//       {
//         name: '흡연 금지',
//         icon: '',
//       },
//       {
//         name: '반려동물 동반 불가',
//         icon: '',
//       },
//     ],
//     safeties: [
//       {
//         name: '에어비앤비의 사회적 거리 두기 및 관련 가이드라인이 적용됩니다.',
//         icon: '',
//       },
//       {
//         name: '일산화탄소 경보기',
//         icon: '',
//       },
//       {
//         name: '화재 경보기',
//         icon: '',
//       },
//     ],
//   }, // ...?

//   reviews: {
//     cleanliness: 5.0,
//     accuracy: 4.5,
//     communication: 4.3,
//     location: 5.0,
//     checkin: 4.6,
//     value: 4.0,
//     count: 81,
//     rating: 4.97,
//     comments: [
//       {
//         userId: 0,
//         userProfileImg:
//           'https://a0.muscache.com/im/pictures/user/02d1c910-7279-445e-a392-6ecba45874bd.jpg?im_w=720',
//         userFirstName: '태환',
//         date: '2020년 8월',
//         contents:
//           '너무 좋은 위치!! 포근한 침대!! 3일동안 숙박했는데 너무 잘 쉬다 갑니다!! 다음에도 일있어서 갈때 또 이용 할게요!!',
//       },
//       {
//         userId: 0,
//         userProfileImg:
//           'https://a0.muscache.com/im/pictures/user/7c7d20f4-ce78-4f09-b27a-d0023599c69d.jpg?im_w=720',
//         userFirstName: '선재',
//         date: '2020년 5월',
//         contents:
//           '신논현역 1분거리, 강남역 5분거리, 모든 먹자 골목의 중심에 있어 교통도 좋고 놀거리도 많습니다. 뿐만아니라 숙소가 매우 청결하고 아늑하며 조용해서 좋습니다. 인근 스테이 서치중이신분들께 강추드립니다.',
//       },
//       {
//         userId: 0,
//         userProfileImg:
//           'https://a0.muscache.com/im/pictures/user/a113a3bc-a267-40ce-ae0f-0628f357fe02.jpg?im_w=720',
//         userFirstName: 'Junhee',
//         date: '2020년 3월',
//         contents:
//           '일단 위치가 너무너무 좋고 교통편도 편리해요! 숙소도 사진과 같고, 엄청 아늑해요 :-) 호스트님이 세심하게 잘 알려주셔서 금방 찾을 수 있었어요. 분실물도 찾아주시고 넘 감사했습니다! 다음에 또 묵고 싶어요.',
//       },
//       {
//         userId: 0,
//         userProfileImg:
//           'https://a0.muscache.com/im/pictures/user/801f771e-6837-432e-9eaf-81ed2579acc5.jpg?im_w=720',
//         userFirstName: '지원',
//         date: '2020년 2월',
//         contents: '강남역부근에서 볼일 있으신분들은 추천드립니다.',
//       },
//       {
//         userId: 0,
//         userProfileImg:
//           'https://a0.muscache.com/im/pictures/user/12261101-6e07-40eb-81ee-037298c18597.jpg?im_w=720',
//         userFirstName: '병찬',
//         date: '2020년 1월',
//         contents:
//           '일단 숙소위치가 매우 좋아요 ! 역하고도 가깝고 주변 먹을거리나 놀거리와도 매우 근접합니다 ㅎㅎ 방도 깔끔하니 너무 좋았어요 .. 그리구 호스트님이 완전 친절하십니다 !! 최고였어요 짱',
//       },
//       {
//         userId: 0,
//         userProfileImg:
//           'https://a0.muscache.com/im/pictures/user/5a4a7b30-37cb-4fc1-8809-00f375a2b99f.jpg?im_w=720',
//         userFirstName: '다현',
//         date: '2020년 1월',
//         contents:
//           '생각보다 방도 더 넓고 엄청 깨끗했어요. 교통 편리한 게 가장 큰 장점이 아니었나 싶습니다. 덕분에 편하게 지내다 갑니다! 다음에 서울 오면 또 여기 이용하게 될 것 같아요.',
//       },
//       {
//         userId: 0,
//         userProfileImg:
//           'https://a0.muscache.com/im/pictures/user/7c7d20f4-ce78-4f09-b27a-d0023599c69d.jpg?im_w=720',
//         userFirstName: '미연',
//         date: '2020년 8월',
//         contents:
//           '너무 좋은 위치!! 포근한 침대!! 3일동안 숙박했는데 너무 잘 쉬다 갑니다!! 다음에도 일있어서 갈때 또 이용 할게요!!',
//       },
//       {
//         userId: 0,
//         userProfileImg:
//           'https://a0.muscache.com/im/pictures/user/a113a3bc-a267-40ce-ae0f-0628f357fe02.jpg?im_w=720',
//         userFirstName: '저녁노을',
//         date: '2020년 8월',
//         contents:
//           '너무 좋은 위치!! 포근한 침대!! 3일동안 숙박했는데 너무 잘 쉬다 갑니다!! 다음에도 일있어서 갈때 또 이용 할게요!!',
//       },
//     ],
//   },
// };

// export const getHome = async () => {
//   await sleep(0);
//   return home;
// };
