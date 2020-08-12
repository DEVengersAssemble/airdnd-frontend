import React from 'react';
import Button from '../Components/Global/Button';
import { PlusButton, MinusButton } from '../Components/Global/CounterButton';
import { NextButton, PrevButton } from '../Components/Global/SlideButton';
import FilterList from '../Components/Search/FilterList';

const SearchPage = () => {
  return (
    <div>
      <div>Search</div>
      <FilterList />
    </div>
  );
};

export default SearchPage;
