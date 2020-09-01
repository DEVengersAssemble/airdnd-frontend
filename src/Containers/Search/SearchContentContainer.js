import React, { useEffect } from 'react';
import SearchContent from '../../Components/Search/SearchContent';
import axios from 'axios';

const homes = axios.create();

const SearchContentContainer = () => {
  useEffect(() => {
    const test = async () => {
      try {
        const response = await homes.get(
          `back/initialState/location/${'seoul'}/checkIn/${'2020-09-02'}/checkOut/${'2020-09-06'}/adults/${'3'}`,
        );
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
