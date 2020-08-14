import React from 'react';
import Division from './Division';
import Rating from '../Global/Rating';

const Reviews = () => {
  return (
    <Division
      title={
        <Rating scale="2.2" rate="4.92점" starSize="2.2rem" count="후기 12개" />
      }
    ></Division>
  );
};

export default Reviews;
