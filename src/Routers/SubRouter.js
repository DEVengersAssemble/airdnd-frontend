import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HouseRules from '../Components/Reservation/HouseRules';
import GuestInfo from '../Components/Reservation/GuestInfo';

const SubRouter = () => {
  return (
    <Switch>
      <Route exact path="/Reservation" />
      <Route path="/Reservation/HouseRules" component={HouseRules} />
      <Route path="/Reservation/GuestInfo" component={GuestInfo} />
      <Route
        render={({ location }) => (
          <div>
            <span>이 페이지는 존재하지 않습니다:</span>
            <span>{` ${location.pathname}`}</span>
          </div>
        )}
      />
    </Switch>
  );
};

export default SubRouter;
