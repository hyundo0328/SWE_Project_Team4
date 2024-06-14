/* eslint-disable */
// Warning 문장을 다 지워줌

import styled from "styled-components";

export const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 30px;
  border-bottom: 2px solid #5B6DCE;
`;

export const MessageUser = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: #555;
  margin-bottom: 20px;
`

export const MessageContent = styled.div`
  font-size: 20px;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;

  padding: 30px;
  border-bottom: 2px solid #5B6DCE;

  font-size: 25px;
  font-weight: bold;
`;

export const InputContainer = styled.form`
  display: flex;  
  align-items: center;  /* 세로 중앙 정렬 추가 */

  border-top: 2.5px solid #999;
  width: 96.7%;
  height: 60px;

  padding: 5px 16px;

  &:focus-within {
    border-color: #576fd7;
  }
`

export const InputText = styled.input`
  font-size: 23px;
  color: #555;

  border: none;
  width: 100%;
  height: 100%;
  outline: none;

  padding: 0px;
`;

export const Container = styled.div`
  height: 720px;
  max-height: 800px;
  overflow-y: auto;
`;