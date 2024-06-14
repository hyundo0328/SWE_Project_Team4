/* eslint-disable */
// Warning 문장을 다 지워줌

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { TitleContainer, MessageSelect, Container, UserList, MessageContainer, UserTitle } from "./MessagePageStyle";
import { Image } from "../../components/TitleStyle";

import MessageSend from "../../components/message_component/MessageSend";
import Message from "../../components/message_component/Message";
import MessageRequest from "../../components/message_component/MessageRequest";
import home from '../../assets/logo_home.svg';

function MessagePage() {
  const navigate = useNavigate();

  const [isType, setIsType] = useState(true); // true이면 메세지, false이면 요청

  return(
    <Container>
      <UserList>
        <TitleContainer>
          <MessageSelect style={{color:`${isType ? '#576fd7':""}`}} 
            onClick={()=>{
              setIsType(true);
            }}
          >메세지</MessageSelect>
          <MessageSelect style={{color:`${!isType ? '#576fd7':""}`}}
            onClick={()=>{
              setIsType(false);
            }}
          >요청</MessageSelect>

          <Image src={home} alt="홈 출력 실패" style={{paddingTop:"85px"}}onClick={()=>{navigate('/mainpage')}}/>
        </TitleContainer>
        { isType ? <MessageSend/> : <MessageRequest/> }
      </UserList>
      <MessageContainer>
        <TitleContainer>
          <UserTitle>{isType?'':''}</UserTitle>
        </TitleContainer>
        {isType?<Message/>:<></>}
      </MessageContainer>
    </Container>
  )
}

export default MessagePage;