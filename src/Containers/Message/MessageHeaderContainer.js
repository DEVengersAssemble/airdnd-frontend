import React from 'react';
import { useHistory } from 'react-router-dom';
import MessageHeader from '../../Components/Message/MessageHeader';

const MessageHeaderContainer = () => {
  // const history = useHistory();

  // const handleLogoClick = e => {
  //   e.preventDefault();
  //   history.push('/');
  //   window.scrollTo({ top: 0 });
  // };

  return (
    <MessageHeader
    // handleLogoClick={handleLogoClick}
    ></MessageHeader>
  );
};

export default MessageHeaderContainer;
