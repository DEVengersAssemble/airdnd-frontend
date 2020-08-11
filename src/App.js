import React from 'react';
import MainRouter from './Routers/MainRouter';
import ResetStyle from './StyledComponents/ResetStyle';

function App() {
  return (
    <ResetStyle>
      <MainRouter />
    </ResetStyle>
  );
}

export default App;
