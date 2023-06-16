import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import axios from "axios";

const LecturePlanDetail = () => {
  const location = useLocation(); // 네비게이션 함수로 인자값 전달 받을 때 쓸 변수 -cheoljun 추가
  const [lectureid, setLectureid] = useState(location.state.lectureid);

  const [detail, setDetail] = useState("");
  useEffect(() => {
    updateDetail();
  }, []);

  const updateDetail = async () => {
    await axios
      .post("http://localhost:8080/lecture/plan/lectureDetail", {
        lectureid: lectureid,
      })
      .then((res) => {
        setDetail(res.data);
        console.log("data", res.data);
        console.log("data.lecture", res.data.lectureDTO.limit);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <div class="flex flex-col justify-center items-center h-screen border bg-gradient-to-b from-white to-[#C8D6E8]">
      <div class="flex justify-center flex-col items-center h-[600px] w-[1400px] border border-black ">
        <div class="flex justify-start  w-[90%] h-[10%] mt-4 text-[35px]">
          <p>강의계획서 조회</p>
        </div>
        <div>
          {detail && (
            <div>
              <div className="flex">수강인원</div>
              <div className="flex">{detail.lectureDTO.limit}</div>
              <table>
                <tbody>
                  <tr>
                    <th>교과목명</th>
                    <td className="columns-3">
                      {detail.lectureDTO.lecturename}
                    </td>
                    <th>이수구분</th>
                    <td>{detail.lectureDTO.type}</td>
                  </tr>
                  <tr>
                    <th>강의 시간</th>
                    <td className="columns-3">{detail.lectureDTO.time}</td>
                    <th>학점</th>
                    <td>{detail.lectureDTO.credit}</td>
                  </tr>
                  <tr>
                    <th>담당교수</th>
                    <td>{detail.lectureDTO.professor}</td>
                    <th>구분</th>
                    <td>교수</td>
                    <th>연락처</th>
                    <td>{detail.lectureDTO.contact}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          {detail && (
            <div>
              <table>
                <tbody>
                  <tr>
                    <th>교과목 개요</th>
                    <td>{detail.summary}</td>
                  </tr>
                  <tr>
                    <th>평가 비율</th>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <th>출석</th>
                            <th>중간고사</th>
                            <th>기말고사</th>
                            <th>과제</th>
                            <th>수업태도</th>
                            <th>퀴즈</th>
                          </tr>
                          <tr>
                            <td>{detail.atttendratio}</td>
                            <td>{detail.midexamratio}</td>
                            <td>{detail.finalexamratio}</td>
                            <td>{detail.assignmentratio}</td>
                            <td>{detail.attituderatio}</td>
                            <td>{detail.quizratio}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <th>교재</th>
                    <td>{detail.textbook}</td>
                  </tr>
                  <tr>
                    <th>목표</th>
                    <td>{detail.goal}</td>
                  </tr>
                  <tr>
                    <th>원격여부</th>
                    {detail.remote === true ? (
                      <td>원격수업</td>
                    ) : (
                      <td>대면수업</td>
                    )}
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LecturePlanDetail;
