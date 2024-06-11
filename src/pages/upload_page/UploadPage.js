/* eslint-disable */
// Warning 문장을 다 지워줌

import React from "react";

import UploadTitle from "../../components/upload_component/UploadTitle";
import UploadImage from "../../components/upload_component/UploadPost";

import { UploadContainer, ImageContainer } from "./UploadPageStyle";

function UploadPage(){
  return(
    <div style={{backgroundColor:"#E3E9EF", height:"100vh"}}>
      <UploadContainer>
        <UploadTitle/>
        <ImageContainer>
          <UploadImage/>
        </ImageContainer>
      </UploadContainer>
    </div>
  )
}

export default UploadPage;