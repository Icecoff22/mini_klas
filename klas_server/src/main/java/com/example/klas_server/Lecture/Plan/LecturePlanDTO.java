package com.example.klas_server.Lecture.Plan;

import com.example.klas_server.Lecture.Lecture.LectureDTO;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Entity
@Getter
@Setter
@Table(name = "lecture_plan")
public class LecturePlanDTO {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "lectureid")
    private int lectureId;

    @Column(name = "summary")
    private String summary;
    @Column(name = "evaluation_ratio")
    private String evaluation_ratio;
    @Column(name = "textbook")
    private String textbook;

    @OneToOne
    @JoinTable(name = "Lecture",
            joinColumns = @JoinColumn(name = "lecture_id"),
            inverseJoinColumns = @JoinColumn(name = "id"))
    private LectureDTO lectureDTO;
}