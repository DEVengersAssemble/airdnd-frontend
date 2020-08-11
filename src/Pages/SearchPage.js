import React from 'react';
import {
  StButton,
  StColorButton,
  StUnderlinedButton,
  StCircleButton,
  StOvalButton,
} from '../StyledComponents/Global/buttons';

const SearchPage = () => {
  return (
    <>
      <div>Search</div>
      <StButton>This is button</StButton>
      <StColorButton color={'black'}>This is button</StColorButton>
      <StUnderlinedButton>This is button</StUnderlinedButton>
      <StCircleButton>T</StCircleButton>
      <StOvalButton>This is button</StOvalButton>
      <StButton>This is button</StButton>
      <StColorButton fontSize={'2rem'} color={'orange'}>
        This is button
      </StColorButton>
      <StUnderlinedButton border={'3px solid red'}>
        This is button
      </StUnderlinedButton>
      <StCircleButton color={'pink'} width={'50px'} height={'50px'}>
        T
      </StCircleButton>
      <StOvalButton>This is button</StOvalButton>
    </>
  );
};

export default SearchPage;
