import React from 'react';
import MainHeaderContainer from '../Containers/Main/MainHeaderContainer';
import Background from '../Components/Main/Background';
import Category from '../Components/Main/Category';
import OnlineExp from '../Components/Main/OnlineExp';
import Footer from '../Components/Main/Footer';

const MainPage = () => {
  return (
    <main>
      <MainHeaderContainer></MainHeaderContainer>
      <Background></Background>
      <Category></Category>
      <OnlineExp></OnlineExp>
      <Footer></Footer>
    </main>
  );
};

export default MainPage;
