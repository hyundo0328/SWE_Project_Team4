/* eslint-disable */
// Warning 문장을 다 지워줌

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import { Button } from '../ButtonStyle.js';
import { UserContainer } from "./MessageStyle.js";

function MessageRequest(){
  const navigate = useNavigate();

  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchRequestFromBackend();
  }, []);

  let response;
  const userName = localStorage.getItem('userName');
  const userID = localStorage.getItem('userID');
  const fetchRequestFromBackend = async () => {
    try {
      // 서버로 name 값을 전달하여 데이터 요청
      response = await axios.post('http://localhost:5000/request/list', {userID});

      setRequests(response.data);
      // console.log(requests);
    } catch (error) {
      console.log("메세지 요청한 사람이 없습니다.")
    }
  };

  const applyRequest = async (num) => {
    try {
      await axios.post('http://localhost:5000/apply', {num});
        
      alert("승인하였습니다.");
    } catch (error) {
      console.log("요청 승인을 실패하였습니다.")
    }
  }

  const rejectRequest = async (num) => {
    try {
      await axios.post('http://localhost:5000/reject', {num});
        
      alert("거절하였습니다.");
    } catch (error) {
      console.log("요청 거절을 실패하였습니다.")
    }
  }

  return(
    <>
      {
        requests.map((dataItem, index) => {
          // if(dataItem.sendReq !== userName){
            return(
              <div key={index}>
                <UserContainer>
                  {dataItem.sendReq} 님
                  <Button style={{backgroundColor: '#55BA6B', marginLeft:"auto"}}
                    onClick={()=>{applyRequest(dataItem.n)}}
                  >수락</Button>
                  <Button style={{backgroundColor: '#EB5A5A', marginLeft:"10px"}}
                    onClick={()=>{rejectRequest(dataItem.n)}}
                  >거절</Button>
                </UserContainer>
              </div>
            )
          // }
          // return null;
        })
      }
    </>
  )
}

export default MessageRequest;