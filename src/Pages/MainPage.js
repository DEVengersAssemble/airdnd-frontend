import React from 'react';
import MainHeader from '../Components/Main/MainHeader';
import Background from '../Components/Main/Background';
import Category from '../Components/Main/Category';
import OnlineExp from '../Components/Main/OnlineExp';
import Footer from '../Components/Main/Footer';

const MainPage = () => {
  return (
    <main>
      <MainHeader></MainHeader>
      <Background></Background>
      <Category></Category>
      <OnlineExp></OnlineExp>
      <Footer></Footer>
    </main>
  );
};

export default MainPage;
