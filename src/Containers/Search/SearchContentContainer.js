import React, { useEffect } from 'react';
import SearchContent from '../../Components/Search/SearchContent';
import axios from 'axios';

const SearchContentContainer = () => {
  useEffect(() => {
    const test = async () => {
      try {
        const response = await axios.get('back/initialState');
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    };
    test();
  }, []);

  return <SearchContent />;
};

export default SearchContentContainer;
