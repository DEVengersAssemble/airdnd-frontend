import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TripsUpcomingContainer from '../Containers/Trips/TripsUpcomingContainer';

const SubRouter = () => {
  return (
    <Switch>
      <Route exact path="/trips/v1" component={TripsUpcomingContainer} />
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
