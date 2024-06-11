/* eslint-disable */
// Warning 문장을 다 지워줌

import styled from "styled-components";

export const Title = styled.div`
  display: flex;
  align-items: center;
  justifyContent: center;
  margin-top: 30px;

  .title{
    margin-left: 30px;
    font-size: 45px;
    font-weight: bold;
  }
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 50px;
`;

export const UserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const Container = styled.div` 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Center content vertically */
  padding-top: 30%;

  font-size: 45px;
  font-weight: bold;

  .login-button{
    background-color: #576fd7;
    width: 200px;
    height: 60px;
    border-radius: 5px;
    border: 0px solid #fff;

    margin-top: 30px;
    color: white;
    font-size: 22px;
    font-weight: bold;
    cursor: pointer;
  }
`;