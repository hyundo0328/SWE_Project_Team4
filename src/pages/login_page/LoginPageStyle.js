/* eslint-disable */
// Warning 문장을 다 지워줌

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh; // 높이를 전체 화면으로 설정
`;

export const LoginTeamInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 75%;
  background-color: #E3E9EF;
`;

export const LoginInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
  width: 25%;
  height: 100vh;
  padding-left: 80px;
  padding-right: 80px;
  background-color: white;
`;