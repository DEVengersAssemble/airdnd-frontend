import React, { useState } from 'react';
import styled from 'styled-components';
import Division from './Division';
import Button from '../Global/Button';

const Amenities = ({ home }) => {
  const [screen, setScreen] = useState(
    window.matchMedia('screen and (max-width: 1127px)').matches,
  );

  window.onresize = function () {
    setScreen(window.matchMedia('screen and (max-width: 1127px)').matches);
  };

  return (
    <Division title="편의시설">
      <StAmenityList>
        {home.amenities.map((amenity, i) => {
          if (screen && i > 4) return;

          return (
            <StAmenity key={i}>
              <svg
                aria-hidden="true"
                role="presentation"
                focusable="false"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                dangerouslySetInnerHTML={{ __html: amenity.icon }}
              />
              <span>{amenity.name}</span>
            </StAmenity>
          );
        })}
      </StAmenityList>
      <Button padding="13px 23px" transition>
        편의시설 모두 보기
      </Button>
    </Division>
  );
};

const StAmenityList = styled.ul`
  margin-bottom: 24px;
`;

const StAmenity = styled.li`
  display: inline-flex;
  align-items: center;
  width: calc(50% - 2rem);
  margin-right: 2rem;
  padding-bottom: 16px;

  @media ${({ theme }) => theme.size.medium} {
    width: 100%;
    margin-right: 0;
  }

  svg {
    width: 24px;
    height: 24px;
    min-width: 24px;
    min-height: 24px;
    margin-right: 16px;
    fill: currentcolor;
  }
`;

export default Amenities;
