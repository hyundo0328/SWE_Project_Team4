/* eslint-disable */
// Warning 문장을 다 지워줌

import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh; /* 전체 화면 높이 */
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
`;

export const Project = styled.div`
  text-align: center;

  font-size: 60px;
  font-weight: bold;
`;

export const Name = styled.div`
  position: absolute;
  right: 20px; /* 오른쪽 여백 */
  bottom: 20px; /* 아래 여백 */
  text-align: right;

  margin: 10px 30px;
  font-size: 20px;
  font-weight: bold;
`;