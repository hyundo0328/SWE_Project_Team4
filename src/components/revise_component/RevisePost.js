/* eslint-disable */
// Warning 문장을 다 지워줌

import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import { ImageContainer, HashContainer, UploadButton } from "./RevisePostStyle";

function UploadImage(){
  const navigate = useNavigate();

  const [post, setPost] = useState({});

  const fileInputRef = useRef(null);
  const handleClick = () => {
    console.log(post);
    fileInputRef.current.click();
  };

  // 사진 파일 URL로 전환
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPost(prevState => ({
          ...prevState, // 이전 상태 복사
          imageSrc: e.target.result // imageSrc 속성을 새로운 파일의 Data URL로 업데이트
        }));
      };
      reader.readAsDataURL(file); // 파일을 Data URL 형식으로 읽기 시작
    }
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  useEffect(() => {
    fetchGetPostFromBackend();
  }, []);

  let response;
  const fetchGetPostFromBackend = async () => {
    try {
      const postNum = localStorage.getItem('postNum');
      // console.log(postNum);

      // 서버로 Post Index 값을 전달하여 데이터 요청
      response = await axios.post('http://localhost:5000/get/post', {postNum});
      setPost(response.data);
      // console.log(post);
    } catch (error) {
      console.error('수정할 게시글 가져오기 실패');
    }
  };

  const revisePost = async (e) => {
    e.preventDefault();  
    try {
      await axios.post('http://localhost:5000/revise', 
        {
          n: localStorage.getItem('postNum'),
          imageSrc: post.imageSrc,
          hash1: post.hash1,
          hash2: post.hash2,
          hash3: post.hash3,
        }, 
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
        
      alert("게시글 수정을 완료했습니다.");
      navigate('/mypage');
    } catch (error) {
      alert('게시글 수정을 실패했습니다.');
      console.error('게시글 수정을 실패했습니다.');
    }
  }

  return(
    <>
      <input // 파일 불러오는 필드
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        ref={fileInputRef}
        style={{ display: 'none' }} // 파일 입력 필드를 숨김
      />
      <ImageContainer onClick={handleClick}>
        <img src={post.imageSrc} alt="사진 출력 실패" className="image"/>
      </ImageContainer>
      <HashContainer>
        <input type="text" name="hash1" className="hash" value={post.hash1} onChange={handleChange}/>
        <input type="text" name="hash2" className="hash" value={post.hash2} onChange={handleChange}/>
        <input type="text" name="hash3" className="hash" value={post.hash3} onChange={handleChange}/>
      </HashContainer>
      <UploadButton 
        onClick={revisePost}
      >수정하기</UploadButton>
    </>
  )
}

export default UploadImage;