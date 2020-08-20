import React from 'react';

const LuckyChance = ({ lagtName }) => {
  return (
    <div>
      <img
        src="https://a0.muscache.com/airbnb/static/packages/icon-uc-diamond.296a9c25.gif"
        alt="lucky"
      />
      <strong>흔치 않은 기회 입니다.</strong>
      <span>님의 숙소는 보통 예약이 가득 차 있습니다.</span>
    </div>
  );
};

export default LuckyChance;
