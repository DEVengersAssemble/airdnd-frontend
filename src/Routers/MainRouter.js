import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from '../Pages/MainPage';
import SearchPage from '../Pages/SearchPage';
import DetailPage from '../Pages/DetailPage';
import ReservationPage from '../Pages/ReservationPage';
import Mypage from '../Pages/Mypage';

const MainRouter = () => {
  return (
    <Switch>
      <Route path="/" component={MainPage} exact />
      <Route path="/SearchPage" component={SearchPage} />
      <Route path="/DetailPage" component={DetailPage} exact />
      <Route path="/ReservationPage" component={ReservationPage} />
      <Route path="/Mypage" component={Mypage} />
      <Route
        render={({ location }) => (
          <div>
            <h2 style={{ display: 'inline' }}>
              이 페이지는 존재하지 않습니다:
            </h2>
            <span>{` ${location.pathname}`}</span>
          </div>
        )}
      />
    </Switch>
  );
};

export default MainRouter;
