/* eslint-disable */
// Warning 문장을 다 지워줌

import React from "react";
import { useNavigate } from "react-router-dom";

import { MessageSelect } from "./TypeSelectStyle.js";

function TypeSelect() {
  const navigate = useNavigate();

  return(
    <>
      <MessageSelect style={{color:"#576fd7"}}>메세지</MessageSelect>
      <MessageSelect onClick={()=>{navigate('/message-request')}}>요청</MessageSelect>
    </>
  )
}

export default TypeSelect;