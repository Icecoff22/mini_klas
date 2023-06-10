import React, { useState } from "react";
import * as S from "./LecturePlanDetailStyle";
import axios from "axios";
const LecturePlanDetail = () => {
  const [getDetail, setDetail] = useState([]);

  const DetailTable = (lecture) => {
    const updateDetail = () => {
      axios
        .get("http://localhost:8080/lecture/plan/lectureDetail", {
          lectureId: 1,
        })
        .then((res) => {
          setDetail(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err.response);
        });
    };

    updateDetail();
    return (
      <div>
        <div class="flex">수강인원</div>
        <div class="flex">{lecture.lectureDTO.limit}</div>
        <table>
          <tbody>
            <tr>
              <th>교과목명</th>
              <td colspan="3">{lecture.lectureDTO.lecturename}</td>
              <th>이수구분</th>
              <td>{lecture.lectureDTO.type}</td>
            </tr>
            <tr>
              <th>강의 시간</th>
              <td colspan="3">{lecture.lectureDTO.time}</td>
              <th>학점</th>
              <td>{lecture.lectureDTO.credit}</td>
            </tr>
            <tr>
              <th>담당교수</th>
              <td>{lecture.lectureDTO.professor}</td>
              <th>구분</th>
              <td>교수</td>
              <th>연락처</th>
              <td>{lecture.lectureDTO.contact}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div>
      <S.p_navbar>
        <S.p_container>
          <S.p_container__inner>
            <S.p_navbar__logo_container>
              <S.p_icon> Mini CLAS</S.p_icon>
            </S.p_navbar__logo_container>
            <S.p_navbar__content aria-expanded="false" aria-hidden="true">
              <S.p_navbar__menu></S.p_navbar__menu>
              <S.p_navbar__menu>
                <S.p_navbar__item>
                  <S.p_navbar_hover
                    data-key="navigation-btn-register"
                    href="/register"
                  >
                    수강 신청
                  </S.p_navbar_hover>
                </S.p_navbar__item>
                <S.p_navbar__item>
                  <S.p_navbar_hover
                    data-key="navigation-btn-register"
                    href="/lecture/manage"
                  >
                    수강 관리
                  </S.p_navbar_hover>
                </S.p_navbar__item>
                <S.p_navbar__item>
                  <S.p_navbar_hover
                    data-key="navigation-btn-register"
                    href="/lecture/classmanage"
                  >
                    학습 관리
                  </S.p_navbar_hover>
                </S.p_navbar__item>
                <S.p_navbar__item>
                  <S.p_navbar_hover
                    data-key="navigation-btn-register"
                    href="/board"
                  >
                    게시판
                  </S.p_navbar_hover>
                </S.p_navbar__item>
              </S.p_navbar__menu>
            </S.p_navbar__content>
          </S.p_container__inner>
        </S.p_container>
      </S.p_navbar>
      <main>
        <div>
          <div>
            <div>
              <p>강의계획서 조회</p>
            </div>
            <div>{DetailTable(getDetail)}</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LecturePlanDetail;
