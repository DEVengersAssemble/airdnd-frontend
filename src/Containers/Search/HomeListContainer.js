import React from 'react';
import { useSelector } from 'react-redux';
import Home from '../../Components/Search/Home';

const HomeListContainer = () => {
  const homes = useSelector(state => state.search.homes);

  return (
    <>
      {homes.map(home => {
        const {
          isSuperhost,
          isBookmarked,
          image,
          imageCount,
          subTitle,
          title,
          feature,
          rating,
          reviewCount,
          price,
          location,
        } = home;

        return (
          <Home
            key={home.homeId}
            home={home}
            isSuperhost={isSuperhost}
            isBookmarked={isBookmarked}
            image={image}
            imageCount={imageCount}
            subTitle={subTitle}
            title={title}
            feature={feature}
            rating={rating}
            reviewCoutn={reviewCount}
            price={price}
            location={location}
          />
        );
      })}
    </>
  );
};

export default HomeListContainer;
