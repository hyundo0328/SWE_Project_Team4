/* eslint-disable */
// Warning 문장을 다 지워줌

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import { Title, PostList, PostContainer, Container, UserContainer } from '../mainpage_component/PostFormStyle.js';
import { Image, ImageContainer, TextContainer, HashContainer } from "../mypage_component/MyPostStyle.js";
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
      response = await axios.post('http://localhost:5000/searchposts', {searchHashtag});
      //console.log(response.data);
      setSearchPosts(response.data);
      console.log(searchPosts);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return(
    <>
      {
        <PostList>
          {
            searchPosts.map((dataItem, index) => {
              return(
                <div key={index}>
                  <PostContainer>
                    <UserContainer>
                      <div style={{fontSize:"25px", fontWeight:"bold"}}>{dataItem.name}</div>
                      <Button style={{backgroundColor: "#576fd7"}} onClick={()=>{alert("메세지 요청 성공!")}}>보내기</Button>
                    </UserContainer>
                    <ImageContainer>
                      <Image src={dataItem.imageSrc}/>
                    </ImageContainer>
                    <TextContainer>
                      <HashContainer>
                        <div className="hash-name">{dataItem.hash1}</div>
                        <div className="hash-name">{dataItem.hash2}</div>
                        <div className="hash-name">{dataItem.hash3}</div>
                      </HashContainer>
                    </TextContainer>
                  </PostContainer>
                </div>
              )
            })
          }
        </PostList>
      }
    </>
  )
}

export default SearchPost;