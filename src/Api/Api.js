import axios from 'axios';

// filter_refund: true
// filter_roomType_house: true
// filter_roomType_private: true
// filter_roomType_shared: true
// filter_price_min: 0
// filter_price_max: 0
// filter_instantBooking: true
// filter_bedroom_bed: 0
// filter_bedroom_room: 0
// filter_bedroom_bathroom: 0
// filter_convenience: true
// filter_convenienceList: ?
// filter_facilityList: ?
// filter_hostLangList: ?

export const fetchSearchedData = async ({
  location,
  checkIn,
  checkOut,
  adults,
  guests,
  page,
  filter,
}) => {
  const CI = checkIn.split('.').join('-');
  const CO = checkOut.split('.').join('-');
  const response = await axios.get(
    // `back/search/location/${location}/checkIn/${CI}/checkOut/${CO}/adults/${guests}`,
    `back/search/user/${213}/location/${location}/checkIn/${CI}/checkOut/${CO}/guests/${guests}/lat_from/${''}/lng_from/${''}/lat_to/${''}/lng_to/${''}/filter_refund/${''}/filter_roomType_house/${''}/filter_roomType_private/${''}/filter_roomType_shared/${''}/filter_price_min/${12000}/filter_price_max/${1000000}/filter_instantBooking/${''}/filter_bedroom_bed/${''}/filter_bedroom_room/${''}/filter_bedroom_bathroom/${''}/filter_convenience/${''}/filter_convenienceList/${''}/filter_facilityList/${''}/filter_hostLangList/${''}/page/${''}`,
  );
  console.log('데이터 겟햇다=======================', response);
  return response.data;
};

export const fetchMapCenter = async location => {
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyCqryK5lMUxY0i_-Zu1cUrgW3_Geg4BrWA`,
  );
  console.log(response);
  const center = response.data.results[0].geometry.location;

  return center;
};
