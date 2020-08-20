import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchForm from '../../Components/Main/SearchForm';
import { setSearchData } from '../../Modules/searchForm';
import { getLocationAutoComplete } from '../../Api/searchFormApi';

const SearchFormContainer = ({ isSearchBtnClicked }) => {
  const dispatch = useDispatch();
  const searchData = useSelector(state => state.searchForm);
  const [locationResult, setLocationResult] = useState([]);
  // location,checkIn,checkOut,guests
  const [type, setType] = useState(null);

  const closePopup = () => {
    setType(null);
  };

  const changeType = e => {
    setType(e.target.name);
  };

  const changeSearchData = async (name, value) => {
    const data = { name, value };
    dispatch(setSearchData(data));
    if (value && name === 'location') {
      const result = await getLocationAutoComplete(value);
      setLocationResult(result);
    }
  };
  return (
    <SearchForm
      isSearchBtnClicked={isSearchBtnClicked}
      type={type}
      changeType={changeType}
      closePopup={closePopup}
      searchData={searchData}
      changeSearchData={changeSearchData}
      locationResult={locationResult}
    ></SearchForm>
  );
};

export default SearchFormContainer;
