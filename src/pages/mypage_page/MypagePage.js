/* eslint-disable */
// Warning 문장을 다 지워줌

import React, { useState } from "react";

import MyPost from "../../components/mypage_component/MyPost.js";
import { MypageContainer, MypostContainer } from "./MypagePageStyle.js";
import { Title } from "../../components/TitleStyle.js";

function MypagePage(){
  const userName = localStorage.getItem('userName');

  return(
    <div style={{backgroundColor:"#E3E9EF", height:"100vh"}}>
      <MypageContainer>
        <Title>
          <span style={{color: '#576fd7'}}>{userName}</span> 님의 마이페이지
        </Title>
        <MypostContainer>
          <MyPost/>
        </MypostContainer>
      </MypageContainer>
    </div>
  )
}

export default MypagePage;