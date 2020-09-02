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
    `back/search/location/${location}/checkIn/${CI}/checkOut/${CO}/adults/${guests}`,
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
