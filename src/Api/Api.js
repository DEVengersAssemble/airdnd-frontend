import axios from 'axios';
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
    `back/search/user/${213}/location/${location}/checkIn/${CI}/checkOut/${CO}/guests/${guests}/lat_from/${0}/lng_from/${0}/lat_to/${0}/lng_to/${0}/filter_refund/${0}/filter_roomType_house/${0}/filter_roomType_private/${0}/filter_roomType_shared/${0}/filter_price_min/${12000}/filter_price_max/${1000000}/filter_instantBooking/${0}/filter_bedroom_bed/${0}/filter_bedroom_room/${0}/filter_bedroom_bathroom/${0}/filter_convenience/${0}/filter_convenienceList/${0}/filter_facilityList/${0}/filter_hostLangList/${0}/page/${1}`,
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
