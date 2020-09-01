import axios from 'axios';

export const fetchSearchedData = async ({
  location,
  checkIn,
  checkOut,
  adults,
  page,
  filter,
}) => {
  const response = await axios.get(
    `back/initialState/location/${'seoul'}/checkIn/${'2020-09-02'}/checkOut/${'2020-09-06'}/adults/${'3'}`,
  );
  return response.data;
};
