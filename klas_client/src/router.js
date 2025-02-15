import React, { Component } from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/User/SignUpPage";
import SignInPage from "./pages/User/SignInPage";
import HomePage from "./pages/Home/HomePage";
import Navigation from "./components/Navigation";
import LecturePlanListPage from "./pages/LecturePlan/LecturePlanListPage";
import LecturePlanDetailPage from "./pages/LecturePlan/LecturePlanDetailPage";
import LectureRegisterPage from "./pages/Register/LectureRegisterPage";

function Router() {
  const [type, setType] = useState(1); //0은 비회원 1은 학생 2는 교수 3은 관리자
  return (
    <div className="flex flex-col h-screen">
      <BrowserRouter>
        {type === 0 ? (
          <div className="h-[5%] ">
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
          <Route path="/register" element={<LectureRegisterPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
