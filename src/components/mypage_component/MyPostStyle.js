/* eslint-disable */
// Warning 문장을 다 지워줌

import styled from "styled-components";

export const FormContainer = styled.div`
  max-height: 750px;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 500px;
  background-color: #EEEEEE;
  border-radius: 10px;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 800px;
  max-height: 500px;
`;

export const HashContainer = styled.div`
  display: flex;
  gap: 20px;

  .hash-name {
    color: #555;
    font-size: 25px;
    font-weight: bold;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const BlueButton = styled.button`
  background-color: #576fd7;
  border-radius: 10px;
  border: 0px solid #fff;
  padding: 10px 30px;

  font-size: 20px;
  font-weight: bold;
  color: white;

  cursor: pointer;
`;