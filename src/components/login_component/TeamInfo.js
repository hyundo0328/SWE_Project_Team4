/* eslint-disable */
// Warning 문장을 다 지워줌

import React from "react";

import { Container, Project, Name } from "./TeamInfoStyle";

function TeamInfo() {
  return(
    <Container>
      <Project>
        <p>소프트웨어공학및설계</p>
        <p>팀 프로젝트</p>
      </Project>
      <Name>
        <p>Team 4</p>
        <p>2019112098 박현도</p>
        <p>2019112095 조형남</p>
      </Name>
    </Container>
  )
}

export default TeamInfo;