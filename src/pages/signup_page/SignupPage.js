/* eslint-disable */
// Warning 문장을 다 지워줌

import React, { useState } from "react";

import SignupForm from "../../components/signup_component/SignupForm";

import { SignupContainer } from "./SignupPageStyle";

function SignupPage(){
  return(
    <div style={{backgroundColor:"#E3E9EF", height:"100vh"}}>
      <SignupContainer>
        <SignupForm/>
      </SignupContainer>
    </div>
  )
}

export default SignupPage;