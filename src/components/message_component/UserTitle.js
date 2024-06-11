/* eslint-disable */
// Warning 문장을 다 지워줌

import React from "react";
import { useNavigate } from "react-router-dom";

import { TitleContainer } from "./UserTitleStyle";

function UserTitle(){
  return(
    <TitleContainer>
      사용자1 님과의 메세지
    </TitleContainer>
  )
}

export default UserTitle;