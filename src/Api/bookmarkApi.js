import axios from 'axios';

export const fetchBookmarkData = async () => {
  const response = await axios.get('/back/bookmark');
  console.log('===============================================');
  return response.data;
};
