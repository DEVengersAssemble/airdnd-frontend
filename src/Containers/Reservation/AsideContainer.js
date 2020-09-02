import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import Aside from '../../Components/Reservation/Aside';

const AsideContainer = () => {
  const { title, subTitle, price, images, reviewCount } = useSelector(
    state => ({
      title: state.home.homeState.home.title,
      subTitle: state.home.homeState.home.subTitle,
      price: state.home.homeState.home.price,
      images: state.home.homeState.home.images,
      reviewCount: state.home.homeState.home.host.reviewCount,
    }),
    shallowEqual,
  );

  const image = images[0];

  const getPercentage = price => {
    const regExp = /\d/g;
    const filteredNumber = price.match(regExp).join('');
    return ((filteredNumber / 100) * 12).toLocaleString(undefined, {
      maximumFractionDigits: 0,
    });
  };

  const getTotalPrice = (price, percentage) => {
    const regExp = /\d/g;
    const filteredPrice = Number(price.match(regExp).join(''));
    const filteredPercentage = Number(percentage.match(regExp).join(''));
    return (filteredPrice + filteredPercentage).toLocaleString(undefined, {
      maximumFractionDigits: 0,
    });
  };

  return (
    <Aside
      title={title}
      subTitle={subTitle}
      price={price}
      image={image}
      reviewCount={reviewCount}
      getPercentage={getPercentage}
      getTotalPrice={getTotalPrice}
    />
  );
};

export default AsideContainer;
