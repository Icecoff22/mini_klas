import React, { Component } from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/User/SignUpPage";
import SignInPage from "./pages/User/SignInPage";
import HomePage from "./pages/Home/HomePage";
import Navigation from "./components/Navigation";
import LecturePlanListPage from "./pages/Lecture/LecturePlan/LecturePlanListPage";
import LecturePlanDetailPage from "./pages/Lecture/LecturePlan/LecturePlanDetailPage";
import LectureMaterialListPage from "./pages/Lecture/LectureMaterial/LectureMaterialListPage";
import LectureMaterialDetailPage from "./pages/Lecture/LectureMaterial/LectueMaterialDetailPage";
import LectureNoticeDetailPage from "./pages/Lecture/LectureNotice/LectureNoticeDetailpage";
import LectureNoticeListPage from "./pages/Lecture/LectureNotice/LectureNoticeListpage";
import LectureMaterialWritePage from "./pages/Lecture/LectureMaterial/LectureMaterialWritePage";
import LectureMaterialModifyPage from "./pages/Lecture/LectureMaterial/LectureMaterialModifyPage";
import LectureNoticeWritePage from "./pages/Lecture/LectureNotice/LectureNoticeWritePage";
import LectureNoticeModifyPage from "./pages/Lecture/LectureNotice/LectureNoticeModifyPage";
function Router() {
  const [type, setType] = useState(1); //0은 비회원 1은 학생 2는 교수 3은 관리자
  return (
    <div class="flex flex-col h-screen">
      <BrowserRouter>
        {type === 0 ? (
          <div class="h-[5%] ">
            <Navigation />
          </div>
        ) : (
          ""
        )}
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/users">
            <Route path="signup" element={<Signup />} />
          </Route>
          <Route path="/home" element={<HomePage />} />
          <Route path="/lecture/plan">
            <Route path="list" element={<LecturePlanListPage />} />
            <Route path="detail" element={<LecturePlanDetailPage />} />
          </Route>
          <Route path="/lecture/material">
            <Route path="list" element={<LectureMaterialListPage />} />
            <Route path="detail" element={<LectureMaterialDetailPage />} />
            <Route path="write" element={<LectureMaterialWritePage />} />
            <Route path="modify" element={<LectureMaterialModifyPage />} />
          </Route>
          <Route path="/lecture/notice">
            <Route path="list" element={<LectureNoticeListPage />} />
            <Route path="detail" element={<LectureNoticeDetailPage />} />
            <Route path="write" element={<LectureNoticeWritePage />} />
            <Route path="modify" element={<LectureNoticeModifyPage />} />
          </Route>

          <Route path="/lecture/plan">
            <Route path="detail" element={<LecturePlanDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
