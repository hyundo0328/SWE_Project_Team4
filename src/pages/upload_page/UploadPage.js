/* eslint-disable */
// Warning 문장을 다 지워줌

import React from "react";

import UploadImage from "../../components/upload_component/UploadPost";

import { UploadContainer, ImageContainer } from "./UploadPageStyle";
import { Title } from "../../components/TitleStyle.js";

function UploadPage(){
  return(
    <div style={{backgroundColor:"#E3E9EF", height:"100vh"}}>
      <UploadContainer>
        <Title>
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