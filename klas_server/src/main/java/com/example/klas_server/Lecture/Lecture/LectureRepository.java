package com.example.klas_server.Lecture.Lecture;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface LectureRepository extends JpaRepository<LectureDTO, Integer> {



    List<LectureDTO> findByLecturename(String lecturename);

    List<LectureDTO> findByProfessor(String professor);
    List<LectureDTO> findByLecturenameAndProfessor(String lecturename, String professor);

    Optional<LectureDTO> findById(Integer id);
}
