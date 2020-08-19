import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchForm from '../../Components/Main/SearchForm';
import { setSearchData } from '../../Modules/searchForm';

const SearchFormContainer = () => {
  const dispatch = useDispatch();
  const searchData = useSelector(state => state.searchForm);
  console.log('searchData: ', searchData);

  // location,checkIn,checkOut,guests
  const [type, setType] = useState(null);

  const closePopup = () => {
    setType(null);
  };

  const changeType = e => {
    setType(e.target.name);
  };

  const changeSearchData = (name, value) => {
    const data = { name, value };
    console.log('data: ', data);
    console.log('setSearchData(data): ', setSearchData(data));
    dispatch(setSearchData(data));
  };
  return (
    <SearchForm
      type={type}
      changeType={changeType}
      closePopup={closePopup}
      searchData={searchData}
      changeSearchData={changeSearchData}
    ></SearchForm>
  );
};

export default SearchFormContainer;
