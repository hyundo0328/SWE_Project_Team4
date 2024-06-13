/* eslint-disable */
// Warning 문장을 다 지워줌

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

import { Form, LoginButton, SignupButton } from "./LoginFormStyle.js";

import { Label, InputText } from "../signup_component/SignupFormStyle.js";

import school from "../../assets/logo_school.svg";

function LoginForm(){
  const [formData, setFormData] = useState({
    ID: '',
    PW: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:5000/login', formData);
        alert("로그인 성공!");
        
        const token = response.data.token;
        const decodedToken = jwtDecode(token);
        localStorage.setItem('userName', decodedToken.name); // 토큰을 localStorage에 저장
    
        console.log(decodedToken);
        console.log('name:', decodedToken.name);
        console.log('ID:', decodedToken.ID);
        navigate('/mainpage');
    } catch (error) {
        alert('아이디 혹은 비밀번호가 틀렸습니다.');
        console.error('Error:', error);
    }
  };

  const navigate = useNavigate();

  return(
    <>
      <img src={school} alt="Dongguk University" style={{width:"250px", height:"250px", marginTop:"100px"}} />
      <Form onSubmit={handleSubmit}>
        <div>
          <Label>아이디</Label>
          <InputText
            type="text"
            name="ID"
            value={formData.ID}
            onChange={handleChange}
          />
        </div>
        <div style={{ marginTop: "25px" }}>
          <Label>비밀번호</Label>
          <InputText
            type="password"
            name="PW"
            value={formData.PW}
            onChange={handleChange}
          />
        </div>
        <LoginButton
          type="submit" 
          value="로그인" 
        />
      </Form>
      <SignupButton onClick={()=>{navigate('/signup')}}>회원가입</SignupButton>
    </>
  )
}

export default LoginForm;