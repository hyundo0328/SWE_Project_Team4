/* eslint-disable */
// Warning 문장을 다 지워줌

import React, { useState, use } from "react";

import { useNavigate } from "react-router-dom";

import { UserInfo, SearchText, Container, SearchContainer } from "./SelectStyle";
import user from '../../assets/logo_user.svg';
import upload from '../../assets/logo_plus.svg'
import message from '../../assets/logo_message.svg';
import search from '../../assets/logo_search.svg';

function Select(){
  const navigate = useNavigate();
  const [searchTag, setSearchTag] = useState('')

  const userName = localStorage.getItem('userName');

  return(
    <>
      <UserInfo>
        <p style={{margin:"10px"}}>{ localStorage.length === 0 ? ('비회원') : (userName) } 님</p>
        <button className="logout-button" onClick={()=>{
          if (confirm("로그아웃 하시겠습니까?")) {
            localStorage.clear();
            navigate('/login');
          }
        }}>로그아웃</button>
      </UserInfo>
      <Container onClick={()=>{navigate('/mypage')}}>
        <img src={user} alt="출력 실패" style={{width:"20px", height:"20px", marginRight:"10px"}}/>
        내 정보
      </Container>
      <Container onClick={()=>{navigate('/upload')}}>
        <img src={upload} alt="출력 실패" style={{width:"20px", height:"20px", marginRight:"10px"}}/>
        게시글 업로드
      </Container>
      <Container onClick={()=>{navigate('/message-list')}}>
        <img src={message} alt="출력 실패" style={{width:"20px", height:"20px", marginRight:"10px"}}/>
        Direct Message
      </Container>
      <SearchContainer onSubmit={()=>{
        localStorage.setItem('searchHashtag', searchTag);
        navigate('/search-page');
      }}>
        <SearchText type="text" placeholder="해쉬태그 입력" value={searchTag} onChange={(e) => setSearchTag(e.target.value)} />
        <img src={search} alt="출력 실패" style={{width:"22px", height:"22px", marginLeft:"5px", marginRight:"5px", cursor: "pointer"}}
          onClick={()=>{
            localStorage.setItem('searchHashtag', searchTag);
            console.log(localStorage.getItem('searchHashtag'));
            setSearchTag('');
            navigate('/search-page');
          }}
        />
      </SearchContainer>
    </>
  )
}
 
export default Select;