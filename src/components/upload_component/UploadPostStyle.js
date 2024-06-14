/* eslint-disable */
// Warning 문장을 다 지워줌

import styled from "styled-components";

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 800px;
  height: 400px;
  background-color: #EEEEEE;
  border-radius: 10px;
  cursor: pointer;

  .image {
    max-width: 800px;
    max-height: 500px;
  }
  
  .text {
    font-size: 30px;
    font-weight: bold;
    margin-top: 20px;
  }
`;