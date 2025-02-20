/* eslint-disable */
// Warning 문장을 다 지워줌

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import { Title, PostList, PostContainer, Container, UserContainer } from './PostFormStyle.js';
import { Image, ImageContainer, TextContainer, TextContent, HashContainer } from "../ContainerStyle.js";
import { Button } from "../ButtonStyle.js";

import school from '../../assets/logo_school.svg';

function PostForm() {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]); // 포스트 데이터를 저장할 상태

  useEffect(() => {
    fetchAllPostsFromBackend();
  }, []);

  let response;
  const fetchAllPostsFromBackend = async () => {
    try {
      // 서버로 모든 Post 데이터 요청
      response = await axios.get('http://localhost:5000/allposts');
      setPosts(response.data);
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
    <>
      <Title>
        <img src={school} alt="사진 출력 실패" style={{width:"100px", height:"100px"}}/>
        <div className="title">소프트웨어공학및설계 프로젝트</div>
      </Title>
      {
        localStorage.length === 0 ? 
        ( // 로그인하지 않았을 경우의 출력
          <Container>
            <p>로그인 후 서비스 사용 가능</p>
            <button className="login-button" onClick={() => { navigate('/login'); }}>로그인</button>
          </Container>
        ) : 
        ( // 모든 게시글 출력
          <PostList>
            {
              posts.map((dataItem, index) => {
                return(
                  <div key={index}>
                    <PostContainer>
                      <UserContainer>
                        <div style={{fontSize:"28px", fontWeight:"bold"}}>{dataItem.name}</div>
                        <Button style={{backgroundColor: "#576fd7"}} 
                          onClick={()=>{
                            // console.log(dataItem.name, dataItem.ID);
                            requestMessage(dataItem.name, dataItem.ID);
                          }}
                        >보내기</Button>
                      </UserContainer>
                      <ImageContainer>
                        <Image src={dataItem.imageSrc}/>
                      </ImageContainer>
                      <TextContent>{dataItem.content}</TextContent>
                      <TextContainer>
                        <HashContainer>
                          <div className="hash-name">{dataItem.hash1}</div>
                          <div className="hash-name">{dataItem.hash2}</div>
                          <div className="hash-name">{dataItem.hash3}</div>
                        </HashContainer>
                      </TextContainer>
                    </PostContainer>
                  </div>
                )}
              )
            }
          </PostList>
        ) 
      }
    </>
  )
}

export default PostForm;