/* eslint-disable */
// Warning 문장을 다 지워줌

import React, { useState, useEffect } from "react";
import axios from 'axios';

import { MessageContainer, MessageUser, MessageContent, InputContainer, InputText, Container } from "./MessageStyle";
import { Button } from "../ButtonStyle";
import message from '../../assets/logo_message.svg';

function Message() {
  const [messageContent, setMessage] = useState('');
  const [messageAll, setMessageAll] = useState([]);

  useEffect(() => {
    fetchMessagesFromBackend(userID, user2ID);
  }, []);

  const fetchMessagesFromBackend = async (user1ID, user2ID) => {
    try {
      const response = await axios.post('http://localhost:5000/messageall', { 
        user1: user1ID,
        user2: user2ID
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setMessageAll(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('모든 메세지 불러오기 실패');
    }
  };

  const userName = localStorage.getItem('userName');
  const userID = localStorage.getItem('userID');
  const user2 = localStorage.getItem('messageUser2');
  const user2ID = localStorage.getItem('messageUser2ID');
  const messageSend = async () => {   
    try {
      await axios.post('http://localhost:5000/message/send', { 
        user1: userName,
        user1ID: userID,
        user2: user2,
        user2ID: user2ID,
        content: messageContent
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      alert("메세지가 전송되었습니다.");
      setMessage('');
    } catch (error) {
      alert('메세지 전송 실패');
    }
  };

  const messageDelete = async (num) => {
    try {
      await axios.post('http://localhost:5000/post/delete', {num});
        
      alert("메세지가 삭제되었습니다.");
    } catch (error) {
      alert('메세지 삭제 실패');
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      messageSend();
    }
  };

  return(
    <div style={{height:"800px"}}>
      <Container>
      {
        messageAll.map((message, index) => {
          const isSender = message.senderID === userID;
          return (
            <MessageContainer key={index}>
              <div>
                <MessageUser>
                <span style={{ color: isSender ? "#55BA6B" : "#5B6DCE" }}>
                    {isSender ? '나' : message.senderName}
                  </span>의 메세지
                </MessageUser>
                <MessageContent>{message.content}</MessageContent>
              </div>
              {isSender && (
                <Button style={{ backgroundColor: "#EB5A5A", marginLeft: "auto" }}
                  onClick={()=>{messageDelete(message.n)}}
                >삭제
                </Button>
              )}
            </MessageContainer>
          );
        })
      }
      </Container>
      <InputContainer>
        <InputText
          type="text"
          placeholder="메세지 입력"
          value={messageContent}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <img
          src={message}
          alt="출력 실패"
          style={{width:"30px", height:"30px", marginLeft:"5px", marginRight:"5px", cursor: "pointer"}}
          onClick={messageSend}
        />
      </InputContainer>
    </div>
  );
}

export default Message;