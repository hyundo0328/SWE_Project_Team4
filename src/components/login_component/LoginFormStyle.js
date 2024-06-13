/* eslint-disable */
// Warning 문장을 다 지워줌

import styled from "styled-components";

export const Form = styled.form`
  margin-top: auto;
  // padding-bottom: 50px;
  width: 100%;

  .login-button {
    width: 100%;
    height: 50px;
    background-color: #576fd7;
    font-size: 23px;
    font-weight: bold;
    color: white;
    border-radius: 5px;
    border: 0px solid #fff;
    margin-top: 80px;
    margin-bottom: 20px;
    cursor: pointer;
  }
`;

export const LoginButton = styled.input`
  width: 100%;
  height: 50px;
  background-color: #576fd7;
  font-size: 23px;
  font-weight: bold;
  color: white;
  border-radius: 5px;
  border: 0px solid #fff;
  margin-top: 80px;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const SignupButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 50px;

  background-color: transparent;
  border: 0px;
  border-radius: 5px;
  color: #999;
  font-size: 18px;
  font-weight: bold;
  

  cursor: pointer;

  &:hover{
    color: #576fd7;
    font-weight: bold;
  }
`;