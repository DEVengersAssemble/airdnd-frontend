import axios from 'axios';

export const fetchWishlistsData = async () => {
  const response = await axios.get('/back/wishlists');
  console.log('===============================================');
  return response.data;
};
