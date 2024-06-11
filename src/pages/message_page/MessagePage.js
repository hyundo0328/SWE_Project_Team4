/* eslint-disable */
// Warning 문장을 다 지워줌

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, UserList, MessageContainer, TitleContainer } from "./MessagePageStyle";

import TypeSelect from "../../components/message_component/TypeSelect";
import UserTitle from "../../components/message_component/UserTitle";
import MessageSend from "../../components/message_component/MessageSend";
import Message from "../../components/message_component/Message";

function MessagePage() {
  const navigate = useNavigate();

  return(
    <Container>
      <UserList>
        <TitleContainer>
          <TypeSelect/>
        </TitleContainer>
        <MessageSend/>
      </UserList>
      <MessageContainer>
        <TitleContainer>
          <UserTitle/>
        </TitleContainer>
        <Message/>
      </MessageContainer>
    </Container>
  )
}

export default MessagePage;