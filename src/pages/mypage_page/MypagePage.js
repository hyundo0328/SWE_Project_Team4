/* eslint-disable */
// Warning 문장을 다 지워줌

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import MyPost from "../../components/mypage_component/MyPost.js";

import { MypageContainer, MypostContainer } from "./MypagePageStyle.js";
import { Title, Image } from "../../components/TitleStyle.js";

import home from '../../assets/logo_home.svg';

function MypagePage(){
  const navigate = useNavigate();

  const userName = localStorage.getItem('userName');

  return(
    <div style={{backgroundColor:"#E3E9EF", height:"100vh"}}>
      <MypageContainer>
        <Title>
          <span style={{color: '#576fd7'}}>{userName}</span> 님의 마이페이지
          <Image src={home} alt="홈 출력 실패" onClick={()=>{navigate('/mainpage')}}/>
        </Title>
        <MypostContainer>
          <MyPost/>
        </MypostContainer>
      </MypageContainer>
    </div>
  )
}

export default MypagePage;