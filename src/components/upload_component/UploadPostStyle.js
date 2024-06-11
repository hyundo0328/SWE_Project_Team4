/* eslint-disable */
// Warning 문장을 다 지워줌

import styled from "styled-components";

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
    width: 15vw;
    height: 15vh;
  }
  
  .text {
    font-size: 1.5vw;
    font-weight: bold;
    margin-top: 20px;
  }
`;

export const HashContainer = styled.div`
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

export const UploadButton = styled.button`
  width: 50%;
  height: 60px;
  background-color: #576fd7;
  border-radius: 10px;
  border: 0px solid #fff;
  margin-top: 12vh;
  
  font-size: 25px;
  font-weight: bold;
  color: white;

  cursor: pointer;
`;