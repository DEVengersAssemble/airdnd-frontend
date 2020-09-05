import axios from 'axios';

export const fetchTripsData = async ({ tab }) => {
  const response = await axios.get(`/back/v1/tab=${tab}`);
  console.log('=======================================', response);
  return response.data;
};
