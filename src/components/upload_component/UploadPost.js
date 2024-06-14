/* eslint-disable */
// Warning 문장을 다 지워줌

import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import { ImageContainer, HashContainer, UploadButton } from "./UploadPostStyle";

import upload from '../../assets/logo_upload.svg';

function UploadImage(){
  const navigate = useNavigate();

  const userName = localStorage.getItem('userName');
  const userID = localStorage.getItem('userID');

  const [formData, setFormData] = useState({
    name: userName,
    ID: userID,
    imageSrc: "",
    hash1: "",
    hash2: "",
    hash3: ""
  });

  const fileInputRef = useRef(null);
  const handleClick = () => {
    fileInputRef.current.click();
  };

  // 사진 파일 URL로 전환
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData(prevState => ({
          ...prevState, // 이전 상태 복사
          imageSrc: e.target.result // imageSrc 속성을 새로운 파일의 Data URL로 업데이트
        }));
      };
      reader.readAsDataURL(file); // 파일을 Data URL로 읽음
    }
  };

  // Hash 입력 시 바로 변환하여 useState에 전환
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    console.log(formData);

    e.preventDefault();  
    try {
      await axios.post('http://localhost:5000/upload', 
        {
          name: formData.name,
          ID: formData.ID,
          imageSrc: formData.imageSrc,
          hash1: formData.hash1,
          hash2: formData.hash2,
          hash3: formData.hash3,
        }, 
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
        
      alert("업로드 성공!");
      navigate('/mypage');
    } catch (error) {
      alert('업로드 실패');
      console.error('업로드 실패');
    }
  };

  return(
    <>
      <input // 파일 불러오는 필드
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        ref={fileInputRef}
        style={{ display: 'none' }} // 파일 입력 필드를 숨김
      />
      
      {formData.imageSrc ? (
        <img src={formData.imageSrc} alt="Image fails" style={{ maxWidth: '800px', maxHeight: '400px' }} />
      ) : (
        <ImageContainer onClick={handleClick}>
          <img src={upload} alt="사진 출력 실패" className="image"/>
          <div className="text">사진 업로드</div>
        </ImageContainer>
      )}
      <HashContainer>
        <input type="text" name="hash1" className="hash" value={formData.hash1} onChange={handleChange}/>
        <input type="text" name="hash2" className="hash" value={formData.hash2} onChange={handleChange}/>
        <input type="text" name="hash3" className="hash" value={formData.hash3} onChange={handleChange}/>
      </HashContainer>
      <UploadButton onClick={handleSubmit}>업로드</UploadButton>
    </>
  )
}


export default UploadImage;