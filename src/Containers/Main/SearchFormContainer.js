import React, { useState } from 'react';
import SearchForm from '../../Components/Main/SearchForm';

const SearchFormContainer = () => {
  // place,checkin,checkout,guest
  const [type, setType] = useState(null);

  const changeType = e => {
    console.log(e.target);
    console.log(e.target.name);
    setType(e.target.name);
  };
  return <SearchForm type={type} changeType={changeType}></SearchForm>;
};

export default SearchFormContainer;
