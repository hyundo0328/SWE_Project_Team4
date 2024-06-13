/* eslint-disable */
// Warning 문장을 다 지워줌

import React from "react";

import RevisePost from "../../components/revise_component/RevisePost";

import { ReviseContainer, ImageContainer } from "./RevisePageStyle";
import { Title } from "../../components/TitleStyle";

function RevisePage(){
  return(
    <div style={{backgroundColor:"#E3E9EF", height:"100vh"}}>
      <ReviseContainer>
        <Title>
          게시글 수정
        </Title>
        <ImageContainer>
          <RevisePost/>
        </ImageContainer>
      </ReviseContainer>
    </div>
  )
}

export default RevisePage;