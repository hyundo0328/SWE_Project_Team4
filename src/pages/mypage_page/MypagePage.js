/* eslint-disable */
// Warning 문장을 다 지워줌

import React, { useState } from "react";

import MypageTitle from "../../components/mypage_component/MypageTitle.js";
import MyPost from "../../components/mypage_component/MyPost.js";
import { MypageContainer, MypostContainer } from "./MypagePageStyle.js";

function MypagePage(){
  return(
    <div style={{backgroundColor:"#E3E9EF", height:"100vh"}}>
      <MypageContainer>
        <MypageTitle/>
        <MypostContainer>
          <MyPost/>
        </MypostContainer>
      </MypageContainer>
    </div>
  )
}

export default MypagePage;