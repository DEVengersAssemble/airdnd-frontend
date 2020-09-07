import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TripsUpcomingContainer from '../Containers/Trips/TripsUpcomingContainer';
import TripsPastContainer from '../Containers/Trips/TripsPastContainer';
import TripsCanceledContainer from '../Containers/Trips/TripsCanceledContainer';

const SubRouter = () => {
  return (
    <Switch>
      <Route exact path="/trips/v1" component={TripsUpcomingContainer} />
      {/* <Route path="/trips/v1?tab=upcoming" component={TripsUpcomingContainer} /> */}
      {/* <Route path="/trips/v1?tab=past" component={TripsPastContainer} /> */}
      {/* <Route path="/trips/v1?tab=canceled" component={TripsCanceledContainer} /> */}
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
