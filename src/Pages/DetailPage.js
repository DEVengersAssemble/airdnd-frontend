import React, { useState } from 'react';
import Modal from '../Components/Global/Modal';
import ModalFooter from '../Components/Global/ModalFooter';
import Popup from '../Components/Global/Popup';
import styled from 'styled-components';
import Profile from '../Components/Global/Profile';
import Rating from '../Components/Global/Rating';
import { FaCrown } from 'react-icons/fa';
import { FiShare } from 'react-icons/fi';
import { MdShare } from 'react-icons/md';
import Button from '../Components/Global/Button';

const DetailPage = () => {
  const [modalState, setModalState] = useState(false);
  const [popupState, setPopupState] = useState(false);

  const onModal = () => setModalState(true);
  const onPopup = () => setPopupState(true);

  return (
    <main>
      <button onClick={onModal}>modal button</button>
      <PopupWrapper>
        <button onClick={onPopup}>popup</button>
        <Popup popupState={popupState}>
          <ModalFooter>test</ModalFooter>
        </Popup>
      </PopupWrapper>
      <Modal
        title="modal"
        header
        footer="flex"
        footerText="test"
        modalState={modalState}
        setModalState={setModalState}
      ></Modal>
      <section>
        <h2>S9[공항 1.7km, 5분] 퀸베드 1개 프리미엄 레지던스,제주의 중심</h2>
        <div>
          <Rating scale="1.4" rate="4.55" count="67" />
          <span>·</span>
          <span>
            <FaCrown style={{ color: '#FF385C' }} />
            <span>슈퍼호스트</span>
          </span>
          <span>·</span>
          <span>Cheiu, 제주도, 한국</span>
          <span>
            <MdShare />
            공유하기
          </span>
          <span>저장</span>
        </div>
        <div>
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
            src="https://www.airbnb.co.kr/rooms/34051317/photos/998138656?adults=1&children=0&infants=0&location=%EC%A0%9C%EC%A3%BC%EB%8F%84&check_in=2020-08-15&check_out=2020-09-22&display_extensions%5B%5D=MONTHLY_STAYS&source_impression_id=p3_1597250536_O93Ov3IzitDEcAHe"
            alt="숙소 사진 4"
          />
          <img
            src="https://a0.muscache.com/im/pictures/479306c6-ef56-409e-a2e5-79457fb43188.jpg?im_w=720"
            alt="숙소 사진 5"
          />
          <img
            src="https://a0.muscache.com/im/pictures/d4e1e39c-91c2-48cf-a00a-b64a150558c0.jpg?im_w=1200"
            alt="숙소 사진 6"
          />
          <Button>사진 모두 보기</Button>
        </div>
      </section>
    </main>
  );
};

const PopupWrapper = styled.div`
  position: relative;
`;

export default DetailPage;
