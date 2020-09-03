import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MsgSectionFooter from '../../Components/Message/MsgSectionFooter';
import io from 'socket.io-client';
import { sendChat, receiveChat } from '../../Modules/socket';

const MsgSectionFooterContainer = () => {
  // ! redux
  const { activeIndex, filteredMsgs } = useSelector(state => state.message);
  const { firstName } = useSelector(state => state.trips);

  // ! variable
  const activeMsg = filteredMsgs.find(
    (_, index) => filteredMsgs[index] === filteredMsgs[activeIndex],
  );
  // ! socket
  // const socket = io.connect('http://localhost:4000');

  // const { msg } = useSelector(state => state.socket);
  // const dispatch = useDispatch();

  // const onTextChange = e => {
  //   dispatch(sendChat(e.target.value));
  //   // setMsg(e.target.value);
  // };
  // const onMsgSubmit = e => {
  //   e.preventDefault();
  //   console.log(msg);
  //   socket.emit('chat message', msg);
  //   // setMsg('');
  // };

  // React.useEffect(() => {
  //   socket.on('chat message', message => {
  //     // console.log(id, message);
  //     dispatch(receiveChat(firstName, message));
  //     // setChat(chat.concat({ id: id, msg: msg }));
  //   });
  // }, [dispatch, firstName]);

  return (
    <MsgSectionFooter
    // onTextChange={onTextChange}
    // onMsgSubmit={onMsgSubmit}
    />
  );
};

export default MsgSectionFooterContainer;
