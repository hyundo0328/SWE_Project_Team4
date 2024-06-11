/* eslint-disable */
// Warning 문장을 다 지워줌

import styled from "styled-components";

export const UserInfo = styled.div`
  display: flex;
  font-size: 28px;
  font-weight: bold;
  padding-bottom: 20px;

  .logout-button{
    font-size: 20px;
    font-weight: bold;
    margin-left: auto;
    background-color: #999999;
    border: none;
    border-radius: 5px;
    padding-left: 20px;
    padding-right: 20px;
    cursor: pointer;
  }
  
  .logout-button:hover{
    background-color: #576fd7;
    color: #FFFFFF;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;

  font-size: 22px;
  margin-bottom: 10px;

  cursor: pointer;
  
  &:hover{
    color: #576fd7;
    font-weight: bold;
  }
`;

export const SearchContainer = styled.div`
  display: flex;  
  align-items: center;

  border-radius: 5px;
  border: 2.5px solid #999;
  width: 300px;
  height: 30px;

  padding: 5px 8px;
  margin-top: 15px;

  &:focus-within {
    border-color: #576fd7;
  }
`;

export const SearchText = styled.input`
  font-size: 18px;
  color: #555;

  border: none;
  width: 270px;
  height: 30px;
  outline: none;

  padding: 0px;
`;
