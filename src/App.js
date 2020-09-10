import React, { useState, useEffect } from 'react';
import MainRouter from './Routers/MainRouter';
import ResetStyle from './style/ResetStyle';
import { useCookies } from 'react-cookie';

function App() {
  console.log(' --- [App] --- ');
  const [cookies, setCookie, removeCookie] = useCookies(['AirdndSES']);
  console.log(cookies['AirdndSES']);
  useEffect(() => {
    console.log('cookie: ', cookies);
  }, []);

  return (
    <>
      <MainRouter />
      <ResetStyle />
    </>
  );
}

export default App;
