/* eslint-disable */
// Warning 문장을 다 지워줌

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import { Form, Label, InputText, SignupButton } from "./SignupFormStyle.js";

import school from "../../assets/logo_school.svg";
import error from "../../assets/logo_error.svg";
import check from "../../assets/logo_check.svg";

function SignupForm() {
  const [confirmPW, setConfirmPW] = useState(''); // savePW 일치 저장
  /* savePW 일치 체크를 위한 useState */
  const [isPWCheck, setIsPWCheck] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
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
        await axios.post('http://localhost:5000/signup', formData);
        
        alert("회원가입 성공\n\n로그인 해주세요.");
        navigate('/login');
    } catch (error) {
        alert('Registration failed');
        console.error('Error:', error);
    }
};

  const navigate = useNavigate();

  return(
    <>
      <img src={school} alt="Dongguk University" style={{width:"250px", height:"250px", marginTop:"100px"}} />
      <Form onSubmit={handleSubmit}>
        {/* 이름 */}
        <Label>이름</Label>
        <InputText
          type="text"
          name="name"
          placeholder="이름(실명)을 입력해주세요."
          value={formData.name}
          onChange={handleChange}
        />

        {/* 아이디 */}
        <Label>아이디</Label>
        <InputText
          type="text"
          name="ID"
          placeholder="사용할 아이디를 입력해주세요."
          value={formData.ID}
          onChange={handleChange}
        />

        {/* 비밀번호 */}
        <Label>비밀번호</Label>
        <InputText
          style={{ marginBottom: "10px" }}
          type="password"
          name="PW"
          placeholder="영문+숫자 조합 8자리 이상 입력해주세요."
          value={formData.PW}
          onChange={handleChange}
        />
        <InputText
          type="password"
          placeholder="비밀번호 확인"
          value={confirmPW}
          onChange={(e) => {
            setConfirmPW(e.target.value);
            setIsPWCheck(formData.PW === e.target.value);
          }}
        />
        {
          (formData.PW !== confirmPW) && isPWCheck !== null ?
          <div style={{display:"flex", margin:"5px"}}>
            <img src={error} alt="체크 출력 실패" style={{marginRight:"5px"}}/>
            <div style={{color:"#E87C7B"}}>비밀번호를 다시 입력해주세요.</div>
          </div> : 
          (formData.PW === confirmPW) && isPWCheck !== null ?
          <div style={{display:"flex", margin:"5px"}}>
            <img src={check} alt="체크 출력 실패" style={{marginRight:"5px"}}/>
            <div style={{color:"#1ACE22"}}>비밀번호가 일치합니다.</div>
          </div> : <div/>
        }
        <SignupButton onClick={()=>{}}
          disabled={formData.name === '' || formData.ID === '' || formData.PW !== confirmPW}
        >시작하기</SignupButton>
      </Form>
    </>
  )
}

export default SignupForm;