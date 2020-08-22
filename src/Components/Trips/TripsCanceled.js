import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';
import TripsCanceledItem from './TripsCanceledItem';
import TripsSubFooter from './TripsSubFooter';
import Button from '../Global/Button';

const TripsCanceled = () => {
  return (
    <>
      <TripsCanceledWrapper>
        <TripsCanceledLists>
          <TripsCanceledItem />
          <TripsCanceledItem />
          <TripsCanceledItem />
          <TripsCanceledItem />
        </TripsCanceledLists>
      </TripsCanceledWrapper>
      <TripsSubFooter>
        환불과 관련하여 질문이 있나요?{' '}
        <Button btnType="underlined" hover="none" padding="0" fontSize="1.5rem">
          도움말 센터 방문하기
        </Button>
      </TripsSubFooter>
    </>
  );
};

const TripsCanceledWrapper = styled.div`
  border-top: 1px solid ${({ theme }) => lighten(0.2, theme.color.gray)};
  border-bottom: 1px solid ${({ theme }) => lighten(0.2, theme.color.gray)};
  padding-bottom: 3rem;
`;

const TripsCanceledLists = styled.ul`
  display: flex;
  flex-flow: column nowrap;
`;

export default TripsCanceled;
