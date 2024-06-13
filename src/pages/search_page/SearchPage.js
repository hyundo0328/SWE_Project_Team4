/* eslint-disable */
// Warning 문장을 다 지워줌

import React from "react";

import SearchPost from "../../components/searchpage_component/SearchPost";

import { SearchContainer, SearchPostContainer } from "./SearchPageStyle";
import { Title } from "../../components/TitleStyle";

function SearchPage() {
  const searchHashtag = localStorage.getItem('searchHashtag');

  return(
    <div style={{backgroundColor:"#E3E9EF", height:"100vh"}}>
      <SearchContainer>
        <Title>
          <span style={{color: '#576fd7'}}>{searchHashtag}</span> 의 검색결과
        </Title>
        <div style={{padding:"50px"}}>
          <SearchPost/>
        </div>
      </SearchContainer>
    </div>
  )
}

export default SearchPage;