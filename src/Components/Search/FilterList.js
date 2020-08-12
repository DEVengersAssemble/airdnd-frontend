import React from 'react';
import Button from '../Global/Button';
import styled from 'styled-components';

const FilterButton = ({ children }) => {
  return <Button btnType="oval">{children}</Button>;
};

const FilterList = () => {
  return (
    <>
      <FilterButton>유연한 환불 정책</FilterButton>
      <FilterButton>숙소 유형</FilterButton>
      <FilterButton>요금</FilterButton>
      <FilterButton>필터 추가하기</FilterButton>
    </>
  );
};

export default FilterList;
