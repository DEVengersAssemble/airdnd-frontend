import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MainRouter from './Routers/MainRouter';
import ResetStyle from './style/ResetStyle';
import { useCookies } from 'react-cookie';
import { setIsLoggedIn } from './Modules/user';
function App() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector(state => state.user);
  const [cookies, setCookie, removeCookie] = useCookies(['AirdndSES']);
  useEffect(() => {
    if (!isLoggedIn && cookies['AirdndSES']) {
      dispatch(setIsLoggedIn(true));
    }
  }, [isLoggedIn]);

  return (
    <>
      <MainRouter />
      <ResetStyle />
    </>
  );
}

export default App;
