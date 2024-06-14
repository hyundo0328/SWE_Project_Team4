/* eslint-disable */
// Warning 문장을 다 지워줌

import React from "react";
import { useNavigate } from "react-router-dom";

import UploadImage from "../../components/upload_component/UploadPost";

import { UploadContainer, ImageContainer } from "./UploadPageStyle";
import { Title, ImagePrev } from "../../components/TitleStyle.js";

import prev from '../../assets/logo_prev.svg';

function UploadPage(){
  const navigate = useNavigate();

  return(
    <div style={{backgroundColor:"#E3E9EF", height:"100vh"}}>
      <UploadContainer>
        <Title>
          <ImagePrev src={prev} alt="홈 출력 실패" onClick={()=>{navigate('/mainpage')}}/>
          게시글 업로드
        </Title>
        <ImageContainer>
          <UploadImage/>
        </ImageContainer>
      </UploadContainer>
    </div>
  )
}

export default UploadPage;