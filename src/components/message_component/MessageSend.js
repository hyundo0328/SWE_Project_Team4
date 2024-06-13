/* eslint-disable */
// Warning 문장을 다 지워줌

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { UserContainer, GreenButton } from "./MessageSendStyle";
import { Button } from "../ButtonStyle";

function MessageSend(){
  const [send, setSend] = useState(true);
  const [request, setRequest] = useState(false);

  return(
    <>
      <UserContainer>
        사용자1 님
        <Button style={{backgroundColor: '#55BA6B', marginLeft:"auto"}}>보내기</Button>
      </UserContainer>
      <UserContainer>
        사용자1 님
        <Button style={{backgroundColor: '#55BA6B', marginLeft:"auto"}}>보내기</Button>
      </UserContainer>
      <UserContainer>
        사용자1 님
        <Button style={{backgroundColor: '#55BA6B', marginLeft:"auto"}}>보내기</Button>
      </UserContainer>
    </>
  )
}

export default MessageSend;