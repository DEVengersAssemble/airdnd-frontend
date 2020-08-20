import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import SearchForm from '../../Components/Main/SearchForm';
import { setSearchData } from '../../Modules/searchForm';
import { getLocationAutoComplete } from '../../Api/searchFormApi';

const SearchFormContainer = ({ isSearchBtnClicked }) => {
  let history = useHistory();
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

  const handleSubmit = e => {
    e.preventDefault();
    const {
      location,
      checkIn,
      checkOut,
      dateDiff,
      flexibleDate,
      guests,
    } = searchData;
    const { adult, child, infant } = guests;
    const guestCount = adult + child + infant;
    const url = `/search?location=${location}&checkIn=${checkIn}&checkOut=${checkOut}&dateDiff=${dateDiff}&flexibleDate=${flexibleDate}&guests=${guestCount}&adult=${adult}&child=${child}&infant=${infant}`;
    history.push(url);
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
      handleSubmit={handleSubmit}
    ></SearchForm>
  );
};

export default SearchFormContainer;
