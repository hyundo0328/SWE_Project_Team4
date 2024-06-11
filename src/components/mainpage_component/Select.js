/* eslint-disable */
// Warning 문장을 다 지워줌

import React, { useState, use } from "react";

import { useNavigate } from "react-router-dom";

import { UserInfo, SearchText, Container, SearchContainer } from "./SelectStyle";
import user from '../../assets/logo_user.svg';
import upload from '../../assets/logo_plus.svg'
import message from '../../assets/logo_message.svg';
import search from '../../assets/logo_search.svg';

function Select(){
  const navigate = useNavigate();

  return(
    <>
      <UserInfo>
        <p style={{margin:"10px"}}>비회원 님</p>
        <button className="logout-button" onClick={()=>{
          if (confirm("로그아웃 하시겠습니까?")) {
            navigate('/login');
          }
        }}>로그아웃</button>
      </UserInfo>
      <Container onClick={()=>{navigate('/mypage')}}>
        <img src={user} alt="출력 실패" style={{width:"20px", height:"20px", marginRight:"10px"}}/>
        내 정보
      </Container>
      <Container onClick={()=>{navigate('/upload')}}>
        <img src={upload} alt="출력 실패" style={{width:"20px", height:"20px", marginRight:"10px"}}/>
        게시글 업로드
      </Container>
      <Container onClick={()=>{navigate('/message-list')}}>
        <img src={message} alt="출력 실패" style={{width:"20px", height:"20px", marginRight:"10px"}}/>
        Direct Message
      </Container>
      <SearchContainer>
        <SearchText placeholder="해쉬태그 입력"/>
        <img src={search} alt="출력 실패" style={{width:"22px", height:"22px", marginLeft:"5px", marginRight:"5px", cursor: "pointer"}}/>
      </SearchContainer>
    </>
  )
}
 
export default Select;