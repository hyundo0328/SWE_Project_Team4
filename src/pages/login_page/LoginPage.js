/* eslint-disable */
// Warning 문장을 다 지워줌

import React, { useState } from "react";

import { Container, LoginInput, LoginTeamInfo } from "./LoginPageStyle.js";

import LoginForm from '../../components/login_component/LoginForm.js';
import TeamInfo from "../../components/login_component/TeamInfo.js";

function LoginPage() {
  return (
    <Container>
      <LoginTeamInfo>
        <TeamInfo/>
      </LoginTeamInfo>
      <LoginInput>
        <LoginForm/>
      </LoginInput>
    </Container>
  )
}

export default LoginPage;