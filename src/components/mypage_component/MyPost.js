/* eslint-disable */
// Warning 문장을 다 지워줌

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import { FormContainer, ImageContainer, Image, HashContainer, TextContainer } from "./MyPostStyle";
import { Button } from "../ButtonStyle.js";

function MyPost(){
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchMyPostsFromBackend();
  }, []);

  let response;
  const fetchMyPostsFromBackend = async () => {
    try {
      // console.log(localStorage.getItem('userName'));
      const userName = localStorage.getItem('userName'); // Get the userName from localStorage

      // 서버로 name 값을 전달하여 데이터 요청
      response = await axios.post('http://localhost:5000/api/myposts', {userName});
      //console.log(response.data);
      setPosts(response.data);
      console.log(posts);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return(
    <FormContainer>
      {
        posts.map((dataItem, index) => {
          return(
            <div key={index} style={{marginBottom: '40px', marginRight:"40px"}}>
              <ImageContainer>
                <Image src={dataItem.imageSrc}/>
              </ImageContainer>
              <TextContainer>
                <HashContainer>
                  <div className="hash-name">{dataItem.hash1}</div>
                  <div className="hash-name">{dataItem.hash2}</div>
                  <div className="hash-name">{dataItem.hash3}</div>
                </HashContainer>
                <Button style={{backgroundColor: "#576fd7"}} 
                  onClick={()=>{
                    localStorage.setItem('postNum', dataItem.n)
                    navigate('/revise');
                  }}>수정</Button>
              </TextContainer>
            </div>
          )
        })
      }
    </FormContainer>
  )
}

export default MyPost;