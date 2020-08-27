import React from 'react';
import MessageHeader from '../Components/Message/MessageHeader';
import MsgFlagModal from '../Components/Message/MsgFlagModal';
import MsgDetailPdfModal from '../Components/Message/MsgDetailPdfModal';
import MsgDetailBusinessModal from '../Components/Message/MsgDetailBusinessModal';
import MsgDetailSupportModal from '../Components/Message/MsgDetailSupportModal';
import MessageMain from '../Components/Message/MessageMain';

const MessagePage = () => {
  return (
    <>
      <MessageHeader />
      <MessageMain />
      <MsgFlagModal />
      <MsgDetailPdfModal />
      <MsgDetailBusinessModal />
      <MsgDetailSupportModal />
    </>
  );
};

export default MessagePage;
