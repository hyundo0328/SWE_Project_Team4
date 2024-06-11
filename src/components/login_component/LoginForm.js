/* eslint-disable */
// Warning 문장을 다 지워줌

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Form, LoginButton, SignupButton } from "./LoginFormStyle.js";

import { Label, InputText } from "../signup_component/SignupFormStyle.js";

import school from "../../assets/logo_school.svg";

function LoginForm(){
  const [ID, setID] = useState("");
  const [PW, setPW] = useState("");

  const navigate = useNavigate();

  return(
    <>
      <img src={school} alt="Dongguk University" style={{width:"250px", height:"250px", marginTop:"100px"}} />
      <Form>
        <div>
          <Label>아이디</Label>
          <InputText
            type="text"
            name="ID"
            value={ID}
            onChange={(e) => setID(e.target.value)}
          />
        </div>
        <div style={{ marginTop: "25px" }}>
          <Label>비밀번호</Label>
          <InputText
            type="password"
            name="PW"
            value={PW}
            onChange={(e) => setPW(e.target.value)}
          />
        </div>
        <LoginButton
          onClick={()=>{
            alert("로그인 성공!");
            navigate('/main-page');
          }} 
          type="submit" 
          value="로그인" 
        />
        <SignupButton onClick={()=>{navigate('/signup')}}>회원가입</SignupButton>
      </Form>
    </>
  )
}

export default LoginForm;