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
  const [type, setType] = useState(null);

  console.log('[type]', type);
  const closePopup = () => {
    console.log('close()');
    console.log(type);

    setType(() => null);
    console.log(type);
  };
  const changeType = type => {
    setType(type);
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

  const changeSearchData = (name, value) => {
    const data = { name, value };
    dispatch(setSearchData(data));
  };

  const changeAutoComplete = async value => {
    if (!value) {
      dispatch(setSearchData({ name: 'location', value: '' }));
      setLocationResult([]);
      return;
    } else {
      dispatch(setSearchData({ name: 'location', value }));
      const result = await getLocationAutoComplete(value);
      setLocationResult(result);
      setType('location');
    }
  };

  const increaseGuestCount = (guestsData, guestType) => {
    let { adult, child, infant } = guestsData;
    if (guestType === 'adult' || !adult) adult++;
    if (guestType === 'child') {
      child++;
    } else if (guestType === 'infant') {
      infant++;
    }
    const value = { adult, child, infant };
    changeSearchData('guests', value);
  };

  return (
    <SearchForm
      isSearchBtnClicked={isSearchBtnClicked}
      type={type}
      changeType={changeType}
      closePopup={closePopup}
      searchData={searchData}
      changeSearchData={changeSearchData}
      changeAutoComplete={changeAutoComplete}
      locationResult={locationResult}
      handleSubmit={handleSubmit}
      increaseGuestCount={increaseGuestCount}
    ></SearchForm>
  );
};

export default SearchFormContainer;
