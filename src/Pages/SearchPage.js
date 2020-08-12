import React from 'react';
import Button from '../Components/Global/Button';
import CounterButton from '../Components/Global/CounterButton';
import { NextButton, PrevButton } from '../Components/Global/SlideButton';

const SearchPage = () => {
  return (
    <div>
      <div>Search</div>
      <Button>This is button</Button>
      <Button width="20rem" height="5rem">
        This is button
      </Button>
      <Button fontSize={'1rem'}>This is button</Button>
      <Button width={'30%'}>This is button</Button>
      <Button btnType={'color'} color="black">
        This is button
      </Button>
      <Button btnType={'color'} color={'orangered'}>
        This is button
      </Button>
      <Button btnType="underlined">This is button</Button>
      <Button btnType={'oval'} color={'pink'}>
        This is button
      </Button>
      <Button btnType={'oval'} border={'1px solid green'}>
        This is button
      </Button>
      <Button btnType={'oval'} fontSize="2rem">
        This is button
      </Button>
      <Button btnType={'circle'}>T</Button>
      <Button btnType={'circle'} color={'red'}>
        T
      </Button>
      <hr></hr>
      <NextButton></NextButton>
      <PrevButton></PrevButton>
      <CounterButton></CounterButton>
    </div>
  );
};

export default SearchPage;
