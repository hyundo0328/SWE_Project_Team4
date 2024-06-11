/* eslint-disable */
// Warning 문장을 다 지워줌

import React from "react";

import ReviseTitle from "../../components/revise_component/ReviseTitle";
import RevisePost from "../../components/revise_component/RevisePost";

import { ReviseContainer, ImageContainer } from "./RevisePageStyle";

function RevisePage(){
  return(
    <div style={{backgroundColor:"#E3E9EF", height:"100vh"}}>
      <ReviseContainer>
        <ReviseTitle/>
        <ImageContainer>
          <RevisePost/>
        </ImageContainer>
      </ReviseContainer>
    </div>
  )
}

export default RevisePage;