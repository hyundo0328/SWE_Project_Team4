/* eslint-disable */
// Warning 문장을 다 지워줌

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #E3E9EF;
  height: 100vh;
`;

export const MessageSelect = styled.div`
  margin-left: 30px;

  padding-top: 90px;
  font-size: 30px;
  font-weight: bold;

  cursor: pointer;

  &:hover{
    color: #576fd7;
  }
`;

export const UserList = styled.div`
  background-color: #FFFFFF;
  width: 500px;
  height: 100%;
  margin-left: 5%;
`;

export const MessageContainer = styled.div`
  background-color: #FFFFFF;
  width: 1000px;
  height: 100%;
  margin-left: auto;
  margin-right: 5%;
`;

export const TitleContainer = styled.div`
  display: flex;
  height: 150px;
  border-bottom: 4px solid #5B6DCE;
  justify-content: flex-start;
`;

export const UserTitle = styled.div`
  font-size: 40px;
  font-weight: bold;
  padding: 50px;
  align-items: center;
`;