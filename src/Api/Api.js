import axios from 'axios';

export const fetchSearchedData = async ({
  location,
  checkIn,
  checkOut,
  adults,
  page,
  filter,
}) => {
  const CI = checkIn.split('/').join('-');
  const CO = checkOut.split('/').join('-');
  console.log(typeof CI);
  const response = await axios.get(
    // `back/initialState/location/${'seoul'}/checkIn/${CI}/checkOut/${CO}/adults/${adults}`,
    `http://localhost:3000/back/initialState/location/seoul/checkIn/2020-09-02/checkOut/2020-09-06/adults/3`,
  );
  console.log('데이터 겟햇다=======================', response);
  return response.data;
};
