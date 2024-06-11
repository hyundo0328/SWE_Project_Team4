/* eslint-disable */
// Warning 문장을 다 지워줌

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { UserContainer, GreenButton } from "./MessageSendStyle";

function MessageSend(){
  const [send, setSend] = useState(true);
  const [request, setRequest] = useState(false);

  return(
    <>
      <UserContainer>
        사용자1 님
        <GreenButton>보내기</GreenButton>
      </UserContainer>
      <UserContainer>
        사용자1 님
        <GreenButton>보내기</GreenButton>
      </UserContainer>
      <UserContainer>
        사용자1 님
        <GreenButton>보내기</GreenButton>
      </UserContainer>
    </>
  )
}

export default MessageSend;