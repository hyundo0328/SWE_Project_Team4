/* eslint-disable */
// Warning 문장을 다 지워줌

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Form, Label, InputText, SignupButton } from "./SignupFormStyle.js";

import school from "../../assets/logo_school.svg";
import error from "../../assets/logo_error.svg";
import check from "../../assets/logo_check.svg";

function SignupForm() {
  const [name, setName] = useState(''); // 이름 저장
  const [saveID, setSaveID] = useState(''); // saveID 저장
  const [savePW, setSavePW] = useState(''); // savePW 저장
  const [confirmPW, setConfirmPW] = useState(''); // savePW 일치 저장
  /* savePW 일치 체크를 위한 useState */
  const [isPWCheck, setIsPWCheck] = useState(null);

  const navigate = useNavigate();

  return(
    <>
      <img src={school} alt="Dongguk University" style={{width:"250px", height:"250px", marginTop:"100px"}} />
      <Form>
        {/* 이름 */}
        <Label>이름</Label>
        <InputText 
          type="text"
          placeholder="이름(실명)을 입력해주세요."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* 아이디 */}
        <Label>아이디</Label>
        <InputText
          type="text"
          placeholder="사용할 아이디를 입력해주세요."
          value={saveID}
          onChange={(e) => setSaveID(e.target.value)}
        />

        {/* 비밀번호 */}
        <Label>비밀번호</Label>
        <InputText
          style={{marginBottom:"10px"}}
          type="password"
          placeholder="영문+숫자 조합 8자리 이상 입력해주세요."
          value={savePW}
          onChange={(e) => setSavePW(e.target.value)}
        />
        <InputText
          type="password"
          placeholder="비밀번호 확인"
          value={confirmPW}
          onChange={(e) => {
            setConfirmPW(e.target.value);
            setIsPWCheck(true);
          }}
        />
        {
          (savePW !== confirmPW) && isPWCheck !== null ?
          <div style={{display:"flex", margin:"5px"}}>
            <img src={error} alt="체크 출력 실패" style={{marginRight:"5px"}}/>
            <div style={{color:"#E87C7B"}}>비밀번호를 다시 입력해주세요.</div>
          </div> : 
          (savePW === confirmPW) && isPWCheck !== null ?
          <div style={{display:"flex", margin:"5px"}}>
            <img src={check} alt="체크 출력 실패" style={{marginRight:"5px"}}/>
            <div style={{color:"#1ACE22"}}>비밀번호가 일치합니다.</div>
          </div> : <div/>
        }
        <SignupButton onClick={()=>{
          alert("회원가입 성공\n\n로그인 해주세요.");
          navigate('/login')}}
          disabled={name === '' || saveID === '' || savePW !== confirmPW}
        >시작하기</SignupButton>
      </Form>
    </>
  )
}

export default SignupForm;