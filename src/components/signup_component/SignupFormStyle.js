/* eslint-disable */
// Warning 문장을 다 지워줌

import styled from "styled-components";

export const Form = styled.form`
  margin-top: auto;
  margin-bottom: 60px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Label = styled.div`
  color: #555;
  font-size: 20px;
  font-weight: bold;
  
  margin-top: 20px;
  margin-bottom: 5px;
`;

export const InputText = styled.input`
  border-radius: 5px;
  border: 2px solid #E5E5E5;

  color: #555;
  font-size: 18px;
  
  width: 95%;
  height: 30px;
  padding: 5px 8px;

  outline-color: #576FD7;
`;

export const SignupButton = styled.button`
  color: #FFFFFF;
  font-size: 20px;
  font-weight: bold;
  margin-top: 50px;

  background-color: #576FD7;
  width: 100%;
  border: none;
  border-radius: 10px;
  padding: 15px 90px;

  cursor: pointer;

  &:disabled {
    background-color: #E5E5E5;
    transition: background-color 0.3s;
  }
`;