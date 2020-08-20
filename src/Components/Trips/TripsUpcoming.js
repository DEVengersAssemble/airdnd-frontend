import React from 'react';
import TripsNone from './TripsNone';
import TripsSubFooter from './TripsSubFooter';
import Button from '../Global/Button';

const TripsUpcoming = () => {
  return (
    <>
      <TripsNone />
      <TripsSubFooter>
        예약 내역을 찾으실 수 없나요?{' '}
        <Button btnType="underlined" hover="none" padding="0" fontSize="1.5rem">
          도움말 센터를 방문하세요.
        </Button>
      </TripsSubFooter>
    </>
  );
};

export default TripsUpcoming;
