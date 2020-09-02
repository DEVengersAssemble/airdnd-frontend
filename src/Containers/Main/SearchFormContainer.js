import React, { useState, useCallback } from 'react';
import { debounce } from 'lodash';
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

  const closePopup = () => {
    setType(() => null);
  };

  const changeType = type => {
    setType(() => type);
  };

  const getDateDiff = (date1, date2) => {
    const checkIn = new Date(date1);
    const checkOut = new Date(date2);
    const timeDiff = checkOut.getTime() - checkIn.getTime();
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { location, checkIn, checkOut, flexibleDate, guests } = searchData;
    const { adult, child, infant } = guests;
    const guestCount = adult + child + infant;
    const dateDiff = getDateDiff(checkIn, checkOut);
    const url = `/search?location=${location}&checkIn=${checkIn}&checkOut=${checkOut}&dateDiff=${dateDiff}&flexibleDate=${flexibleDate}&guests=${guestCount}&adult=${adult}&child=${child}&infant=${infant}`;
    history.push(url);
    window.scrollTo({ top: 0 });
  };

  const changeSearchData = (name, value) => {
    const data = { name, value };
    dispatch(setSearchData(data));
  };

  const debounceGetAutoCompleteResult = useCallback(
    debounce(async value => {
      const result = await getLocationAutoComplete(value);
      setLocationResult(result || []);
    }, 300),
    [],
  );

  const changeAutoComplete = value => {
    if (!value) {
      dispatch(setSearchData({ name: 'location', value: '' }));
      setLocationResult([]);
      return;
    } else {
      dispatch(setSearchData({ name: 'location', value }));
      debounceGetAutoCompleteResult(value);
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

  const decreaseGuestCount = (guestsData, guestType) => {
    let { adult, child, infant } = guestsData;
    if (guestType === 'adult') adult--;
    else if (guestType === 'child') child--;
    else if (guestType === 'infant') infant--;
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
      decreaseGuestCount={decreaseGuestCount}
    ></SearchForm>
  );
};

export default SearchFormContainer;
