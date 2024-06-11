/* eslint-disable */
// Warning 문장을 다 지워줌

import React, { useState } from "react";
import { UserTitle, UserContainer } from "./UserAllStyle";

function UserAll(){
  return(
    <>
      <UserTitle>사용중인 유저 목록</UserTitle>
      <UserContainer>
        <p>사용자 1</p>
        <p>사용자 1</p>
        <p>사용자 1</p>
        <p>사용자 1</p>
        <p>사용자 1</p>
      </UserContainer>
    </>
  )
}

export default UserAll;