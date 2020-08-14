import React from 'react';
import Button from '../Global/Button';
import styled from 'styled-components';

const HomePhotos = () => {
  return (
    <StImgsWrapper>
      <img
        src="https://a0.muscache.com/im/pictures/1fde1215-a81e-45d3-a36f-6018ca3f627e.jpg?im_w=960"
        alt="숙소 사진 1"
      />
      <img
        src="https://a0.muscache.com/im/pictures/1337d918-2bc5-4319-ad8d-b0ccd78b2dc2.jpg?im_w=720"
        alt="숙소 사진 2"
      />
      <img
        src="https://a0.muscache.com/im/pictures/0a5ea20c-9904-4153-b6be-a82c98249973.jpg?im_w=720"
        alt="숙소 사진 3"
      />
      <img
        src="https://a0.muscache.com/im/pictures/479306c6-ef56-409e-a2e5-79457fb43188.jpg?im_w=720"
        alt="숙소 사진 4"
      />
      <img
        src="https://a0.muscache.com/im/pictures/d4e1e39c-91c2-48cf-a00a-b64a150558c0.jpg?im_w=1200"
        alt="숙소 사진 5"
      />
      <StViewerButton>사진 모두 보기</StViewerButton>
    </StImgsWrapper>
  );
};

const StImgsWrapper = styled.div`
  position: relative;
  margin-top: 1.6rem;
  margin-bottom: 4.8rem;
  height: calc(60vh - 64px);
  max-height: 507px;
  border-radius: 1.2rem;
  overflow: hidden;

  & img {
    float: left;
    width: calc(25% - 5px);
    height: calc(50% - 4px);
    margin-left: 8px;
    margin-bottom: 8px;
    object-fit: cover;

    @media screen and (max-height: 449px) {
      & {
        height: 100%;
      }
    }
  }
  & img:first-child {
    width: calc(50% - 6px);
    height: 100%;
    margin: 0;
  }
`;

const StViewerButton = styled(Button)`
  position: absolute;
  bottom: 24px;
  right: 24px;
  padding: 8px 14px;
`;

export default HomePhotos;
