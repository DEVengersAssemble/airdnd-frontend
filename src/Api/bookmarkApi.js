import axios from 'axios';

export const fetchBookmarkData = async () => {
  const res = await axios.get('/back/bookmark');
  console.log('===============================================');
  return res.data;
};
