import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MsgSectionFooter from '../../Components/Message/MsgSectionFooter';
import io from 'socket.io-client';
import { sendChat, receiveChat } from '../../Modules/socket';

const MsgSectionFooterContainer = () => {
  // ! socket
  // const [msg, setMsg] = React.useState('');
  // const [chat, setChat] = React.useState([]);

  // const socket = io.connect('http://localhost:3000');

  // const msg = useSelector(state => state.socket.msg);
  // const dispatch = useDispatch();
  // const onTextChange = e => {
  //   dispatch(sendChat(e.target.value));
  //   // setMsg(e.target.value);
  // };
  // const onMsgSubmit = () => {
  //   socket.emit('chat message', msg);
  //   dispatch(sendChat(''));
  //   // setMsg('');
  // };

  // React.useEffect(() => {
  //   socket.on('chat message', ({ id, msg }) => {
  //     dispatch(receiveChat(id, msg));
  //     // setChat(chat.concat({ id: id, msg: msg }));
  //   });
  // });

  return (
    <MsgSectionFooter
    // onTextChange={onTextChange}
    // onMsgSubmit={onMsgSubmit}
    />
  );
};

export default MsgSectionFooterContainer;
