/* eslint-disable */
// Warning 문장을 다 지워줌

import React from "react";
import { useNavigate } from "react-router-dom";

import RevisePost from "../../components/revise_component/RevisePost";

import { ReviseContainer, ImageContainer } from "./RevisePageStyle";
import { Title, ImagePrev } from "../../components/TitleStyle.js";

import prev from '../../assets/logo_prev.svg';

function RevisePage(){
  const navigate = useNavigate();

  return(
    <div style={{backgroundColor:"#E3E9EF", height:"100vh"}}>
      <ReviseContainer>
        <Title>
          <ImagePrev src={prev} alt="홈 출력 실패" onClick={()=>{navigate('/mypage')}}/>
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