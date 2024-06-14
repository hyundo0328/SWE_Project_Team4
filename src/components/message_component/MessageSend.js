/* eslint-disable */
// Warning 문장을 다 지워줌

import React, { useState, useEffect } from "react";
import axios from 'axios';

import { UserContainer } from "./MessageStyle.js";
import { Button } from "../ButtonStyle";
// import { fetchMessagesFromBackend } from './Message.js';

function MessageSend() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUserFromBackend();
  }, []);

  const fetchUserFromBackend = async () => {
    const userID = localStorage.getItem('userID');
    try {
      const response = await axios.post('http://localhost:5000/message/users', { userID });
      setUsers(response.data);
    } catch (error) {
      console.error('대화중인 유저 불러오기 실패');
    }
  };

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
      console.log(response.data);
    } catch (error) {
      console.error('모든 메세지 불러오기 실패');
    }
  };

  return (
    <>
      {users.map((dataItem, index) => {
        if (dataItem.receiveReqID !== localStorage.getItem('userID')) {
          return (
            <div key={index}>
              <UserContainer>
                {dataItem.receiveReq} 님
                <Button
                  style={{ backgroundColor: '#55BA6B', marginLeft: "auto" }}
                  onClick={() => {
                    localStorage.setItem('messageUser2', dataItem.receiveReq);
                    localStorage.setItem('messageUser2ID', dataItem.receiveReqID);
                    // 사용자가 선택될 때 메시지를 백엔드에서 가져옴
                    fetchMessagesFromBackend(localStorage.getItem('userID'), dataItem.receiveReqID);
                  }}
                >
                  보내기
                </Button>
              </UserContainer>
            </div>
          );
        } else if (dataItem.sendReqID !== localStorage.getItem('userID')) {
          return (
            <div key={index}>
              <UserContainer>
                {dataItem.sendReq} 님
                <Button
                  style={{ backgroundColor: '#55BA6B', marginLeft: "auto" }}
                  onClick={() => {
                    localStorage.setItem('messageUser2', dataItem.sendReq);
                    localStorage.setItem('messageUser2ID', dataItem.sendReqID);
                    // 사용자가 선택될 때 메시지를 백엔드에서 가져옴
                    fetchMessagesFromBackend(localStorage.getItem('userID'), dataItem.sendReqID);
                  }}
                >
                  보내기
                </Button>
              </UserContainer>
            </div>
          );
        }
        return null;
      })}
    </>
  );
}

export default MessageSend;