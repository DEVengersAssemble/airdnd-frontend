import React from 'react';
import StButton from '../StyledComponents/Global/buttons';

const SearchPage = () => {
  return (
    <>
      <div>Search</div>
      <StButton>This is button</StButton>
      <StButton fontSize={'1.2rem'}>This is button</StButton>
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
      <StButton btnType={'oval'} border={'3px solid black'}>
        This is button
      </StButton>
      <StButton btnType={'circle'}>T</StButton>
      <StButton btnType={'circle'} color={'red'}>
        T
      </StButton>
    </>
  );
};

export default SearchPage;
