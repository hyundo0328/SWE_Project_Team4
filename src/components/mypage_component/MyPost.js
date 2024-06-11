/* eslint-disable */
// Warning 문장을 다 지워줌

import React from "react";
import { useNavigate } from "react-router-dom";

import { ImageContainer, HashContainer, TextContainer, BlueButton } from "./MyPostStyle";

function MyPost(){
  const navigate = useNavigate();

  return(
    <>
      <ImageContainer/>
      <TextContainer>
        <HashContainer>
          <div className="hash-name">#헬스</div>
          <div className="hash-name">#건강</div>
          <div className="hash-name">#오운완</div>
        </HashContainer>
        <BlueButton onClick={()=>{navigate('/revise')}}>수정</BlueButton>
      </TextContainer>
    </>
  )
}

export default MyPost;