import React from 'react';
import styled from 'styled-components';

const StBackgroundWrapper = styled.div`
  position: relative;
  z-index: -1;
  height: 650px;
  background-size: cover;
  background-image: url('https://a0.muscache.com/im/pictures/3da6b6d9-3351-4ddf-b88c-127f0fda7bdf.jpg?im_w=1440');
`;

const StDomesticTripSection = styled.section`
  position: absolute;
  top: 275px;
  left: 80px;
`;

const StDomesticTripHeader = styled.h2`
  color: white;
  font-weight: bold;
  font-size: 30px;
  width: 270px;
  margin-bottom: 15px;
  line-height: 40px;
`;

const StDomesticTripContent = styled.p`
  color: white;
  font-size: 14px;
  margin-bottom: 15px;
`;

const Background = () => {
  return (
    <StBackgroundWrapper>
      <StDomesticTripSection>
        <StDomesticTripHeader>
          가까운 곳에서 즐기는 색다른 여행
        </StDomesticTripHeader>
        <StDomesticTripContent>
          그동안 몰랐던 국내 여행지의 아름다움을 발견해보세요.
        </StDomesticTripContent>
        <button>알아보기</button>
      </StDomesticTripSection>
    </StBackgroundWrapper>
  );
};

export default Background;
