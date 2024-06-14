/* eslint-disable */
// Warning 문장을 다 지워줌

import React from "react";
import { Container, PostContainer, UserContainer, UserInfo, UserList } from "./MainPageStyle.js"
import PostForm from '../../components/mainpage_component/PostForm.js';
import UserAll from "../../components/mainpage_component/UserAll.js";
import Select from "../../components/mainpage_component/Select.js";

function MainPage() {
  return (
    <Container>
      <PostContainer>
        <PostForm/>
      </PostContainer>
      <UserContainer>
        <UserInfo>
          <Select/>
        </UserInfo>
        <UserList>
          <UserAll/>
        </UserList>
      </UserContainer>
    </Container>
  )
}

export default MainPage;