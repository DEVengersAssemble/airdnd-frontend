import React from 'react';
import Button from '../Components/Global/Button';
import { PlusButton, MinusButton } from '../Components/Global/CounterButton';
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
      <Button btnType={'color'} color="darkRed">
        This is button
      </Button>
      <Button btnType={'color'} color={'green'}>
        This is button
      </Button>
      <Button btnType="underlined">This is button</Button>
      <Button btnType={'oval'} color={'deepGreen'}>
        This is button
      </Button>
      <Button btnType={'oval'} border={'1px solid green'}>
        This is button
      </Button>
      <Button btnType={'oval'} fontSize="2rem">
        This is button
      </Button>
      <Button btnType={'circle'}>T</Button>
      <Button btnType={'circle'} color={'main'}>
        T
      </Button>
      <hr></hr>
      <NextButton styleType="transparent"></NextButton>
      <PrevButton styleType="shadowed"></PrevButton>
      <PrevButton styleType="plane"></PrevButton>
      <PlusButton></PlusButton>
      <MinusButton disabled></MinusButton>
    </div>
  );
};

export default SearchPage;
