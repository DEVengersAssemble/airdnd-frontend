import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TripsUpcoming from '../Components/Trips/TripsUpcoming';
import TripsPast from '../Components/Trips/TripsPast';
import TripsCanceled from '../Components/Trips/TripsCanceled';

const SubRouter = () => {
  return (
    <Switch>
      <Route exact path="/trips" />
      <Route path="/trips/upcoming" conponent={TripsUpcoming} />
      <Route path="/trips/past" component={TripsPast} />
      <Route path="/trips/canceled" component={TripsCanceled} />
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
