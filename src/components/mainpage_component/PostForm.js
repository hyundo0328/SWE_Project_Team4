/* eslint-disable */
// Warning 문장을 다 지워줌

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import { Title, PostContainer, Container, UserContainer } from './PostFormStyle.js';
import { ImageContainer, TextContainer, HashContainer, BlueButton } from "../mypage_component/MyPostStyle.js";

import school from '../../assets/logo_school.svg';

function PostForm() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(true); // 로그인 상태 관리
  const [posts, setPosts] = useState([]); // 포스트 데이터를 저장할 상태

  useEffect(() => {
    // axios.get('/api/posts')
    //   .then(response => {
    //     setPosts(response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching data:', error);
    //   });
  }, []);

  return(
    <>
      <Title>
        <img src={school} alt="사진 출력 실패" style={{width:"100px", height:"100px"}}/>
        <div className="title">소프트웨어공학및설계 프로젝트</div>
      </Title>
      {isLoggedIn ? (
        <PostContainer>
          <UserContainer>
            <div style={{fontSize:"25px", fontWeight:"bold"}}>사용자 1</div>
            <BlueButton onClick={()=>{alert("메세지 요청 성공!")}}>보내기</BlueButton>
          </UserContainer>
          <ImageContainer/>
          <TextContainer>
            <HashContainer>
              <div className="hash-name">#헬스</div>
              <div className="hash-name">#건강</div>
              <div className="hash-name">#오운완</div>
            </HashContainer>
          </TextContainer>
        </PostContainer>
      ) : (
        <Container>
          <p>로그인 후 서비스 사용 가능</p>
          <button className="login-button" onClick={() => { navigate('/login'); }}>로그인</button>
        </Container>
      )}
    </>
  )
}

export default PostForm;