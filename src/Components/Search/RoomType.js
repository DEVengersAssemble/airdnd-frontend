import React from 'react';
import Checkbox from '../Global/Checkbox';
import {
  StCheckboxList,
  StCheckboxWrapper,
  StContentWrapper,
  StLargeSpan,
  StSmallSpan,
} from './FilterPopup';

const RoomType = ({ check, onChange }) => {
  return (
    <StCheckboxList>
      <StCheckboxWrapper>
        <Checkbox
          value
          checked={check.house}
          onChange={() => onChange('house')}
        >
          <StContentWrapper content="roomType">
            <StLargeSpan>집 전체</StLargeSpan>
            <StSmallSpan>집 전체를 단독으로 사용합니다</StSmallSpan>
          </StContentWrapper>
        </Checkbox>
      </StCheckboxWrapper>
      <StCheckboxWrapper>
        <Checkbox
          value
          checked={check.private}
          onChange={() => onChange('private')}
        >
          <StContentWrapper content="roomType">
            <StLargeSpan>개인실</StLargeSpan>
            <StSmallSpan>
              침실은 단독으로 쓰고, 이외의 공간은 호스트나 다른 게스트와 함께
              이용할 수도 있습니다
            </StSmallSpan>
          </StContentWrapper>
        </Checkbox>
      </StCheckboxWrapper>
      <StCheckboxWrapper>
        <Checkbox
          value
          checked={check.shared}
          onChange={() => onChange('shared')}
        >
          <StContentWrapper content="roomType">
            <StLargeSpan>다인실</StLargeSpan>
            <StSmallSpan>
              사적 공간 없이, 침실이나 욕실 등을 호스트나 다른 게스트와 함께
              이용합니다
            </StSmallSpan>
          </StContentWrapper>
        </Checkbox>
      </StCheckboxWrapper>
    </StCheckboxList>
  );
};

export default RoomType;
