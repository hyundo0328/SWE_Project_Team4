/* eslint-disable */
// Warning 문장을 다 지워줌

import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./pages/main_page/MainPage.js";
import LoginPage from "./pages/login_page/LoginPage.js";
import SignupPage from "./pages/signup_page/SignupPage.js";
import UploadPage from './pages/upload_page/UploadPage.js';
import MypagePage from './pages/mypage_page/MypagePage.js';
import RevisePage from "./pages/revise_page/RevisePage.js";
import MessagePage from "./pages/message_page/MessagePage.js";
import SearchPage from "./pages/search_page/SearchPage.js";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/mainpage"/>}/>
        <Route path="/mainpage" element={<MainPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/upload" element={<UploadPage/>}/>
        <Route path="/revise" element={<RevisePage/>}/>
        <Route path="/mypage" element={<MypagePage/>}/>
        <Route path="/message-list" element={<MessagePage/>}/>
        <Route path="/message-request" element={<div></div>}/>
        <Route path="/search-page" element={<SearchPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
