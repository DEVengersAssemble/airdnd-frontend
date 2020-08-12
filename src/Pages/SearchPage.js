import React from 'react';
import StButton from '../Components/Global/Button';

const SearchPage = () => {
  return (
    <>
      <div>Search</div>
      <StButton>This is button</StButton>
      <StButton width="20rem" height="5rem">
        This is button
      </StButton>
      <StButton fontSize={'1rem'}>This is button</StButton>
      <StButton width={'30%'}>This is button</StButton>
      <StButton btnType={'color'} color={'black'}>
        This is button
      </StButton>
      <StButton btnType={'color'} color={'orangered'}>
        This is button
      </StButton>
      <StButton btnType="underlined">This is button</StButton>
      <StButton btnType={'oval'} color={'pink'}>
        This is button
      </StButton>
      <StButton btnType={'oval'} border={'1px solid green'}>
        This is button
      </StButton>
      <StButton btnType={'oval'}>This is button</StButton>
      <StButton btnType={'circle'}>T</StButton>
      <StButton btnType={'circle'} color={'red'}>
        T
      </StButton>
    </>
  );
};

export default SearchPage;
