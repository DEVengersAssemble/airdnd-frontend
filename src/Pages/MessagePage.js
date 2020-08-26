import React from 'react';
import MessageWrapper from '../Components/Message/MessageWrapper';
import MessageHeader from '../Components/Message/MessageHeader';
import MessageSubHeader from '../Components/Message/MessageSubHeader';
import MessageMainWrapper from '../Components/Message/MessageMainWrapper';
import ChatFlagModal from '../Components/Message/MessageModal';
import DetailPdfModal from '../Components/Message/DetailPdfModal';
import DetailBusinessModal from '../Components/Message/DetailBusinessModal';
import DetailSupportModal from '../Components/Message/DetailSupportModal';

const MessagePage = () => {
  return (
    <MessageWrapper>
      <MessageHeader />
      <MessageSubHeader />
      <MessageMainWrapper />
      <ChatFlagModal />
      <DetailPdfModal />
      <DetailBusinessModal />
      <DetailSupportModal />
    </MessageWrapper>
  );
};

export default MessagePage;
