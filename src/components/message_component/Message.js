/* eslint-disable */
// Warning 문장을 다 지워줌

import React, { useState } from "react";

import { MessageContainer, MessageUser, MessageContent } from "./MessageStyle";
import { RedButton } from "./MessageSendStyle";

function Message() {
  return(
    <MessageContainer>
      <div>
        <MessageUser><span style={{color:"#55BA6B"}}>나</span>의 메세지</MessageUser>
        <MessageContent>메세지 내용</MessageContent>
      </div>
      <RedButton>삭제</RedButton>
    </MessageContainer>
  )
}

export default Message;