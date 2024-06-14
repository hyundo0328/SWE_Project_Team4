/* eslint-disable */
// Warning 문장을 다 지워줌

import React, { useState, useEffect } from "react";
import axios from 'axios';

import { UserContainer } from '../mainpage_component/PostFormStyle.js';
import { FormContainer, Image, TextContainer, HashContainer } from "../mypage_component/MyPostStyle.js";
import { TextContent } from "../ContainerStyle.js";
import { Button } from "../ButtonStyle.js";

function SearchPost(){
  const [searchPosts, setSearchPosts] = useState([]); // 검색 결과를 통한 포스트

  let searchHashtag = localStorage.getItem('searchHashtag');

  useEffect(()=>{
    searchHashTagAll();
  },[])

  let response;
  const searchHashTagAll = async () => {
    try {
      // 서버로 모든 Post 데이터 요청
      console.log(searchHashtag);
      response = await axios.post('http://localhost:5000/search/posts', {searchHashtag});
      setSearchPosts(response.data);
      console.log(searchPosts);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const requestMessage = async (postName, postID) => {
    const userName = localStorage.getItem('userName');
    const userID = localStorage.getItem('userID');
    
    if (userID === postID) {
      alert("본인한테 메세지 요청을 보낼 수 없습니다.");
      return;
    }

    try {
      await axios.post('http://localhost:5000/request', 
        {
          sendReq: userName,
          sendReqID: userID,
          receiveReq: postName,
          receiveReqID: postID
        }, 
        { headers: {'Content-Type': 'application/json'} }
      );

      alert("메세지 요청 성공!");
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return(
    <FormContainer>
      {
        searchPosts.map((dataItem, index) => {
          return(
            <div key={index} style={{}}>
              <UserContainer>
                <div style={{fontSize:"28px", fontWeight:"bold"}}>{dataItem.name}</div>
                <Button style={{backgroundColor: "#576fd7"}} 
                    onClick={()=>{
                      requestMessage(dataItem.name, dataItem.ID);
                    }}
                  >보내기</Button>
              </UserContainer>
              <Image src={dataItem.imageSrc}/>
              <TextContent>{dataItem.content}</TextContent>
              <TextContainer>
                <HashContainer>
                  <div className="hash-name">{dataItem.hash1}</div>
                  <div className="hash-name">{dataItem.hash2}</div>
                  <div className="hash-name">{dataItem.hash3}</div>
                </HashContainer>
              </TextContainer>
            </div>
          )
        })
      }
    </FormContainer>
  )
}

export default SearchPost;