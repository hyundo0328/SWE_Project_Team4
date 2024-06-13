/* eslint-disable */
// Warning 문장을 다 지워줌

import React, { useState } from "react";

import { MessageContainer, MessageUser, MessageContent } from "./MessageStyle";
import { RedButton } from "./MessageSendStyle";
import { Button } from "../ButtonStyle";

function Message() {
  return(
    <MessageContainer>
      <div>
        <MessageUser><span style={{color:"#55BA6B"}}>나</span>의 메세지</MessageUser>
        <MessageContent>메세지 내용</MessageContent>
      </div>
      <Button style={{backgroundColor:"#EB5A5A", marginLeft:"auto"}}>삭제</Button>
    </MessageContainer>
  )
}

export default Message;