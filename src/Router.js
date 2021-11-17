import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 인웅's 컴포넌트
import MainInwoong from "./pages/inwoong/Main/Main";
import LoginInwoong from "./pages/inwoong/Login/Login";
// 태양's 컴포넌트
import LoginTaeyoung from "./pages/taeyoung/Login/Login";
import MainTaeyoung from "./pages/taeyoung/Main/Main";

// 용우's 컴포넌트
import LoginYongwoo from "./pages/yongwoo/Login/Login";
import MainYongwoo from "./pages/yongwoo/Main/Main";

// 유진's 컴포넌트
import LoginYoujin from "./pages/youjin/Login/Login";
import MainYoujin from "./pages/youjin/Main/Main";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-inwoong" element={<LoginInwoong />} />
        <Route path="/main-inwoong" element={<MainInwoong />} />

        <Route path="/login-taeyoung" element={<LoginTaeyoung />} />
        <Route path="/main-taeyoung" element={<MainTaeyoung />} />

        <Route path="/login-yongwoo" element={<LoginYongwoo />} />
        <Route path="/main-yongwoo" element={<MainYongwoo />} />

        <Route path="/login-youjin" element={<LoginYoujin />} />
        <Route path="/main-youjin" element={<MainYoujin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
