/* eslint-disable */
// Warning 문장을 다 지워줌

import React from "react";
import { useNavigate } from "react-router-dom";

import SearchPost from "../../components/searchpage_component/SearchPost";

import { MypostContainer } from "../mypage_page/MypagePageStyle";
import { SearchContainer, SearchPostContainer } from "./SearchPageStyle";
import { Title, ImagePrev } from "../../components/TitleStyle";

import prev from '../../assets/logo_prev.svg';

function SearchPage() {
  const navigate = useNavigate();

  const searchHashtag = localStorage.getItem('searchHashtag');

  return(
    <div style={{backgroundColor:"#E3E9EF", height:"100vh"}}>
      <SearchContainer>
        <Title>
          <ImagePrev src={prev} alt="홈 출력 실패" onClick={()=>{navigate('/mainpage')}}/>
          <span style={{color: '#576fd7'}}>{searchHashtag}</span> 의 검색결과
        </Title>
        <MypostContainer>
          <SearchPost/>
        </MypostContainer>
      </SearchContainer>
    </div>
  )
}

export default SearchPage;