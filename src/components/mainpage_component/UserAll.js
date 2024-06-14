/* eslint-disable */
// Warning 문장을 다 지워줌

import React, { useState, useEffect } from "react";
import { UserTitle, UserContainer } from "./UserAllStyle";
import axios from 'axios';

function UserAll(){
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsersFromBackend();
  }, []);

  const fetchUsersFromBackend = async () => {
    try {
      // const response = await fetch('/api/user');
      const response = await axios.get('http://localhost:5000/api/user');
      const data = response.data;

      // 사용자의 이름만 추출하여 설정
      const userNames = data.map(user => user.name);
      setUsers(userNames);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return(
    <>
      <UserTitle>사용중인 유저 목록</UserTitle>
      <UserContainer>
        {
          users.map((userName, index) => (
            <p key={index}>{userName}</p>
          ))
        }
      </UserContainer>
    </>
  )
}

export default UserAll;