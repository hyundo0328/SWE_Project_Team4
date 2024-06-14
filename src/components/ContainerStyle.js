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
  height: 400px;
  background-color: #EEEEEE;
  border-radius: 10px;

  cursor: pointer;

  .image {
    max-width: 800px;
    max-height: 400px;
  }
  
  .text {
    font-size: 30px;
    font-weight: bold;
    margin-top: 20px;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 800px;
  max-height: 400px;
`;

export const HashContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 5px;

  .hash-name {
    color: #555;
    font-size: 22px;
    font-weight: bold;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
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

export const TextInput = styled.input`
  width: 97.2%;
  margin-top: 25px;
  padding: 10px 8px;

  border: 2px solid #999;
  border-radius: 5px;
  outline-color: #576fd7;
  padding: 10px 8px;

  font-size: 20px;
  color: #555;
`;

export const TextContent = styled.div`
  color: #555;
  font-size: 22px;
  font-weight: bold;

  margin-top: 10px;
`;

export const HashInput = styled.div`
  width: 100%;
  margin-top: 25px;
  display: flex;
  justify-content: space-between;

  .hash {
    width: 10vw;
    border: 2px solid #999;
    border-radius: 5px;
    outline-color: #576fd7;
    padding: 10px 8px;

    font-size: 20px;
    color: #555;
  }
`;