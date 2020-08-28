import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TripsUpcomingContainer from '../Containers/Trips/TripsUpcomingContainer';
import TripsPastContainer from '../Containers/Trips/TripsPastContainer';
import TripsCanceledContainer from '../Containers/Trips/TripsCanceledContainer';

const SubRouter = () => {
  return (
    <Switch>
      <Route
        exact
        path={['/trips', '/trips/upcoming']}
        component={TripsUpcomingContainer}
      />
      <Route path="/trips/past" component={TripsPastContainer} />
      <Route path="/trips/canceled" component={TripsCanceledContainer} />
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
