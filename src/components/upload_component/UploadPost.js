/* eslint-disable */
// Warning 문장을 다 지워줌

import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { ImageContainer, HashContainer, UploadButton } from "./UploadPostStyle";

import upload from '../../assets/logo_upload.svg';

function UploadImage(){
  const [hash1, setHash1] = useState("");
  const [hash2, setHash2] = useState("");
  const [hash3, setHash3] = useState("");

  const [imageSrc, setImageSrc] = useState('');
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
      };
      reader.readAsDataURL(file); // 파일을 Data URL로 읽음
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const navigate = useNavigate();

  return(
    <>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        ref={fileInputRef}
        style={{ display: 'none' }} // 파일 입력 필드를 숨김
      />
      
      {imageSrc ? (
        <img src={imageSrc} alt="Uploaded" style={{ maxWidth: '800px', maxHeight: '400px' }} />
      ) : (
        <ImageContainer onClick={handleClick}>
          <img src={upload} alt="사진 출력 실패" className="image"/>
          <div className="text">사진 업로드</div>
        </ImageContainer>
      )}
      <HashContainer>
        <input type="text" name="hash1" className="hash" value={hash1} onChange={(e) => setHash1(e.target.value)}/>
        <input type="text" name="hash2" className="hash" value={hash2} onChange={(e) => setHash2(e.target.value)}/>
        <input type="text" name="hash3" className="hash" value={hash3} onChange={(e) => setHash3(e.target.value)}/>
      </HashContainer>
      <UploadButton onClick={()=>{
        alert('업로드 성공!')
        navigate('/mainpage')
      }}>업로드</UploadButton>
    </>
  )
}

export default UploadImage;