import React from "react";
import styled from "styled-components";
import ChatMain from "./ChatMain";
import MsgMain from "./MsgMain";
import DetailCanceledMain from "./DetailCanceledMain";
import DetailMain from "./DetailMain";

const MessageMainWrapper = () => {
  const [canceled, setCanceled] = React.useState(false);
  console.log(setCanceled); // 전역 관리

  return (
    <MessageMainWrapperDiv>
      <ChatMain />
      <MsgMain />
      {canceled ? <DetailCanceledMain /> : <DetailMain />}
    </MessageMainWrapperDiv>
  );
};

const MessageMainWrapperDiv = styled.div`
  display: flex;
  position: relative;
  z-index: -1;
`;
export default MessageMainWrapper;
