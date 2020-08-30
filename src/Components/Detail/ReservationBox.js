import React from 'react';
import styled from 'styled-components';
import Rating from '../Global/Rating';
import Button from '../Global/Button';
import DropDown from '../Global/DropDown';

const StDropDown = styled(DropDown)`
  width: 100%;
  margin-top: -1px;
  border-radius: 8px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

const StCheckIn = styled.div`
  width: 50%;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.gray};
  border-right: none;
  border-top-left-radius: 8px;
`;

const StCheckOut = styled.div`
  width: 50%;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.gray};
  border-top-right-radius: 8px;
`;

const StReserveBtn = styled(Button)`
  margin-top: 16px;
`;

const ReservationBox = () => {
  return (
    <StWarpper>
      <StStickyWrapper>
        <StReserveBox>
          <h3>요금을 확인하려면 날짜를 입력하세요</h3>
          <Rating rate="4.55" count="687" />
          <StCheckIn>체크인</StCheckIn>
          <StCheckOut>체크아웃</StCheckOut>
          <StDropDown title="게스트 1명" width="100%" options={[]} />
          <StReserveBtn
            color="main"
            border="none"
            width="100%"
            padding="14px"
            hover
          >
            예약 가능 여부 보기 or 예약 하기
          </StReserveBtn>
          <StChargeMsg>예약 확정 전에는 요금이 청구되지 않습니다.</StChargeMsg>
          <StChargeList>
            <li>
              <Button btnType="underlined" padding="0" hover>
                ₩17,000 x 2박
              </Button>
              <span>₩34,000</span>
            </li>
            <li>
              <Button btnType="underlined" padding="0" hover>
                ₩17,000 x 2박
              </Button>
              <span>₩34,000</span>
            </li>
            <li>
              <Button btnType="underlined" padding="0" hover>
                ₩17,000 x 2박
              </Button>
              <span>₩34,000</span>
            </li>
          </StChargeList>
          <StTotalCharge>
            <span>총합계</span>
            <span>₩27,727</span>
          </StTotalCharge>
        </StReserveBox>
        <StButton>숙소 신고하기</StButton>
      </StStickyWrapper>
    </StWarpper>
  );
};

const StWarpper = styled.div`
  /* background-color: #f9eae8; */
  position: relative;
  margin-left: 8%;
  width: 34%;
`;

const StStickyWrapper = styled.div`
  position: sticky;
  top: 80px;
  text-align: center;
  z-index: 1;
`;

const StReserveBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  text-align: left;
  background-color: ${({ theme }) => theme.color.white};
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.color.line};
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;

  h3 {
    display: inline-block;
    width: calc(100% - 92px);
    margin-bottom: 24px;
    font-size: 2.2rem;
    font-weight: 600;
    line-height: 2.6rem;
    word-break: keep-all;
  }
`;

const StButton = styled.button`
  margin-top: 24px;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  font-size: 14px;
  text-decoration: underline;
  color: ${({ theme }) => theme.color.darkGray};
`;

const StChargeMsg = styled.div`
  width: 100%;
  margin-top: 8px;
  margin-bottom: 24px;
  text-align: center;
  font-size: 14px;
`;

const StChargeList = styled.ul`
  width: 100%;

  li {
    display: flex;
    justify-content: space-between;
    padding-bottom: 12px;

    &:last-child {
      padding-bottom: 0;
    }

    button {
      border-radius: 0;
      margin-right: auto;
    }
  }
`;

const StTotalCharge = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  padding-top: 24px;
  font-weight: 700;
  border-top: 1px solid ${({ theme }) => theme.color.line};
`;

export default ReservationBox;
