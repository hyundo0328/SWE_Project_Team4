/* eslint-disable */
// Warning 문장을 다 지워줌

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ImageContainer, HashContainer, UploadButton } from "./RevisePostStyle";

import upload from '../../assets/logo_upload.svg';

function UploadImage(){
  const [hash1, setHash1] = useState("");
  const [hash2, setHash2] = useState("");
  const [hash3, setHash3] = useState("");

  const navigate = useNavigate();

  return(
    <>
      <ImageContainer onClick={()=>{}}>
        <img src={upload} alt="사진 출력 실패" className="image"/>
        <div className="text">사진 업로드</div>
      </ImageContainer>
      <HashContainer>
        <input type="text" name="hash1" className="hash" value={hash1} onChange={(e) => setHash1(e.target.value)}/>
        <input type="text" name="hash2" className="hash" value={hash2} onChange={(e) => setHash2(e.target.value)}/>
        <input type="text" name="hash3" className="hash" value={hash3} onChange={(e) => setHash3(e.target.value)}/>
      </HashContainer>
      <UploadButton onClick={()=>{navigate('/mypage')}}>수정하기</UploadButton>
    </>
  )
}

export default UploadImage;