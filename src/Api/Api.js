import axios from 'axios';

export const fetchSearchedData = async ({
  location,
  checkIn,
  checkOut,
  adults,
  page,
  filter,
}) => {
  console.log('location 잘들어갓니', location);
  const response = await axios.get(
    `back/initialState/location/${'seoul'}/checkIn/${'2020-09-02'}/checkOut/${'2020-09-06'}/adults/${'3'}`,
  );
  console.log('api result', response);
  return response.data;
};
